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


export default function Results() {
  // Obtiene la lista de aniales
  const animals = useSelector((store: AppStore) => store.animals);

  return (
    <div>
      <Header>
        <Logo styles={{
          width: `7%`
        }} />
        <SearchBar styles={{
          padding: `10px`
        }}>

        </SearchBar>
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
