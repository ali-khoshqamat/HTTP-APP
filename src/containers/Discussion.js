import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import FullComment from "../components/FullComment";

const Discussion = () => {
  return (
    <main className="w-full h-scree flex flex-col items-center m-5 font-body gap-y-2">
      <section className="flex justify-between items-center w-1/2 p-2.5 border border-solid border-gray-300 rounded-md">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </section>
      <FullComment />
      <AddComment />
    </main>
  );
};

export default Discussion;
