import axios from "axios";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import FullComment from "../components/FullComment";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [fullComment, setFullComment] = useState(null);
  const [commentId, setCommentId] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => setComments(data.slice(0, 6)))
      .catch((error) => console.log(error));
  }, []);

  const selectCommentHandler = (comment) => {
    console.log(comment);
    setFullComment(comment);
    setCommentId(comment.id);
  };

  return (
    <main className="w-full h-scree flex flex-col items-center m-5 font-body gap-y-5">
      <section className="flex flex-wrap justify-start items-center p-2.5 border border-solid border-gray-300 rounded-md">
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <FullComment fullComment={fullComment} commentId={commentId} />
      <AddComment />
    </main>
  );
};

export default Discussion;
