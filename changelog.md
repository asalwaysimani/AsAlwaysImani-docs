---
title: Changelog
author: Imani
---
## [Version 17] - 2025-04-22

### Changes

- Fixed the spacing issues on Pitch Please

## [Version 16] - 2025-02-02

### Added

- Created the recommendations page to link to other cool people on the internet.

### Changes

- Reimplemented the main blog of the site.
- Removed CoHost from contact page as its now defunct.
- Removed the second blog
- Standardized the sidebar naming convention to be Capital Case instead of camelCase so Margaret Catter Development and Ionie Annette displays correctly in the site sidebar.
- Added links to outside websites on the index/projects list page of the site

## [Version 15] - 2024-04-21

### Changes

- Created links between High Metropoly and Neo Cities Chronicles to the Margaret Catter Development index page.
- Updated High Metropoly about page to include information about the genre and game summary.
- Updated Ascent of Crystal Tower about page to include the new game summary.
- Updated Those Broken and Beloved Things about page to include the new game summary.
- Updated The Empire of Unsheathed Knives about page to include the new game summary and genre information.
- Included links in the Micro TTRPG index page to the itch.io versions of games for purchase.

## [Version 14] - 2024-04-14

### Added

- New As Always Imani logos commissioned from mintyshi

### Changes

- Update About As Always Imani page
- Changed all the images in assets/logos file names to be camelCase
- Renamed 10_Margaret Catter Development to be camelCase
- Renamed 20_Ionie Annette to be camelCase
- Renamed documents in The-Galaxy-is-Limitless to be camelCase
  - Added story summary to 00_theGalaxyIsLimitless.mdx

## [Version 13] - 2024-03-24

### Added

- New blog post for Notes From Around Here
- Link to Margaret Catter Development website in site header

### Changes

- Updated 01_intro - About As Always Imani

## [Version 12] - 2024-02-25

### Changes

- Mermaid theme
- remark-mermaid.js plugin

### Notes

#FFFFFF - Text - MCD
#7A4E8D - Background color - MCD // #553663 Accessibility
#95CED0 - Primary color - MCD // #173435 Accessibility
  #173435 - Darker primary color

#A175B3 - Secondary color - MCD // #53355F Accessibility
#FFE0E9 - Accent color - MCD

#69bdd3 - Darker secondary color
#ff4d7f
#ff6691
#724884

#3183a2 - AAI // #1A4656 Accessibility
#765082 - AAI
#9497e1 - AAI // #9697ca

#ff9ba2 - Ionie
#eb808a - Ionie - Light mode
#ffe5e3 - Ionie



## [Version 11] - 2024-02-24

### Additions

- Visual Novel Pages for:
  - Magical Space Adventures
  - All The Faces of Dante Hall
- Clone Rounded Font

### Changes

- Duped Readme to index
- Logos for the following:
  - Hurricane Like Me
  - Neo Cities Chronicles
- Changed Mnemosyne Ashwell section name to Ionie Annette
- Removed "Open" from "Projects List" page title
- Renumbered sidebar
- Updated images on the home page
- Moved logo images from the docs folder to the statics folder with other images
- Started filling in influences on the FAQ page
- All markdown files changes MDX files

## [Version 10] - 2023-09-08

### Changes

- Reordered page orders in sidebar
- Added sections to "Find Me Around The Web"/Contacts
  - Removed twitter from contacts list
- Removed twitter link from Intro page
- Changed Readme
  - Realized that index was the same information as readme
- Created Check Yes Romeo page under Margaret Catter Dev
- Added logo images to the following pages
  - Check Yes Romeo
  - Hot Off The Press
- Moved "Cite Your Sources"/Sources into Margaret Catter Development
- Numbered docs in NeoCitiesChronicles
- Numbered docs in High Metropolys
- Numbered docs in Mnemosyne Ashwell
- Added Preorder link to Neo Cities Chronicles TTRPG
- Moved Burn Out the Sun out of High Metropolys. Moved to Mnemosyne Ashwell
- Removed "date" from metadata section of various docs
- Created Micro Games folder
  - Created table of contents with all games summaries for planned micro games
  - Currently NOT mobile friendly


## [Version 9] - 2023-07-09

### Changes

- Fixed the year on changelog post 4 though 8 to the correct year.
  - Removed the date tag from the header yaml for the changelog
- Changed the homepage images for As Always Imani, Margaert Catter Dev, She Be Spittin Though
  - Created PNG files but could not figure out how to make them work instead changed them to the seemingly required SVG files.
- Added Marydale as a font inside project.
- Created an "old" folder for previous verions of images uploaded to site.
  - Added folder to gitignore.
- Added spaces to folder names (ex: MnemosyneAshwell -> Mnemosyne Ashwell)
- Change "Index" page to "Projects Listings"

### Notes

