import React,{Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks'
import './App.css';
import TaskForm from './components/TaskForm';

class App extends Component {
  state={
    tasks:tasks
  }
  addTask=(title,description)=>{
    const newTask={
      title:title,
      description:description,
      id:this.state.tasks.length
    }
    this.setState({
      tasks:[...this.state.tasks,newTask]
    })
  }
  render() {
    return <div className="App">
      <div>
        <div className="Card">
          <TaskForm addTask={this.addTask}/>
        </div>
        <div className="Card">
          <Tasks tasks={this.state.tasks}/>
        </div>
      </div>
    </div>;
  }
}

export default App;
