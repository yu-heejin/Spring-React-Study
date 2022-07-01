import React, {useState} from 'react';
import styled from "styled-components";
import '../styles/Login.css';
import { Link } from "react-router-dom";
import axios from 'axios';

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
            <img className='logoImage' alt='logo' src='assets/imgs/logo_x.png' ></img>
            <DivStyle>
                <Cover>
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
    margin: 100px auto;
`;

export default Login;