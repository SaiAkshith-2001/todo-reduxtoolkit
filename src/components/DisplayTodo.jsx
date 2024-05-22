import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo } from "../feature/todoSlice";
import { useDispatch } from "react-redux";
export default function DisplayTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-3xl text-center my-8">Todo</h2>
      <ul className="list-none">
        {todos?.map((todo) => (
          <li
            className="flex justify-between bg-gray-400 m-2 p-2 rounded-md text-white text-xl text-center"
            key={todo.id}
          >
            <div className="m-auto">{todo.text} </div>
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
              className="bg-red-600 hover:bg-red-700 p-2 m-2 rounded-md "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
