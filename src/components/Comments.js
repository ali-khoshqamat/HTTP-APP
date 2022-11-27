import { useEffect, useState } from "react";
import Comment from "./Comment";
import { toast } from "react-toastify";
import { getAllComments } from "../services/CRUDCommentService";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllComments()
      .then(({ data }) => setComments(data))
      .catch((error) => setError(true));
  }, []);

  const renderComment = () => {
    return error
      ? toast.error("there is an Error!") && <p>fetchig data failed!</p>
      : comments && !error
      ? comments.map((c) => (
          <Link to={`/comment/${c.id}`} key={c.id}>
            <Comment name={c.name} email={c.email} />
          </Link>
        ))
      : toast.success("Comments is Loaded!") && <p>Loading...</p>;
  };

  return (
    <main className="flex flex-col items-center font-body gap-y-10">
      <section className="flex flex-wrap justify-between items-center p-2.5 border border-solid border-gray-300 rounded-md">
        {renderComment()}
      </section>
    </main>
  );
};

export default Comments;
