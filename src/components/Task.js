import React,{Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

class Task extends Component {
  StyleCompleted(){
      return {
          color:this.props.task.done?"#555":"black",
      }
  }

  render() {
      const {task}=this.props;
    return <div className="Task" style={this.StyleCompleted()}>
            <div style={{textDecoration: task.done?"line-through":"none"}}>
                <div style={{fontSize:20,fontWeight:400}}>
                {task.title}
                </div>
                <div style={{fontSize:14,color:"#222"}}>
                {task.description}
                </div>
            </div>
            <div className="group2">
                <Toggle id={task.id} task={task} checkDone={this.props.checkDone}/>
                <button onClick={this.props.deleteTask.bind(this,task.id)} className="btn_delete">X</button>
            </div>
        </div>;
  }
}

Task.propTypes={
    task:PropTypes.object.isRequired,
    checkDone:PropTypes.func.isRequired,
    deleteTask:PropTypes.func.isRequired
}

export default Task;