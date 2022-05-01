import React from "react";

export default function ListToDo() {
    return (
        <>
            <div className="list-tasks">
                <ul>
                    <li className="task-item-view">
                        <label htmlFor="" className="task-content">Todo</label>
                        <i className="fas fa-trash delete-btn"></i>
                    </li>
                </ul>
            </div>
        </>
    )
}