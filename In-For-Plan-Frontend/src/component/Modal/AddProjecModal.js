import React, { useState } from 'react';
import styled from 'styled-components';

function AddProjectModal({ closeModalFunction }) {
    const [closeModal, setCloseModal] = useState(true);
    const [result, setResult] = useState(""); //검색결과
    const [isValue, setIsValue] = useState(false);   //입력값이 존재하는가?
    const [dropDownVal, setDropDownVal] = useState([]);   //자동 완성 리스트(초기값을 배열로 해야 map 사용 가능)
    const [inputVal, setInputVal] = useState("");
    var arr = ["test1@email.com", "test2@email.net"
        , "heejin@gmail.com", "tech@naver.com"
    ];

    const inputMembers = (e) => {
        setInputVal(e.target.value);
        let member = e.target.value;  //input data 저장하기
        let filterData = arr.filter((i) => 
            i.toLowerCase().includes(member.toLowerCase())
        );   //배열 데이터에 필터를 돌려 데이터를 소문자로 변환
        //입력값이 저장된 변수를 소문자로 변환시켜 같은 문자열이 포함되면 필터 데이터에 저장

        if(e.target.value === "") {
            setIsValue(false);    //변경이 한 박자 늦음
            filterData = [];
        } else {
            setIsValue(true);
        }

        setDropDownVal(filterData);
        console.log(filterData);
        console.log(isValue);
    }

    const onSearch = () => {
        //console.log(result);
        alert("invite " + result);
    }

    closeModalFunction(closeModal);

    return (
        <ModalBackground>
            <div style={{
                backgroundColor: 'white',
                paddingTop: '2%',
                paddingBottom: '3%',
                paddingLeft: '3%',
                paddingRight: '3%',
                display: 'inline-block',
                marginTop: '10%',
            }}>
                <img src='assets/icons/close.png' alt='close' style={{
                    width: '10px',
                    height: '10px',
                    float: 'right',
                    verticalAlign: 'top'
                }}
                onClick={function() {setCloseModal(false)}}></img>
                <h3>Create your project ✌️</h3>
            <form>
                <table>
                    <tr>
                        <td><b>Project title</b></td>
                        <td><TextInput type="text" name='title'></TextInput></td>
                    </tr>
                    <tr>
                        <td><b>Member</b></td>
                        <td><TextInput type="text" name='members' value={inputVal} onChange={inputMembers} placeholder="Enter the user email"></TextInput>
                        {isValue === true ? 
                            <DropDownContainer>
                                {dropDownVal.length === 0 ? 
                                    <p style={{
                                        fontSize: '10px',
                                    }}>There is no user.</p>
                                : dropDownVal.map((user) =>
                                <p style={{
                                    fontSize: '10px',
                                }}
                                    onClick={() => {
                                        setResult(user);
                                        setIsValue(false);
                                        setInputVal(user);
                                    }}>{user}</p>
                                )
                            }
                            </DropDownContainer>
                            : null
                        }
                        </td>
                        <td><button type='button' onClick={onSearch}
                        style={{padding: '10px',
                            fontFamily: 'GmarketSansMedium',
                            borderRadius: '7px',
                            backgroundColor: '#c7dfea',
                            borderWidth: '0px',
                            fontSize: '10px',
                            color: 'white'}}>Invite member</button></td>
                    </tr>
                    <tr>
                        <td><b>description</b></td>
                        <td><TextInput type="text" name='description'></TextInput></td>
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
`

const DropDownContainer = styled.div`
    display: block;
    margin: 0 auto;
    padding: 8px 0;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    list-style-type: none;
    z-index: 3;
    border-radius: 8px;
`

export default AddProjectModal;