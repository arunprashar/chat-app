import { TbSend } from "react-icons/tb";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input 
          type="text" 
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10" 
          placeholder="Send a message" 
        />
        <button 
          type="submit" 
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-white"
        >
          <TbSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput;