asalwaysimani.com
├── As Always Imani
│ ├── General update space on all projects
│ └── The Internet Was Probably A Mistake - A historical commentary on growing up in online spaces. From AOL Kids till Now. Circa 2000
├── margaretcatter.dev
│ └── Digital & Analog game development and design works
│ ├── Analong Games
│ │ ├── High Metropolys
│ │ └── NeoCititesChronicles
│ └── Digital Games
│ ├── Hurricane Like Me
│ └── Look Ma We Made It
├── She Be Spittin Though
│ ├── Selftitled Music Project - Character and themed playlist with written attachments
│ ├── Fake Tour Posters - Posters for tours I wish would happen
│ ├── Minor mutinous musing - Because fuck you america
│ ├── Lets Be Blashpemy - Attack and dethrone god. His time has come to an end
│ ├── Why Wasn't This A Tweet - Seriously you went extra hard for no reason please stop
│ └── Not Ted Talks - Fuck Bananas, the english language, and bananas (again)
└── Mnemosyne Ashwell
└── Original creative writing projects
├── The Galaxy is Limitless
│ ├── This Old Black Magic
│ ├── Mother May I
│ ├── A King From My Kingdom
│ ├── You Should See Me In A Crown
│ ├── Curse of Cassandra
│ └── A Black Cat With A Particular Name
├── Chasing the Beginning of Happyness
├── Eight Kingdoms
├── Project Mia Hamm
├── These Kids Will Wear Crowns
└── Pitch Please - Because I have too many goddamn ideas

- Figure out if SVG files can have names with number in them, it seems to through an error but this error could also be because the svg files have fonts that can't be loaded.
  > Invalid character in entity name
- [https://convertio.co/] - for converting PNG files to SVG files
- [tree.nathanfriend.io] - markdown trees
- src -> pages -> index.js
  - Top header half of the homepage
- src -> components -> HomepageFeatures -> index.js
  - Body text of the homepage

## [Version 8] - 2023-04-09

### Changes

- Added numbers to file names to manually reorder sidebar.
- Created ProjectMiaHamm.md
- Updated PitchesPlease

  - Untitled Social Media with Soulmates

- src/pages/index.js
  Changed website title as displayed
  Changed website description as displayed

- src/components/HomepageFeatures/index.js
  Updated "She Be Spittin Thou" description

- docusaurus.config.js
  Changed "Blog" to "On CoHost" in theme.

- 93_SheBeSpittinThou
  Created She Be Spittin Though folder

## [Version 7] - 2023-04-02

### Changes

- Corrected the title in the docusaurus.config.js (title: 'As Always Imani' from '...')

- Updated the following pages with the below listed sections
  - Pages
    MargaretCatterDevelopment
    Tabletop Roleplay Games
    High Metropolys
    Ascent of Crystal Tower
    Burn Out The Sun
    The Red Lich Queen of Hedgeline
    The Those Broken & Beloved Thing
    NeoCitiesChronicles
    MagicalGirlsAndMecha
    MagicalGirlMechaRising -> MagicalGirlsMechaRising
    NeoCitiesTTRPG
    Hot off the Press > Renamed file to remove underscorer
    Visual Novels
    Hurricane Like Me
    Look Ma We Made It
  - Sections
    About the Game
    Where to Buy
    Genre
    Status
    Updated
- Created the following new pages
  - MargaretCatterDevelopment
    High Metropolys
    High Metropoly.md

## [Version 6] - 2023-03-16

### Changes

- Removed "section" from "frequently asked questions" title
- Added title field to docusaurus.config.js under module.exports
- Updated the i18n configuration object to the docusaurus.config.js
- Removed email from contact.md
- Fixed line breaks on contact.md page
- Removed duplicate markdown files outside of the docs folder

## [Version 5] - 2023-03-12

### Changes

- Removed the "Edit this page" text from all pages
- Added links to around the web in intro.md
- Changed button text in index.js
- Created SVG files for imgs
  - Moved default docusurus imgs into folder
- Changed colorway

## [Version 4] - 2023-01-11

- Built out project using ccodesandbox.io.

### Changes

- Renamed Prose-Projects -> MnemosyneAshwell
- Pulled files from MnemosyneAshwell folder into main directory
- created src directory and contents
- created docs directory
  - moved MargaretCatterDevelopment into directory
  - moved MnemosyneAshwell into directory

## [Version 3] - 2022-11-09

### Additions

npm i gatsby@latest
gatsby new {your-project-name} {link-to-starter}

Created a new folder and file structure to sort and categorize pages.
.
├── AsAlwaysImani
│ ├── Prose-Projects
│ │ └── The-Galaxy-is-Limitless
│ └── Nonfiction-Projects
└── MargaretCatterDevelopment
├── Tabletop-Roleplaying-Games
│ ├── High Metropolys
│ └── NeoCitiesChronicles
└── Visual-Novels

### Changes

Updated the [Contacts](contact.md)
Minor changes to the [Sources](sources.md) adding intended sections headers.

### Devlog Notes

Renamed and revised "Projects---Progress-List" to "Projects Compendium"

### Open Task

Figure out which meta tags work and add them onto [index](index.md)
Google analytics id  
 GA: ---
Line breaks
breaks: false
Prevent search engine indexing
robot: noindex
