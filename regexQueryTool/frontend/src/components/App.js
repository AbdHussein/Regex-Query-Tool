import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tool from './Tool';
import Cheatsheet from './Cheatsheet';


class App extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <Tool />
                <Cheatsheet />
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))