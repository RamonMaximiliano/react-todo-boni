import { useState } from "react"

function Tasks(props) {
    return (
        <div className="singletask" >
            <input type="checkbox" id={props.id}>
            </input>
            <div className="paragraph">
                <p>{props.name}</p>
                <p>{props.id}</p>
            </div>
        </div>
    );
}

export default Tasks


