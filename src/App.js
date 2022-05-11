import './style/app.css';
import Header from './component/Header'
import TaskInput from './component/TaskInput'



function App() {
  return (
    <div className="mainApp">
      <Header/>
      <TaskInput/>
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
Add footer 


 */