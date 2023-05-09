import { Suspense } from "react";
import { Animal } from "../../models/animal";

import {
  ResultListContainer,
  Itemcontainer,
  Span,
  Description,
  Title,
  ContenerLoading,
  ContenerLoadingBar,
} from "./styles";

interface Props {
  animals: Animal[];
}

export default function ResultList({ animals }: Props) {
  return (
    <ResultListContainer>
      <Suspense fallback={<div>Buscando...</div>}>
        {animals > [] ? (
          animals.map((animal) => {
            return (
              <Itemcontainer key={animal.uuid}>
                <Span>https://{animal.url}.com</Span>
                <Title>{animal.title}</Title>
                <Description>{animal.description}</Description>
              </Itemcontainer>
            );
          })
        ) : (
          <ContenerLoading>
            <ContenerLoadingBar></ContenerLoadingBar>
            <ContenerLoadingBar></ContenerLoadingBar>
            <ContenerLoadingBar></ContenerLoadingBar>
            <ContenerLoadingBar></ContenerLoadingBar>
            <ContenerLoadingBar></ContenerLoadingBar>
          </ContenerLoading>
        )}
      </Suspense>
    </ResultListContainer>
  );
}
