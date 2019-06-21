//document.getElementById('show-keys').innerHTML += 'HELLO WORLD'
chrome.tabs.executeScript({
  file: 'getKeys.js'
});
