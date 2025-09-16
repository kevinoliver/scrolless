//
//  ViewController.swift
//  Scolless
//
//  Created by Kevin Oliver on 9/21/23.
//

import Cocoa
import SafariServices
import WebKit

let extensionBundleIdentifier = "com.lenoxsoftware.Scolless.Extension"

class ViewController: NSViewController, WKNavigationDelegate, WKScriptMessageHandler {

    @IBOutlet var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        self.webView.navigationDelegate = self

        self.webView.configuration.userContentController.add(self, name: "controller")

        self.webView.loadFileURL(Bundle.main.url(forResource: "Main", withExtension: "html")!, allowingReadAccessTo: Bundle.main.resourceURL!)
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            guard let state = state, error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }

            DispatchQueue.main.async {
                webView.evaluateJavaScript("show(\(state.isEnabled))")
            }
        }
    }

    // Intercept navigations and open external links in the default browser
    func webView(_ webView: WKWebView,
                 decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {

        guard let url = navigationAction.request.url else {
            decisionHandler(.allow)
            return
        }

        // Allow local file navigation to proceed inside the WKWebView
        if url.isFileURL {
            decisionHandler(.allow)
            return
        }

        // For any non-file URL, open with the system default browser and cancel WebView navigation
        NSWorkspace.shared.open(url)
        decisionHandler(.cancel)
    }

    // Handle target="_blank" / window.open by opening in the default browser
    func webView(_ webView: WKWebView,
                 createWebViewWith configuration: WKWebViewConfiguration,
                 for navigationAction: WKNavigationAction,
                 windowFeatures: WKWindowFeatures) -> WKWebView? {

        if let url = navigationAction.request.url, !url.isFileURL {
            NSWorkspace.shared.open(url)
            return nil
        }

        // Returning nil indicates we are not creating a new WKWebView. If it's a file URL, let the current webView handle it.
        return nil
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if (message.body as! String != "open-preferences") {
            return;
        }

        SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { error in
            DispatchQueue.main.async {
                NSApplication.shared.terminate(nil)
            }
        }
    }

}
