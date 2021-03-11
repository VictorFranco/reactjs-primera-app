import React,{Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {
  StyleCompleted(){
      return {
          color:this.props.task.done?"#555":"black",
      }
  }
  onChange=e=>{this.props.checkDone(this.props.task.id)}

  render() {
      const {task}=this.props;
    return <div className="Task" style={this.StyleCompleted()}>
            <div style={{textDecoration: task.done?"line-through":"none"}}>
                {task.title} <br/> {task.description}
            </div>
            <div className="group2">
                <input type="checkbox" onChange={this.onChange} defaultChecked={task.done}></input>
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