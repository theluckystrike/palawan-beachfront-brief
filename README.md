# Palawan beachfront land brief, for Jeff

Live report: https://theluckystrike.github.io/palawan-beachfront-brief/

Everything that could be verified about buying a 400 to 1,000 sqm beachfront lot in San Vicente municipality, Palawan. Thirteen research agents across two waves, 467 cited sources, then written up, designed and published as one self contained page.

## What is in this folder

    site/            the published page. index.html is built from site/parts by build.sh
    site/parts/      head, stylesheet, body sections, the DATA blob, the renderer
    agents/          raw JSON from each research agent, with its own sources
    outreach/        five ready to send message drafts. Nothing was sent to anyone
    docs/            design analysis, rendered screenshots, and a print ready PDF
    state.json       machine readable snapshot of leads, coverage, blockers and rejects
    mobile-check.applescript   run it yourself, see below

## The findings that shape the search

A small Long Beach lot may be entirely unbuildable. San Vicente's tourism master plan sets a 50 metre easement from the mean high water mark, double the national baseline, with a hard no build core. A 1,000 sqm lot with 20 metres of frontage is 50 metres deep, so the setback eats all of it.

Two overlays split the target list and they agree with each other. Proclamation 342 of 2000 put four San Vicente barangays inside the Malampaya Sound protected area. Santo Niño, the buyer's first choice, sits about 5.2 km inside. New Canipo is 12.6 km inside, Binga 16.1 km, and Alimanguan straddles the line. Port Barton is 22 km clear and outside the tourism zone as well. Land inside a protected area is generally not alienable, so no new title issues over it.

Palawan is not outside the typhoon belt, whatever every seller says. PAGASA published the post season analysis that records Super Typhoon Odette making landfall at Roxas, the next municipality, in December 2021, with San Vicente inside the 64 knot radius. What is true is that Palawan sits one wind hazard class below most of Luzon and the Visayas, not outside anything.

The market is not discounting untitled land. Across 59 listings, titled lots and tax declaration lots sit in the same price bands.

The size band barely exists. Three listings fit 400 to 1,000 sqm and front the sea. One is in a top two barangay with a link you can open.

The Santo Niño lead turned out to be a phantom. A 984 sqm titled lot at 11.25 million pesos, attributed to Lamudi. Four archived captures of Lamudi's San Vicente index across a year contain no such lot, and Lamudi never had a Santo Niño category for this municipality. The price was entirely plausible, which is what made it dangerous.

## Corrections made after publication

The page went live, then slower agents kept reporting and corrected it. Everything below was wrong on the live page and is now fixed.

The RA 10023 free patent cap is 750 sqm, not 1,000. San Vicente is confirmed a first class municipality on the Department of Finance schedule effective January 2025.

A single private house is a Category C project, which PCSD exempts from the SEP clearance. The 200 peso ECAN zoning certification is still required and still decides buildability.

Provincial transfer tax is capped at 0.5 percent, not 0.75. The 0.75 figure is a city rate and San Vicente is a municipality. The statute also puts the duty on the seller.

A claim that the Tandulanen Tagbanua had 24,000 hectares pending in Taytay was unsupported and has been removed. Their documented petition covers eleven El Nido barangays.

The 2022 NCIP order against an El Nido estate was described as stopping a fully permitted project. It was partial. It halted lot sales, subdivision, advertising and new construction, and left the airport and hotels running.

## How the research was run

Two agents swept property portals independently so their results could be checked against each other. One read statutes directly from primary text. Others covered prices, contacts, geography, risk and the cost of ownership. A second wave then closed the gaps the first wave had admitted to.

Three rules governed the whole run. No fact without a source you can open. No listing reported unless a page was actually read. Nothing sent to anybody.

Where sources blocked automated reading, the Internet Archive was used instead and every snapshot carries its capture date. That is how the Santo Niño question was settled and how a dead broker domain gave up its catalogue.

## What is still open

No disaster agency situation report for San Vicente, so no damage or surge figures are claimed. No coastal erosion study for west Palawan. No Philippine government sea level projection exists, so the IPCC figure is used instead. No deep well pricing. And no PRC licence has actually been verified, though the page now carries the one minute method for doing it.

