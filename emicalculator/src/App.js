import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import './App.scss'

const App = () => {
  const [principal,setPrincipal]=useState(0)
  const [interest, setInterest]=useState(0)
  const [years, setYears]=useState(0)
  const [emi, setEmi]=useState(0)


  const calculateEmi=()=>{  
    let r= interest;
    if(principal && r && years){
      r=r/12/100
      const calPow=Math.pow(1+r,years * 12)
      const amount=principal *((r*calPow)/(calPow-1))
      setEmi(Math.round(amount))
      
    }
  }


  const handleChange=(e)=>{
    console.log(e.target.id, e.target.value)
    const id=e.target.id
    const value = parseInt(e.target.value)
    if(id==='principal'){
      setPrincipal(value)
    }else if(id==='interest'){
      setInterest(value)
    }else{
      setYears(value)
    }

  }

  useEffect(()=>{
    calculateEmi()

  },[principal,interest,years])


  return (
    <div>
      <div class="cat">
	<div class="ear ear--left"></div>
	<div class="ear ear--right"></div>
	<div class="face">
		<div class="eye eye--left">
			<div class="eye-pupil"></div>
		</div>
		<div class="eye eye--right">
			<div class="eye-pupil"></div>
		</div>
		<div class="muzzle"></div>
	</div>
</div>
    <div className='op'>
          <div className='emi-container'>
      <h1>EMI Calculator</h1>
      <div className='inputs'>
        <p>principal</p>
        <input onChange={handleChange} id='principal' type='number' placeholder='enter the amount'></input>
        <p>Interest</p>
        <input onChange={handleChange} id='interest' type='number' placeholder='interest'></input>
        <p>Years</p>
        <input onChange={handleChange} id='years' type='number' placeholder='years'></input>

      </div>
      <div>
      <p>The Emi is {emi}</p>

      </div>
   
      
      
    </div>
    </div>

    </div>

  )
}

export default App
