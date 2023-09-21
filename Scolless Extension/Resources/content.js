// console.log("Hello from my Scrolless extension!");

// possible solution which srolls only once:
// https://stackoverflow.com/questions/69257481/can-i-change-the-amount-that-pagedown-pageup-scrolls-the-page-to-avoid-some-con

// ko todo: only enable for some sites and control the scroll amount by site

// listens for keyboard events and modifies the browser's scrolling behavior.
window.addEventListener("keydown", function(event) {
    var delta = 90;
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
