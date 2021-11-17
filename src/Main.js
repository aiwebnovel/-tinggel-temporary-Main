import React, { useContext, useEffect, useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import "./styles/Main.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import axios from "axios";

import SubsResult from "./SubsResult";
import ReactGA from 'react-ga';


const Main = () => {
  const size = useContext(ResponsiveContext);

  const [isChecked, SetChecked] = useState(false);
  const [Email, SetEmail] = useState('');
  const [isEmail, SetIsEmail] = useState(false);
  const [ValiMessage, SetMessage] = useState('');
  const [SubsDone ,SetSubs] = useState(false);

  // console.log(isEmail)

  const HandleCheck = () => {
    SetChecked(!isChecked);
  };

  const HandleSubs = async(e) => {
    e.preventDefault();
    if (isChecked) {
      //console.log('email',Email)
      const config = {
        method: 'post',
        url: `https://veryshort.best:5051/api/v1/newsletter?email=${Email}`,
        headers: { 'authentication': localStorage.getItem("token"), },
      };

      await axios(config)
      .then((response)=>{
        //console.log(response);
        // toast.success("구독 신청이 완료 되었습니다!");
        SetSubs(true)
      })
      .catch((error)=>{
        console.log(error);
      })
    } else {
      toast.error("이메일 체크 및 개인정보 수집 및 이용에 동의해주세요");
    }
  };

  const ValidateEmail = (e) => {
    const emailRegex  = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const Valiemail = e.target.value;
    SetEmail(Valiemail);
    //console.log(email);
    //console.log(emailRegex.test(email));

    if(!emailRegex.test(Valiemail)){
      SetMessage('🙅‍♀️ 올바른 이메일 형식이 아닙니다.');
      SetIsEmail(false);
    }else {
      SetMessage('👍 올바른 이메일 형식이에요!');
      SetEmail(Valiemail)
      SetIsEmail(true);
    }
  }

  const Close = () => {
    SetSubs(false);
    // console.log(SubsDone);
  }

  useEffect(()=>{
    ReactGA.initialize('UA-212875619-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])

  return (
    <Box fill background='#fff'>
      {SubsDone &&  <SubsResult Subs={SubsDone} close={Close}/>}
      <Animation fill>
        <h1>COMING SOON! </h1>
      </Animation>
      <HeaderBox fill justify='center' align='center' gap='large'>
        <h1>🌟 팅젤이가 곧 찾아갈게요!</h1>
        <img src='/tinggel.png' alt='팅젤이' />
      </HeaderBox>
      <ContentBox fill>
        <div className='h2-1'>
          <h2>콘텐츠 소비자에서</h2>
          <h2>콘텐츠 생산자로 바뀌는 마법</h2>
        </div>
        <div className='h2-2'>
          <h2>팅티리팅팅💫 </h2>
          <h2>라이팅젤에서 곧 만나요!</h2>
        </div>
      </ContentBox>
      <LetterBox
        fill
        justify='center'
        align='center'
        direction={size !== 'small' ? "row" : "column"}
      >
        <img src='/tinggelLetter.png' alt='팅젤이2' />
        <LetterFormBox>
          <h3>서비스가 준비되면, 가장 먼저 소식을 알려드릴게요.</h3>
          <form className='FormTag'>
            <FormDiv>
              <div className='nameInput'>
                <input type='text' placeholder='이름 혹은 닉네임' />
              </div>
              <div className='emailInput'>
                <input type='text' placeholder='이메일 주소' onChange={ValidateEmail}/>
                <p className={isEmail ? 'correct' : 'incorrect'}>{ValiMessage}</p>
              </div>
            </FormDiv>
            <div className='Check'>
              <label onClick={HandleCheck}>
                <input type='checkbox' />
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            <SubBtn>
              <button onClick={(e)=>HandleSubs(e)} disabled={!isEmail} className={isEmail ? 'success' : 'error'}>
                {isEmail ? '뉴스레터 신청하기' : '빈 칸을 채워주세요!'}
              </button>
            </SubBtn>
          </form>
        </LetterFormBox>
      </LetterBox>
    </Box>
  );
};

export default Main;

const Animation = styled(Box)`
  background-color: #ffce1f;
  width: 100%;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid #444;
  padding-top: 5px;

  h1 {
    font-family: "NeoDunggeunmo";
    color: #444;

    position: absolute;
    text-align: right;
    width: 100%;
    height: 100%;
    padding: 10px;

    letter-spacing: 5px;
    font-size: 1.5em;
    font-weight: 600;

    animation: marquee 8s linear infinite;
  }

  @keyframes marquee {
    from {
      right: 0;
    }
    to {
      right: 100%;
    }
  }
`;

const HeaderBox = styled(Box)`
  padding: 100px 64px;

  > h1 {
    font-family: "NeoDunggeunmo";
    font-size: 2rem;
    font-weight: 600;
  }

  > img {
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;

    > h1 {
      font-size: 15px;
    }

    > img {
      width: 150px;
    }
  }
`;

const ContentBox = styled(Box)`
  background-color: #372874;
  padding: 120px 64px;
  color: #fff;
  gap: 30px;

  .h2-1,
  .h2-2 {
    font-size: 35px;
    line-height: 39px;
  }

  .h2-2 {
    font-weight: 600;
  }

  @media screen and (max-width: 680px) {
    padding-right: 24px;
    padding-left: 24px;

    > .h2-1,
    .h2-2 {
      line-height: 20px;
      font-size: 20px;
    }
  }
`;

const LetterBox = styled(Box)`
  padding: 120px 64px;
  gap: 50px;

  > img {
    width: 180px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const LetterFormBox = styled.div`
  > h3 {
    font-size: 1.8rem;
  }

  .FormTag {
    padding: 40px 0;
    width: 100%;
  }

  .Check {
    margin-top: 10px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    > h3 {
      font-size: 1.3rem;
    }

    .Check {
      font-size: 14px;
    }
  }
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .nameInput {
    > input {
      padding: 10px 8px;
      width: 100%;
      font-size: 17px;
    }
  }

  .emailInput {
    > input {
      padding: 10px 8px;
      width: 100%;
      font-size: 17px;

    }

    > p {
      font-size: 15px;
    }


    .correct {
      color: #ff9300;
    }

    .incorrect {
      color : red;
    }
  }
`;

const SubBtn = styled.div`

  margin-top : 15px;

  > button {
    cursor: pointer;
    background-color: #ffce1f;;
    color: #444;
    padding: 10px 20px;
    border: 1px solid #ffce1f;;
    outline: 0;
    font-size: 1.1rem;
  }

  .error {
    background-color : #f9f9f9;
    border: 1px solid  #444;
    color : #444;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