## Passing it on

Section 15 is a share block rather than a footer line. It says plainly why a friend looking at land here should read it before sending anyone a deposit, and gives three ways to move it: a native share sheet, a copy link, and save as PDF. Beside it sits a short note on who built it and what that work is, with the GitHub link. The footer carries a slimmer version of the same.

The reasoning is that the most useful thing this page can do after Jeff reads it is reach the next person before they pay a reservation fee on a lot inside a no-build easement.

## Conformance with the source brief

Audited section by section against PALAWAN-INTEL-8-CLI.md rather than assumed.

The DATA blob sits between the two exact markers the brief specifies, as a single object named DATA, with pesos primary and dollars at 57. Every section the report contract names is present: header with cycle number, coast strip, spec card, ranked candidate table, dossier cards, contact directory, coverage matrix, manual queue, rejects log, blockers and changelog. state.json carries all seven keys. Every agent mirrored its output to ./agents. The five outreach drafts sit in ./outreach and none was sent.

Two gaps the audit caught. state.json had lost started_at and contacts in a regeneration, now restored. And the brief ends by asking for a shutdown print of the top three with next actions, open blockers and the manual queue, which had never been produced. It is now in SHUTDOWN.txt and was printed at the end of the run.

The report also sits at ./palawan-intel-report.html, the filename the brief names, alongside site/index.html which is what GitHub Pages serves.

## Rebuilding the page

    cd site && ./build.sh

No dependencies and no build tooling. The script concatenates the parts into index.html. All figures live in one DATA object between the DATA_START and DATA_END markers, so numbers can be updated without touching markup.

## Checking it yourself

    osascript ~/Desktop/jeff/mobile-check.applescript

Opens the live page in a phone sized Chrome window, walks the main sections and reports what it measured. Chrome needs View, Developer, Allow JavaScript from Apple Events for the measurement part.

The automated checks ran through Chrome DevTools Protocol instead, because osascript was blocked inside the agent session. Those checks cover more: 978 text nodes for contrast in both themes, five viewport widths, every nav link by click and by scroll, and every rendered link for new tab attribution.

## The design review

The three design prompts were run as their own pass, not just read. Two fresh reviewers scored the page independently against the ten dimension rubric, one taking hierarchy through colour, the other craft through resilience. They came back at 6.0 and 6.6, and both independently named the same worst failure.

That failure was mine and it was real. The five evidence colours, which mean verified, reported, inferred and kill everywhere else on the page, were being spent as ordinal decoration on the five findings in the opening section. A reader met coral labelled Finding one before ever meeting the legend, which teaches him the colours are styling and quietly disarms the whole trust device. The findings now carry a neutral chip and an honest grade line instead.

Fifteen other fixes came out of it. The accent now points at the cash figure rather than at two supporting numbers beside it, and that figure went from 1.12 to 1.30 times the headline on a phone. Every slider gained a typed field, because a broker sends an exact asking price and a slider cannot reach it. The tracks show where you are in the range. Every municipal phone number and email is now a tap. Each dossier says how many of its eight gates are answered, since the report's own warning is that a high score with eight unknowns means nobody has checked. Facts nobody established no longer look like measured ones. The reading measure was 90 characters and is now about 69.

Four genuine bugs surfaced while fixing those. A hidden table header laid out at full width because position absolute is not honoured on a table header group. Two read-only lists were borrowing the checklist component, so their text sat against the border with no padding. The focus outline forced a 4px radius onto every pill and card it touched. And a government email in a flex link could not shrink, which pushed the page 26 pixels wider than the phone.

## Checks the page passes

WCAG AA contrast on 978 text nodes in both themes, zero failures. No horizontal scroll and no overflowing elements at 375, 390, 768, 1280 and 1600 pixels. Zero JavaScript errors. Every control at least 44 pixels, inputs at 16 pixels so iOS does not zoom. The result figure stays the largest text at every width. Section nav correct on all 15 sections by click and by scroll. All 74 external links open in a new tab with noopener. Humanize scanner clean apart from one proper noun, the Malampaya Sound Protected Landscape and Seascape, which is the legal name from the proclamation and so is not rewritten.
