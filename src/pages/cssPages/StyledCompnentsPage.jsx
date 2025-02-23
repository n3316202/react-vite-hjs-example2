import styled from 'styled-components';

const StyledCompnentsPage = () => {
  //이 방법을 사용하면 컴포넌트와 Style을 한 파일 내에서 관리할 수 있고, Class Name의 중복도 발생하지 않는다.
  //또한, JS 파일 내에 위치하기 때문에 props도 전달이 가능한데, 이 덕분에 조건부 서식 지정도 쉽게 가능해진다.

  const StyledDiv = styled.div`
    color: green;
  `;

  let 박스 = styled.div`
    padding: 20px;
    background-color: red;
  `;
  let 제목 = styled.h4`
    font-size: 25px;
    color: blue;
  `;

  return (
    //prettier-ignore
    <>
    <StyledDiv>
      <p>스타일드 컴포넌트 입니다.</p>
    </StyledDiv>
    <박스>
      <제목>styled components로 만든 태그 </제목>
    </박스>
    </>
  );
};

export default StyledCompnentsPage;
