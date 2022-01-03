import { useEffect, useState } from "react"
import displayimage from "./images/logo.svg"
export const Form = ({GetFormData}) => {
    //console.log(GetFormData)
    useEffect(()=>{
        fetch("http://localhost:3001/forms")
        .then((e)=>e.json())
        .then ((e)=>GetFormData(e))
        
    },[]);

    const [form,setForm] =useState({
        title:"",
        ingredients:"",
        timetocook:"",
        instruction:"",
        image:"",

    });
const handleChange=(e)=>{
    const {value,name} =e.target;
    setForm({
        ...form,
        [name]:value
    });
}
const imageHandler =(e)=>{
    const reader =new FileReader();
    reader.onload =()=>{
        if(reader.readyState==2){
            setForm({...form,file:reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
}
const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/forms", {
        method:"POST",
        body:JSON.stringify(form),
        headers:{"Content-Type":"application/json"},

    }).then(()=> {fetchdata();
        randomImage();
    }
    
    
    );
}
const fetchdata = () => {
    fetch("http://localhost:3001/forms")
    .then((e)=>e.json())
    .then((e)=>GetFormData(e))
};
const sortre = (val) => {
    fetch(`http://localhost:3001/forms?_sort=timetocook&_order=${val}`)
    .then((e)=>e.json())
    .then((e)=>GetFormData(e))
};
const randomImage = () => {
    fetch("https://foodish-api.herokuapp.com/api/")
      .then((e) => e.json())
      .then((e) =>
        setForm({
          ...form,
          image: e.image,
        })
      );
  };
///change after addihng images
    return (
        <>
        <img src={form.file ||displayimage}  style={{width:"100px"}}></img>
        
        <form onSubmit={handleSubmit}>
        <label>title</label>
        <input onChange={handleChange} type="text" name="title" placeholder="enter title"></input><br/>
        <label>ingredient</label>
        <input onChange={handleChange} type="text" name="ingredients" placeholder="enter ingredients"></input><br/>
        <label>time to cook</label>
        <input onChange={handleChange} type="number" name="timetocook" placeholder="enter timetocook"></input><br/>
        <label>instructions</label>
        <input onChange={handleChange} type="text" name="instructions" placeholder="enter instruction"></input><br/>
        <label>image</label>
        <input onChange={imageHandler} type="file" name="image" placeholder="choose image"></input>
        <input type="submit"></input>
        
        </form>
        <button onClick={()=>sortre("asc")}>low to high</button>
        <button onClick={()=>sortre("des")}>high to low</button>
        </>
        

        
    )

    }
