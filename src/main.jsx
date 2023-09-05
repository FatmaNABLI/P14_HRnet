import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './index.css'
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';


//const textAtom = atom('hello')
//const textLenAtom = atom((get) => get(textAtom).length)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={myStore}> */}
      <Routes>
        <Route path="/" element ={<CreateEmployee/>} />
        <Route path="/employeeList" element={<EmployeeList/>} />
      </Routes>
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
)
