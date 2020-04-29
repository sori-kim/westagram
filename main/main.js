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

const btn = document.querySelectorAll("button");
for(let i =0; i < btn.length; i++ ){
    btn[i].addEventListener('click', function(e){
        if (comment.value !== "") {
          classList.add("");
        } else {
          login_btn.classList.remove("");
        }
      })

  


