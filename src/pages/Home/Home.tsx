import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

import {
  HomeContainer,
  HomeContainerButton,
  HomeContainerSearch,
  HomeText,
} from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Header>
        <HomeText>
          <strong>Agile Content</strong> Frontend test
        </HomeText>
      </Header>

      <HomeContainerSearch>
        <Logo
          styles={{
            width: `20%`,
            margin: "auto",
          }}
        />

        <SearchBar
          styles={{
            width: `30%`,
            margin: "auto",
            padding: `1dvh 2dvh`,
          }}
        >
          <HomeContainerButton type="submit">Buscar</HomeContainerButton>
        </SearchBar>
      </HomeContainerSearch>

      <Footer />
    </HomeContainer>
  );
}
