import React, {Component, } from 'react';
import styled from "styled-components";
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class LoginApp extends Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: "",
            pw: "",
        };
    }

    componentDidUpdate(preProps) {
        if(this.props.userID !== preProps.userId) {
            this.fetchData(this.props.userID);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitLogin(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', this.id);
        formData.append('pw', this.pw);

        axios("http://localhost:8080/users/login",
        {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then((response) => {
                alert(response.data)
                console.log(response.data)
        })
        .catch(e => {
            alert(e);
        });
    }

    render() {
        return (
            <>
                <img className='logoImage' alt='logo' src='imgs/logo_x.png' ></img>
                <DivStyle>
                    <Cover>
                    <h2>Login</h2>
                    <form onSubmit={this.submitLogin}>
                        <p><input type="text"
                                    name="id"
                                    placeholder="ID"
                                    defaultValue={this.state.id}
                                    onChange={this.handleChange}
                            ></input>
                        </p>
                        <p>
                            <input type="password"
                                name="pw"
                                placeholder="Password"
                                defaultValue={this.state.pw}
                                onChange={this.handleChange}
                            ></input>
                        </p> 
                        <p>
                            <button type="submit">Login</button>
                        </p>
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
    margin: auto;
`;

export default LoginApp;