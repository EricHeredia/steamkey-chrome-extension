const findKeyRE = /(([A-Z]|[0-9]){5}-){2}([A-Z]|[0-9]){5}/g

if (document.body.innerHTML.match(findKeyRE) != null) {
  const match = document.body.innerHTML.match(findKeyRE)

  document.head.innerHTML = ''

  document.body.innerHTML = ''

  document.body.innerHTML = '<a style="color: #d80416"href=https://store.steampowered.com/account/registerkey?key='
                            +match[match.length-1]+
                            ' target="_blank"><li style="display: inline-block; font-size: 35px; font-weight: bold">'
                            +'TRY MOST RECENT KEY'+
                            '</li></a></br>'

  match.forEach((key) => {
    document.body.innerHTML += 
    '<a href=https://store.steampowered.com/account/registerkey?key='
    +key+
    ' target="_blank"><li style="display: inline-block; font-size: 20px; font-weight: bold">'
    +key+
    '</li></a></br>'
  })
}