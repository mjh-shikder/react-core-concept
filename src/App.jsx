
import { Suspense } from 'react'
import './App.css'
import Batsman from './batsman'
import Counter from './counter'
import Users from './Users'
import Friends from './Friends'
import Posts from './Post'

const featchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchFrineds = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {

  const postPromise = fetchPost()

  const friendsPromise = fetchFrineds();

  function handleClick() {
  alert('button clicked')
  }
  
  const handleClick3 = () => {
    alert('clicked 3')
  }


  const handleAdd5 = (num) => {
    const n = num + 5;
    alert(n)
  }


  function useState(initialValue) {
    let state = initialValue;
    function setState(newValue) {
      state = newValue;
    }
    return [state, setState]
  }



  return (
    <>
      
      <h3>Vite + React</h3>


      <Suspense fallback={<h4>Post are coming....</h4>}>
      <Posts postPromise = {postPromise}></Posts>
      </Suspense>


      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers = {featchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h2>Frineds are Coming</h2>}>
      <Friends friendsPromise={friendsPromise}> </Friends>
      </Suspense> */}


      {/* <Batsman></Batsman> */}
      
      {/* <Counter></Counter> */}
      

      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick3}>Click Me 2 </button>
      <button onClick={()=> alert('click 4 ')}>Click Me 2 </button>
      <button onClick={()=> handleAdd5(6)}>Add 5</button> */}
     
    </>
  )
}




export default App
