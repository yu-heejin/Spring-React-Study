import React, {Component, } from 'react';
import styled from "styled-components";
import './App.css';

class LoginApp extends Component {
    render() {
        return (
            <>
                <img className='logoImage' alt='logo' src='imgs/logo_x.png' ></img>
                <DivStyle>
                    
                    <h2>Sign up</h2>
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
                        </table>
                        <p>
                            <button type="submit">sign up</button>
                        </p>
                    </form>
                </DivStyle>
        </>
        )
    }    
}

//style code list
const DivStyle = styled.div`
    width: 800px;
    height: 500px;
    background-color: white;
    margin: 0px auto;
    border-radius: 30px;
`;

export default LoginApp;