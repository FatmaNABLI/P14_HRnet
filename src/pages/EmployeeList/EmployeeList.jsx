import {useAtom } from 'jotai';
import { employeesAtom } from '../../store';
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import './EmployeeList.css'
import { useEffect } from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { paginationLimit } from '../../data/states';


function EmployeeList(){
    
const [employees] = useAtom(employeesAtom);
//const empList = atom((get) => get(employeesAtom))
console.log("Page Liste Employees : ")
console.log(employees);
const [selectedLimit, setSelectedLimit] = useState({value:1});

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

    data.push(dataEmp);
}
console.log(data);

useEffect(() => {
    let limit = selectedLimit.value;
    console.log(limit)
    let  grid = new Grid({
        columns: ['First Name', 'Last Name','Start Date','Departement','Date of Birth','Street','City', 'State', 'Zip Code'],
        search: true,
        sort: true,
        pagination: {
            limit: limit
          },
        data : data
      });
     
      document.getElementById("listEmp").innerHTML="";
      grid.render(document.getElementById('listEmp'));
    //console.log(selectedLimit.value)
  },[selectedLimit]);

  

    return(
        <>
            <h1>Liste des employés</h1>
                <Select
                        defaultValue={selectedLimit}
                        onChange={setSelectedLimit}
                        options={paginationLimit}
                />
                <div id="listEmp">
            </div>
        </>
    )
}
export default EmployeeList;