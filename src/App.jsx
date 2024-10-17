import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './singer'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
  const actors =['Sakib','Shoriful Raj','Jasim','Rubel'];

  const books =[
    {id:1,name:'physics',price:100},
    {id:2,name:'chemestry',price:200},
    {id:3,name:'math',price:300},
    {id:4,name:'biology',price:400},
  ]

  const singers =[
    {id:1, name:"Dr.Mahfuzur Rahaman",age:68},
    {id:2, name:'Eva Rahaman',age:38},
    {id:3, name:"Shuvro Dev",age:48},
    {id:4, name:"Pritom",age:29},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map((singer) =><Singer singer={singer}></Singer>)
      }
      <Actor name="Bappa Raj"></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="core concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="44"></Device>
      <Device name="Mobile" price="11"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student> 

      <Student grade="9" score="85"></Student>

      <Student ></Student>
      <Devo></Devo> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return (
    <div>
      <h3>this device: {props.name} price:{props.price}</h3>
    </div>
  )
}

function Person(){
  const age =23;
  const money =20;
  const person ={name:'sakib',age:12}
  return (
    <>
    <h3>I am {person.name} person with age:{age + money}</h3>
    </>
  )
}
function Student({grade=2,score=0}){
  const stuStyle={
    margin:"20px"
  }
  return (
    <>
    <div style={stuStyle} className='student'>
      <h3>This is a student</h3>
      <p>grade:{grade}</p>
      <p>score:{score}</p>
    </div>
    </>
  )
}

function Devo(){
  const devoStyle={
    margin:'20px',
    padding:'10px',
    border:'2px solid green',
    borderRadius:'20px'
  }
  return (
    <div style={devoStyle}>
      <h4>
        hello world 
      </h4>
      <p>this is me antu i am new web devoloper in the town</p>
    </div>
  )
}
export default App
