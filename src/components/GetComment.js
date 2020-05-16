import React from "react";

function GetComment(user, content, id) {
  return (
    <li className="new" key={id}>
      {user} {content}
    </li>
  );
}

//   const comments = [
//     {
//       user: "x.xiaor",
//       content: "배고파",
//     },
//     {
//       user: "x.xiaori",
//       content: "뭐먹지",
//     },
//     {
//       user: "sewoon_j",
//       content: "화이팅",
//     },
//   ];

export default GetComment;
