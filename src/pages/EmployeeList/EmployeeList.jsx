import {useAtom } from 'jotai';
import { employeesAtom } from '../../store';
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import './EmployeeList.css'
import Select from 'react-select';
import { useState } from 'react';
import { paginationLimit } from '../../data/states';
import { Link } from 'react-router-dom';


function EmployeeList(){
    
const [employees] = useAtom(employeesAtom);

const [selectedLimit, setSelectedLimit] = useState({value:10});
//Création des données du Grid
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

/*useEffect(() => {
    let limit = selectedLimit.value;
    console.log(limit)
    let grid={};
    grid = new Grid({
        columns: ['First Name', 'Last Name','Start Date','Departement','Date of Birth','Street','City', 'State', 'Zip Code'],
        search: true,
        sort: true,
        pagination: {
            limit: limit,
            resetPageOnUpdate : true
          },
        data : data
      });
     
      document.getElementById("listEmp").innerHTML="";
      console.log(grid);
      grid.render(document.getElementById('listEmp'));
    //console.log(selectedLimit.value)
  },[selectedLimit]);*/
  

    return(
        <>
            <h1>Current Employees</h1>
            <div id="pagination-search">
            <div id="select-pagination">
                <label>show</label>
                <Select
                            defaultValue={selectedLimit.value}
                            onChange={setSelectedLimit}
                            options={paginationLimit}
                />
            </div>
            </div>
               
            <div id="listEmp">
                <Grid 
                columns= { ['First Name', 'Last Name','Start Date','Departement','Date of Birth','Street','City', 'State', 'Zip Code']}
                search = {true}
                sort = {true}
                pagination = {{
                    limit: selectedLimit.value,
                    resetPageOnUpdate : true
                    }}
                data = {data}
                />
            </div>
            <Link to="/">Home</Link>
        </>
    )
}
export default EmployeeList;