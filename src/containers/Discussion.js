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
    setFullComment(comment);
    setCommentId(comment.id);
  };

  return (
    <main className="w-2/3 flex flex-col items-center p-5 font-body gap-y-10">
      <section className="flex flex-wrap justify-between items-center p-2.5 border border-solid border-gray-300 rounded-md">
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
      <section className="w-full flex flex-col justify-center items-center xl:flex-row xl:justify-around gap-5">
        <FullComment fullComment={fullComment} commentId={commentId} />
        <AddComment />
      </section>
    </main>
  );
};

export default Discussion;
