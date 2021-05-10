import React from 'react'
import Header from '../Header/Header'
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{

    state = {
        headerText : "Get Amazing Names",
        headerExpanded : true,
        suggestNames :[]
    };

    handleInputChange = (inputText) => {
        
        this.setState({
            headerExpanded: !inputText,
            suggestNames : inputText ? name(inputText) : [],
        });
    }

    render(){
        return (
            <div>
                <Header headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestNames={this.state.suggestNames} />
            </div>
        )
    }
}

export default App;