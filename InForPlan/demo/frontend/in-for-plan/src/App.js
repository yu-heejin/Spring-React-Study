import React, { Component, } from 'react';
import {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import './App.css';

const LoginApp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [id, pw])

    const submitHandle = async (e) => {
        e.preventDefault();
        console.log(id, pw);
        setId('');
        setPw('');
        setSuccess(true);
    }

    return (
        <>
        <DivStyle>
            <h2>Login</h2>
            <form onSubmit={submitHandle}>
                <p><input 
                    type="text" 
                    id="id" 
                    placeholder="ID"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    required></input></p>
                <p><input type="password" 
                    id="pw" 
                    placeholder="Password"
                    onChange={(e) => setPw(e.target.value)}
                    value={pw}
                    required></input></p>
                <p><input type="submit" value="LOGIN"></input></p>
            </form>

            <p>
                <a href="#">sign up</a>
            </p>
            
        </DivStyle>   
        </> 
    );
    
}

//style code list
const DivStyle = styled.div`
    width: 800px;
    height: 500px;
    background-color: white;
    margin: 200px auto;
    border-radius: 30px;
`;

export default LoginApp;