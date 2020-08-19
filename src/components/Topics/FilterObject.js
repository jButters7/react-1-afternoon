import React, {Component} from 'react';

class FilterObjects extends Component{
    
    constructor(){
        super()

        this.state = {
        unFilteredArray: [
            {
                name: 'Gray',
                friend: true,
                age: 25
            },
            {
                name: 'Kate',
                wife: true,
                jobPosition: 'Manager'
            },
            {
                name: 'Clark',
                ownsHouse: false,
                age: 25
            },
            {
                name: 'Rya',
                age: 1
            }
        ],

        userInput: '',
        filteredArray: []
        }
    }
   
    handleChange(value){
        // console.log(value)
        this.setState(
            {userInput: value}
            );
    }

    filterUnFilteredArray(input){
        const arr = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].hasOwnProperty(input) ){
                arr.push(this.state.unFilteredArray[i]);
            }
        }
        
        this.setState({
            filteredArray: arr
        });
    }
   
   
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

                <span className="puzzleText"> Original Object {JSON.stringify(this.state.unFilteredArray)}</span>

                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>

                <button className="confirmationButton" onClick={ () => this.filterUnFilteredArray(this.state.userInput) }>Filter Me</button>

                <span className="resultsBox filterObjectRB">Filtered Object: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObjects