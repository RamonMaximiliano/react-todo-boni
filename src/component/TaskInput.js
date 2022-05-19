import { useState } from "react"

function TaskInput(props) {
    const [task, setTask] = useState('')

     props.typed(task)  


    return (
        /* o onSubmit abaixo esta trigando a function submitted, que vai submeter a task finalizada e setar de novo o state para zero */
        <form onSubmit={props.onsubmitText}>
            {/*  o onChange do input abaixo esta setando o state da task como o que estiver sendo escrito  */}
            <input type="text" placeholder="+ Adicione uma tarefa" className="taskinput" onChange={e => setTask(e.target.value)} id="inputText"></input>
        </form>
    );


}

export default TaskInput