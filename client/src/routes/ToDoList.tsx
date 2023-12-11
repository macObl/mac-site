import React from "react";

function ToDoList() {
  const list: string[] = [];

  const handleMouseEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = document.getElementById("inpt") as HTMLInputElement;
    const ul = document.getElementById("list");
    const item = document.createElement("li");
    const checkbox = document.createElement("input") as HTMLInputElement;

    checkbox.type = "checkbox";
    checkbox.onclick = clickHandler(checkbox);
    checkbox.checked = false;
    checkbox.className = "ml-2";

    if (input.value && !list.includes(input.value)) {
      list.push(input.value);
      checkbox.id = input.value;
      item.id = input.value;
      const text = document.createTextNode(input.value);
      item.appendChild(text);
      item.appendChild(checkbox);
      ul?.appendChild(item);
      input.value = "";
    }

    console.log("Submit", list);
  };

  const clickHandler = (checkbox: HTMLInputElement) => {
    return () => {
      const li = document.getElementById(checkbox.id);
      for (let i = 0; i < list.length; i++) {
        if (checkbox.id === list[i]) {
          list.splice(list.indexOf(list[i]), 1);
          li?.parentNode?.removeChild(li);
          console.log("List: ", list.indexOf(list[i]));
        }
      }
    };
  };

  console.log(list[0]);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-t">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-lg pb-5">To Do List</h1>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading"
          placeholder="List Item"
          id="inpt"
        />
        <button
          className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded"
          onClick={handleMouseEvent}
        >
          Submit
        </button>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ul id="list"></ul>
      </div>
    </div>
  );
}

export default ToDoList;
