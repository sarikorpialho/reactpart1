import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  
  return (
    <div>
      <h1>{props.course.title}</h1>
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

const Count = ({parts}) => {
  return(
    <div>
      <p>Total: {parts.reduce((sum,part) => sum+part.exercises,0)} exercises</p>
      </div>
  
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course = {props.course}/> 
      <Contents parts = {props.course.parts}/>
      <Count parts = {props.course.parts} />
    </div>
  )
}


 

const App = () => {
  const course = {
    title: 'Superadvanced web and mobile programming',
    parts: [
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
  }
  return (
    <div>
      <Course course = {course} />
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
