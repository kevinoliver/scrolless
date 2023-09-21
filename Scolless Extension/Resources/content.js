// possible solution which srolls only once:
// https://stackoverflow.com/questions/69257481/can-i-change-the-amount-that-pagedown-pageup-scrolls-the-page-to-avoid-some-con

// ko todo: make this a hashmap
var delta = 0;
var hostname = window.location.hostname;
if (hostname === "www.sfchronicle.com") {
   delta = 90;
} else if (hostname === "theathletic.com") {
   delta = 30;
}
console.log("Scrolless delta set to " + delta + " for hostname " + hostname);

if (delta != 0) {
    // listens for keyboard events and modifies the browser's scrolling behavior.
    window.addEventListener("keydown", function(event) {
        if (event.key === "PageDown" || (event.key === " " && !event.getModifierState("Shift"))) {
            console.log("scrolling down less for '" + event.key + "'");
            // Scroll the page back up
            window.scrollBy(0, -delta);
        } else if (event.key === "PageUp" || (event.key === " " && event.getModifierState("Shift"))) {
            console.log("scrolling up less for '" + event.key + "'");
            // Scroll the page back down
            window.scrollBy(0, delta);
        }
    });
}
