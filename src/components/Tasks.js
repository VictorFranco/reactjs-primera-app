import React,{Component} from 'react';
import Task from './Task';

class Tasks extends Component {
  render() {
    return this.props.tasks.map(e=>{
        return <Task key={e.id} task={e}/>
        });
  }
}

export default Tasks;
