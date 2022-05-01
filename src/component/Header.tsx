import React from "react";

export default function Header() {
    return (
        <header>
            <h1 className="heading"> My ToDo Lists</h1>
            <div className="add-task">
                <input type="text" placeholder="Create new task" className="input-task" />
                <button className=" btn btn-add">Add</button>
            </div>
        </header>
    )
}