chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.executeScript({
      file: 'getKeys.js'
    });
    //chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "key_found") {
      chrome.browserAction.setBadgeText({text: request.amount.toString()})
    }
    if (request.message === "open_new_tab") {
      chrome.tabs.create({"url": 'https://store.steampowered.com/account/registerkey?key=' + request.url})
    }
  }
)