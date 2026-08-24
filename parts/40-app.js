/* ============================================================
   Renderer. DATA above is the single source of truth for every
   figure on this page. Prose sections are static HTML.
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var USD = DATA.meta.usd_rate;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function php(n) {
    if (n == null || isNaN(n)) return "—";
    return "₱" + Math.round(n).toLocaleString("en-US");
  }
  function usd(n) {
    if (n == null || isNaN(n)) return "";
    return "$" + Math.round(n / USD).toLocaleString("en-US");
  }
  function sqm(n) { return n == null ? "size unknown" : Number(n).toLocaleString("en-US") + " sqm"; }

  var EVID = { VERIFIED: "chip-v", REPORTED: "chip-r", INFERRED: "chip-i", KILL: "chip-k", UNVERIFIED: "chip-u" };

  // A lead with no source page cannot be acted on, so it never outranks one that can.
  // This is the brief's own rule: nothing reaches the top three without a contact channel.
  function actionable(l) { return l.src && l.src.length ? 1 : 0; }
  function ranked() {
    return DATA.leads.slice().sort(function (a, b) {
      return (actionable(b) - actionable(a)) || ((b.score || 0) - (a.score || 0));
    });
  }
  function chip(tag) {
    var key = String(tag || "UNVERIFIED").split(" ")[0].toUpperCase();
    return '<span class="chip ' + (EVID[key] || "chip-u") + '">' + esc(tag) + "</span>";
  }
  function srcLink(s, i) {
    return '<a class="src" href="' + esc(s.u) + '" target="_blank" rel="noopener noreferrer nofollow">' + esc(s.t || "source " + (i + 1)) + "</a>";
  }
  function srcList(arr) {
    if (!arr || !arr.length) return "";
    return '<div class="src-list">' + arr.map(srcLink).join("") + "</div>";
  }

  /* ---------- coast strip ---------- */
  function renderCoast() {
    var el = $("#coast"); if (!el) return;
    var colors = { 1: "var(--sand)", 2: "var(--glass)", 3: "var(--border-2)", 4: "var(--ink-3)" };
    el.innerHTML = DATA.coast.map(function (c) {
      return '<article class="coast-item" style="--rank-c:' + colors[c.rank] + '">'
        + '<div class="coast-rank">Priority ' + c.rank + "</div>"
        + '<h3 class="coast-name">' + esc(c.name) + "</h3>"
        + '<div class="coast-count"><b>' + c.leads + "</b> live " + (c.leads === 1 ? "lead" : "leads") + "</div>"
        + (c.note ? '<div class="tiny" style="margin-top:7px">' + esc(c.note) + "</div>" : "")
        + "</article>";
    }).join("");
  }

  /* ---------- ranked table ---------- */
  function renderTable() {
    var b = $("#leadRows"); if (!b) return;
    var rows = ranked();
    b.innerHTML = rows.map(function (l) {
      function td(label, inner, cls) {
        return '<td data-label="' + label + '"' + (cls ? ' class="' + cls + '"' : "") + '><span class="cell-v">' + inner + "</span></td>";
      }
      return '<tr' + (actionable(l) ? "" : ' class="no-src"') + ">"
        + td("Lot", '<span class="lid">' + esc(l.id) + "</span>"
            + (actionable(l) ? "" : '<span class="tiny" style="color:var(--coral)"> no source</span>'))
        + td("Location", "<b>" + esc(l.loc) + "</b>" + (l.sitio ? '<div class="tiny">' + esc(l.sitio) + "</div>" : ""))
        + td("Size", (l.size ? Number(l.size).toLocaleString("en-US") + " sqm" : "—"), "num")
        + td("Tenure claim", esc(l.tenure))
        + td("Asking", php(l.price_php) + (l.price_php ? '<div class="tiny num">' + usd(l.price_php) + "</div>" : ""), "num")
        + td("Per sqm", (l.sqm_php ? php(l.sqm_php) : "—"), "num")
        + td("Access", esc(l.access || "unknown"))
        + td("Evidence", chip(l.evid))
        + td("Score", '<div class="score-cell"><span class="num" style="min-width:2.2ch">' + (l.score == null ? "—" : l.score)
            + "</span>" + (l.score == null ? "" : '<span class="score-bar"><i style="width:'
            + Math.max(4, Math.min(100, (l.score - 25) / 50 * 100)) + '%"></i></span>') + "</div>")
        + "</tr>";
    }).join("");
    var live = DATA.leads.filter(function (l) { return String(l.evid).toUpperCase() !== "KILL"; }).length;
    var n = $("#leadCount"); if (n) n.textContent = live;
    var k = $("#killCount"); if (k) k.textContent = DATA.leads.length - live;
  }

  /* ---------- dossiers ---------- */
  var GATE_NAMES = {
    G1: "A&D vs forest", G2: "Tenure trace", G3: "Titling path", G4: "Salvage zone",
    G5: "ECAN zone", G6: "Overlays", G7: "Access", G8: "Buyer structure"
  };
  var GATE_DOT = { VERIFIED: "d-v", REPORTED: "d-r", UNKNOWN: "d-u", FAIL: "d-f" };

  function renderDossiers() {
    var el = $("#dossierList"); if (!el) return;
    var all = ranked(), top = all.slice(0, 5);
    // A high-scoring lead with no source still earns a card, at the bottom, so the job of
    // finding it does not quietly vanish from the report.
    all.slice(5).forEach(function (l) {
      if (!actionable(l) && (l.score || 0) >= 55) top.push(l);
      // A documented kill earns a card too. Knowing why a lead died is worth as much as
      // knowing why one survived, and it stops the same lead being chased again later.
      else if (String(l.evid).toUpperCase() === "KILL") top.push(l);
    });
    el.innerHTML = top.map(function (l) {
      var facts = [
        ["Size", l.size ? sqm(l.size) : "unknown"],
        ["Asking", php(l.price_php)],
        ["Per sqm", l.sqm_php ? php(l.sqm_php) : "unknown"],
        ["Tenure claim", l.tenure],
        ["Frontage", l.frontage || "not published"],
        ["GPS", l.gps || "not published"],
        ["Access claim", l.access || "unknown"],
        ["Advertiser", l.advertiser || "unknown"]
      ].map(function (f) {
        var unk = !f[1] || /^(unknown|not published|size unknown)$/i.test(String(f[1]));
        return '<div class="fact"><div class="fact-k">' + esc(f[0]) + '</div><div class="fact-v'
          + (unk ? " unk" : "") + '">' + esc(f[1]) + "</div></div>";
      }).join("");

      var answered = 0;
      var gates = Object.keys(GATE_NAMES).map(function (g) {
        var v = (l.gates && l.gates[g]) || "UNKNOWN";
        if (v !== "UNKNOWN") answered++;
        return '<div class="gate g-' + v.toLowerCase() + '"><span class="dot ' + (GATE_DOT[v] || "d-u") + '"></span>'
          + '<span class="gk">' + g + "</span> " + esc(GATE_NAMES[g])
          + '<span class="gv">' + esc(v) + "</span></div>";
      }).join("");
      // The report's own warning is that a high score with eight unknown gates means
      // nobody has checked. Say that in one line rather than making it decode dots.
      var tallyCls = answered === 0 ? "none" : (answered > 4 ? "most" : "some");
      var tally = '<div class="gate-tally ' + tallyCls + '">' + answered + ' of 8 gates answered</div>';

      function flagList(arr, cls, title) {
        if (!arr || !arr.length) return "";
        return '<h4 class="fact-k" style="margin:18px 0 9px">' + title + "</h4>"
          + '<ul class="flags ' + cls + '">' + arr.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>";
      }

      return '<article class="dossier">'
        + '<div class="dossier-hd">'
        + '<span class="dossier-id">' + esc(l.id) + "</span>"
        + '<div class="dossier-t"><h3>' + esc(l.loc) + (l.sitio ? ", " + esc(l.sitio) : "") + "</h3>"
        + '<div class="tiny">' + esc(l.size ? sqm(l.size) : "size unknown") + " · " + esc(l.tenure) + " · " + php(l.price_php) + " " + chip(l.evid) + "</div>"
        + '<span class="dossier-stamp">Listing read ' + esc(DATA.meta.read_on) + " · figures go stale fast</span></div>"
        + '<div class="dossier-score"><div class="n num">' + (l.score == null ? "—" : l.score) + '</div><div class="l">score</div></div>'
        + "</div>"
        + (actionable(l) ? "" : '<div style="padding:11px 16px;background:var(--coral-wash);border-bottom:1px solid var(--border);font-size:var(--t-xs);color:var(--coral)">Nothing to act on yet. No source page was recovered for this lead, so it is ranked below every lot you can actually phone about.</div>')
        + '<div class="dossier-bd">'
        + (l.note ? "<p>" + esc(l.note) + "</p>" : "")
        + '<div class="fact-grid">' + facts + "</div>"
        + '<h4 class="fact-k" style="margin:0 0 9px">Legal gates</h4>'
        + tally
        + '<div class="gates">' + gates + "</div>"
        + flagList(l.flags && l.flags.red, "", "Red flags")
        + flagList(l.flags && l.flags.green, "good", "In its favour")
        + flagList(l.flags && l.flags.ask, "ask", "Ask before anything else")
        + (l.next ? '<div class="next-action"><div class="na-k">Next action</div>' + esc(l.next) + "</div>" : "")
        + srcList(l.src)
        + "</div></article>";
    }).join("");
  }

  /* ---------- contacts ---------- */
  // "0917 140 5210 · assessor@x.gov.ph" is the terminal action of this whole page.
  // Turn each part into something a thumb can act on.
  function contactLinks(s) {
    if (!s) return "see site";
    return String(s).split("\u00b7").map(function (part) {
      var t = part.trim();
      if (!t) return "";
      if (/^[+0-9][0-9 ()\-]{6,}$/.test(t)) {
        var tel = t.replace(/[^0-9+]/g, "");
        if (tel.charAt(0) === "0") tel = "+63" + tel.slice(1);
        return '<a class="tel" href="tel:' + esc(tel) + '">' + esc(t) + "</a>";
      }
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
        return '<a class="tel" href="mailto:' + esc(t) + '">' + esc(t) + "</a>";
      }
      return '<span class="tiny">' + esc(t) + "</span>";
    }).join("");
  }

  function renderContacts() {
    var a = $("#agencyRows");
    if (a) {
      a.innerHTML = DATA.agencies.map(function (c) {
        return "<tr>"
          + '<td data-label="Office"><span class="cell-v"><b>' + esc(c.name) + "</b>" + (c.short ? '<div class="tiny">' + esc(c.short) + "</div>" : "") + "</span></td>"
          + '<td data-label="You get"><span class="cell-v">' + esc(c.need) + "</span></td>"
          + '<td data-label="Contact"><span class="cell-v">' + contactLinks(c.contact) + "</span></td>"
          + '<td data-label="Source"><span class="cell-v">' + (c.url ? '<a class="src" href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer">' + esc(c.host || "official page") + "</a>" : "—") + "</span></td>"
          + '<td data-label="Confirmed"><span class="cell-v">' + chip(c.verified ? "VERIFIED" : "UNVERIFIED") + "</span></td></tr>";
      }).join("");
    }
    var b = $("#brokerRows");
    if (b) {
      b.innerHTML = DATA.brokers.map(function (c) {
        return "<tr>"
          + '<td data-label="Name"><span class="cell-v"><b>' + esc(c.name) + "</b>" + (c.org ? '<div class="tiny">' + esc(c.org) + "</div>" : "") + "</span></td>"
          + '<td data-label="Covers"><span class="cell-v">' + esc(c.covers || "—") + "</span></td>"
          + '<td data-label="Contact"><span class="cell-v">' + contactLinks(c.contact || "via listing form") + "</span></td>"
          + '<td data-label="Source"><span class="cell-v">' + (c.url ? '<a class="src" href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer">' + esc(c.host || "site") + "</a>" : "—") + "</span></td>"
          + '<td data-label="Confirmed"><span class="cell-v">' + chip(c.verified ? "VERIFIED" : "REPORTED") + "</span></td></tr>";
      }).join("");
    }
  }

  /* ---------- checklist with persistence ---------- */
  var CK_KEY = "pbb.checklist.v1";
  function loadCk() { try { return JSON.parse(localStorage.getItem(CK_KEY) || "{}"); } catch (e) { return {}; } }
  function saveCk(o) { try { localStorage.setItem(CK_KEY, JSON.stringify(o)); } catch (e) { /* private mode */ } }

  function renderChecklist() {
    var el = $("#ckList"); if (!el) return;
    var state = loadCk();
    el.innerHTML = DATA.checklist.map(function (c, i) {
      var id = "ck" + i, on = !!state[id];
      return '<li class="' + (on ? "done" : "") + '"><label for="' + id + '">'
        + '<input type="checkbox" id="' + id + '"' + (on ? " checked" : "") + '>'
        + '<span class="ck-b"><span class="ck-t">' + (i + 1) + ". " + esc(c.t) + "</span>"
        + '<span class="ck-d">' + esc(c.d) + "</span>"
        + (c.who ? '<span class="ck-w">' + esc(c.who) + "</span>" : "")
        + "</span></label></li>";
    }).join("");

    function tick() {
      var boxes = $$("#ckList input"), done = boxes.filter(function (b) { return b.checked; }).length;
      $("#ckProg").style.width = (done / boxes.length * 100) + "%";
      $("#ckNum").textContent = done + " of " + boxes.length;
    }
    el.addEventListener("change", function (e) {
      if (e.target.type !== "checkbox") return;
      var st = loadCk(); st[e.target.id] = e.target.checked; saveCk(st);
      e.target.closest("li").classList.toggle("done", e.target.checked);
      tick();
    });
    tick();
    var reset = $("#ckReset");
    if (reset) reset.addEventListener("click", function () {
      saveCk({});
      $$("#ckList input").forEach(function (b) { b.checked = false; b.closest("li").classList.remove("done"); });
      tick(); toast("Checklist cleared");
    });
  }

  /* ---------- simple list renderers ---------- */
  function renderList(sel, arr, fn) {
    var el = $(sel); if (!el || !arr) return;
    el.innerHTML = arr.map(fn).join("");
  }

  function renderMisc() {
    renderList("#queueList", DATA.manual_queue, function (q) {
      return '<li><span class="ck-t">' + esc(q.t) + '</span><span class="ck-d">' + esc(q.d) + "</span></li>";
    });
    renderList("#blockerList", DATA.blockers, function (b) {
      return '<li><span class="ck-t">' + esc(b.t) + '</span><span class="ck-d">' + esc(b.d) + "</span></li>";
    });
    renderList("#rejectRows", DATA.rejects, function (r) {
      return '<tr><td data-label="Location"><span class="cell-v"><b>' + esc(r.loc) + '</b></span></td><td data-label="Size"><span class="cell-v">' + esc(r.size) + '</span></td><td data-label="Asking"><span class="cell-v">' + esc(r.price) + '</span></td><td data-label="Why it failed"><span class="cell-v">' + esc(r.reason) + "</span></td></tr>";
    });
    renderList("#coverRows", DATA.coverage, function (c) {
      var cls = { SWEPT: "chip-v", PART: "chip-r", BLOCK: "chip-k", TODO: "chip-u" }[c.status] || "chip-u";
      return '<tr><td data-label="Source"><span class="cell-v"><b>' + esc(c.source) + '</b></span></td><td data-label="Scope" class="tiny"><span class="cell-v">' + esc(c.scope) + "</span></td>"
        + '<td data-label="Status"><span class="cell-v"><span class="chip ' + cls + '">' + esc(c.status) + "</span></span></td>"
        + '<td data-label="Note" class="tiny"><span class="cell-v">' + esc(c.note) + "</span></td></tr>";
    });
    renderList("#compRows", DATA.comps, function (c) {
      return '<tr><td data-label="Where"><span class="cell-v"><b>' + esc(c.area) + '</b></span></td><td data-label="Per sqm" class="num"><span class="cell-v">' + esc(c.range) + '</span></td><td data-label="Sample" class="num"><span class="cell-v">' + esc(c.n) + '</span></td><td data-label="What it tells you" class="tiny"><span class="cell-v">' + esc(c.note) + "</span></td></tr>";
    });
    renderList("#changeRows", DATA.changelog, function (c) {
      return '<tr><td data-label="Cycle" class="num"><span class="cell-v">' + esc(c.cycle) + '</span></td><td data-label="When" class="tiny"><span class="cell-v">' + esc(c.when) + '</span></td><td data-label="What happened"><span class="cell-v">' + esc(c.what) + "</span></td></tr>";
    });
    var st = $("#statRow");
    if (st) st.innerHTML = DATA.stats.map(function (s) {
      return '<div class="stat"><div class="sv">' + esc(s.v) + '</div><div class="sl">' + esc(s.l) + "</div></div>";
    }).join("");
  }

  /* ---------- outreach drafts ---------- */
  function renderOutreach() {
    var el = $("#outreach"); if (!el) return;
    el.innerHTML = DATA.outreach.map(function (o, i) {
      return "<details" + (i === 0 ? " open" : "") + "><summary>" + esc(o.title) + "</summary>"
        + '<div class="det-bd"><p class="tiny">' + esc(o.why) + "</p>"
        + '<div class="copybox"><button class="btn cp" data-copy="ot' + i + '">Copy</button>'
        + '<pre id="ot' + i + '">' + esc(o.text) + "</pre></div></div></details>";
    }).join("");
  }

  /* ---------- cost calculator ---------- */
  function calc() {
    var size = +$("#cSize").value || 0;
    var rate = +$("#cRate").value || 0;
    var front = +$("#cFront").value || 0;
    var zone = +$("#cZone").value;
    var land = size * rate;

    // Water Code PD 1067 Art. 51 shore easement, public land the buyer cannot build on.
    var strip = Math.min(front * zone, size);
    var usable = Math.max(size - strip, 0);
    var effRate = usable > 0 ? land / usable : 0;

    // Transaction costs. Philippine practice, rates cited in the costs section.
    var cgt = land * 0.06;          // NIRC 24(D), seller is the statutory taxpayer
    var dst = land * 0.015;         // NIRC 196, P15 per P1,000
    var xfer = land * 0.005;        // LGC 135 provincial cap. 0.75% is a CITY rate and
                                    // San Vicente is a municipality of Palawan province.
    var reg = land * 0.008;         // budget figure. The 1993 LRA schedule implies far less,
                                    // but it is probably stale and practitioners quote 0.8%.
    var noty = land * 0.01;         // notarial, commonly negotiated down
    var pro = 85000;                // lawyer + relocation survey + certifications
    var buyerSide = dst + xfer + reg + noty + pro;
    var withSeller = buyerSide + cgt;

    var sellerPays = $("#cWho").value === "seller";
    var total = land + (sellerPays ? buyerSide : withSeller);

    $("#rTotal").innerHTML = '<span class="cur">\u20b1</span>' + php(total).slice(1);
    $("#rUsd").textContent = usd(total) + " at " + USD + " to the dollar";
    $("#rGap").innerHTML = usable > 0
      ? "The shore easement takes <b>" + Math.round(strip).toLocaleString("en-US") + " sqm</b> of that lot into public land. You are really paying <b>"
        + php(effRate) + " per sqm</b> for the " + Math.round(usable).toLocaleString("en-US") + " sqm you can build on."
      : "At this frontage and zone the whole lot falls inside the shore easement. Nothing here is buildable.";

    var rows = [
      ["Land price", php(land)],
      ["Documentary stamp tax, 1.5 percent", php(dst)],
      ["Transfer tax, 0.5 percent", php(xfer)],
      ["Registration, budgeted at 0.8 percent", php(reg)],
      ["Notarial fee, about 1 percent", php(noty)],
      ["Lawyer, survey, certifications", php(pro)],
      ["Capital gains tax, 6 percent", (sellerPays ? "seller pays" : php(cgt))]
    ];
    $("#rRows").innerHTML = rows.map(function (r) {
      return '<div class="brk-row"><span>' + r[0] + "</span><b>" + r[1] + "</b></div>";
    }).join("") + '<div class="brk-row total"><span>Cash you need</span><b>' + php(total) + "</b></div>";

    var mn = $("#miniNum"), ms = $("#miniSub");
    if (mn) mn.textContent = php(total);
    if (ms) ms.textContent = usable > 0 ? Math.round(usable).toLocaleString("en-US") + " sqm buildable" : "nothing buildable";

    // Mirror the sliders into the number fields, except the one being typed in.
    syncNum("cSizeNum", size);
    syncNum("cRateNum", rate);
    syncNum("cFrontNum", front);
    fillTrack("cSize"); fillTrack("cRate"); fillTrack("cFront");
  }

  function syncNum(id, v) {
    var e = document.getElementById(id);
    if (e && document.activeElement !== e) e.value = v;
  }

  // Paint the portion of the track behind the thumb, so the range is legible.
  function fillTrack(id) {
    var e = document.getElementById(id);
    if (!e) return;
    var min = +e.min, max = +e.max;
    e.style.setProperty("--pct", ((+e.value - min) / (max - min) * 100).toFixed(2) + "%");
  }

  function bindCalc() {
    if (!$("#cSize")) return;
    // A broker sends an exact asking price. A slider cannot reach it, so each one
    // gets a number field bound to it in both directions.
    [["cSizeNum", "cSize"], ["cRateNum", "cRate"], ["cFrontNum", "cFront"]].forEach(function (p) {
      var num = document.getElementById(p[0]), rng = document.getElementById(p[1]);
      if (!num || !rng) return;
      num.addEventListener("input", function () {
        if (num.value === "") return;
        var v = Math.min(Math.max(+num.value, +rng.min), +rng.max);
        rng.value = v;
        calc();
      });
      num.addEventListener("blur", function () {
        var v = Math.min(Math.max(+num.value || +rng.min, +rng.min), +rng.max);
        num.value = v; rng.value = v; calc();
      });
    });
    ["cSize", "cRate", "cFront", "cZone", "cWho"].forEach(function (id) {
      var e = $("#" + id); if (e) { e.addEventListener("input", calc); e.addEventListener("change", calc); }
    });
    $$("[data-preset]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = JSON.parse(b.getAttribute("data-preset"));
        $("#cSize").value = p.s; $("#cRate").value = p.r; $("#cFront").value = p.f;
        ["cSizeNum","cRateNum","cFrontNum"].forEach(function(id,i){var e=document.getElementById(id); if(e) e.value=[p.s,p.r,p.f][i];});
        $$("[data-preset]").forEach(function (x) { x.classList.remove("btn-p"); });
        b.classList.add("btn-p");
        calc();
      });
    });
    calc();
    bindMini();
  }

  // Show the pinned figure only while the calculator is on screen and the real result
  // card is not. Two conditions, so it never covers the thing it is standing in for.
  function bindMini() {
    var mini = $("#miniResult"), sect = document.getElementById("calculator"), card = $(".result");
    if (!mini || !sect || !card) return;
    var ticking = false;
    function place() {
      var bar = document.querySelector(".topbar");
      mini.style.top = (bar && bar.offsetParent !== null ? bar.offsetHeight : 0) + "px";
    }
    function update() {
      ticking = false;
      if (window.innerWidth >= 900) { mini.classList.remove("on"); return; }
      var s = sect.getBoundingClientRect(), c = card.getBoundingClientRect();
      var vh = window.innerHeight;
      var sectionOnScreen = s.top < vh && s.bottom > 0;
      var cardOnScreen = c.top < vh - 40 && c.bottom > 120;
      mini.classList.toggle("on", sectionOnScreen && !cardOnScreen);
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }
    place();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () { place(); onScroll(); }, { passive: true });
    update();
  }

  /* ---------- copy + toast ---------- */
  var toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add("on");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("on"); }, 2100);
  }
  function copyText(t, label) {
    // The async clipboard API rejects in plenty of real browsers, Safari and embedded
    // webviews included, so a rejection falls through to the old method rather than
    // dead-ending on a message the user cannot act on.
    function legacy() {
      var ta = document.createElement("textarea");
      ta.value = t;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "0";
      ta.style.left = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, t.length);
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      toast(ok ? (label || "Copied") : "Copy did not work here, use the browser menu");
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(t).then(function () { toast(label || "Copied"); }, legacy);
    } else {
      legacy();
    }
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (b) { var src = document.getElementById(b.getAttribute("data-copy")); if (src) copyText(src.textContent, "Draft copied"); return; }
    if (e.target.closest("#copyResult")) {
      var t = "San Vicente Palawan lot costing\n"
        + (+$("#cSize").value).toLocaleString("en-US") + " sqm at " + php(+$("#cRate").value) + "/sqm\n"
        + "Cash needed " + $("#rTotal").textContent + " (" + $("#rUsd").textContent + ")\n"
        + $("#rGap").textContent + "\n"
        + DATA.meta.url;
      copyText(t, "Result copied");
      return;
    }
    if (e.target.closest("#ckCopy")) {
      var lines = ["Buying land in San Vicente, Palawan. Due diligence checklist.", ""];
      DATA.checklist.forEach(function (c, i) {
        lines.push((i + 1) + ". " + c.t);
        lines.push("   " + c.d);
        if (c.who) lines.push("   Who: " + c.who);
        lines.push("");
      });
      lines.push("Full brief with sources: " + DATA.meta.url);
      copyText(lines.join("\n"), "Checklist copied");
      return;
    }
    if (e.target.closest("#printBtn") || e.target.closest("#printBtn2")) { window.print(); return; }
    if (e.target.closest("#copyLink")) { copyText(DATA.meta.url, "Link copied"); return; }
    if (e.target.closest("#miniResult")) {
      var rc = $(".result");
      if (rc) rc.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    if (e.target.closest("#shareBig")) {
      var sd = {
        title: "Beachfront land in San Vicente, Palawan",
        text: "Before anyone puts a deposit on land in Palawan, read this. Every fact sourced.",
        url: DATA.meta.url
      };
      if (navigator.share) { navigator.share(sd).catch(function () {}); }
      else { copyText(DATA.meta.url, "Link copied, paste it to them"); }
      return;
    }
    if (e.target.closest("#shareBtn")) {
      var d = { title: document.title, text: "Beachfront land in San Vicente, Palawan. Checked properly.", url: DATA.meta.url };
      if (navigator.share) { navigator.share(d).catch(function () {}); }
      else { copyText(DATA.meta.url, "Link copied"); }
    }
  });

  /* ---------- theme ---------- */
  function bindTheme() {
    var btn = $("#themeBtn"); if (!btn) return;
    // No explicit choice means follow the operating system, which is what Apple does.
    var stored = null;
    try { stored = localStorage.getItem("pbb.theme"); } catch (e) {}
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    btn.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark"
        || (!document.documentElement.getAttribute("data-theme")
            && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("pbb.theme", next); } catch (e) {}
      btn.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  /* ---------- rail: active section ---------- */
  // Position based rather than intersection based. An observer fires for every section
  // crossed during a jump and the last callback wins, which lands on the wrong item.
  function bindSpy() {
    var links = $$(".sidenav-list a");
    var targets = links.map(function (a) {
      return { a: a, el: document.getElementById(a.getAttribute("href").slice(1)) };
    }).filter(function (t) { return t.el; });
    if (!targets.length) return;
    targets.sort(function (x, y) {
      return (x.el.compareDocumentPosition(y.el) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
    });

    var current = null, ticking = false, lockUntil = 0;

    function setActive(t) {
      if (t === current) return;
      current = t;
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      t.a.setAttribute("aria-current", "true");
      // keep the active item in view inside the rail without moving the page
      var rail = document.getElementById("sidenav");
      if (rail && rail.scrollHeight > rail.clientHeight) {
        var r = t.a.getBoundingClientRect(), rr = rail.getBoundingClientRect();
        if (r.top < rr.top + 8 || r.bottom > rr.bottom - 8) {
          rail.scrollTop += r.top - rr.top - rr.height / 2 + r.height / 2;
        }
      }
    }

    function update() {
      ticking = false;
      if (Date.now() < lockUntil) return;
      var line = Math.max(120, window.innerHeight * 0.3);
      var active = targets[0];
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.getBoundingClientRect().top <= line) active = targets[i];
      }
      setActive(active);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    // A tap is not a guess. Light the item immediately and hold it while the smooth
    // scroll runs, and on a phone close the drawer behind it.
    targets.forEach(function (t) {
      t.a.addEventListener("click", function () {
        lockUntil = Date.now() + 900;
        setActive(t);
        closeNav();
      });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  /* ---------- rail: mobile drawer ---------- */
  var lastFocus = null;

  function openNav() {
    lastFocus = document.activeElement;
    document.documentElement.classList.add("nav-open");
    var t = $("#navToggle"), s = $("#scrim");
    if (t) t.setAttribute("aria-expanded", "true");
    if (s) s.hidden = false;
    var first = $(".sidenav-list a");
    if (first) first.focus({ preventScroll: true });
  }

  function closeNav() {
    if (!document.documentElement.classList.contains("nav-open")) return;
    document.documentElement.classList.remove("nav-open");
    var t = $("#navToggle"), s = $("#scrim");
    if (t) t.setAttribute("aria-expanded", "false");
    if (s) s.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function bindNav() {
    var toggle = $("#navToggle");
    if (toggle) toggle.addEventListener("click", function () {
      document.documentElement.classList.contains("nav-open") ? closeNav() : openNav();
    });
    var close = $("#navClose");
    if (close) close.addEventListener("click", closeNav);
    var scrim = $("#scrim");
    if (scrim) scrim.addEventListener("click", closeNav);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
      if (e.key !== "Tab" || !document.documentElement.classList.contains("nav-open")) return;
      // hold focus inside the drawer while it is open
      var f = $$("#sidenav a, #sidenav button").filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeNav();
    }, { passive: true });
  }

  /* ---------- boot ---------- */
  // A saved PDF has to contain everything, so open every collapsed block before printing
  // and put them back afterwards.
  var reopened = [];
  window.addEventListener("beforeprint", function () {
    reopened = $$("details:not([open])");
    reopened.forEach(function (d) { d.open = true; });
  });
  window.addEventListener("afterprint", function () {
    reopened.forEach(function (d) { d.open = false; });
    reopened = [];
  });

  function boot() {
    $("#genDate").textContent = DATA.meta.generated;
    $("#cycleN").textContent = DATA.meta.cycle;
    $("#srcCount").textContent = DATA.meta.sources_checked;
    renderCoast(); renderTable(); renderDossiers(); renderContacts();
    renderChecklist(); renderMisc(); renderOutreach();
    bindCalc(); bindTheme(); bindNav(); bindSpy();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
