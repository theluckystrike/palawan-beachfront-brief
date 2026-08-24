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

## Rebuilding the page

    cd site && ./build.sh

No dependencies and no build tooling. The script concatenates the parts into index.html. All figures live in one DATA object between the DATA_START and DATA_END markers, so numbers can be updated without touching markup.

## Checking it yourself

    osascript ~/Desktop/jeff/mobile-check.applescript

Opens the live page in a phone sized Chrome window, walks the main sections and reports what it measured. Chrome needs View, Developer, Allow JavaScript from Apple Events for the measurement part.

The automated checks ran through Chrome DevTools Protocol instead, because osascript was blocked inside the agent session. Those checks cover more: 978 text nodes for contrast in both themes, five viewport widths, every nav link by click and by scroll, and every rendered link for new tab attribution.

## Checks the page passes

WCAG AA contrast on 978 text nodes in both themes, zero failures. No horizontal scroll and no overflowing elements at 375, 390, 768, 1280 and 1600 pixels. Zero JavaScript errors. Every control at least 44 pixels, inputs at 16 pixels so iOS does not zoom. The result figure stays the largest text at every width. Section nav correct on all 15 sections by click and by scroll. All 74 external links open in a new tab with noopener. Humanize scanner clean apart from one proper noun, the Malampaya Sound Protected Landscape and Seascape, which is the legal name from the proclamation and so is not rewritten.
