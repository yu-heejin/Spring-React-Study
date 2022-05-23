import React, { useState } from 'react';
import '../css/Main.css';
import GlobalStyles from '../css/GlobalStyle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Main = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <GlobalStyles></GlobalStyles>
            <div className='left'>
                [프로필 사진] 마리님, 환영합니다!
                <p><Link>마이페이지</Link> | <Link>로그아웃</Link></p>
                <CalendarContainer>
                    <Calendar onChange={onChange} value={value}></Calendar>
                </CalendarContainer>
            </div>
            <div className='right'>
                <img className='logoImage2' alt='logo' src='imgs/logo_x.png' ></img>
                <div className='schedule'></div>
                <div className="subRight">
                    <div className='todo'></div>
                    <div className='projectList'></div>
                </div>
            </div>
        </div>
    );

}

const CalendarContainer = styled.div`
    margin: auto;
    background-color: #ddecf8;
    font-family: GmarketSansMedium;
`

export default Main;