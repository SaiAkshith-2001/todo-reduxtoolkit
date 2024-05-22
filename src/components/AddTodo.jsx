import React, { useState, useRef, forwardRef } from "react";
import { addTodo } from "../feature/todoSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const AddTodo = forwardRef(function AddTodo({ ...props }, ref) {
  const [input, setInput] = useState("");
  const EmptyWarnModal = useRef();
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() === "") {
      EmptyWarnModal.current.open();
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <div>
      <Modal ref={EmptyWarnModal} buttonCaption="Okay">
        <h2 className="text-2xl font-semibold text-slate-950 my-4">
          Invalid input!
        </h2>
        <p className="text-lg text-slate-950 mb-4">
          Please enter any valid character!
        </p>
      </Modal>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          className="flex justify-center bg-zinc-500 m-auto mt-8 p-2 rounded-md w-[75%]  text-white text-xl "
          type="text"
          placeholder="add you note.."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button
          className="flex justify-center bg-green-300 hover:bg-green-500 p-2 m-auto mt-8 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
});
export default AddTodo;
