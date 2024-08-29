import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [isStart,setIsStart]=useState(false);
  const [isPaused,setIsPaused]=useState(false);
  const [hours,setHours]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [seconds,setSeconds]=useState(0);

  const [timerId,setTimerId]=useState(0);

  const handlestart=()=>{
    if(hours===0 && minutes===0 && seconds===0){
      alert("invalid input ")
    }else{

      setIsStart(true);
    }

  }

  const handlepause=()=>{
    setIsPaused(true)
    clearInterval(timerId)
  }
  const handleresume=()=>{
    setIsPaused(false)
    runTimer(seconds,minutes,hours)
  }

  const handlereset=()=>{
    setIsStart(false)
  }

const handleTimer=(e)=>{
  console.log(e.target.id,e.target.value)
  const value=parseInt(e.target.value);
  const id = e.target.id;
  if(id === 'hours'){
    setHours(value)
  }else if(id === 'minutes'){
    setMinutes(value)
  }
  else{
    setSeconds(value)
  }
}

const runTimer=(sec,min,hr,tid)=>{
  if(sec > 0){
    setSeconds((s)=>s-1);

  }else if(sec===0 && min>0){
    setMinutes((m)=>m-1);
    setSeconds(59);
  }
  else if(min===0 && hr>0){
    setHours((h)=>h-1);
    setMinutes(59);
    setSeconds(59);
  }

  if(sec===0 && min===0 && hr===0){
    handlereset();

    alert('Timer is Finished')
    clearInterval(tid)
    return
  }

}

useEffect(()=>{
  let tid
  if(isStart){
    tid=setInterval(()=>{
      runTimer(seconds,minutes,hours,tid);

    },1000)
    setTimerId(tid)

  }
  return()=>{
    clearInterval(tid);
  }
},[isStart,hours,minutes,seconds])

console.log(hours,minutes,seconds)

  return (
    <div>
    <div className='app'>
      <h2>Count Down TIme</h2>
      {
        ! isStart &&       <div className='inputcontainer'>
        <div className='inputbox'>
          <input onChange={handleTimer} id='hours' placeholder='HH' type='text'></input>
          <input onChange={handleTimer} id='minutes' placeholder='MM' type='text'></input>
          <input onChange={handleTimer} id='seconds' placeholder='SS' type='text'></input>
        </div>

        <button onClick={handlestart} className='start'>start</button>
      </div>
      }

     {
      isStart &&  <div className='showcontainer'>
      <div className='timerbox'>
        <div>{hours <10 ? `0${hours}`:hours}</div>
        <span>:</span>
        <div>{minutes <10 ? `0${minutes}`:minutes}</div>
        <span>:</span>
        <div>{seconds <10? `0${seconds}` : seconds}</div>
      </div>
      <div className='actionbutton'>
        {
          !isPaused &&        <button onClick={handlepause} className='timerbutton'>Pause</button>

        }
        {
          isPaused &&        <button onClick={handleresume} className='timerbutton'>Resume</button>

        }
        <button onClick={handlereset} className='timerbutton'>Reset</button>

      </div>

    </div>

     }
      
    </div>

    
<div class="wrapper">
  <div class="candles">
    <div class="light__wave"></div>
    <div class="candle1">
      <div class="candle1__body">
        <div class="candle1__eyes">
          <span class="candle1__eyes-one"></span>
          <span class="candle1__eyes-two"></span>
        </div>
        <div class="candle1__mouth"></div>
      </div>
      <div class="candle1__stick"></div>
    </div>
    
    <div class="candle2">
      <div class="candle2__body">
        <div class="candle2__eyes">
          <div class="candle2__eyes-one"></div>
          <div class="candle2__eyes-two"></div>
        </div>
      </div>
      <div class="candle2__stick"></div>
    </div>
    <div class="candle2__fire"></div>
    <div class="sparkles-one"></div>
    <div class="sparkles-two"></div>
    <div class="candle__smoke-one">

    </div>
    <div class="candle__smoke-two">

    </div>
    
  </div>
  <div class="floor">
  </div>
  

</div>
  
    </div>
  )
}

export default App
