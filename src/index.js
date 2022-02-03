import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
    )
}
const Courses = (props) =>{
  return(
    <div>
      <li>{props.name} {props.exercises}</li>
    </div>
  )
}
const Contents = (props) => {
  
  return (
    
    <ul>
		{props.parts.map(item => <Courses key={item.id} name={item.name} exercises={item.exercises}/>)}
	  </ul>
    )
} 


 

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
      id: 1,
      name: 'Basics of React',
      exercises: 8
    },
    {
      id: 2,
      name: 'Using props',
      exercises: 10
    },
    {
      id: 3,
      name: 'Component states',
      exercises: 12
    }
  ]

  return (
    <div>
      <Header title = {course}/> 
      <Contents parts = {parts}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
