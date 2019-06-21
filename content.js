chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      chrome.tabs.executeScript({
        file: 'getKeys.js'
      });
    }
  }
)

const findKeyRE = /(([A-Z]|[0-9]){5}-){2}([A-Z]|[0-9]){5}/g

if (document.body.innerHTML.match(findKeyRE) != null) {
  console.clear()
  const match = document.body.innerHTML.match(findKeyRE)
  const lastIndex = match[match.length-1]

  chrome.runtime.sendMessage({"message": "key_found", "amount": match.length})

  match.forEach((key) => {
    console.log(key)
  })
} else {
  chrome.runtime.sendMessage({"message": "key_found", "amount": ""})
  console.clear()
  console.log('No Steam keys on page.')
}