# KeyboardEvent-App
The KeyboardEvent.keyCode read-only property represents a system and implementation dependent numerical code identifying the unmodified value of the pressed key.The value of keypress event is different between browsers.The value of key events which are caused by pressing or releasing printable keys in standard position is not compatible between browsers.
IE just exposes the native virtual keycode value as KeyboardEvent.keyCode.
Google Chrome, Chromium and Safari must decide the value from the input character. If the inputting character can be inputted with the US keyboard layout, they use the keyCode value on the US keyboard layout.
