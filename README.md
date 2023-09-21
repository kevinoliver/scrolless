# scrolless

A Safari browser extension that makes paging down scroll a little less.

## Why

On some sites there are overlays at the top or bottom of the window which cause
paging down to scroll some of the next page's content underneath the overlay.  
I'm looking at you SF Chronicle. 
Then after page down I'd have manually scroll back up a couple lines. 

## Installation

I haven't dealt with packaging. 
Open the extension in Xcode and use `Product > Run` to [launch it](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744471).
Then turn on Developer mode in Safari and then [allow running of unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467).

## Usage

The sites and amount to scroll are hard-coded in `content.js` and `manifest.json`.

## Attribution

The [Page down button](https://icons8.com/icon/WpcZH0ZKKAkr/page-down-button) is by [Icons8](https://icons8.com).
