import React,{Component} from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {
  render() {
    return this.props.tasks.map(e=>{
        return <Task key={e.id} 
                    task={e} 
                    deleteTask={this.props.deleteTask}
                    checkDone={this.props.checkDone}/>
        });
  }
}

Tasks.propTypes={
  tasks:PropTypes.array.isRequired,
  checkDone:PropTypes.func.isRequired,
  deleteTask:PropTypes.func.isRequired
}

export default Tasks;