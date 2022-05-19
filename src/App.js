import './style/app.css';
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import Footer from './component/Footer'
import Tasks from './component/Tasks'
import Delete from './component/Delete'
import { useState } from "react"
import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';

function App() {

  //criou um state para ser atualizado através do método taskInfoMethod
  const [taskInfo, taskInfoMethod] = useState('');
  const [taskList, taskListupdate] = useState([
    {
      id: 0,
      name: 'Feed dog'
    },
    {
      id: 1,
      name: 'Buy food'
    },

    {
      id: 2,
      name: 'Buy food'
    }
  ]);

  const submitted = (e) => {
    e.preventDefault()

    let identification = taskList.length
    let newTask = ''

    if (taskInfo == '') {
      window.alert('Type something!')
    } else {

      newTask = {
        id: identification + 1,
        name: taskInfo
      }
      taskListupdate([...taskList, newTask]);
    }
    console.log(taskList)
    document.getElementById("inputText").value = ''
    taskInfoMethod('')
  }


  const cleanList = function cleanList() {
    taskListupdate([])
  }

  const check = function checkItem(checked) {
    const checkedItem = taskList.filter(function (item) {
      return item.id == checked
    })

    let selector = checkedItem[0].id.toString()
    let itemChecked = document.querySelector(`p.number${selector}`)
    let itemSelected = document.getElementById(`${selector}`)

    /* - Selecionando o elemento conforme ID e verificando se o input check, esta checkado ou não pois é boleano e pode ser usado em clausula IF, decorando texto de acordo com resultado
    - No selecionados "itemChecked" acima, tive que por o texto "number" na class pois o CSS3 não deixa por numeros como classes, elas tem que começar com algum texto 
     */

    if (itemSelected.checked) {
      itemChecked.style.textDecoration = "line-through"
      document.getElementById(`name${selector}`).classList.add("checkedColor")

    } else {
      itemChecked.style.textDecoration = "none"
      document.getElementById(`name${selector}`).classList.remove("checkedColor")
    }
  }


  return (
    <div className="mainApp">
      <Header />
      {/*       a prop abaixo esta recebendo o método que atualiza o state taskInfo
 */}      <TaskInput typed={taskInfoMethod} onsubmitText={submitted} key='5' />

      {
        taskList.map(item => <Tasks name={item.name} id={item.id} checked={check} />)
      }
      <Delete delete={cleanList} />
      <Footer />
    </div>
  );
}

export default App;


/* 

-- Add Header 
-- input box
-- Add index to item
-- Add item
-- Show list of items
Check bug continue adding even without text on input box
-- Click finished item 
Delete item 
-- Clear list
-- Add footer 

*/



