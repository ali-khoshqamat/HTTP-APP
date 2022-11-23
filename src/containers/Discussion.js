import axios from "axios";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import FullComment from "../components/FullComment";
import { toast } from "react-toastify";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then(({ data }) => setComments(data))
      // .catch((error) => setError({message: error.message})); // form Back-End
      .catch((error) => setError(true));
  }, []);

  const postCommetHandler = (comment) => {
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 10,
      })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then(({ data }) => setComments(data))
      .catch((error) => console.log(error));
    toast.success("Comment Added :)");
  };

  const renderComment = () => {
    return error
      ? toast.error("there is an Error!") && <p>fetchig data failed!</p>
      : comments && !error
      ? comments.map((c) => (
          <Comment
            key={c.id}
            name={c.name}
            email={c.email}
            onClick={() => setCommentId(c.id)}
          />
        ))
      : toast.success("Comments is Loaded!") && <p>Loading...</p>;
  };

  return (
    <main className="w-2/3 flex flex-col items-center p-5 font-body gap-y-10">
      <section className="flex flex-wrap justify-between items-center p-2.5 border border-solid border-gray-300 rounded-md">
        {renderComment()}
      </section>
      <section className="w-full flex flex-col justify-center items-center xl:flex-row xl:justify-around gap-5">
        <FullComment commentId={commentId} setComments={setComments} />
        <AddComment onAddPost={postCommetHandler} />
      </section>
    </main>
  );
};

export default Discussion;
