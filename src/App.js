import './style/app.css';
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import Footer from './component/Footer'
import Tasks from './component/Tasks'
import { useState } from "react"

function App() {

  //criou um state para ser atualizado através do método taskInfoMethod
  const [taskInfo, taskInfoMethod] = useState({});
  const [taskList, taskListupdate] = useState([
    {
      id: 1,
      name: 'Feed dog'
    },
    {
      id: 2,
      name: 'Buy food'
    }
  ]);

  console.log(taskInfo)
  console.log(taskList)



  return (
    <div className="mainApp">
      <Header />
      {/*       a prop abaixo esta recebendo o método que atualiza o state taskInfo
 */}      <TaskInput typed={taskInfoMethod} />

      {
        taskList.map(item => <Tasks name={item.name} id={item.id} />)
      }
      <Footer />
    </div>
  );
}

export default App;



/* 

-- Add Header 
-- input box
Add item
Show list of items
Click finished item 
Delete item 
Clear list
-- Add footer 


 */



