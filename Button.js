import {Component} from 'react'
import style from './style.module.css';

class Button extends Component{

        
    render(){
        return(
            <button className={style.btnStyle} onClick={()=>this.incCount()}>{this.props.text}</button>
        )
    }
}

export default Button;