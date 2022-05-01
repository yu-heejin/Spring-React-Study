import React, {Component, } from 'react';
import styled from "styled-components";
import './Register.css';
import GlobalStyles from './GlobalStyle';


class RegisterComponent extends Component {
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
                                <td><input type="email" name="email"></input></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>&nbsp;</td>
                                <td><input type="password" name="pw"></input></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>&nbsp;</td>
                                <td><input type="text" name="phone"></input></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>&nbsp;</td>
                                <td><input type="text" name="name"></input></td>
                            </tr>
                            <tr>
                                <td>Birthday</td>
                                <td>&nbsp;</td>
                                <td><input type="date" name="birth"></input></td>
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
margin: 50px auto;
`;

export default RegisterComponent;