import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F8F9F9;
  border-bottom: 1px #D7DBDD solid;
  padding: 10px 0;
`;

const HeaderContainerIcon = styled.div`
  display: flex;
  margin: 2dvh;
`;

const HeaderImageUser = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const HeaderIcon = styled.div`
  width: 30px;
  height: 30px;
`;

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  return (
    <HeaderContainer>
      {children}

      <HeaderContainerIcon>
        <HeaderIcon>
          <svg focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </HeaderIcon>

        <HeaderImageUser
          src="https://cdn.pixabay.com/user/2018/04/23/16-26-33-617_96x96.png"
          alt="Imagen usuario" />
      </HeaderContainerIcon>
    </HeaderContainer>
  )
}