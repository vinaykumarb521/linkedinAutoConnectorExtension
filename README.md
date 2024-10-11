# linkedinAutoConnectorExtension

Directory Structure:

1.Ensure the directory structure looks like this:

linkedin-auto-connect/
├── manifest.json
├── background.js
├── content.js
├── popup.html
└── popup.css


2.  Open Chrome and navigate to chrome://extensions/.
    Turn on Developer mode (toggle in the top right).
    Click on Load unpacked and select the root folder of your extension (linkedin-auto-connect/).
    Test the Extension on LinkedIn:

3.  Go to LinkedIn and perform a search (e.g., search for CEOs in Bangalore).
    Open the extension from the toolbar and click Start (if you have a popup) or the script will start automatically when you visit a LinkedIn page based on the configuration in manifest.json.
