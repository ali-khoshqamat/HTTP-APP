import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FullComment = ({ commentId, setComments }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    commentId &&
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then(({ data }) => setComment(data))
        .catch((error) => console.log(error));
  }, [commentId]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then(({ data }) => setComments(data))
      .catch((error) => console.log(error));
    setComment(null);
    toast.error("Comment was Deleted!");
  };

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
            <span className="text-sm">{comment.name}</span>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <span className="text-sm">{comment.email}</span>
          </div>
          <div>
            <p className="font-bold">Body:</p>
            <span className="text-sm">{comment.body}</span>
          </div>
          <button
            onClick={deleteHandler}
            className="w-min self-center py-1.5 px-2.5 m-2 text-red-500 border border-solid border-red-500 rounded-md bg-white"
          >
            Delete
          </button>
        </div>
      </section>
    ));

  return commentDetail;
};

export default FullComment;
