import { useRef } from "react";
const Form = () => {
  // Create a Ref object
  const inputRef = useRef(null);

  //Event handler for form submission(onSubmit event)
  const handleSubmit = (e) => {
    e.preventDefault();
    // We can read/write Refs in a Event handlers and Effects
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <div className="px-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-gray-100 py-[2rem] px-[1rem] mt-[40px] block mx-auto w-full md:w-[750px]"
      >
        <div className="mx-auto">
          <input
            ref={inputRef}
            type="text"
            placeholder="Github username"
            className="w-full md:w-[500px] p-4 md:mr-4 mx-auto"
          />
          <button className="p-4 w-full md:w-[200px] bg-purple-900 rounded-lg text-white font-bold mt-[20px] md:mt-0 md:ml-0">
            Add Github Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
