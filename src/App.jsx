
import './App.css'
import Batsman from './batsman'
import Counter from './counter'
import Users from './Users'




function App() {

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
      <Users></Users>
      <Batsman></Batsman>
      
      <Counter></Counter>
      

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick3}>Click Me 2 </button>
      <button onClick={()=> alert('click 4 ')}>Click Me 2 </button>
      <button onClick={()=> handleAdd5(6)}>Add 5</button>
     
    </>
  )
}




export default App
