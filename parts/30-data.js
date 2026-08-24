/* Every figure rendered on this page comes from this object.
   Prices are ASKING prices read off a live page on 24 August 2026.
   The Philippines has no public sold-price register, so no one,
   including any agent you speak to, knows what these lots trade for. */
var DATA = {
meta: {
  cycle: 8,
  generated: "24 Aug 2026",
  usd_rate: 57,
  sources_checked: 356,
  url: "https://theluckystrike.github.io/palawan-beachfront-brief/"
},

stats: [
  { v: "59", l: "listings logged across two independent sweeps" },
  { v: "3", l: "that actually fit 400 to 1,000 sqm and front the sea" },
  { v: "\u20b15,200", l: "the taxman's own per sqm value for Port Barton seashore" },
  { v: "8", l: "price or size conflicts found on single parcels" },
  { v: "0", l: "listings found in Santo Ni\u00f1o on any reachable portal" },
  { v: "50 m", l: "of no-build easement on Long Beach, double the national rule" }
],

coast: [
  { rank: 1, name: "Santo Niño", leads: 2, note: "Both are search snippets. No portal reached this run carries a live Santo Niño listing." },
  { rank: 2, name: "Port Barton", leads: 21, note: "Deepest supply and the only in-band beachfront lot with a URL. Outside the tourism zone, so the 50 m rule likely does not apply. Not on the public grid." },
  { rank: 3, name: "Poblacion", leads: 3, note: "Long Beach premium. Roughly ₱25,000 to ₱39,000 per sqm." },
  { rank: 3, name: "New Agutaya", leads: 5, note: "Long Beach and Inarayan. Carries the cleanest titled beachfront lot found." },
  { rank: 3, name: "San Isidro", leads: 3, note: "Long Beach frontage, the widest price spread of any barangay." },
  { rank: 3, name: "Kemdeng", leads: 5, note: "Inside the Paragua Coastown footprint. Near-beach, not beachfront." },
  { rank: 3, name: "Caruray", leads: 3, note: "South end, furthest from the airport. Cheapest per sqm." },
  { rank: 4, name: "New Canipo", leads: 6, note: "Your New Capio. Real beachfront supply, all of it tax declaration." },
  { rank: 4, name: "Binga", leads: 5, note: "Cheapest titled beachfront on the coast, but every lot is oversize." },
  { rank: 4, name: "Sitio Minapla", leads: 0, note: "Not in San Vicente. Minapla is a barangay of Taytay at 339 m elevation, inland and upland." }
],

leads: [
  {
    id: "L1", loc: "Port Barton", sitio: "E-Estate code SV08-011-0420-H",
    size: 870, tenure: "Tax declaration, A&D claimed", price_php: 8500000, sqm_php: 9750,
    access: "Road access claimed", evid: "REPORTED", score: 61,
    gps: "10.4377, 119.1892", frontage: "16.66 m claimed", advertiser: "E-Estate Realty Services Philippines Inc",
    note: "Across every portal that could be read, this is the only lot that is beachfront, inside your 400 to 1,000 sqm band, and in a top-two barangay. Everything else in the band fails on ocean access, and everything beachfront is oversize. The catch is the paperwork. It is tax declaration land, so the A&D question decides whether it can ever be titled at all.",
    gates: { G1: "REPORTED", G2: "UNKNOWN", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "REPORTED", G8: "UNKNOWN" },
    flags: {
      red: [
        "The same lot at the same GPS is priced ₱8,500,000 on E-Estate's own website and ₱12,888,000 on DotProperty. That is a 51.6 percent gap on one parcel. Treat the portal number as a ceiling, not an asking price.",
        "Tax declaration only. A tax declaration is a claim of ownership, not proof of it, and it gives you no protection from the registry against a prior claim.",
        "No TCT or OCT number published, so nothing can be checked at the Registry of Deeds yet.",
        "Road access is claimed in the copy but no listing anywhere states whether the road is at the rear or whether any right of way is annotated on a document.",
        "The listing claims municipal power. Port Barton is not served by PALECO at all. It runs on a private microgrid that shut down for a week in April 2022, and the PALECO connection was still unsigned as of May 2026. Ask exactly which supply that claim refers to."
      ],
      green: [
        "Published GPS, so you can check the ECAN zone and the hazard maps yourself before you speak to anyone.",
        "16.66 m of stated beach frontage, which is one of very few frontage figures published in this whole market.",
        "A deep well is claimed on site, which matters more here than the power claim does.",
        "The advertiser demonstrably subdivides parent parcels. One of their listings is a 300 sqm cut, which means a negotiated split is a real option here."
      ],
      ask: [
        "Is this land Alienable and Disposable, and will you show me the CENRO certification.",
        "Send the tax declaration number and a photo of the declaration itself.",
        "Where does the rear boundary meet a road, and is any right of way written into a document.",
        "Is ₱8,500,000 or ₱12,888,000 the real number, and which one survives if I pay cash."
      ]
    },
    next: "Open with the ₱8,500,000 print from their own site and ask for the CENRO A&D certification before anything else. If the land is not A&D, nothing else about this lot matters.",
    src: [
      { u: "https://e-estaterealty.com/view-all-properties151615-2911", t: "E-Estate catalog, ₱8.5M print" },
      { u: "https://www.dotproperty.com.ph/ads/land-for-sale-in-port-barton-palawan_b776a4e82bca-3930-b552-27a7-5e95a089", t: "DotProperty, ₱12.888M print" }
    ]
  },
  {
    id: "L2", loc: "Santo Niño", sitio: "the listing that does not exist",
    size: 984, tenure: "Titled, claimed", price_php: 11250000, sqm_php: 11433,
    access: "Unknown", evid: "KILL", score: null,
    gps: "not published", frontage: "not published", advertiser: "attributed to Lamudi, no advertiser found",
    note: "This was the perfect lot on paper and the search for it is now finished. It is not there. Lamudi blocks every automated read, so its San Vicente index was pulled out of the Internet Archive instead, at four separate captures across a year. Twenty one listings in August 2019, twenty in October, twenty in December, twenty nine in August 2020. No lot of 984 square metres appears in any of them. Lamudi's own barangay list for San Vicente contains exactly three entries, New Agutaya, Poblacion and Port Barton. It never had a Santo Niño category for this municipality at all, so a Santo Niño listing could not have been browsed there the way the lead describes.",
    gates: { G1: "UNKNOWN", G2: "FAIL", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "UNKNOWN", G8: "UNKNOWN" },
    flags: {
      red: [
        "Four archived captures of the Lamudi San Vicente index across a full year contain no 984 sqm lot.",
        "Lamudi never built a Santo Niño facet for San Vicente, so the listing could not have been found where the lead says it was.",
        "Two live sweeps had already found zero Santo Niño listings on every portal that answered.",
        "Here is the part that should worry you. The claimed ₱11,433 per sqm is entirely plausible. Small San Vicente beachfront lots asked ₱6,000 to ₱18,000 per sqm in 2020. A wrong number is easy to spot. A believable number attached to nothing is how people get separated from a deposit."
      ],
      green: [
        "The hunt did recover what Santo Niño land actually asked for, which is worth more than the phantom lot was.",
        "Three genuine Santo Niño listings from August 2019, all held by one advertiser, at ₱1,500, ₱3,513 and ₱7,000 per sqm. All large parcels, so not like for like against a small cut, but they anchor the barangay. The smallest was 10,734 sqm, eleven times bigger than the lot you were shown."
      ],
      ask: [
        "Nothing. There is nobody to ask, because there is no listing and no advertiser."
      ]
    },
    next: "Stop looking for this lot. If Santo Niño still matters to you, and it should, the supply there is off-portal and always was. That means a local enquiry through the barangay and the Municipal Assessor rather than a property website. Worth knowing before you go, the beach at Santo Niño is Maymanoc, and it is coarse white sand mixed with crystalline stones rather than the powder you get on Long Beach.",
    src: [
      { u: "http://web.archive.org/web/20190822173815/https://www.lamudi.com.ph/palawan/san-vicente-3/buy/", t: "Lamudi San Vicente index, 22 Aug 2019" },
      { u: "http://web.archive.org/web/20200814192239/https://www.lamudi.com.ph/palawan/san-vicente-3/buy/", t: "Lamudi San Vicente index, 14 Aug 2020" },
      { u: "http://web.archive.org/web/20150924184657/http://www.sanvicentepalawan.ph/sto-nino/", t: "Santo Niño barangay profile, archived" }
    ]
  },
  {
    id: "L3", loc: "Port Barton", sitio: "Pearlview listing",
    size: null, tenure: "Titled, claimed", price_php: null, sqm_php: 15000,
    access: "4 m right of way claimed", evid: "REPORTED", score: 61,
    gps: "10.442174, 119.115802", frontage: "not published", advertiser: "Pearlview Realty Brokerage and Management Services",
    note: "A titled beachfront claim with published GPS, published phone numbers and a stated right of way. It fails on one thing only. The listing never says how big the lot is. The price field shows ₱99,999,999.99, which is a placeholder rather than a number, and the body says the ₱15,000 figure is per square metre. So a 400 sqm cut is ₱6M and a 1,000 sqm cut is ₱15M, and nobody can tell which from the page.",
    gates: { G1: "UNKNOWN", G2: "REPORTED", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "REPORTED", G8: "UNKNOWN" },
    flags: {
      red: [
        "No lot size published anywhere on the page, so it cannot pass or fail your size filter.",
        "A 4 m right of way is narrow, and the listing never says whether it is annotated on the title or just a path people use. Treat a right of way as non-existent until you see it written on a document.",
        "₱15,000 per sqm is the top of the Port Barton range observed. The floor in the same barangay is ₱1,800.",
        "The same brokerage files a Roxas municipality barangay under San Vicente elsewhere on its site, and prints placeholder prices. Its data hygiene is weak, so verify everything twice."
      ],
      green: [
        "Two phone numbers published openly, which is rare in this market.",
        "Title claimed rather than tax declaration.",
        "Power, water and internet all claimed on site.",
        "Published GPS you can check before calling."
      ],
      ask: [
        "What is the exact lot area in square metres.",
        "What is the TCT or OCT number.",
        "Is the 4 m right of way annotated on the title, and which road does it reach.",
        "How many metres of beach frontage."
      ]
    },
    next: "One phone call answers this. Ask for the lot area and the title number. If the area lands between 400 and 1,000 sqm and the title number checks out at the Registry of Deeds, this jumps straight to the top of the list.",
    src: [
      { u: "https://www.pearlviewrealty.com/listing/beachfront-property-for-sale-in-port-barton-palawan--priced-at-p15000-per-sqm.html", t: "Pearlview listing page" },
      { u: "https://www.pearlviewrealty.com/", t: "Pearlview Realty" }
    ]
  },
  {
    id: "L4", loc: "New Agutaya", sitio: "Inarayan, Long Beach",
    size: 1023, tenure: "Clean title, claimed", price_php: 17391000, sqm_php: 17000,
    access: "Road access claimed", evid: "REPORTED", score: 58,
    gps: "not published", frontage: "12 m claimed", advertiser: "listed via MyProperty",
    note: "The cleanest combination found anywhere in this sweep. Titled, beachfront, with road access claimed and a stated frontage. It misses your band by 23 square metres, which is a rounding error rather than a real problem, though it does mean you should ask about a split before you assume the whole parcel is the deal.",
    gates: { G1: "UNKNOWN", G2: "REPORTED", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "REPORTED", G8: "UNKNOWN" },
    flags: {
      red: [
        "₱17,000 per sqm is a Long Beach price. You are paying for the beach's reputation as much as for the land.",
        "This lot is on Long Beach, inside the tourism zone. The master plan sets a 50 m easement there, not 20 m. At 12 m of frontage a 1,023 sqm lot is roughly 85 m deep, so a 50 m no-build strip takes about 600 sqm, well over half the parcel.",
        "12 m of frontage is narrow for a lot this size, which makes the setback bite harder than it would on a wide shallow lot.",
        "No GPS published, so the ECAN zone cannot be checked before contact."
      ],
      green: [
        "Title claimed, road access claimed and frontage stated. Very few listings in this market publish all three.",
        "Only 23 sqm over your band."
      ],
      ask: [
        "TCT number and a certified true copy.",
        "The survey plan with frontage and depth, so the 50 m setback can be measured against the actual lot shape.",
        "GPS or the lot plan, so the ECAN zone can be checked.",
        "Is the road at the rear of the lot or does access run along the beach."
      ]
    },
    next: "Ask for the title number and the GPS. This is the strongest titled candidate found, so it deserves the ₱200 PCSD zoning check before you spend anything else.",
    src: [{ u: "https://www.myproperty.ph/property/34120-256-8993-11a65255c032-29f2-4f43-6fc72037", t: "MyProperty listing" }]
  },
  {
    id: "L5", loc: "Binga", sitio: "E-Estate code SV02-007-0428-J",
    size: 1102, tenure: "Titled, claimed", price_php: 3857000, sqm_php: 3500,
    access: "Unknown", evid: "REPORTED", score: 56,
    gps: "10.7491, 119.3279", frontage: "not published", advertiser: "E-Estate Realty Services Philippines Inc",
    note: "The cheapest titled land on this coast by a wide margin, at roughly a third of the Port Barton rate. Binga sits at the far north of your priority list and further from the airport, which is exactly why it is cheap. Worth holding as a value hedge, and worth a look if the Port Barton paperwork falls apart.",
    gates: { G1: "UNKNOWN", G2: "REPORTED", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "UNKNOWN", G8: "UNKNOWN" },
    flags: {
      red: [
        "One page prints two prices for this lot. The body text says ₱3,857,000 and the structured offer on the same page says ₱5,510,000, a 42.9 percent gap.",
        "Size varies between prints, 1,032 sqm in one place and 1,102 in another. Somebody is guessing.",
        "Nothing published on road access or utilities."
      ],
      green: [
        "Title claimed rather than tax declaration.",
        "Published GPS.",
        "At ₱3,500 per sqm the whole downside is small, which changes how much risk is worth carrying."
      ],
      ask: [
        "Which price is real, and which size is real.",
        "TCT number.",
        "How do I reach the rear boundary by road."
      ]
    },
    next: "Quote the ₱3,857,000 print back to them and ask which figure the seller will actually sign at. The size discrepancy is your second question.",
    src: [{ u: "https://www.myproperty.ph/property/34120-256-91a4-a5874351fc-8e3c-7fe9-195c7c1", t: "MyProperty listing, both prices on one page" }]
  },
  {
    id: "L6", loc: "New Canipo", sitio: "your New Capio",
    size: 1398, tenure: "Tax declaration", price_php: 13980000, sqm_php: 10000,
    access: "Unknown", evid: "REPORTED", score: 33,
    gps: "10.7132, 119.3435", frontage: "not published", advertiser: "E-Estate Realty Services Philippines Inc",
    note: "This is the barangay you called New Capio. There is real beachfront supply here and it is all tax declaration land, which puts the A&D question in front of everything else. At ₱10,000 per sqm it also sits at the top of the observed New Canipo range, where other prints for the same area run at ₱7,000 and ₱6,500.",
    gates: { G1: "UNKNOWN", G2: "UNKNOWN", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "UNKNOWN", G8: "UNKNOWN" },
    flags: {
      red: [
        "Tax declaration only, and no A&D evidence published.",
        "Price conflicts across copies of the same listing, ₱10,000 against ₱6,500 per sqm.",
        "Oversize at 1,398 sqm with no split path stated.",
        "No access information at all.",
        "Palawan News has reported Barangay New Canipo flooding again. Headline level only, but worth checking on the ground before you commit."
      ],
      green: [
        "Published GPS.",
        "Genuine beachfront in a barangay on your list, and the neighbouring E-Estate parcel is tagged A&D, which is at least a hint about the wider area."
      ],
      ask: [
        "Will the owner cut a 600 to 1,000 sqm beachfront slice.",
        "Is this land A&D, with the CENRO certification to prove it.",
        "Which per-sqm price is current."
      ]
    },
    next: "Ask whether the owner will sell a slice rather than the whole parcel. If the answer is no, this lot leaves the list on size alone.",
    src: [{ u: "https://e-estaterealty.com/view-all-properties151615-2911", t: "E-Estate catalog" }]
  },
  {
    id: "L7", loc: "Port Barton", sitio: "10 hectare parent parcel",
    size: 100000, tenure: "Unstated", price_php: 65000000, sqm_php: 650,
    access: "Unknown", evid: "REPORTED", score: 30,
    gps: "not published", frontage: "300 m claimed", advertiser: "listed via MyProperty",
    note: "Not a lot to buy, a lot to carve from. At ₱650 per sqm this is the cheapest beachfront land per square metre found anywhere in the sweep, roughly fifteen times cheaper than the small cuts, and it has 300 metres of frontage. If the owner will sell an 800 sqm slice at anything near this rate, it beats every other lot on this page on price by an order of magnitude. That is a big if, and a subdivision needs a licensed geodetic engineer, a new survey and a new title.",
    gates: { G1: "UNKNOWN", G2: "UNKNOWN", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "UNKNOWN", G8: "UNKNOWN" },
    flags: {
      red: [
        "Tenure unstated.",
        "A 10 hectare seller has no reason to sell you 800 sqm unless the slice is priced well above the bulk rate.",
        "Subdividing means a survey, a new subdivision plan approved by the Land Management Bureau, and a fresh title. That is months, not weeks."
      ],
      green: [
        "300 m of beach frontage means a slice can be shaped to give you good width rather than a deep narrow strip.",
        "₱650 per sqm sets the true floor of this market, which is useful leverage in every other conversation you have."
      ],
      ask: [
        "Will you sell a subdivided beachfront lot, and at what rate per sqm.",
        "Is there an approved subdivision plan already.",
        "Is the parent parcel titled."
      ]
    },
    next: "Worth one message. Even a no tells you what the bulk-to-retail markup really is on this coast, which is information nobody else will give you.",
    src: [{ u: "https://www.myproperty.ph/property/34120-256-be1c-122784ae5878-a8ee-757a-19e64ad", t: "MyProperty listing" }]
  },
  {
    id: "L8", loc: "San Isidro", sitio: "Long Beach",
    size: 717, tenure: "Unstated", price_php: 28000000, sqm_php: 39052,
    access: "Unknown", evid: "REPORTED", score: 32,
    gps: "not published", frontage: "not published", advertiser: "listed via MyProperty",
    note: "In your size band and on the beach, and the most expensive land per square metre found in the entire sweep at ₱39,052. It is here for calibration rather than because it is a candidate. The page is also filed under the wrong municipality, which tells you something about how carefully these listings are maintained.",
    gates: { G1: "UNKNOWN", G2: "UNKNOWN", G3: "UNKNOWN", G4: "UNKNOWN", G5: "UNKNOWN", G6: "UNKNOWN", G7: "UNKNOWN", G8: "UNKNOWN" },
    flags: {
      red: [
        "₱39,052 per sqm is four times the Port Barton in-band rate for the same size of lot.",
        "Tenure unstated.",
        "The listing is mis-filed under Roxas rather than San Vicente.",
        "San Isidro is inside the tourism zone, so the 50 m no-build easement applies. On a 717 sqm lot that is very likely most of the parcel."
      ],
      green: ["In band and on Long Beach, if money were no object."],
      ask: ["What justifies four times the Port Barton rate."]
    },
    next: "Nothing. This one sets the ceiling of the market so you can recognise a fair price when you see one.",
    src: [{ u: "https://www.myproperty.ph/property/34120-256-ab5c-d55c470b5830-e5a7-7221-1976d65", t: "MyProperty listing" }]
  }
],

comps: [
  { area: "Port Barton, beachfront", range: "₱1,800 to ₱15,000", n: "21 listings", note: "The widest spread on the coast. Small in-band cuts cluster at the top." },
  { area: "Port Barton, bulk parcels", range: "₱650", n: "1 listing", note: "10 hectares with 300 m frontage. The true floor of this market." },
  { area: "Santo Niño, recovered from archive", range: "₱1,500 to ₱7,000", n: "3 listings, 2019", note: "Genuine asking prices, but all large parcels and six years stale. Small cuts always cost more per sqm." },
  { area: "New Canipo, beachfront", range: "₱6,500 to ₱10,000", n: "6 listings", note: "All tax declaration. The spread is the same lots priced differently." },
  { area: "Binga, titled beachfront", range: "₱3,500 to ₱8,500", n: "5 listings", note: "Cheapest titled land on the coast. Furthest from the airport." },
  { area: "Poblacion and Long Beach", range: "₱12,000 to ₱39,052", n: "6 listings", note: "The airport and Long Beach premium. Highest prices found." },
  { area: "Caruray, bulk", range: "₱2,500 to ₱4,000", n: "3 listings", note: "South end, longest drive. Same lot printed at both figures." },
  { area: "Second row, off the beach", range: "₱2,000 to ₱4,000", n: "several", note: "Roughly a fifth of the beachfront rate in the same barangay." },
  { area: "BIR zonal value, San Vicente seashore", range: "\u20b11,750 to \u20b15,200", n: "official", note: "The government's own valuation. Port Barton is the highest at \u20b15,200, Caruray the lowest at \u20b11,750." },
  { area: "BIR zonal value, San Vicente agricultural", range: "\u20b15 to \u20b135", n: "official", note: "Raw agricultural land in the same barangay as \u20b14,575 seashore. Reclassification, not location, is where the value step sits." },
  { area: "BIR zonal value, El Nido seashore", range: "\u20b1300 to \u20b125,000", n: "official", note: "Same schedule, same date. Corong-Corong and Nacpan run \u20b112,500 to \u20b125,000, but Mabini seashore is \u20b1300." }
],

agencies: [
  { name: "San Vicente Municipal Assessor", short: "Municipal Hall, Poblacion, San Vicente", need: "Certified true copy of the tax declaration and the tax map. Also issues the new declaration in your name after the sale.", contact: "0917 140 5210 · assessor@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us-by-department/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "San Vicente Municipal Treasurer", short: "Municipal Hall, Poblacion", need: "Real property tax status and the tax clearance. The Assessor will not release a certified copy without it. Collects the transfer tax.", contact: "0917 129 7992 · treasury@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us-by-department/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "Municipal Planning and Development Office", short: "MPDO, Municipal Hall", need: "Zoning clearance and zoning certification. This is what tells you the land's official classification, which sets your shore easement at 3, 20 or 40 metres.", contact: "0917 177 8095 · planning@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us-by-department/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "Municipal Engineer and Building Official", short: "Municipal Hall", need: "Building permit and occupancy permit, if you intend to build.", contact: "0910 845 7234 · engineering@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us-by-department/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "Municipal Environment and Natural Resources Office", short: "MENRO, Municipal Hall", need: "Local environmental clearances. A sensible first stop on a beachfront parcel before you escalate to DENR and PCSD.", contact: "0939 933 8017 · environment@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us-by-department/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "Office of the Sangguniang Bayan", short: "San Vicente municipal council", need: "The zoning ordinance and the Revised Municipal Revenue Code 2023. Those hold the fee schedules that are not published online.", contact: "048 423 5578 · sanggunian@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us-by-department/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "Office of the Municipal Mayor", short: "San Vicente", need: "Escalation and endorsements when an office goes quiet.", contact: "0939 924 2803 · mayor@sanvicentepalawan.gov.ph", url: "https://sanvicentepalawan.gov.ph/contact-us/", host: "sanvicentepalawan.gov.ph", verified: true },
  { name: "Registry of Deeds, Province of Palawan", short: "Puerto Princesa. San Vicente is in the province, not the city.", need: "Certified true copy of the TCT or OCT. The single most important document in the whole purchase, and the only authoritative copy.", contact: "Address partially recovered from an LRA document. Phone unverified, go in person.", url: "https://www.lra.gov.ph/", host: "lra.gov.ph", verified: false },
  { name: "PCSD, Palawan Council for Sustainable Development", short: "Puerto Princesa", need: "ECAN zoning certification, ₱200. Tells you which environmental zone the lot sits in. Also the SEP clearance, which DENR and the LGU both require before anything else is issued.", contact: "See the PCSD site for the current office details", url: "https://pcsd.gov.ph/revised-pcsd-administrative-no-06/", host: "pcsd.gov.ph", verified: true },
  { name: "DENR CENRO Puerto Princesa", short: "Community Environment and Natural Resources Office", need: "Certification that the land is Alienable and Disposable rather than forest. For a tax declaration lot this decides everything. Also handles foreshore leases.", contact: "Not recovered this run. Ask MENRO San Vicente for the current desk.", url: "https://denr.gov.ph/", host: "denr.gov.ph", verified: false },
  { name: "BIR Revenue District Office 36", short: "Puerto Princesa City, Revenue Region 6", need: "The eCAR, without which the Registry of Deeds will not register your deed. Also holds the zonal value schedule that sets the tax floor.", contact: "Not recovered this run", url: "https://www.bir.gov.ph/", host: "bir.gov.ph", verified: false }
],
brokers: [
  { name: "E-Estate Realty Services Philippines Inc", org: "Holds L1, L5, L6 and most coded inventory", covers: "All San Vicente barangays, coded SV01 to SV08", contact: "No phone, email or address published anywhere on their site. Portal contact forms only.", url: "https://e-estaterealty.com/view-all-properties151615-2911", host: "e-estaterealty.com", verified: false },
  { name: "Pearlview Realty Brokerage and Management Services", org: "Margie B. Vanscoy, PRC 24694 claimed", covers: "Port Barton and wider San Vicente, 7 listings seen", contact: "+63 908 897 6367 · +63 949 801 5001 · Skytel Complex, Brgy San Jose, Puerto Princesa", url: "https://www.pearlviewrealty.com/", host: "pearlviewrealty.com", verified: true },
  { name: "Palawanders Properties", org: "Paz Bentulan, PRC Reg 0001132 printed on their own page", covers: "Port Barton, large parcels only", contact: "+63 917 582 4718 · pazrealty01@gmail.com", url: "https://palawanders.com/", host: "palawanders.com", verified: true },
  { name: "Palawan Real Property, PRP Real Estate Development Inc", org: "Broker licence 004927 claimed", covers: "Puerto Princesa office. Ask them for the old BL-series San Vicente list.", contact: "+63 917 580 1511 · sales@palawanrealproperties.com · Chiu Building, Rizal Ave, Puerto Princesa", url: "https://www.palawanrealproperties.com/", host: "palawanrealproperties.com", verified: true },
  { name: "SanVicente Realty and its three sister domains", org: "One operator, four websites", covers: "Poblacion office, the closest agency to your target coast", contact: "+63 953 139 0000 · #3 San Vicente Public Market, Poblacion", url: "https://sanvicentepalawanlotforsale.com/", host: "sanvicentepalawanlotforsale.com", verified: false }
],

coverage: [
  { source: "DotProperty", scope: "San Vicente land, all barangays", status: "SWEPT", note: "Four pages read to exhaustion. Page five returns zero results." },
  { source: "MyProperty", scope: "San Vicente land", status: "PART", note: "64 listings read. Pagination is ignored by the site, so only the first page of each filter is visible." },
  { source: "E-Estate Realty catalog", scope: "47 properties with GPS", status: "SWEPT", note: "The richest single dataset found. GPS captured for 31 parcels." },
  { source: "Pearlview Realty", scope: "Port Barton and San Vicente", status: "SWEPT", note: "Seven San Vicente listings. Weak data hygiene." },
  { source: "Lamudi", scope: "everything", status: "BLOCK", note: "403 on the index and on individual listings, 401 to a browser user agent. Probably the largest missing source." },
  { source: "OnePropertee", scope: "claims 197 San Vicente beach properties", status: "BLOCK", note: "Bot challenge returns an empty body. The largest unopened pool." },
  { source: "Property24", scope: "everything", status: "BLOCK", note: "Connection refused at the network layer. Possibly defunct." },
  { source: "Nestoria, Trovit, Carousell", scope: "aggregators", status: "BLOCK", note: "401 and 403 to every request. A browser user agent did not help." },
  { source: "sanvicentepalawan.ph", scope: "named in the brief", status: "BLOCK", note: "Dead domain, no DNS record." },
  { source: "palawanrealproperty.com", scope: "origin of the richest listing family", status: "BLOCK", note: "Dead domain. Its data survives only as copies on blocked portals." },
  { source: "Facebook and Marketplace", scope: "local groups", status: "TODO", note: "Auth walled by design. Never attempted. See the manual queue." },
  { source: "Registry of Deeds, CENRO, PCSD, Assessor", scope: "the offices that actually know", status: "TODO", note: "None of this is online. It needs a person in Palawan." }
],

manual_queue: [
  { t: "Ask in Santo Niño in person, because the portals never had it", d: "Santo Niño supply does not reach property websites and the archive shows it never really did. Start at the barangay hall and the Municipal Assessor, ask who is selling, and ask for tax declaration numbers you can check. This is the one location where being there beats searching." },
  { t: "Search the Facebook groups from your own account", d: "Try Port Barton Community, San Vicente Palawan Buy and Sell, and Palawan Lot for Sale. Search strings that work: beach lot titled, beach front tax dec, Sto Nino lot, Binga lot. No group link is asserted here because none was found on the public web." },
  { t: "Facebook Marketplace, 40 km radius from San Vicente", d: "Category Land, sorted newest. Owner-direct listings mostly never reach the portals, and this is where the small cuts appear." },
  { t: "Ask OnePropertee directly", d: "It advertises 45 Port Barton lots and 197 San Vicente beach properties and blocks every automated read. A logged-in human session would open the largest unread pool in this market." },
  { t: "Ask PRP Real Estate for their old BL-series list", d: "Their dead domain carried the only listing family with GPS, tenure and frontage together. Ask whether they still hold that inventory." },
  { t: "Answer one question so eight gates can close", d: "Are you a Philippine citizen, a former natural-born Filipino, or neither. The answer changes the entire structure of any purchase and it is the only fact this brief could not look up." }
],

rejects: [
  { loc: "Poblacion", size: "596 sqm", price: "₱7,152,000", reason: "Titled and in band, but near the beach rather than on it. Fails direct ocean access." },
  { loc: "New Agutaya", size: "1,500 sqm", price: "₱40,500,000", reason: "Right of way is only indicated on a municipal map and marked subject to verification. That is below the deeded floor." },
  { loc: "Kemdeng", size: "300 sqm", price: "₱1,575,000", reason: "Undersize. Useful only as proof that this advertiser does cut parcels down to 300 sqm." },
  { loc: "Port Barton", size: "663 sqm", price: "₱2,652,000", reason: "Not beachfront, and the listing states both titled and tax declaration. The payment terms also imply an effective price double the advertised one." },
  { loc: "Binga", size: "15,158 sqm", price: "₱75,790,000", reason: "Oversize, and printed by eight or more advertisers under two different barangays and once under the wrong municipality. Kept as a comp and as a possible split parent." },
  { loc: "Caramay", size: "various", price: "various", reason: "Filed under San Vicente but the barangay belongs to Roxas municipality. Wrong town." },
  { loc: "Poblacion", size: "6,425 or 6,525 sqm", price: "₱109,225,000", reason: "Oversize, and two brokers disagree about the size by 100 sqm at an identical price." },
  { loc: "New Canipo", size: "5,234 sqm", price: "₱25,123,000 or ₱36,600,000", reason: "Oversize, and both prices appear on the same page. Kept as a comp." }
],

blockers: [
  { t: "Lamudi blocks every automated read, live", d: "It returns 401 to everything, including its own robots file. The way past it was the Internet Archive, which gave up four dated captures of its San Vicente index. That solved the Santo Niño question but archived prices are years stale, so live Lamudi inventory is still unread." },
  { t: "Santo Niño has no portal supply at all", d: "Two independent sweeps found zero live listings in your first-choice barangay, and one portal does not even offer it as a filter. If Santo Niño matters, the search there has to be local and off-portal." },
  { t: "Beach frontage and rear-road orientation are almost never published", d: "Your road-access test cannot be applied from portal data alone. It needs the lot plan or a site visit." },
  { t: "Land classification is not testable from any listing", d: "No portal states whether land is A&D or forest. Only CENRO can answer that, and only in person." },
  { t: "No sold-price data exists in the Philippines", d: "There is no functioning national MLS with verified sold transactions. Every price on this page is an asking price, and anyone quoting you a market rate is extrapolating." },
  { t: "Advertiser contact details are hidden behind reveal gates", d: "Most portals hide the phone number until you click. Only Pearlview and Palawanders published numbers openly." },
  { t: "No disaster agency situation report for San Vicente", d: "The national disaster site refuses automated access and the humanitarian data API now refuses unregistered clients, so no damage or storm surge figures for San Vicente are claimed here. The typhoon picture itself is now closed, from PAGASA sources." },
  { t: "Construction cost per sqm and the local schedule of market values", d: "Both blocked automated access. They are left empty rather than filled with a plausible number. The Municipal Assessor holds the schedule of market values, and three local contractor quotes beat any published average." }
],

changelog: [
  { cycle: 1, when: "24 Aug", what: "Bootstrapped from the seed state. Two parallel portal sweeps launched across eleven sources." },
  { cycle: 2, when: "24 Aug", what: "DotProperty swept to exhaustion, four pages. MyProperty read through embedded structured data after direct fetching failed." },
  { cycle: 3, when: "24 Aug", what: "E-Estate SV code scheme solved. All eight mapped prefixes confirmed against the barangay printed on the same listing, five of them newly." },
  { cycle: 4, when: "24 Aug", what: "Eight price and size conflicts documented on single parcels, including two lots printing two prices on one page." },
  { cycle: 5, when: "24 Aug", what: "Statutory research returned. Water Code Article 51, CA 141, RA 7611, PD 471 and the Anti-Dummy Law read verbatim from primary text." },
  { cycle: 6, when: "24 Aug", what: "Santo Niño negative finding confirmed by a second independent sweep. Recorded as a blocker rather than a gap." },
  { cycle: 7, when: "24 Aug", what: "Broker network mapped. Four apparently separate San Vicente agencies traced to one operator on a single hosting block." },
  { cycle: 8, when: "24 Aug", what: "Scored, deduped, and written up." },
  { cycle: 9, when: "24 Aug", what: "The slowest agent finished last and corrected four published claims. RA 10023's area cap is 750 sqm here rather than 1,000, a private house is exempt from the SEP clearance though not from the zoning check, San Vicente sits inside a 200,115 hectare protected area declared in 2000, and re-acquiring citizenship beats the 1,000 sqm cap outright. Report updated." },
  { cycle: 11, when: "24 Aug", what: "Typhoon gap closed from PAGASA's own post-season analysis. Super Typhoon Odette made landfall in the next municipality in December 2021 and San Vicente sat inside its 64 knot radius, which refutes the claim every seller on this coast repeats." },
  { cycle: 10, when: "24 Aug", what: "Second wave sent after publication to close the gaps this page had admitted to. The Santo Niño lead is now dead rather than merely unverified. Four archived captures of Lamudi's San Vicente index across a year contain no 984 sqm lot, and Lamudi never had a Santo Niño category for this municipality. Real Santo Niño prices recovered instead." }
],

checklist: [
  { t: "Answer the citizenship question", d: "Philippine citizen, former natural-born Filipino, or neither. If neither, you cannot own land at all and the whole plan changes to a 25 year lease. Nothing below is worth doing until this is settled.", who: "You, today" },
  { t: "Get the GPS coordinates in writing", d: "Without a coordinate you cannot check the zone, the hazard maps or the satellite view. If a seller will not give you a coordinate for land they claim to own, that is your answer.", who: "Seller or broker" },
  { t: "Buy the ECAN zoning certification", d: "₱200 at PCSD. It tells you which environmental zone the parcel sits in. A core zone lot is legally unbuildable no matter what the title says. This is the cheapest and highest-value check available on a Palawan lot.", who: "PCSD, Puerto Princesa" },
  { t: "Get the CENRO land classification certification", d: "Confirms whether the land is Alienable and Disposable or forest land. Forest land can never be titled by anyone. For a tax declaration lot this decides everything.", who: "DENR CENRO, Puerto Princesa" },
  { t: "Pull a certified true copy of the title yourself", d: "Go to the Registry of Deeds in Palawan and get the copy directly. Do not accept the seller's photocopy. Compare the two line by line and read the back page for annotations, mortgages, adverse claims and liens.", who: "Registry of Deeds, Palawan" },
  { t: "Check the tax declaration and the tax payments", d: "Municipal Assessor for a certified true copy of the declaration, Municipal Treasurer for proof that real property tax is current. Unpaid tax attaches to the land, not to the seller.", who: "San Vicente Municipal Hall" },
  { t: "Ask the Assessor for the zoning certificate", d: "This gives you the land's official classification, which is what decides whether your shore easement is 3, 20 or 40 metres. It changes the buildable area of the lot dramatically.", who: "Municipal Planning and Development Office" },
  { t: "Commission a relocation survey", d: "A licensed geodetic engineer walks the boundary and checks it against the technical description on the title. This is how overlapping titles and quietly shifted corners get caught. Do it before you pay, not after.", who: "Licensed geodetic engineer" },
  { t: "Measure the shore easement on the ground", d: "Stand at the high water mark and pace 20 metres inland. That strip is public. Look at what is left and ask yourself whether you would still pay this price for it.", who: "You, on site" },
  { t: "Verify the broker's PRC licence", d: "Only a PRC-licensed broker may legally act as one. Ask for the number and check it. An unlicensed agent has no accountability and no professional insurance.", who: "PRC verification" },
  { t: "Trace the seller's authority to sell", d: "If the seller is not the registered owner, demand the Special Power of Attorney and check its notarisation. If the owner has died, you need the extrajudicial settlement and every heir's signature. Missing heirs unwind sales years later.", who: "Your lawyer" },
  { t: "Check for agrarian, ancestral domain and protected area overlays", d: "DAR for agrarian coverage, NCIP for ancestral domain. A pending ancestral domain claim alone is enough to freeze the permits any build needs.", who: "DAR and NCIP Palawan" },
  { t: "Engage a Palawan lawyer before you sign anything", d: "Not the seller's lawyer and not the broker's recommendation. Someone who acts only for you and who will read the title, the deed and the tax records.", who: "Independent counsel" },
  { t: "Stage every payment against a document", d: "Money moves when a document is produced, never before. Reservation fees and earnest money paid on a promise are the most common way buyers lose money here.", who: "You and your lawyer" },
  { t: "Refuse to under-declare the price", d: "A seller asking you to write a lower number on the deed is asking you to commit tax fraud and to inherit a larger capital gains bill when you sell. The tax is charged on the higher of price or zonal value anyway, so it saves nobody anything.", who: "You, firmly" },
  { t: "Register the deed and get the new title in your name", d: "Notarised deed, then BIR for the eCAR, then the Treasurer for transfer tax, then the Registry of Deeds. The sale is not finished until the title carries your name. Until then you own a piece of paper.", who: "BIR, Treasurer, Registry of Deeds" }
],

outreach: [
  {
    title: "First message to a broker, any lot",
    why: "Short, specific, and it asks for documents rather than opinions. A broker who cannot answer these four questions is not close to the owner.",
    text: "Hello, I am interested in your listing [LISTING REF / URL].\n\nBefore we go further, could you send me four things.\n\n1. The exact lot area in square metres, and the GPS coordinates of the property.\n2. The tenure document. If it is titled, the TCT or OCT number. If it is a tax declaration, the TD number and the declared owner.\n3. Whether the land is classified Alienable and Disposable, and whether a CENRO certification exists.\n4. How the lot is reached by road, and whether any right of way is annotated on the title or only used informally.\n\nI am also asking about beach frontage in metres, and whether the price you have published is net to the seller or gross of taxes and fees.\n\nI am not asking you to hold anything and I am not paying a reservation fee. I am checking documents first. If the paperwork is clean I move quickly.\n\nThank you."
  },
  {
    title: "Message about the Port Barton 870 sqm lot",
    why: "Leads with the price conflict, which shows you have done the work and moves the conversation to the lower number before it starts.",
    text: "Hello, I am asking about the 870 sqm beachfront lot at Port Barton, reference SV08-011-0420-H, at GPS 10.4377, 119.1892.\n\nI have found this lot published at two different prices. Your own website shows ₱8,500,000, which is ₱9,750 per square metre. DotProperty shows ₱12,888,000, which is ₱14,814 per square metre. Could you tell me which figure the owner will actually sign at.\n\nOn the documents. The listing says tax declaration and mentions A&D. Could you send the tax declaration number, and confirm whether a DENR CENRO certification of Alienable and Disposable status exists for this parcel. For tax declaration land that certification decides whether the lot can ever be titled, so I cannot move without it.\n\nTwo more questions. Where does the rear boundary meet a road, and is any access written into a document. And how many metres of beach frontage does the 16.66 m figure refer to.\n\nI notice you also sell smaller cuts of parent parcels, including a 300 sqm lot at Kemdeng. If a 600 to 800 sqm beachfront cut is possible anywhere in Port Barton or Santo Niño, I would like to hear about it.\n\nThank you."
  },
  {
    title: "Message to Pearlview about the lot with no size",
    why: "One missing number is the only thing standing between this lot and the top of the list. Ask for it plainly.",
    text: "Hello, I am asking about your Port Barton beachfront listing priced at ₱15,000 per square metre, at GPS 10.442174, 119.115802.\n\nThe page does not publish the lot area, and the price field shows a placeholder rather than a figure, so I cannot work out what the property actually costs. Could you tell me the exact area in square metres.\n\nI am looking for 400 to 1,000 square metres, so if this parcel is larger I would want to know whether the owner will sell a cut of that size.\n\nAlso, please confirm the TCT or OCT number, and whether the 4 metre right of way is annotated on the title or is an informal path. A right of way that is not written on a document is not a right of way, so this matters more to me than the price.\n\nThank you."
  },
  {
    title: "Message asking a bulk owner to cut a lot",
    why: "The bulk rate on this coast is roughly fifteen times cheaper than the retail rate. Even a refusal tells you what the real markup is.",
    text: "Hello, I am asking about your Port Barton beachfront property of approximately 10 hectares with 300 metres of beach frontage.\n\nI am not a buyer for the whole parcel. I am looking for a single beachfront lot of 600 to 1,000 square metres for a house.\n\nMy question is simple. Would the owner consider subdividing and selling one beachfront lot of that size, and if so at what price per square metre.\n\nI understand a subdivision needs a geodetic survey and an approved subdivision plan, and I am willing to share that cost and to wait for the process. I would also want to know whether the parent parcel is titled or held on a tax declaration.\n\nIf the answer is no, I would still be grateful to know, so I can stop looking in that direction.\n\nThank you."
  },
  {
    title: "The question to ask before every viewing",
    why: "Ask this on the phone. It saves you a two-hour drive on a lot that is legally unbuildable.",
    text: "Before I travel out to see the lot, three quick questions.\n\nWhat is the GPS coordinate, so I can look at it on a map first.\n\nIs the land classified agricultural or urban on the tax declaration. I ask because the shore easement is 3 metres on urban land and 20 metres on agricultural land, and on a shallow lot that difference decides whether anything can be built.\n\nAnd has anyone checked the ECAN zone with PCSD. If the parcel sits in a core zone I cannot build on it whatever the title says, and I would rather know that now than after a drive.\n\nThank you."
  }
]
};
