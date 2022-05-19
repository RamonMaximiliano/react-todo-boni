import { useState } from "react"

function Tasks(props) {
    return (
        <div className="singletask" id={`name${props.id}`}>
            {/*             passando o props id para poder excluir este item específico depois na função check
 */}            <input type="checkbox" id={props.id} onClick={() => props.checked(props.id)}>
            </input>
            <div className="paragraph">
                <p className={`number${props.id}`}>{props.name}</p>
                <p className="taskNumber" onClick={() => props.deletesingle(props.id)}>{props.id}</p>
            </div>
        </div>
    );
}

export default Tasks


