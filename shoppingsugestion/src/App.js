import React, { useCallback, useEffect, useState } from 'react'
import { TiTickOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";


import './App.css'

const App = () => {

  const [food,setFood]=useState('')
  const [shoppingList ,setShoppingList]=useState([])
  const [bucketList, setbucketList]=useState([])


  const handleInput=(e)=>{
    console.log(e.target.value)
    setFood(e.target.value)
  }


  const handleShoppingList=(e)=>{
    const idx=e.target.getAttribute('data-id')
    if(idx){
      const obj={
        id:Date.now(),
        data: shoppingList[idx],
        isDone:false
      }

      const copyBucketList=[...bucketList];
      copyBucketList.push(obj)
      setbucketList(copyBucketList)
    }
    setFood('')
  }


  const handleCorrectTick=(id)=>{
    const copyBucketList=[...bucketList]
    const newBucketList=copyBucketList.map((item)=>{
      if(item.id==id){
        item.isDone= !item.isDone
      }
      return item
    }) 
    setbucketList(newBucketList)

  }

  const handledelete=(id)=>{
    const copyBucketList=[...bucketList]
    const newList=
    copyBucketList.filter((item)=>item.id!=id)
    setbucketList(newList)
  }
  console.log(bucketList)
  const fetchItems= async(food)=>{
    const url=` https://api.frontendeval.com/fake/food/${food}`
    const result= await fetch(url)
    const data= await result.json()
    setShoppingList(data)
  }
  console.log(shoppingList)

  useEffect(()=>{
    if(food.length>=2){
      fetchItems(food)

    }

  },[food])
  return (
    <div className='suggestion'>
    <div className='shopping'>
      <h1>My Shopping List</h1>
      <div className='input'>
        <input type='text' value={food} onChange={handleInput}>
        </input>

      </div>



      {
        food.length>=2 ? 
        <div className='shopping-list'
        onClick={handleShoppingList}>
          {
            shoppingList.map((item, index)=>{
              return <div 
              data-id={index}  className='product'>
                {item}
  
              </div>
            })
          }
  
        </div>:null
      }





      <div className='bucket'> 
        {
          bucketList.map((item)=>{
            return <div className='bucket-items'>
              <button onClick={()=>handledelete(item.id)} className='cancel'><RxCross1/></button>
              <div
               className={item.isDone ? 'strike': ' '}
              >{item.data}</div>
              <button onClick={()=>handleCorrectTick(item.id)}><TiTickOutline/></button>
            </div>
          })
        }

      </div>
      
    </div>
    <div id="container">
	<div class="steam" id="steam1"> </div>
	<div class="steam" id="steam2"> </div>
	<div class="steam" id="steam3"> </div>
	<div class="steam" id="steam4"> </div>

	<div id="cup">
		<div id="cup-body">
			<div id="cup-shade"></div>
		</div>
		<div id="cup-handle"></div>
	</div>

	<div id="saucer"></div>

	<div id="shadow"></div>
</div>

    </div>
  )
}

export default App
