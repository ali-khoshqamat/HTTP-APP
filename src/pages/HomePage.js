import Comments from "../components/Comments";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold mb-5">Comments</h2>
      <Comments />
    </div>
  );
};

export default HomePage;
