const comment = document.querySelector(".no-outline");
const comments = document.querySelector(".comments");
const commentList = document.createElement("ul");

function handleKey(e) {
  const comment_text = comment.value;
  if (e.key === "Enter") {
    const newComment = document.createElement("li");
    newComment.innerHTML = comment_text;

    commentList.appendChild(newComment);
    comments.appendChild(commentList);
    comment.value = "";
  }
}

comment.addEventListener("keyup", handleKey);
