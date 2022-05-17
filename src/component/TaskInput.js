import { useState } from "react"

function TaskInput() {
    const [task, setTask] = useState('')

    const submitted = (e) => {
        e.preventDefault()

        console.log(e)
        console.log(task)


/*         quando der o submitted, jogar a task finalizada para a lista de tasks
        limpar o state para poder escrever a nova task
 */

    }

    return (
        /* o onSubmit abaixo esta trigando a function submitted, que vai submeter a task finalizada e setar de novo o state para zero */
        <form onSubmit={submitted}>
            {/*  o onChange do input abaixo esta setando o state da task como o que estiver sendo escrito  */}
            <input type="text" placeHolder="+ Adicione uma tarefa" className="taskinput" onChange={e => setTask(e.target.value)}></input>
        </form>
    );
}

export default TaskInput