import axios from "axios";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import FullComment from "../components/FullComment";

const Discussion = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => setComments(data.slice(0, 4)))
      .catch((error) => console.log(error));

    //! getComments();
  }, []);

  // // async function getComments() {
  // const getComments = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     setComments(response.data.slice(0, 4));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="w-full h-scree flex flex-col items-center m-5 font-body gap-y-2">
      <section className="flex flex-wrap justify-between items-center  p-2.5 border border-solid border-gray-300 rounded-md">
        {comments ? (
          comments.map((c) => (
            <Comment key={c.id} name={c.name} email={c.email} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <FullComment />
      <AddComment />
    </main>
  );
};

export default Discussion;
