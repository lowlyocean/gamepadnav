#GamepadNav
This is a Firefox addon making use of the Gamepad API to allow complete web browser control using a gamepad alone. The intent is to enable navigation to URLs, user-friendly text entry, scrolling, and navigation between HTML elements.
Author's objective is to launch a browser equipped with this addon from Kodi media center running on a Raspberry Pi.

Leverages Chris Dolphin's DaisywheelJS text entry interface as well as mrspeaker's Gamepad-Navigator greasemonkey script

## Build
Install jpm on your particular platform, then from the root project directory, execute: jpm run -b $(which firefox)
