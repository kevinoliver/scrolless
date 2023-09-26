// listens for keyboard events and modifies the browser's scrolling behavior
// to scroll back up or down after page down or up.

var delta = 0;
var hostname = window.location.hostname;
if (hostname === "www.sfchronicle.com") {
    delta = 90;
} else if (hostname === "www.nytimes.com") {
    delta = 45;
}

if (delta != 0) {
    console.log("Scrolless delta set to " + delta + " for hostname " + hostname);
    window.addEventListener("keydown", function(event) {
        // a different approach which scrolls only once:
        // https://stackoverflow.com/questions/69257481/can-i-change-the-amount-that-pagedown-pageup-scrolls-the-page-to-avoid-some-con
        if (event.key === "PageDown" || (event.key === " " && !event.getModifierState("Shift"))) {
            window.scrollBy(0, -delta);
        } else if (event.key === "PageUp" || (event.key === " " && event.getModifierState("Shift"))) {
            window.scrollBy(0, delta);
        }
    });
}
