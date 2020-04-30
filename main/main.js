let comment = document.querySelectorAll(".no-outline"); //input
let commentList = document.querySelectorAll(".comments-list");
let form = document.querySelectorAll(".comments-form");

function handleSubmit(e) {
  e.preventDefault();
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", handleSubmit);
}

//엔터 시 댓글입력
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

//버튼 활성화
let btn = document.querySelectorAll(".coBtn");

for (let i = 0; i < btn.length; i++) {
  comment[i].addEventListener("keydown", function () {
    if (comment[i].value !== "") {
      btn[i].classList.add("activeBtn");
    } else {
      btn[i].classList.remove("activeBtn");
    }
  });
}

//클릭 시 버튼 입력
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    let createComment = document.createElement("li");
    let commentId = document.querySelector(".comment-id").innerHTML;

    createComment;
    createComment.className = "new";

    let comment_text = comment[i].value;

    createComment.innerHTML = `${commentId}   ${comment_text}`;

    commentList[i].appendChild(createComment);
    comment[i].value = "";
  });
}
