import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'


function App() {
  function HandleClick() {
    alert('button click')
  }
  const handleClick2 = () => {
    alert('handle click 2')

  }
  const addToFive = (num) =>{
    alert(num + 5);
  } 
  
  const addsix = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter ></Counter>
      

      <button onClick={HandleClick}>one</button>
      <button onClick={handleClick2}>two</button>
      <button onClick={()=>{alert('button click 3')}}>three </button>
      <button onClick={()=> addToFive(30000)}>Four</button>
      <button onClick={()=> addsix(5)}>five</button>
    </>
  )
}

export default App
