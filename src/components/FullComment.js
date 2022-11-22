import axios from "axios";
import { useEffect, useState } from "react";

const FullComment = ({ fullComment, commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    commentId &&
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(({ data }) => setComment(data))
        .catch((error) => console.log(error));
  }, [commentId]);

  let commentDetail = (
    <p className="font-bold text-blue-600 text-lg">Please select a comment!</p>
  );
  commentId &&
    (commentDetail = (
      <p className="font-bold text-blue-600 text-lg">Loading...</p>
    ));
  comment &&
    (commentDetail = (
      <section className="w-96 p-2.5 border border-solid border-gray-300 rounded-md">
        <div className="flex flex-col justify-between bg-blue-100 py-1.5 px-3.5 text-blue-600 rounded-md w-full gap-y-2.5">
          <div>
            <p className="font-bold">Name:</p>
            <span className="text-sm">{fullComment.name}</span>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <span className="text-sm">{fullComment.email}</span>
          </div>
          <div>
            <p className="font-bold">Body:</p>
            <span className="text-sm">{fullComment.body}</span>
          </div>
        </div>
      </section>
    ));

  return commentDetail;

  // if (!fullComment)
  //   return (
  //     <p className="font-bold text-blue-600 text-lg">
  //       Please select a comment!
  //     </p>
  //   );
  // return (
  //   <section className="w-96 p-2.5 border border-solid border-gray-300 rounded-md">
  //     <div className="flex flex-col justify-between bg-blue-100 py-1.5 px-3.5 text-blue-600 rounded-md w-full gap-y-2.5">
  //       <div>
  //         <p className="font-bold">Name:</p>
  //         <span className="text-sm">{fullComment.name}</span>
  //       </div>
  //       <div>
  //         <p className="font-bold">Email:</p>
  //         <span className="text-sm">{fullComment.email}</span>
  //       </div>
  //       <div>
  //         <p className="font-bold">Body:</p>
  //         <span className="text-sm">{fullComment.body}</span>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default FullComment;
