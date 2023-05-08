//Componenetes

import Logo from '../components/Logo';
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from '../components/SearchBar';
import ResultList from "../components/ResultList";
import CardDetail from '../components/CardDetail';

import { AppStore } from '../app/store'
import { useSelector } from 'react-redux'

import styled from 'styled-components';

const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContainerHeaderDiv = styled.div`
  display: flex;
`;


export default function Results() {
  // Obtiene la lista de aniales
  const animals = useSelector((store: AppStore) => store.animals);

  return (
    <div>
      <Header>
        <ContainerHeaderDiv>
          <Logo styles={{
            width: `8%`,
            margin: `.5% 3% 0 0`
          }} />
          <SearchBar styles={{
            boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`
          }}>

          </SearchBar>
        </ContainerHeaderDiv>
      </Header>

      <ResultsContainer>
        <ResultList animals={animals} />

        <CardDetail>

        </CardDetail>
      </ResultsContainer>

      <Footer />
    </div>
  );
}
