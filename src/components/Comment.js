const Comment = ({ name, email, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-100 w-56 h-36 py-1.5 px-3.5 m-1 cursor-pointer text-blue-600 rounded-md flex flex-col justify-between gap-y-2.5"
    >
      <div>
        <p className="font-bold">Name:</p>
        <span className="text-sm">{name}</span>
      </div>
      <div>
        <p className="font-bold">Email:</p>
        <span className="text-sm">{email}</span>
      </div>
    </div>
  );
};

export default Comment;
