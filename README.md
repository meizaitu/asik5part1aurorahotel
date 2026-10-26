# Aurora Hotel — DOM Manipulation & Events

## Overview

Aurora Hotel is a responsive, multi-page hotel website. This team project adds interactive JavaScript functionality while preserving the original pages, layout, styling, and forms.

## Team

| Member | Full name / group | Contribution |
|---|---|---|
| 1 | [Meizamkhan Zhanbyrbayev, MT-2502] | Personalized welcome and theme switch |
| 2 | [Dilnaz Toktanova, MT-2502] | Interactive FAQ |
| 3 | [Ayazhan Nurtaza, MT-2502] | Live search and result feedback |
| 4 | [Meizamkhan Zhanbyrbayev, MT-2502] | Dynamic wishlist, testing, and documentation |

Update the contribution column to match each member's actual work and commits.

## How to open

1. **Extract the ZIP first**. Do not open an HTML file from the compressed archive.
2. Open the **AuroraHotel** folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Navigate using the site's menu. Keep the `css`, `js`, `images`, and `vendor` folders together with the HTML pages.

No Node.js, database, or build tool is required. The Bootstrap CSS is bundled locally, so styles do not depend on an internet connection.

## Where to find each team feature

| Task | Page | How to test | Expected behaviour |
|---|---|---|---|
| 0 — Welcome | `index.html` | Enter a name with spaces and click **Say hello** | Trims spaces and shows a personalized welcome. Empty input shows guidance. |
| 1 — Theme | Header of all pages | Click **Dark mode**, then **Light mode** | Changes page colors and button label; second click restores the original theme. |
| 2 — FAQ | `booking.html` | Click four FAQ question buttons, try Tab/Enter/Space | Each answer opens or closes independently; `aria-expanded` changes. |
| 3 — Search | `rooms.html` | Type a room name, try uppercase, spaces, and unmatched text | Filters six existing cards as you type; count updates; "No results found" appears when required; clearing restores all six. |
| 4 — Wishlist | `rooms.html` | Enter text, press Enter or Add, then use Remove | Adds a new item without a reload, refuses blank text, removes the selected item, and updates the count. |

## Files

- `index.html` — home page and guest welcome.
- `rooms.html` — room cards, live search, and wishlist.
- `booking.html` — booking details and JavaScript-powered FAQ.
- `contact.html`, `register.html` — previous HTML5/Bootstrap forms and validation (`js/forms.js`).
- `about.html`, `stay-review.html` — existing information pages.
- `js/script.js` — all new DOM and event-listener interactions.
- `css/interactions.css` — styles for the new controls and both color themes.
- `css/style.css`, `css/responsive.css`, `css/forms.css` — original site styles.
- `images/` — existing room and hotel illustrations.
- `vendor/bootstrap/` — local Bootstrap CSS.

## Implementation details

- Task 0 uses `getElementById()`, `querySelector()`, `trim()`, and `textContent`.
- Task 1 uses `classList.toggle()` and changes `aria-pressed` and the button label.
- Task 2 uses `querySelectorAll()`, loops over FAQ buttons, attaches `click` listeners, switches `hidden`, and synchronizes `aria-expanded`.
- Task 3 listens to the `input` event and compares normalized room titles with the search value.
- Task 4 handles a form `submit` event with `preventDefault()`, creates list elements with `createElement()`, sets `textContent`, appends elements, and wires up per-item Remove buttons.
- All new event handlers use `addEventListener()`. The source files are external and loaded using `defer`.

## Validation and demonstration checklist

| Test | Expected result | Actual result (fill after browser testing) |
|---|---|---|
| Blank name or spaces only | Guidance message, no welcome with an empty name | [RESULT] |
| Name with spaces | Trimmed welcome text | [RESULT] |
| Switch to dark and back | Both modes readable, original colors restored | [RESULT] |
| Toggle FAQ 1 and 2 independently | Only the clicked answer changes | [RESULT] |
| Keyboard activate FAQ with Enter and Space | Same behaviour as mouse click | [RESULT] |
| Search `DELUXE` / ` deluxe ` | Only Deluxe Room shown; count = 1 | [RESULT] |
| Search unmatched text | No cards, "No results found", count = 0 | [RESULT] |
| Clear search | All six rooms shown | [RESULT] |
| Add blank wishlist item | No item added, guidance appears | [RESULT] |
| Add two items using Enter/Add | Two items, count = 2, no page reload | [RESULT] |
| Remove first item | Second item stays, count = 1 | [RESULT] |
| Mobile view | Controls remain usable on narrow screens | [RESULT] |

## Evidence for report

Add your own labelled screenshots of Task 0 (empty and valid), Task 1 (both themes), Task 2 (opened and closed FAQ), Task 3 (matching, no results, reset), Task 4 (adding, removing, empty input), and a narrow-screen layout. Store them in a `screenshots/` folder or insert them into the Word report. Provide the live website URL and each team member's contribution.

## Live website

https://meizaitu.github.io/asik5part1aurorahotel/ 
https://github.com/meizaitu/asik5part1aurorahotel/

## Note

This is a front-end demonstration. Forms from the previous version do not send data to a real reservation system. The new wishlist is temporary page state and resets when reloading.
