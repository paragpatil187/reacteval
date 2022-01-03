
import { useState } from 'react';
import './App.css';
import { Form } from './Form';
import { Recipie } from './Recipie';
import { RecipieItem } from './Ritem';


function App() {
  const [data,setData]=useState(null);
  
  const GetFormData=(recivieveddata) => {
    setData(recivieveddata)
  };
  const Getdata = () => {
    fetch("http://localhost:3001/forms")
      .then((e) => e.json())
      .then((e) => setData(e));
  };

  const deleteData = (id) => {
    fetch(`http://localhost:3001/forms/${id}`, {
      method: "DELETE",
    }).then(() => Getdata());
  };
  
  
  return (
    <div className="App">
    <div>create new recipie
    <Form GetFormData={GetFormData}/></div>
    <div> recipies<Recipie data={data} deleteData={deleteData}/></div>

      
    </div>
  
    
  );
}

export default App;
