import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Tool extends Component {
    state = {
        text : '',
        expression: '',
        result: ''
    }

    onChange(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    test(e){
        e.preventDefault();
        axios.post('/regex/', {
            expression: this.state.expression,
            text : this.state.text
        }).then(response => {
            if(response.data){
                this.setState({
                    result: response.data
                }); 
                  // }, () => {
                //     var text = this.state.text;
                //     if(response.data.status === 'Query String Is Valid'){
                //         document.getElementById('text').value = text.replace(this.state.result.result, `<span style='color: white, background-color: blue'>${this.state.result.result}</span>`)
                //     }
                // });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div style={{marginLeft: '15px', marginTop: '15px'}}>
              <form>
              <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="expression">Expression</label>
                        <input type="text" className="form-control" id="expression" value={this.state.expression} onChange={this.onChange.bind(this)}></input>
                    </div>                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="text">Text</label>
                        <textarea type="text" className="form-control" id="text" value={this.state.text} onChange={this.onChange.bind(this)}></textarea>
                    </div>                    
                </div>
                {
                    this.state.result.status === 'Query String Is Valid' ? <span style={{color: "blue"}}>{this.state.result.status} - Match :  {this.state.result.result}</span> : <span style={{color: "red"}}>{this.state.result.status}</span>
                }
                <br />      
                <br />               
                <button type="submit" className="btn btn-primary" onClick={this.test.bind(this)}>Test</button>
                </form>
                
            </div>
        )
    }
}

export default Tool;
