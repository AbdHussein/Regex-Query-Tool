import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tool from './Tool';

class App extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <Tool />
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))