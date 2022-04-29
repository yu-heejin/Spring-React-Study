import React, {Component, } from 'react';
import styled from "styled-components";
import './App.css';
import axios from 'axios';

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

        // axios.post("http://localhost:8080/users/login", user)
        // .then((response) => {
        //     alert(response.data)
        //     console.log(response.data)
        // })
        // .catch(e => {
        //     alert(e);
        // });
    }

    // componentDidMount() {
    //     axios.get("http://localhost:8080/api")
    //    // .then(response => console.log(response.data));  => spring에서 데이터 받아서 콘솔에 출력
    //    .then(response => response.data)
    //    .then((data) => {
    //        this.setState({logins: data})
    //    });
    // }

    render() {
        //const {id, pw} = this.state;
        return (
            <>
                <img className='logoImage' alt='logo' src='imgs/logo_x.png' ></img>
                <DivStyle>
                    
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
                        <a href='#'>sign up</a>
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