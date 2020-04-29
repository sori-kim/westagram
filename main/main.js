let comment = document.querySelectorAll(".no-outline"); //input
let commentList = document.querySelectorAll(".comments-list");
let form = document.querySelectorAll(".comments-form");

function handleSubmit(e) {
  e.preventDefault();
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", handleSubmit);
}

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

let btn = document.getElementsByTagName("button");

for (let i = 0; i < btn.length; i++) {
  let comment_text = comment[i].value;

  btn[i].addEventListener("keypress", function () {
    console.log("hi");
    // if (comment_text !== "") {
    //   btn[i].classList.add("activeBtn");
    // } else {
    //   btn[i].classList.remove("activeBtn");
    // }
  });
}
