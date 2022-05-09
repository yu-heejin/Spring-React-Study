import React, { Component } from 'react';
import './Main.css';
import GlobalStyles from './GlobalStyle';


class MainComponent extends Component {
    render() {
        return (
            <div>
                <GlobalStyles></GlobalStyles>
                <div className='left'></div>
                <div className='right'>
                    <img className='logoImage2' alt='logo' src='imgs/logo_x.png' ></img>
                    <div className='schedule'>
                    </div>
                    <div className="subRight">
                        <div className='todo'></div>
                        <div className='projectList'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;