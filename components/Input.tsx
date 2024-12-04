const Input = () => {
  return (
    <form className="flex justify-center mt-5 mb-16">
      <input
        type="text"
        className="h-9 w-2/6 rounded-l-lg text-sm px-2 focus:outline-none text-black"
        placeholder="Search for any IP address or domain"
        required
      />
      <button className="bg-black text-white w-16 rounded-r-lg">{">"}</button>
    </form>
  );
};

export default Input;
