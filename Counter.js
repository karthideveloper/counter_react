import {Component} from 'react'
import style from './style.module.css';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    
    incCount(){
    //   console.log("hai");
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }

    decCount(){
        // console.log("hai");
          this.setState(
              {
                  count:this.state.count-1
              }
          )
      }

      meltCount(){
        // console.log("hai");
        this.setState(
            {count:this.state.count-1})
            if(this.state.count>0)
                  setTimeout(()=>this.meltCount(),1000) 
                  
      }
      resetCount(){
        // console.log("hai");
        this.setState({count:0
         } )
            
                  
      }
    render(){
        return(<div>
            <h1>{this.state.count}</h1>
            <button className={style.btnStyle} onClick={()=>this.incCount()}>Increment</button>
            <button className={style.btnStyle} onClick={()=>this.decCount()}>Decrement</button>
            <button className={style.btnStyle} onClick={()=>this.meltCount()}>meltCount</button>
            <button className={style.btnStyle} onClick={()=>this.resetCount()}>resetCount</button>
            </div>
        )
    }
}

export default Counter;