import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredGreetings: ['Hello', 'Hi', 'Howdy', 'Sup', 'Yo', 'Mornin', 'What Up'],
            userInput: '',
            filteredGreetings: []
        }
    }

    handleChange(input){
        this.setState({
            userInput: input
        });
    }

    filterGreetings(userInput){
        const greetings = this.state.unFilteredGreetings;
        const newArray = [];
        for(let i = 0; i < greetings.length; i++){
            if(userInput === greetings[i]){
                newArray.push(userInput);
            }
        }
        this.setState({
            filteredGreetings: newArray
        });
    }

    
    
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>

                <span className="puzzleText"> Greetings: {JSON.stringify(this.state.unfilteredGreetings, null, 10)} </span>

                <input placeholder="Input Greeting"className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>

                <button className="confirmationButton" onClick={() => this.filterGreetings(this.state.userInput)}>Filter Me</button>

                <span className="resultsBox filterStringRB">Filtered Greetings: {JSON.stringify(this.state.filteredGreetings)}</span>
            </div>
        )
    }
}

export default FilterString