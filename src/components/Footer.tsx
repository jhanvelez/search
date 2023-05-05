import styled from 'styled-components';

const Text = styled.p`
  margin: 2dvh;
  font-size: smaller;
`;

const Container = styled.footer`
  width: 100%;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F8F9F9;
  border-top: 1px #D7DBDD solid;
`;

export default function Footer() {
  return (
    <Container>
      <Text>Google 2023</Text>
      <Text>Version 1.1.0</Text>
    </Container>
  )
}