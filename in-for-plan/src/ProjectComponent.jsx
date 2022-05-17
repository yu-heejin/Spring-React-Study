import React, { Component } from 'react';
import GlobalStyles from './GlobalStyle';
import './Project.css';
import Picker from 'emoji-picker-react';

class ProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenEmoji: null
        };
    }

    render() {
        const onEmojiClick = (e, emojiObject) => {
            this.chosenEmoji = emojiObject;
        }

        return (
            <div>
                <GlobalStyles></GlobalStyles>  
                <div className='top'>
                    {this.chosenEmoji}
                    <div className='title'>
                        <Picker
                        onEmojiClick={onEmojiClick}
                        native></Picker>
                    </div>
                </div>
                <div className='left2'></div>
            </div>
        );
    }
}

export default ProjectComponent;