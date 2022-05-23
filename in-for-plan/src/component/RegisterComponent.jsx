import React, {Component, } from 'react';
import styled from "styled-components";
import '../css/Register.css';
import GlobalStyles from '../css/GlobalStyle';
import axios from 'axios';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.state = {
            email: "",
            pw: "",
            phone: "",
            name: "",
            birth: "0000-00-00",
            file: "imgs/basic.png",
            fileUrl: "imgs/basic.png",
        };
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                fileUrl: reader.result
            })
        }
        reader.readAsDataURL(file);
    }

    submitLogin(event) {
        event.preventDefault();

        axios.post('http://localhost:8080/users/login', null, {
            params: {
                email: this.state.email,
                pw: this.state.pw,
                phone: this.state.phone,
                name: this.state.name,
                birth: this.state.birth,
                profile: this.state.profile,
            }
        }).then(function (response) {
            console.log(response);
            alert(response.data);
        }).catch(function (error) {
            console.log(error);
            alert("fail");
        })
    }
    
    render() {
        let profile_preview = null;
        if(this.state.file !== '') {
            profile_preview = <img className='profile_preview' alt="default" src={this.state.fileUrl}></img>
        } 
        return (
            <>
                <GlobalStyles></GlobalStyles>
                <img className='logoImage' alt='logo' src='imgs/logo_x.png' ></img>
                <h1 style={
                        {
                            color: '#bbe4f7'
                        }
                    }>Sign up</h1>
                     <DivStyle>
                        <form onSubmit={this.submitLogin}>
                        <table>
                            <tr>
                                <td>Email</td>
                                <td>&nbsp;</td>
                                <td><input type="email" name="email"
                                defaultValue={this.state.email}
                                onChange={this.handleChange}></input></td>
                                <td><button type='button' className='authenButton'>이메일 인증</button></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>&nbsp;</td>
                                <td><input type="password" name="pw"
                                defaultValue={this.state.pw}
                                onChange={this.handleChange}></input></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>&nbsp;</td>
                                <td><input type="text" name="phone"
                                defaultValue={this.state.phone}
                                onChange={this.handleChange}></input></td>
                                <td><button type='button'  className='authenButton'>전화번호 인증</button></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>&nbsp;</td>
                                <td><input type="text" name="name"
                                defaultValue={this.state.name}
                                onChange={this.handleChange}></input></td>
                            </tr>
                            <tr>
                                <td>Birthday</td>
                                <td>&nbsp;</td>
                                <td><input type="date" name="birth"
                                defaultValue={this.state.birth}
                                onChange={this.handleChange}></input></td>
                            </tr>
                            
                            <tr>
                                <td>Profile Image</td>
                                <td>&nbsp;</td>
                                <td>
                                    {profile_preview}
                                    <input type="file"
                                    accept="image/*"
                                    name="profile"
                                    onChange={this.handleImage}></input>
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
}

//style code list
const DivStyle = styled.div`
width: 600px;
height: 300px;
margin: 40px auto;
`;

export default RegisterComponent;