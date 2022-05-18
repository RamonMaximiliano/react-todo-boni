import { useState } from "react"

function TaskInput(props) {
    const [task, setTask] = useState('')

     const submitted = (e) => {
        e.preventDefault()

        //recebeu a props typed, que por sua vez no App recebe um método de atualizar o state de taskInfo, e aqui o método typed esta recebedo o state task

        props.typed(task)

     }


    return (
        /* o onSubmit abaixo esta trigando a function submitted, que vai submeter a task finalizada e setar de novo o state para zero */
        <form onSubmit={submitted}>
            {/*  o onChange do input abaixo esta setando o state da task como o que estiver sendo escrito  */}
            <input type="text" placeHolder="+ Adicione uma tarefa" className="taskinput" onChange={e => setTask(e.target.value)} name={task}></input>
        </form>
    );


}

export default TaskInput