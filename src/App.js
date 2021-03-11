import React,{Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks'
import './App.css';

class App extends Component {
  state={
    tasks:tasks
  }
  deleteTask=id=>{
    const newTasks=this.state.tasks.filter(task=>task.id!==id)
    this.setState({tasks:newTasks})
  }
  checkDone=id=>{
    const newTasks=this.state.tasks.map(task=>{
      if(task.id===id) task.done=!task.done
      return task
    })
    this.setState({tasks:newTasks})
  }
  render() {
    return <div className="App">
      <div className="Card">
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
      </div>
    </div>;
  }
}

export default App;
