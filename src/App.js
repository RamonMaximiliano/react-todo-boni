import './style/app.css';
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import Footer from './component/Footer'
import Tasks from './component/Tasks'
import Delete from './component/Delete'
import { useState } from "react"

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

    if (taskInfo == ''){
      window.alert('Type something!')
    } else {

      newTask = {
        id: identification,
        name: taskInfo
      }
       taskListupdate([...taskList, newTask]);
     }
     console.log(taskList)
     document.getElementById("inputText").value = ''
     taskInfoMethod('')
 }

  return (
    <div className="mainApp">
      <Header />
      {/*       a prop abaixo esta recebendo o método que atualiza o state taskInfo
 */}      <TaskInput typed={taskInfoMethod} onsubmitText={submitted} key='5'/>

      {
        taskList.map(item => <Tasks name={item.name} id={item.id} />)
      }
      <Delete/>
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
Click finished item 
Delete item 
Clear list
-- Add footer 
*/



