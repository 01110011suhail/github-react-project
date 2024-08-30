import { useCallback } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const data=[
    {
      id:'name',
      label:'Name',
      inputType:"text",
      buttonName:'Next',
      placeholder:'enter your name'
    },
    {
      id:'email',
      label:'Email',
      inputType:"email",
      buttonName:'Next',
      placeholder:'enter your email'
    },
    {
      id:'dob',
      label:'DOB',
      inputType:"date",
      buttonName:'Next',
      placeholder:''
    },
    {
      id:'password',
      label:'Password',
      inputType:"password",
      buttonName:'Submit',
      placeholder:""
    },
  ]

  const [form ,setForm]=useState(data)
  const [index,setIndex]=useState(0)
  const [formSubmission, setFormSubmission]=useState(false)
  const [formdata,setFormdata]=useState({
    name:'',
    email:'',
    dob:'',
    password:''
})

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(index=== form.length-1){
      console.log('form submission')
      setFormSubmission(true)
    }
    else{
      setIndex((idx)=>idx+1)
    }
  }

  const handleBack=(e)=>{
    e.preventDefault()
    setIndex((idx)=>idx-1)

  }
  const handleInputChange=(e)=>{
      const id=e.target.id
      const val=e.target.value
      const copyformdata={...formdata}
      copyformdata[id]=val
      setFormdata(copyformdata)



  }
console.log('formdata->',formdata)

  return (
    <div className="App">
      {!formSubmission ? 
      <form className='container' onSubmit={handleSubmit}>
        {
          index>0 && 
          <a href='/' onClick={handleBack}>Back
            

          </a>
        }
        <label>{form[index].label}</label>
        <input
        value={formdata[form[index].id]}
        id={form[index].id}
        onChange={handleInputChange}
        type={form[index].inputType}
        placeholder={form[index].placeholder}
        />
        <button>
          {form[index].buttonName}
        </button>
      </form>:
      <div className='output'>
        <h1>Success !</h1>  
        <hr/>
        <span> Name: {formdata.name}</span>
        <br/>
        <span> Email: {formdata.email}</span>
        <br/>
        <span> Dob: {formdata.dob}</span>
        <br/>
        <span> Password: {formdata.password}</span>
        <br/>

      </div>

      
      }
     
    </div>
  );
}

export default App;
