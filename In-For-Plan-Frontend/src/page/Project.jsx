import React from 'react';
import '../styles/Project.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ProjectTitle = styled.div`
    width: 40%;
    background-color: #bbe1ff;
    border-radius: 30px;
    margin-left: 20px;
    padding: 1%;
    text-align: left;
    margin-top: 10px;
`

function Project() {
    //const [chosenEmoji, setChosenEmoji] = useState(null);
    //const [modal, modalChange] = useState(false);

    // const onEmojiClick = (e, obj) => {
    //     setChosenEmoji(obj);
    // };

    return (
        <div>
            <div className='top'>
                <ProjectTitle>
                    <span className='titleText'>(이모지) 프로젝트 제목</span>
                </ProjectTitle>
            </div>
            <span className='add'><Link>+ 칸반보드 추가하기</Link></span>
            <div className='left2'>
                <span className='sideText'>Meet Schedule</span>
                <p className='setTime'><Link>회의 시간 설정하기</Link></p>
            </div>
        </div>

    );
}

export default Project;