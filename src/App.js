import './style/app.css';
import Header from './component/Header'
import TaskInput from './component/TaskInput'
import Footer from './component/Footer'
import { useState } from "react"

function App() {

  //criou um state para ser atualizado através do método taskInfoMethod
  const [taskInfo, taskInfoMethod] = useState({});

  console.log(taskInfo)
  

  return (
    <div className="mainApp">
      <Header/>
{/*       a prop abaixo esta recebendo o método que atualiza o state taskInfo
 */}      <TaskInput typed={taskInfoMethod}/>
      <Footer/>
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



