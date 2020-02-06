var posty = window.fullPost
var blogShortCuts = document.getElementById('blogShortCuts')
blogShortCuts.innerHTML = ''

// post list: title + body (100 characters) + element with posts authors name

for (var i in posty) {
  shortBlog()
}
function shortBlog () {
  var onePost = posty[i]
  var postShortList = 'TITLE: ' + onePost.title + 'BODY: ' + onePost.body.slice(0, 100) + ' AUTHOR - NICKNAME: ' + onePost.author.username
  console.log(postShortList)
  var onePostShort = document.createElement('div')
  onePostShort.classList.add('list-group-item')
  onePostShort.innerHTML = '<h4><strong class="post-title">' + onePost.title + '</strong></h4>' +
    '<div class="post-short-body">' + onePost.body.slice(0, 100) + '...' + '</div>' +
    '<div class="post-short-body"> added by: ' + onePost.author.username + '</div>'
  blogShortCuts.appendChild(onePostShort)
}
