import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { Box } from "grommet";
import {StatusGood} from 'grommet-icons'
import styled from 'styled-components'

const SubsResult = ({close}) => {

  return (
        <SubsBox fill justify='center' align='center'>
          <div>
            <img src='/tinggel.png' alt='팅젤이' />
            <h2><StatusFilled/>구독이 완료되었어요!</h2>
            <button onClick={close}>확인</button>
          </div>
        </SubsBox>
  );
};

export default SubsResult;

const StatusFilled = styled(StatusGood)`
  path[fill="none"] {
    fill: #ffce1f;
  }
`;

const SubsBox = styled(Box)`
z-index: 3;
font-family: 'NeoDunggeunmo';
//background-color: rgb(177, 181, 230, 0.95);
//background-color : rgb(255,147,0,0.95);
background-color : rgb(0,0,0,0.5);

position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 99;

 
    
/* 팝업이 열릴때 스르륵 열리는 효과 */
animation: modal-show 0.3s;
overflow: hidden;


@keyframes modal-show {
    from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
}

> div {
    background-color : #fff;
    padding: 100px;
    text-align: center;


    >img {
        width: 200px;
    }

    > h2 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        font-size : 25px;

        > svg {
            width: 40px;
            height: 40px;
        }

        @media screen and (max-width: 768px) {
            font-size : 18px;
        }
    }

    > button {
        background-color : #ffce1f;
        border: 1px solid #ffcd2f;
        border-radius: 10px;
        outline: 0;
        font-size: 18px;
        padding: 5px 10px;
        width: 200px;
        margin-top: 15px;
        cursor: pointer;
    }

}


`
