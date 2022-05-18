import React, { Component } from 'react';
import GlobalStyles from './GlobalStyle';
import './Project.css';
import Picker from 'emoji-picker-react';
import { Link } from "react-router-dom";


class ProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.onEmojiClick = this.onEmojiClick.bind(this);
        this.state = {
          chosenEmoji: null,
        };
    };

    onEmojiClick = (e, emojiObject) => {
        this.setState({
            chosenEmoji: emojiObject
        });
    };

    render() {
        return (
            <div>
                <GlobalStyles></GlobalStyles>  
                <div className='top'>
                    <div className='title'>{/*<Picker native></Picker><span>제목</span>*/}</div>
                </div>
                <span className='add'><Link>+ 칸반보드 추가하기</Link></span>
                <div className='left2'>
                    <span>Meet Schedule</span>
                    <p className='setTime'><Link>회의 시간 설정하기</Link></p>
                </div>
            </div>
        );
    }
}

export default ProjectComponent;