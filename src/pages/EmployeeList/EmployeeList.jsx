import {atom, useAtom } from 'jotai';
import { employeesAtom } from '../../store';
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import './EmployeeList.css'
import { useEffect } from 'react';

function EmployeeList(){
    
const [employees] = useAtom(employeesAtom);
//const empList = atom((get) => get(employeesAtom))
console.log("Page Liste Employees : ")
console.log(employees);
const data = [];

for (const emp of employees) {
    let dataEmp= [];
    dataEmp[0] = emp.firstName;
    dataEmp[1] = emp.lastName;
    dataEmp[2] = emp.startDate;
    dataEmp[3] = emp.dept;
    dataEmp[4] = emp.birthDate;
    dataEmp[5] = emp.street;
    dataEmp[6] = emp.city;
    dataEmp[7] = emp.state;
    dataEmp[8] = emp.code;




    dataEmp[2] = emp.state;
    data.push(dataEmp);
}
console.log(data);
useEffect(() => {
   const grid = new Grid({
        columns: ['First Name', 'Last Name','Start Date','Departement','Date of Birth','Street','City', 'State', 'Zip Code'],
        search: true,
        sort: true,
        pagination: {
            limit: 10
          },
        // data: [
        //   ['John', 'john@example.com', '(353) 01 222 3333'],
        //   ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
        // ]
        data : data
      });
      grid.render(document.getElementById('listEmp'));
  });

    return(
        <>
            <h1>Liste des employés</h1>
            <div id="listEmp">

            </div>
                {/* {employees.map(element => {
                    <h2 key={element.firstName}>{element.firstName}</h2>
                    
                })} */}
        </>
    )
}
export default EmployeeList;