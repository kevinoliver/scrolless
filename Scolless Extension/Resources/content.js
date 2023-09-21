//browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//    console.log("Received response: ", response);
//});
//
//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
//});
console.log("Hello from my Scrolless extension!");

// This script listens for keyboard events and modifies the browser's scrolling behavior.
window.addEventListener("keydown", function(event) {
    // ko todo: make sure not shift+space
    if (event.key === "PageDown" || event.key === " ") {
        console.log("scrolling less for '" + event.key + "'");
        // Scroll the page 100 pixels back up
        window.scrollBy(0, -100);
    } else if (event.key === "PageUp") {
        // ko todo: shift+space modifier
        console.log("scrolling less for '" + event.key + "'");
        // Scroll the page 100 pixels back down
        window.scrollBy(0, +100);
    }
});
