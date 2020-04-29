let comment = document.querySelectorAll(".no-outline"); //input
let commentList = document.querySelectorAll(".comments-list");

for (let i = 0; i < comment.length; i++) {
  comment[i].addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let createComment = document.createElement("li");
      let commentId = document.querySelector(".comment-id").innerHTML;

      createComment;
      createComment.className = "new";

      let comment_text = comment[i].value;

      createComment.innerHTML = `${commentId}   ${comment_text}`;

      commentList[i].appendChild(createComment);
      comment[i].value = "";
    }
  });
}
