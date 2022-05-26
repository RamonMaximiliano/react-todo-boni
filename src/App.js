import './style/app.css';
import About from './component/About'
import App2 from './component/App2'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App2/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


/* 

-- Add Header 
-- input box
-- Add index to item
-- Add item
-- Show list of items
-- Check bug not a number
Check bug continue adding even without text on input box
Check the bug of unchecking the items as you go deleting them (conforme pesquisa, o ideal é atualizar o checked no item input, com um state variable)
-- Click finished item 
-- Delete item 
-- Deletando de novo dois items com o mesmo numero, fazer com que index não sejam nunca repetidos igual outra to do list
-- Clear list
-- Add footer 



      <Link to={"/details"}>Something</Link>
<BrowserRouter>
      <Routes>
        <Route path="/details" element={<Footer/>}/>
      </Routes>
</BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="link">
        </div>
      </BrowserRouter>



*/



