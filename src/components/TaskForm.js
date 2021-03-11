import React,{Component} from 'react';
import './TaskForm.css'
import PropTypes from 'prop-types';

class TaskForm extends Component{
    state={
        title: '',
        description: ''
    }
    onChange=e=>{
        this.setState({[e.target.name] : e.target.value})
    }
    onSubmit=e=>{
        this.props.addTask(this.state.title,this.state.description)
        e.preventDefault()
    }
    render(){
        return <form className="Form" onSubmit={this.onSubmit}>
            <div>
                <input name="title" type="text" placeholder="Título"  onChange={this.onChange} value={this.state.title}></input><br/>
                <textarea name="description" placeholder="Descripción" onChange={this.onChange} value={this.state.description}></textarea>
            </div>
            <button type="submit">Guardar</button>
        </form>
    }
}
TaskForm.protoTypes={
    addTask:PropTypes.func
}
export default TaskForm;