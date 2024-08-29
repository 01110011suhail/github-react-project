import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [value,setValue]=useState(0)
  const [ history, setHistory]=useState([])

  const [redoList, setRedoList]=useState([])
  const [undoCount,setUndoCount]=useState(0)


  const mantainHistory=(key,prev,curr)=>{
    console.log(key,prev,curr)
    const obj={
      action:key,
      prev,curr
    }
    const copyHistory=[...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);


  }

  const handleClick=(key)=>{
    const val=parseInt(key)
    console.log(key)
    mantainHistory(key,value,val+value)
    setValue((existingvalue)=> existingvalue+val);

  }

  const handleUndo=()=>{
    if(history.length){
      if(undoCount +1>5){
        alert('You Cant undo Beyond limit=5')
        return;
      }
      setUndoCount((c)=>c+1)
      const copyHist=[...history]
      const firstitem=copyHist.shift()
      setHistory(copyHist)

      setValue(firstitem.prev)
      const copyRedoList=[...redoList]
      copyRedoList.push(firstitem)
      setRedoList(copyRedoList)

    }
  }

  console.log(redoList,history)


  const handleRedo=()=>{
    if(redoList.length){
      const copyRedoList= [...redoList];
      const poppedValue = copyRedoList.pop()
      setRedoList(copyRedoList)
      const {action,prev, curr}=poppedValue
      setValue(curr)
      mantainHistory(action,prev,curr)
    }
  }
  return (
    <div className='polka'>

    <div className='undoredo'>
      <div className='counter'>
        <h1>Undoable Counter</h1>
        <div className='action-btn'>
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleRedo}>Redo</button>

        </div>
        <div className='user-action'>
          {
            [-100,-10,-1].map((btn)=>{
              return(
                <button
                onClick={()=>handleClick(btn)}

                >{btn}</button>
              )
            })
          }
          <div className='io'>{value}</div>
          {
            [+1,+10,+100].map((btn)=>{
              return(
                <button
                onClick={()=>handleClick(btn)}
                >{btn}</button>
              )
            })
          }

        </div>
        <div className='history'>History
          {
            history.map((item)=>{
              return <div className='historybox'>
                <div>{item.action}</div>
                <div>
                  {
                    `[ ${item.prev} -> ${item.curr}]`
                  }
                </div>
              </div>
            })
          }

        </div>

      </div>

      
    </div>


<div className='design'>
<div id="loader">
  <div id="box"></div>
  <div id="hill"></div>
</div>
</div>
    

    </div>
  )
}

export default App
