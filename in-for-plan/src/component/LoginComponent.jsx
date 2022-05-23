import React, {Component, } from 'react';
import styled from "styled-components";
import '../css/Login.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: "",
            pw: "",
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
                id: this.state.id,
                pw: this.state.pw
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
                <img className='logoImage' alt='logo' src='imgs/logo_x.png' ></img>
                <DivStyle>
                    <Cover>
                    <form onSubmit={this.submitLogin}>
                        <p><input className='idClass' type="text"
                                    name="id"
                                    placeholder="ID"
                                    defaultValue={this.state.id}
                                    onChange={this.handleChange}
                            ></input>
                        </p>
                        <p>
                            <input  className='pwClass' type="password"
                                name="pw"
                                placeholder="Password"
                                defaultValue={this.state.pw}
                                onChange={this.handleChange}
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

export default LoginComponent;