# Palawan beachfront land brief, for Jeff

Live report: https://theluckystrike.github.io/palawan-beachfront-brief/

Everything that could be verified about buying a 400 to 1,000 sqm beachfront lot in San Vicente municipality, Palawan. Built in one run on 24 August 2026 by eight research agents working in parallel, then written up, designed and published as a single self contained page.

## What is in this folder

    site/            the published page. index.html is built from site/parts by build.sh
    site/parts/      head, stylesheet, body sections, the DATA blob, the renderer
    agents/          raw JSON output from each research agent, with its own sources
    outreach/        five ready to send message drafts. Nothing was sent to anyone
    docs/            the design analysis and the rendered screenshots
    state.json       machine readable snapshot of leads, coverage, blockers and rejects

## The four findings that shape the search

A small Long Beach lot may be entirely unbuildable. San Vicente's tourism master plan sets a 50 metre easement from the mean high water mark, double the national baseline, with a hard no build core where only moveable foundationless huts are allowed. A 1,000 sqm lot with 20 metres of frontage is 50 metres deep, so the setback eats all of it.

Port Barton is outside the designated tourism zone, which is why it looks better on buildability than Long Beach does. It is also where the only in band beachfront lot with a working link happens to sit.

The market is not discounting untitled land. Across 59 listings, titled lots and tax declaration lots sit in the same price bands, which is a mispricing that runs against a buyer who accepts it.

The 400 to 1,000 sqm beachfront band barely exists on the open market. Three listings fit, one of them in a top two barangay with a URL you can open.

## Corrections made after the last agent reported

The legal agent ran for one hundred minutes and finished after the page was already live. It corrected four published claims, all now fixed.

RA 10023's residential free patent cap is 750 sqm in a first or second class municipality, not 1,000, and San Vicente is reported to be first class. That clips the top of the target range. Free patents are also open to Filipino citizens only.

A single private house is a Category C project and PCSD exempts Category C from the SEP clearance. The ₱200 ECAN zoning certification is still needed, and still decides buildability.

Proclamation No. 342 of 12 July 2000 declared the Malampaya Sound Protected Landscape and Seascape, about 200,115 hectares, in the municipalities of Taytay and San Vicente. Nothing inside proceeds without its management board. Whether any shortlisted lot falls inside the boundary is unresolved and is now a question for MENRO San Vicente.

For a former natural-born Filipino, re-acquiring citizenship under RA 9225 removes every area cap and use restriction, which beats being permanently capped at 1,000 sqm.

It also independently confirmed the transfer tax correction already made, that the provincial cap is 0.5 percent and the statute puts the duty on the seller.

## How the research was run

Two agents swept property portals independently so their results could be checked against each other. One read statutes directly from primary text rather than from summaries. The others covered prices, contacts, geography, risk and the cost of ownership.

Three rules governed the run. No fact without a source you can open. No listing reported unless a page was actually read. Nothing sent to anybody, so every message is a draft.

Half the property portals in this market block automated reading, including Lamudi. Government fee schedules for Palawan province and San Vicente municipality are not published online at all. Both limits are stated in the report rather than papered over.

## Rebuilding the page

    cd site && ./build.sh

No dependencies and no build tooling. The script concatenates the parts into index.html. All figures live in one DATA object between the DATA_START and DATA_END markers, so the numbers can be updated without touching the markup.

## Checks the page passes

WCAG AA contrast on 978 text nodes in both light and dark themes, zero failures. No horizontal scroll and no overflowing elements at 375, 390, 768, 1280 and 1600 pixels. Zero JavaScript errors. Every control at least 44 pixels tall, inputs at 16 pixels so iOS does not zoom. The result figure stays the largest text on the page at every width. Humanize scanner clean.
