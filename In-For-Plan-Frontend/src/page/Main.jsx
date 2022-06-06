import React, { useState } from 'react';
import '../css/Main.css';
import GlobalStyles from '../css/GlobalStyle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Main() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <GlobalStyles></GlobalStyles>
            <div className='left'>
                <img src='imgs/dog.jpg' style={{
                width: 80,
                height: 80,
                borderRadius: '70%',
                verticalAlign: 'middle',
            }} alt="profile"></img>
            <div>
            마리님, 환영합니다!<br></br>
                <Link style={{
                    fontSize: '10px'
                }}>마이페이지</Link> <span style={{
                    fontSize: '10px'
                }}>|</span> <Link style={{
                    fontSize: '10px'
                }}>로그아웃</Link>
            </div>
                <CalendarContainer>
                    <Calendar onChange={onChange} value={value}></Calendar>
                </CalendarContainer>
            </div>
            <div className='right'>
                <img className='logoImage2' alt='logo' src='imgs/logo_x.png' ></img>
                <div className='schedule'></div>
                <div className="subRight">
                    <div className='todo'>
                        To Do List
                    </div>
                    <div className='projectList'>
                        Project
                    </div>
                </div>
            </div>
        </div>
    );

}

const CalendarContainer = styled.div`
    margin: auto;
    background-color: #ddecf8;
    font-family: GmarketSansMedium;   //폰트 적용 안됨 ㅠㅠ
`

export default Main;