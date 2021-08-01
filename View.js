import React, { Component } from 'react'
import Button from './Button'

export default class View extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    
    incCount(){
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
               <Button text="Increment"/>
               <Button text="Decrement"/>
               <Button text="MeltDown"/>
               <Button text="Stop"/>
               <Button text="Reset"/>

            </div>
        )
    }
}
