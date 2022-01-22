# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [3.11.1] - 2022-01-22

### Fixed

- Fix SQLite configuration 🤞

## [3.11.0] - 2022-01-18

### Fixed

- Migrate away from problematic sqlite lib, use a better-sqlite3 wrapper instead
  - This is huge: the old sqlite was breaking everything

## [3.10.2] - 2022-01-18

### Fixed

- Update default API year to 2022 (this is stored in the yaml file, not the code)
- Update the tests that were failing, mostly due to the date not properly being observed

## [3.10.1] - 2021-12-25

### Fixed

- ICS links on "Add holidays" page prepended with "https://"

## [3.10.0] - 2021-12-25

### Added

- Add instructions on "Add holidays" page for streaming holidays
- Can use /ics paths without an explicit year

### Updated

- Return /ics paths without "Content-disposition" header by default
- Don't include "download" attribute on "add to calendar" links
- Use CalButton on "Add holidays" page instead of custom button  

### Fixed

- Only add event listener to nextHolidayLink if found on page 

## [3.9.0] - 2021-12-05

### Updated

- Use literal date for the "Next holiday" box

## [3.8.0] - 2021-12-03

### Added

- Added a new holiday for Nunavut (Nunavut Day)

### Updated

- API spec updated for new max integer value (1 new holiday)
- Updated links to sources where they were broken

### Fixed

- Changed base container to node-slim because my build was failing.

## [3.7.1] - 2021-11-01

### Fixed

- Fixed a broken link in the README
- Updated the default node version in `.nvmrc`

## [3.7.0] - 2021-08-27

### Added

- Added 2024 as an option

### Updated

- API spec updated for new year
- Updated sitemap with new day

## [3.6.0] - 2021-07-30

### Updated

- bump node engine to 14
- add python to dockerfile for tempermental new macs

### Fixed

- update the date on the "download holidays to your calendar" page

## [3.5.0] - 2021-06-26

### Added

- Added notification drawer for important info

## [3.4.0] - 2021-06-26

### Added

- New holiday just dropped: National Day for Truth and Reconciliation

## [3.3.2] - 2021-06-12

### Updated

- Use the numbers for start and end dates in .ics files, otherwise they would fail to generate.

## [3.3.1] - 2021-04-12

### Updated

- Use the literal dates for holidays in the .ics files as well. Missed this earlier.

## [3.3.0] - 2021-01-01

### Updated

- Show the literal dates for holidays, and observed dates underneath

## [3.2.1] - 2021-01-01

### Updated

- Update sitemap with new pages

## [3.2.0] - 2020-12-31

### Added

- Added 2023 as an option

### Updated

- API spec updated for new year
  - Year range extended
  - Default year is 2021

## [3.1.1] - 2020-12-27

### Updated

- Date comparison adjusts for the end of the day (UTC) before deciding whether today is still a holiday

## [3.1.0] - 2020-12-26

### Added

- Remove redirects for "current year"
  - Adjust canonical tags though: we want current year pages to point to the yearless links

### Updated

- Calculate end of the year differently for different provinces (depends on boxing day)

## [3.0.0] - 2020-11-17

### Breaking change

- Moved all the `/province/*` URLs to `/provinces/*`
  - eg, `/province/MB/2021` is now `/provinces/MB/2021`
  - old URLs will 301 redirect to the new URLs
  - technically this is a breaking change, although I am more worried about search engines than actual users

### Added

- added a rel="canonical" link to the `<head>`

## [2.14.3] - 2020-11-16

### Fixed

- meta information for open graph is just one sentence — it gets cut off otherwise
- update open graph images for twitter

## [2.14.2] - 2020-11-16

### Fixed

- update open graph images to aspect ratio of 1.91:1 (1200 x 628)

## [2.14.1] - 2020-11-16

### Updated

- "download" icon looks nicer

## [2.14.0] - 2020-11-15

### Added

- added images for opengraph (eg, FB and Twitter)

### Fixed

- shortened descriptions for opengraph

## [2.13.1] - 2020-11-03

### Fixed

- fix the data-label for the next year link

## [2.13.0] - 2020-11-03

### Added

- add link to next year's holidays to all years but the current max (2022)
  - not putting "past holidays" because nobody wants them

## [2.12.1] - 2020-10-26

### Fixed

- rel="noopener" for target=_blank links offsite
- add cloudflare beacon script to CSP
- a11y: no tabbed focus on the date in the header

## [2.12.0] - 2020-10-26

### Added

- Rich results for datasets. Added metadata to pages for all provincial, federal, and national holidays.

### Updated

- Added holidays count to the meta string for each region.

## [2.11.1] - 2020-10-21

### Fixed

- Removed duplicate `<meta>` description
- Fixed some CSS parsing errors

## [2.11.0] - 2020-10-21

### Added

- Speakable rich search results. Still in beta but could be fun.
- SR-only text for the h1 on "next holiday" pages. Makes it flow better

### Updated

- Added aria-labels for province names in the "observed by" paragraph. sounds nicer.

### Fixed

- Removed "visuallyHidden" css emotion class in favour of a regular classname. Means it works as expected in FF, at least.

## [2.10.0] - 2020-10-21

### Added

- Breadcrumbs rich search results. Does it matter? Maybe.

## [2.9.0] - 2020-10-12

### Added

- Cool new feature! It's a PWA now
- Added a CHANGELOG