// Register here https://store.steampowered.com/account/registerkey

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      const match = document.body.innerHTML.match(/(([A-Z]|[0-9]){5}-){2}([A-Z]|[0-9]){5}/g)
      //const lastIndex = match[match.length-1]


      chrome.tabs.executeScript({
        file: 'getKeys.js'
      });
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": lastIndex})
    }
  }
)

var allKeys = document.body.innerHTML.match(/(([A-Z]|[0-9]){5}-){2}([A-Z]|[0-9]){5}/g)

if (document.body.innerHTML.match(/(([A-Z]|[0-9]){5}-){2}([A-Z]|[0-9]){5}/g) != null) {
  console.clear()
  const match = document.body.innerHTML.match(/(([A-Z]|[0-9]){5}-){2}([A-Z]|[0-9]){5}/g)
  const lastIndex = match[match.length-1]

  chrome.runtime.sendMessage({"message": "key_found", "amount": match.length})

  match.forEach((key) => {
    console.log(key)
  })
  //lastIndex.select()
  //lastIndex.execCommand("copy")
} else {
  chrome.runtime.sendMessage({"message": "key_found", "amount": ""})
  console.clear()
  console.log('No Steam keys on page.')
}