import React, {Component} from 'react'

class Sum extends Component{

    constructor(){
        super()

        this.state ={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleInputChange1(input){
        this.setState({
            number1: input
        });
    }

    handleInputChange2(input){
        this.setState({
            number2: input
        });
    }

    sumNumbers(num1, num2){
        const sumNumber = num1 + num2
        this.setState({
            sum: sumNumber
        });
    }

    render(){
        return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>

            <input className="inputLine" placeholder="Number 1"onChange={(event) => this.handleInputChange1(event.target.value)}/>

            <input className="inputLine" placeholder="Number 2"onChange={(event) => this.handleInputChange2(event.target.value)}/>

            <button className="confirmationButton" onClick={() => this.sumNumbers(this.state.number1, this.state.number2)}>Add Up the Numbers</button>

        <span className="resultsBox"> The sum of {this.state.number1} and {this.state.number2} is {this.state.sum}</span>
        </div>
        )
    }
}

export default Sum