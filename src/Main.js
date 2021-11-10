import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";
import "./styles/Main.css";

import styled from "styled-components";

const Main = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box fill background='#fff'>
      <HeaderBox fill justify='center' align='center'>
        <h1>COMING SOON</h1>
        <img src='/tinggelLetter.png' alt='팅젤이' style={{ width: "180px" }} />
      </HeaderBox>
      <ContentBox fill>
        <div>
          <h2>콘텐츠 소비자에서</h2>
          <h2>콘텐츠 생산자로 바뀌는 마법</h2>
        </div>
        <h2>팅티리팅팅💫 라이팅젤에서 곧 만나요!</h2>
      </ContentBox>
      <LetterBox fill>
        <h3>서비스가 준비되면, 가장 먼저 소식을 알려드릴게요.</h3>

        <form>
          <FormDiv>
            <div className='nameInput'>
              <input type='text' placeholder='이름 혹은 닉네임' />
            </div>
            <div className='emailInput'>
              <input type='text' placeholder='이메일 주소' />
            </div>
          </FormDiv>
          <div className='Check'>
            <label>
              <input type='checkbox' />
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
        </form>

        <div>
          <button>뉴스레터 신청하기</button>
        </div>
      </LetterBox>
    </Box>
  );
};

export default Main;

const HeaderBox = styled(Box)`
  padding: 100px 64px;
`;

const ContentBox = styled(Box)`
  background-color: #372874;
  padding: 100px 64px;
  color: #fff;

  > div {
    font-size: 2rem;
    line-height: 35px;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 80px;
  }
`;
const LetterBox = styled(Box)`
  padding: 100px 64px;

  > h3 {
    font-size: 25px;
  }
`;

const FormDiv = styled.div`
  display: flex;

  .nameInput {

    > input {
    padding: 5px 10px;
    }
  }

  .emailInput {
    > input {
      padding: 5px 10px;
      }
  }
`;
