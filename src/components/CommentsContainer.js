import React from "react";

const commmentsData = [
  {
    //n level nesting in replies
    name: " gunjan",
    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
    replies: [
      {
        name: " gunjan",
        text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
        replies: [
          {
            name: " gunjan",
            text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
            replies: [
              {
                name: " gunjan",
                text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
                replies: [
                  {
                    name: " gunjan",
                    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: " xyz",
    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
    replies: [],
  },
  {
    name: " abc",
    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
    replies: [],
  },
  {
    name: " abc",
    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
    replies: [],
  },
  {
    name: " abc",
    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
    replies: [],
  },
  {
    name: " abc",
    text: "lorem isjsbkjbdsjhfck  kbjsbkbfks",
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://freesvg.org/img/abstract-user-flat-3.png"
        alt="user-image"
      />
      <div className=" px-3 ">
        <p className="font-bold">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  //better not to use index as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="ml-5 pl-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl"> Comments : </h1>
      <CommentsList comments={commmentsData} />
    </div>
  );
};

export default CommentsContainer;
