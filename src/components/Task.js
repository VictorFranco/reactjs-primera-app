import React,{Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

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
                {task.title} <br/> {task.description}
            </div>
            <div className="group2">
                <input type="checkbox"></input>
                <div>X</div>
            </div>
        </div>;
  }
}

Task.propTypes={
    task:PropTypes.object
}

export default Task;