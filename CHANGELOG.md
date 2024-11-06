# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add skeleton component (empty div) to Drawer for improve performance

## [0.18.0] - 2024-11-01

### Added

- Add `zIndex` as a property argument to control the drawer's z-index

## [0.17.2] - 2024-08-13

### Added

- Add onVisibilityChanged function as a property argument of the Drawer component

## [0.17.1] - 2024-02-28

## [0.17.0] - 2024-01-09

## [0.16.3] - 2023-06-13

### Fixed

- Fixes of i18n on readme file.

## [0.16.2] - 2022-06-13

### Fixed

- Removed transition from in `"Overlay"`.

## [0.16.1] - 2022-02-14

### Fixed

- Indicate the prop `text` in `"rich-text#open-drawer"`.

## [0.16.0] - 2021-06-02

### Added

- `renderingStrategy` prop to control when the drawer's children should be rendered

## [0.15.1] - 2021-03-10

### Fixed

- aria-hidden into `Swipable`

## [0.15.0] - 2020-12-04

### Added

- Prop for drawer close button: `text`

## [0.14.0] - 2020-09-08

### Added

- `customPixelEventId` prop.

## [0.13.0] - 2020-08-10

### Added

- CSS Handle for drawer overlay: `overlay` and `overlay--visible`.

## [0.12.1] - 2020-05-05

### Fixed

- Scrollbar showing even when there's no overflow.

## [0.12.0] - 2020-04-28

### Added

- `backdropMode` prop to `drawer`.

### Security

- Bump dependencies versions.

## [0.11.0] - 2020-04-28

### Added

- Class names with CSS Handles.

## [0.10.1] - 2020-04-01

### Changed

- Lock page scroll with `overflow: hidden` instead of fixing its position.

## [0.10.0] - 2020-03-30

### Added

- New CSS Handle `drawerContent`

## [0.9.0] - 2020-03-13

### Added

- New block `drawer-header` and `drawer-close-button`.

### Fixed

- Drawer trigger block never being rendered.

## [0.8.1] - 2020-03-11

### Fixed

- Correctly identify if animation is stopped or not.

## [0.8.0] - 2020-03-03

### Added

- New `drawer-trigger` interface.

## [0.7.0] - 2020-02-28

### Changed

- Drawer now closes on its own if the user clicks a link inside it.

## [0.6.1] - 2020-01-23

### Changed

- `useLockScroll` now blocks the scroll of the body element instead of the html.

## [0.6.0] - 2020-01-06

### Added

- Allows dragging from outside of the drawer.

### Changed

- Preserves momentum after swipe release.
- Prevents rendering of content if the menu has not been opened.

### Fixed

- Issue where client rendering on the Portal component would be inconsistent with SSR.
- "Accordeon effect" when opening the drawer, when the scrollbars are visible in the user's OS.

## [0.5.0] - 2019-12-27

### Changed

- Allow any block inside drawer.

## [0.4.0] - 2019-11-06

### Added

- Support for new values for `slideDirection` prop: `'rightToLeft'` and `'leftToRight'`.

## [0.3.0] - 2019-10-18

### Added

- New `childrenContainer` CSS handle.

### Fixed

- Wrong CSS handle being applied to the close button.

## [0.2.2] - 2019-08-29

## [0.2.1] - 2019-08-22

### Fixed

- Bug in IE11

## [0.2.0] - 2019-08-12

### Added

- New `isFullWidth`, `slideDirection` and `maxWidth` props to `Drawer` component.
- Support for `.openIconContainer`, `closeIconContainer` and `closeIconButton` CSS handles.

## [0.1.0] - 2019-07-01

### Added

- Allow `rich-text` and `flex-layout` blocks on drawer.

## [0.0.6] - 2019-06-07

### Fixed

- Fix typo on tachyons class.
- Fix width of drawer.

## [0.0.5] - 2019-05-25

### Fixed

- Prevent scroll from locking when the Drawer is unmounted without being closed.
- Add scroll to drawer element.
- Locks scroll on iOS

## [0.0.4] - 2019-05-22

### Added

- Added category-menu to interfaces.json

## [0.0.3] - 2019-05-03

## [0.0.2] - 2019-05-02

## [0.0.1] - 2019-04-26
