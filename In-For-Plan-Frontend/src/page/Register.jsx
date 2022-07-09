import React, { useState } from 'react';
import styled from "styled-components";
import '../styles/Register.css';
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [profile, setProfile] = useState('assets/imgs/basic.png');

    const onSubmit = (e) => {
        e.preventDefault();   //이거 없으면 값 초기화돼버림

        console.log({
            email,
            pw,
            phone,
            name,
            birth,
            profile
        })

        axios(
            {
                url: 'http://localhost:8080/api/v1/users',
                method: 'post',
                data: {
                    email: email,
                    password: pw,
                    phoneNumber: phone,
                    name: name,
                    birthDate: birth,
                    url: profile,
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

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeProfile = (e) => {
        setProfile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <img className='logoImage' alt='logo' src='assets/imgs/logo_x.png' ></img>
            <h1 style={
                {
                    color: '#bbe4f7'
                }
            }>Sign up</h1>
            <DivStyle>
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>&nbsp;</td>
                            <td><input type="email" name="email"
                            onChange={onChangeEmail}></input></td>
                            <td><button type='button' className='authenButton'>이메일 인증</button></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>&nbsp;</td>
                            <td><input type="password" name="pw"
                            onChange={onChangePw}></input></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>&nbsp;</td>
                            <td><input type="text" name="phone"
                            onChange={onChangePhone}></input></td>
                            <td><button type='button'  className='authenButton'>전화번호 인증</button></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>&nbsp;</td>
                            <td><input type="text" name="name"
                            onChange={onChangeName}></input></td>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <td>&nbsp;</td>
                            <td><input type="date" name="birth"
                            onChange={onChangeBirth}></input></td>
                        </tr>
                        <tr>
                            <td>Profile Image</td>
                            <td>&nbsp;</td>
                            <td>
                                <img
                                alt="profile"
                                src={profile}
                                className="profile_preview"
                                ></img>
                                <input type="file"
                                accept="image/*"
                                name="profile"
                                onChange={onChangeProfile}></input>
                                <p style={{
                                    fontSize: '10px',
                                }}>파일 크기는 200 x 200의 크기를 권장합니다.</p></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><button className="signButtonClass" type="submit">sign up</button></td>
                        </tr>
                    </table>
                </form>
            </DivStyle>
        </>
    )
   
}

//style code list
const DivStyle = styled.div`
width: 600px;
height: 300px;
margin: 40px auto;
`;

export default Register;