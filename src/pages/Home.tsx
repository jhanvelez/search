import styled from 'styled-components';

import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const HomeText = styled.p`
  padding: 0 1dvh;
  margin: 0 1dvh;
  font-size: smaller;
`;

const HomeContainerSearch = styled.div`
  padding: 0 1dvh;
  margin: 0 1dvh;
  text-align: center;
  margin-top: 10%;
`;

const HomeContainerButton = styled.button`
  background-color: #f2f2f2;
  color: #757575;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  padding: 15px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 8%;
  margin: auto;
  margin-top: 10px;

  &:hover {
    background-color: #e2e2e2;
    color: #000;
  }
`;

export default function Home() {

  return (
    <HomeContainer>
      <Header>
        <HomeText>
          <strong>Agile Content</strong> Frontend test
        </HomeText>
      </Header>

      <HomeContainerSearch>
        <Logo styles={{
          width: `20%`,
          margin: 'auto'
        }} />

        <SearchBar styles={{
          width: `30%`,
          margin: 'auto',
          padding: `1dvh 2dvh`
        }}>
          <HomeContainerButton type='submit'>Buscar</HomeContainerButton>
        </SearchBar>

      </HomeContainerSearch>

      <Footer />
    </HomeContainer>
  )
}