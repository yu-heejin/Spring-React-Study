import React, { useState } from 'react';
import styled from 'styled-components';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function AddProjectModal({ closeModalFunction }) {
    const [closeModal, setCloseModal] = useState(true);
    closeModalFunction(closeModal);

    return (
        <ModalBackground>
            <div style={{
                backgroundColor: 'white',
                paddingTop: '2%',
                paddingBottom: '3%',
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
                <h3>Meet Schedule 😲</h3>
                <Slider></Slider>
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