import React,{Component} from 'react';
import './TaskForm.css'
class TaskForm extends Component{
    onSubmit=e=>{e.preventDefault()}
    render(){
        return <form className="Form" onSubmit={this.onSubmit}>
            <div>
                <input type="text" placeholder="Título"></input><br/>
                <textarea placeholder="Descripción"></textarea>
            </div>
            <button type="submit">Guardar</button>
        </form>
    }
}
export default TaskForm;