import React, {Component, } from 'react';
import styled from "styled-components";
import './Register.css';
import GlobalStyles from './GlobalStyle';
import axios from 'axios';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            pw: "",
            phone: "",
            name: "",
            birth: "0000-00-00",
            //profile: 'url(../public/imgs/basic.png)'
            //작은 따옴표 없으면 url is not defined 오류남
            //url은 그냥 css 파일 안에서만 따옴표 없이 사용가능
        };
    }

    // componentDidUpdate(preProps) {
    //     if(this.props.userID !== preProps.userId) {
    //         this.fetchData(this.props.userID);
    //     }
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitLogin(event) {
        event.preventDefault();

        axios.post('http://localhost:8080/users/login', null, {
            params: {
                email: this.state.email,
                pw: this.state.pw,
                phone: this.state.phone,
                name: this.state.name,
                birth: this.state.birth
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
                            {/*
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td> <input type="file" name="profile"
                                defaultValue={this.state.profile}
                                onChange={this.handleChange}></input></td>
                            </tr>
                            */}
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