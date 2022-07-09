import React from 'react';
import styled from 'styled-components';

function AddProjectModal() {
    return (
        <ModalBackground>
            <div style={{
                backgroundColor: 'white',
                paddingTop: '2%',
                paddingBottom: '2%',
                paddingLeft: '3%',
                paddingRight: '3%',
                display: 'inline-block',
                marginTop: '10%'
            }}>
                <h3>Create your project ✌️</h3>
            <form>
                <table>
                    <tr>
                        <td><b>Project title</b></td>
                        <td><TextInput type="text"></TextInput></td>
                    </tr>
                    <tr>
                        <td><b>Person</b></td>
                        <td><TextInput type="text"></TextInput></td>
                    </tr>
                    <tr>
                        <td><b>description</b></td>
                        <td><TextInput type="text"></TextInput></td>
                    </tr>
                </table>
                <CreateButton>create</CreateButton>
            </form>
            </div>
        </ModalBackground>
    );
}

const TextInput = styled.input`
    border-width: 1px;
    border-color: gray;
`

const CreateButton = styled.button`
    font-family: 'GmarketSansMedium';
    width: 400px;
    height: 40px;
    background-color: #E6F7FF;
    margin-top: 10px;
    border-width: 0px;
`

const ModalBackground = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.50);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    text-align: center;
`

export default AddProjectModal;