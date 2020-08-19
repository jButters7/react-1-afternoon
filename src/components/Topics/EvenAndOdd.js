import React, {Component} from 'react';

class EvenAndOdd extends Component{
    
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInputChange(value){
        this.setState({
            userInput: value
        })
    }

    assignEvenAndOdds(userInput){
        const splitInputArray = userInput.split(',');
        // console.log(splitInputArray)
        const evens = []
        const odds =[]

        for(let i = 0; i <= splitInputArray.length - 1; i++){
            if(parseInt(splitInputArray[i], 10) % 2 === 0){
                evens.push(parseInt(splitInputArray[i], 10));
            } else{
                odds.push(parseInt(splitInputArray[i], 10));
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={(event) => this.handleInputChange(event.target.value)} className="inputLine"></input>
                <button onClick={() => {this.assignEvenAndOdds(this.state.userInput)}} className="confirmationButton">Organize</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd