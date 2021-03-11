import React,{Component} from 'react';
import './Toggle.css';
class Toggle extends Component {
  onChange=e=>{this.props.checkDone(this.props.id)}
  render() {
    return <div>
        <input className="input-toggle"
            id={this.props.id} type="checkbox" 
            onChange={this.onChange} 
            defaultChecked={this.props.task.done}>
        </input>
        <label htmlFor={this.props.id}></label>
    </div>
  }
}

export default Toggle;