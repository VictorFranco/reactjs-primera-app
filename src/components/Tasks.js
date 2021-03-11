import React,{Component} from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {
  render() {
    return this.props.tasks.map(e=>{
        return <Task key={e.id} task={e}/>
        });
  }
}

Tasks.propTypes={
  tasks:PropTypes.array
}

export default Tasks;