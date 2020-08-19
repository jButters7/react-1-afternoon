import React, {Component} from 'react'

class Palindrome extends Component{
    
    constructor(){
        super()
        this.state ={
            userInput: '',
            palindrome: ''
        }
    }
    
    handleChanges(value){
        this.setState({
            userInput: value
        });
    }

    testForPalindrome(userInput){
        const original = userInput;
        const splitInput = userInput.split('');
        const reverseInput = splitInput.reverse();
        const joinedReversedInput = reverseInput.join('');

        if(original === joinedReversedInput){
            this.setState({
                palindrome: 'true'
            });
        } else{
            this.setState({
                palindrome: 'false'
            });
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>

                <input className="inputLine" onChange={(event) => this.handleChanges(event.target.value)}/>

                <button className="confirmationButton" onClick={() => this.testForPalindrome(this.state.userInput)}>Test Word</button>

                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome