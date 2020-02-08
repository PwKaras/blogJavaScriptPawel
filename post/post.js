var firstPost = window.fullPost[0]
var commentsToFirstPost = window.comments
//  post = title + author + full body
// comments list = for each body + author

var placeForFirstPost = document.getElementById('postPlace')
placeForFirstPost.innerHTML = ''

var post = document.createElement('div')
post.classList.add('post-insert')
post.innerHTML = '<h1><div class="post-title">' + firstPost.title + '</div></h1>' + '<div class="post-body">' + firstPost.body + '</div>' + '<h6><div class="post-author">' + firstPost.author.username + '</div></h6>'
placeForFirstPost.appendChild(post)

var commentsPlace = document.getElementById('commentsPlace')
commentsPlace.innerHTML = ''

for (var i in commentsToFirstPost) {
  comentsForFirsPost(commentsPlace, commentsToFirstPost[i])
}

function comentsForFirsPost (commentsPlace,oneComment) {
  var commentsContent = document.createElement('div')
  commentsContent.classList.add('list-group-item')
  commentsContent.innerHTML = '<div class="comment-body">' + oneComment.body + '</div>' + '<h6><div class="post-author">' + oneComment.author.username + '</div></h6>'
  commentsPlace.appendChild(commentsContent)
}
