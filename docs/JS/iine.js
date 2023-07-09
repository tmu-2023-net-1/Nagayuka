function likeButton(articleId) {
  var likesCount = parseInt(document.getElementById("likes-count-" + articleId).textContent);
  likesCount++;
  document.getElementById("likes-count-" + articleId).textContent = likesCount;
}