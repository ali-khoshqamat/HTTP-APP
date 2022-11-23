import axios from "axios";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import FullComment from "../components/FullComment";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [commentId, setCommentId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then(({ data }) => setComments(data))
      .catch((error) => console.log(error));
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
              onClick={() => setCommentId(c.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section className="w-full flex flex-col justify-center items-center xl:flex-row xl:justify-around gap-5">
        <FullComment commentId={commentId} setComments={setComments} />
        <AddComment onAddPost={postCommetHandler} />
      </section>
    </main>
  );
};

export default Discussion;
