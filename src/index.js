import React, { Component } from 'react';
import Header from './components/header';
import ReactDOM from 'react-dom';
import './style/main.scss';

class Index extends Component {
    
    state={
        ok:1,
    }
    
    onClickOK=()=>{
        alert('click ok')
    }

    render() {
        return (
            <div onClick={this.onClickOK}>
                <Header/>
                {this.state.ok}
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));