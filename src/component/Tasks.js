import { useState } from "react"

function Tasks(props) {
    return (
        <div className="singletask" >
{/*             passando o props id para poder excluir este item específico depois na função check
 */}            <input type="checkbox" id={props.id} onClick={() => props.checked(props.id)}>
            </input>
            <div className="paragraph">
                <p>{props.name}</p>
                <p>{props.id}</p>
            </div>
        </div>
    );
}

export default Tasks


