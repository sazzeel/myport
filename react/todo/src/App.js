import React from 'react';
import TodoList from "./TodoList";

const App = () => {
  return(
    <>
    <TodoList/>
    </>
  )
}

// const App = () => {

//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {count}

//       <br/>
//       <button onClick={() => setCount(count +1)}>Increase</button>
//     </div>
//   );
// };

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {count: 0};
//   }

//   render(){
//     return <> {this.state.count}
//     <button onClick={()=> this.setState({count: this.state.count +1})}>Badne kam garxa</button>
//     </>
//   }
// }

export default App

