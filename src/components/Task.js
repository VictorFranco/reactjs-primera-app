import React,{Component} from 'react';

class Task extends Component {
  render() {
      const {task}=this.props;
    return <div>
        <div>
        {task.title} <br/> {task.description}
        </div>
        <div>
        <input type="checkbox"></input>
        <div>X</div>
        </div>
        </div>;
  }
}

export default Task;