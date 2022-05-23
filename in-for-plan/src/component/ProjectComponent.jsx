import React, { useState } from 'react';
import GlobalStyles from '../css/GlobalStyle';
import '../css/Project.css';
import Picker from 'emoji-picker-react';
import { Link } from "react-router-dom";

const Project = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (e, obj) => {
        setChosenEmoji(obj);
    };

    return (
        
        <div>
            <GlobalStyles></GlobalStyles>  
            <div className='top'>
                <div className='title'>
                    <Picker native onEmojiClick={onEmojiClick}></Picker>
                    {chosenEmoji ? (
                        <span>{chosenEmoji.emoji} project title</span>
                        ) : (
                        <span>project title</span>
                        )}
                </div>
            </div>
            <span className='add'><Link>+ 칸반보드 추가하기</Link></span>
            <div className='left2'>
                <span>Meet Schedule</span>
                <p className='setTime'><Link>회의 시간 설정하기</Link></p>
            </div>
        </div>
    );
}

export default Project;