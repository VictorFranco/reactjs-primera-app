import React,{Component} from 'react';
import './Task.css';

class Task extends Component {
  render() {
      const {task}=this.props;
    return <div className="Task">
            <div>
                {task.title} <br/> {task.description}
            </div>
            <div className="group2">
                <input type="checkbox"></input>
                <div>X</div>
            </div>
        </div>;
  }
}

export default Task;