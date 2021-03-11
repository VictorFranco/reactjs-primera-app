import React,{Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks'
import './App.css';
import TaskForm from './components/TaskForm';

class App extends Component {
  state={
    tasks:tasks
  }
  render() {
    return <div className="App">
      <div>
        <div className="Card">
          <TaskForm/>
        </div>
        <div className="Card">
          <Tasks tasks={this.state.tasks}/>
        </div>
      </div>
    </div>;
  }
}

export default App;
