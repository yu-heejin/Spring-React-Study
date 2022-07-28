import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../styles/Slider.css';

function AddProjectModal({ closeModalFunction }) {
    const [closeModal, setCloseModal] = useState(true);
    const [num, setNum] = useState([2, 5]);
    const marks = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23'
    }

    const changeNum = (e) => {
        setNum(e);
        //setNum(e.target.value)   -> 슬라이더 안 움직임
        console.log(num);
    }

    closeModalFunction(closeModal);

    return (
        <ModalBackground>
            <div style={{
                backgroundColor: 'white',
                paddingTop: '2%',
                paddingBottom: '5%',
                paddingLeft: '10%',
                paddingRight: '10%',
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
                <h3>Meet Schedule Setting 😲</h3>
                <div>
                    <div style={{ float: 'left', textAlign: 'center', display: 'flex'}}>
                        <img className='profile' alt='profile' src='assets/imgs/dog.jpg'
                            style={{ width: '50px',
                                    borderRadius: '70%',
                                    float: 'left',
                                    display: 'inline'
                                }} ></img>
                    <Slider
                        range={num}
                        min={0}
                        max={23}
                        allowCross={true}
                        value={num}
                        onChange={val=>changeNum(val)}
                        marks={marks}
                        pushable={true}
                        style={{float: 'right',
                                display: 'inline'}}
 //                     count={10}  -> 범위를 10개정도 셈
                    >
                    </Slider>
                    </div>
                </div>
            </div>
        </ModalBackground>
    );
}

const ModalBackground = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.30);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
`

export default AddProjectModal;