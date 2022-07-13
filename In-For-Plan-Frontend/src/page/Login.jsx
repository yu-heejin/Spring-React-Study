import React, {useState} from 'react';
import styled from "styled-components";
import '../styles/Login.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import GlobalStyles from '../styles/GlobalStyle';

function Login() {
    //react hook
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        console.log({
            id,
            pw
        });

        axios(
            {
                url: 'http://localhost:8080/api/v1/users/login',
                method: 'post',
                data: {
                   email: id,
                   password: pw
                },
                headers: {
                    contentType: 'application/json'
                }
            }
        ).then(function (response) {
            console.log(response);
            alert(response.data);
        }).catch(function (error) {
            console.log(error);
            alert("fail");
        })
    }

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    return (
        <>
            <GlobalStyles></GlobalStyles>
            <img className='logoImage' alt='logo' src='assets/imgs/logo_x.png' ></img>
            <DivStyle>
                <Cover>
                    <Google type='button' onClick={() => window.open(`https://accounts.google.com/o/oauth2/v2/auth?scope=profile&response_type=code&client_id=457190401330-d0kdd9mkfr8gptk868o0a89oorlvrnre.apps.googleusercontent.com&redirect_uri=http://localhost:3000/main`)}>
                        <div style={{ verticalAlign: 'middle'}}>
                        <img alt='google' src='assets/icons/google.png' style={{
                            width: '30px',
                            height: '30px',
                            marginRight: '10px',
                            marginTop: '0px'
                        }}></img><span>Sign in with Google</span>
                        </div>
                    </Google>
                    <form onSubmit={onSubmit}>
                        <p><input className='idClass' type="text"
                            name="id"
                            placeholder="ID"
                            onChange={onChangeId}
                        ></input>
                        </p>
                        <p><input  className='pwClass' type="password"
                            name="pw"
                            placeholder="Password"
                            onChange={onChangePw}
                        ></input>
                        </p> 
                        <p>
                            <button className="loginButtonClass" type="submit">LOGIN</button>
                        </p>
                        <br></br><br></br>
                        <Link to="/signup">Sign up</Link>
                    </form>
                </Cover>
            </DivStyle>
        </>
    )
}

//style code list
const DivStyle = styled.div`
    width: 800px;
    height: 500px;
    background-color: white;
    margin: 0px auto;
    padding-top: 30px;
    border-radius: 30px;
`;

const Cover = styled.div`
    width: 600px;
    height: 300px;
    margin: 50px auto;
`;

const Google = styled.button`
    background-color: pink;
    padding: 2%;
    font-family: GmarketSansMedium;
    border-width: 0px;
`
export default Login;