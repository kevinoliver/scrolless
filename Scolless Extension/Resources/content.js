// listens for keyboard events and modifies the browser's scrolling behavior
// to scroll back up or down after page down or up.

const DEFAULT_DELTA = 0;
const hostnameDeltas = {
    "www.nytimes.com": 55,
    "www.quantamagazine.org": 90,
    "www.sfchronicle.com": 90,
}
const hostname = window.location.hostname;
const delta = hostnameDeltas[hostname] || DEFAULT_DELTA;

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
