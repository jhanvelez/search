//Componenetes

import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultList from "../../components/ResultList/ResultList";
import CardDetail from "../../components/CardDetail/CardDetail";

import { AppStore } from "../../app/store";
import { useSelector } from "react-redux";

import { ContainerHeaderDiv, ResultsContainer } from "./styles";

export default function Results() {
  // Obtiene la lista de aniales
  const animals = useSelector((store: AppStore) => store.animals);

  return (
    <div>
      <Header>
        <ContainerHeaderDiv>
          <Logo
            styles={{
              width: `8%`,
              margin: `.5% 3% 0 0`,
            }}
          />
          <SearchBar
            styles={{
              boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
            }}
          > </SearchBar>
        </ContainerHeaderDiv>
      </Header>

      <ResultsContainer>
        <ResultList animals={animals} />

        <CardDetail> </CardDetail>
      </ResultsContainer>

      <Footer />
    </div>
  );
}
