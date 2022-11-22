const AddComment = () => {
  return (
    <section className="w-1/2 p-2.5 border border-solid border-gray-300 rounded-md">
      <div className="flex flex-col justify-between items-center bg-blue-100 p-3.5 text-blue-600 rounded-md w-full text-center gap-y-2.5">
        <div className="w-full flex justify-between items-center">
          <label>name</label>
          <input
            type="text"
            className="border border-solid border-gray-300 rounded-md py-1 px-2 outline-none"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <label>email</label>
          <input
            type="email"
            className="border border-solid border-gray-300 rounded-md py-1 px-2 outline-none"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <label>body</label>
          <textarea
            className="border border-solid border-gray-300 rounded-md py-1 px-2 outline-none"
            placeholder="comment text.."
          ></textarea>
        </div>
        <button className="bg-blue-600 text-blue-50 py-1.5 px-3.5 rounded-md">
          Add
        </button>
      </div>
    </section>
  );
};

export default AddComment;
