import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postComment } from "../services/CRUDCommentService";

const AddComment = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const postCommentHandler = async (comment) => {
    try {
      await postComment({ ...comment, postId: 10 });
      navigate("/");
      toast.success("Comment Added :)");
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-96 p-2.5 border border-solid border-gray-300 rounded-md">
      <div className="flex flex-col justify-between items-center bg-blue-100 p-3.5 text-blue-600 rounded-md w-full text-center gap-y-2.5">
        <div className="w-full flex justify-between items-center">
          <label className="font-bold">Name</label>
          <input
            type="text"
            className="border border-solid border-gray-300 rounded-md py-1 px-2 outline-none"
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <label className="font-bold">Email</label>
          <input
            type="email"
            className="border border-solid border-gray-300 rounded-md py-1 px-2 outline-none"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <label className="font-bold">Body</label>
          <textarea
            className="w-[266px] border border-solid border-gray-300 rounded-md py-1 px-2 outline-none"
            placeholder="comment text.."
            name="body"
            onChange={changeHandler}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={() => postCommentHandler(comment)}
          className="bg-blue-600 text-blue-50 mt-2.5 py-1.5 px-3.5 rounded-md"
        >
          Add New Comment
        </button>
      </div>
    </section>
  );
};

export default AddComment;
