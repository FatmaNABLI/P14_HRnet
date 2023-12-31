import { useState } from 'react';
import { Link } from 'react-router-dom'
import './CreateEmployee.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import Select from 'react-select';
import { departements, states } from '../data/states';
// import Modal from '../components/Modal/Modal';
import  Modal  from  "react-personalized-modal-by-fatma"
import { useAtom } from 'jotai';
import { employeesAtom } from '../store';
import logo from '../assets/wealthHealthLogo.jpg';



function CreateEmployee(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const [street,setStreet] = useState('');
    const [city,setCity] = useState('');
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDept, setSelectedDept] = useState(null);
    const [code,setCode] = useState(0);   

    /* Modal*/
    const [isOpenSuccess,setIsOpenSuccess]=useState(false);
    const [isOpenError,setIsOpenError]=useState(false);

    // let type ="SUCCESS";
    // let textModal = "Employé ajouté à la liste  avec succès!"
    /*Liste des employés ajoutés */
    const [employees,setEmployees] = useAtom(employeesAtom);
  
    //Ajouter l'employé, afficher  la modal et vider tous les champs
    const saveEmployee =()=>{
        let emp = {};
        console.log(birthDate.getDate()+"/"+birthDate.getMonth()+"/"+birthDate.getFullYear() )
        if (firstName=="" || lastName=="" || startDate =="" || birthDate == "" || street == "" ||city=="" || selectedState == null || selectedDept == null || code == 0){
           console.log(firstName + "," + lastName + "," + startDate + "," + birthDate + "," + street + "," + selectedState + "," + selectedDept + "," +code);
           //console.log(selectedState);
           //type = "ERROR";
           //textModal = "Veuillez remplir tous les champs pour pouvoir ajouter l'employé!"
           setIsOpenError(true);
        }else{
            emp.firstName = firstName;
            emp.lastName = lastName;
            emp.startDate = startDate.getDate()+"/"+startDate.getMonth()+"/"+startDate.getFullYear();
            emp.birthDate = birthDate.getDate()+"/"+birthDate.getMonth()+"/"+birthDate.getFullYear();
            emp.street = street;
            emp.city = city;
            emp.state = selectedState.value;
            emp.dept = selectedDept.value;
            emp.code = code;
            addUSer(emp);         
            setIsOpenSuccess(true);
            clear(); 
        }
       
        
    }

    //Employé ajouté au state global via jotai
    const addUSer=(employee)=>{
        
        //let employee = {lastName : lastName, firstName :firstName, state: selectedState}
        //let emps = employees.map(emp => emp);
        let newEmployees = []
        for (const emp of employees) {
            newEmployees.push(emp);
          }
        newEmployees.push(employee)
        setEmployees(newEmployees);
    }

    const clear = ()=>{
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("street").value = "";
        document.getElementById("city").value = "";
        document.getElementById("zip-code").value = "";

    }
    return (
        <div>
            <div className="title">
                <img id="logo" src={logo} alt="Logo Wealth Health" />
                <h1>HRnet</h1>
            </div>
            <Modal isOpen = {isOpenSuccess} setIsOpen={setIsOpenSuccess}
            type = "SUCCESS"
            icone={true}
            titre="Add Employee"
            texte= "Employé ajouté à la liste  avec succès!"
            animation = {true} animationFrom={"TOP"}
            />
            <Modal isOpen = {isOpenError} setIsOpen={setIsOpenError}
            type = "ERROR"
            icone={true}
            titre="Add Employee"
            texte= "Veuillez remplir tous les champs pour pouvoir ajouter l'employé!"
            animation = {true} animationFrom={"TOP"}
            />
            
            <div className="container">
            <Link to="/employeeList">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange ={(e)=>setFirstName(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange ={(e)=>setLastName(e.target.value)}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange ={(e)=>setStreet(e.target.value)}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange ={(e)=>setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <Select
                        defaultValue={selectedState}
                        onChange={setSelectedState}
                        options={states}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange ={(e)=>setCode(e.target.value)} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select
                        defaultValue={selectedDept}
                        onChange={setSelectedDept}
                        options={departements}
                />
                <button onClick={saveEmployee}>Save</button>
            </form>

            
        </div>
    </div>
       
    )
}
export default CreateEmployee;