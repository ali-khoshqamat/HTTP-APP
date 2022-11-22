const Comment = ({ name, email }) => {
  return (
    <div className="bg-blue-100 w-56 h-36 py-1.5 px-3.5 m-1 text-blue-600 rounded-md ">
      <p className="font-bold">name:</p>
      <span className="text-sm">{name}</span>
      <p className="font-bold">email:</p>
      <span className="text-sm">{email}</span>
    </div>
  );
};

export default Comment;
