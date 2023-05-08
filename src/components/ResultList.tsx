import { Suspense } from 'react';
import { Animal } from '../models/animal'
import styled from 'styled-components';

const ResultListContainer = styled.div`
  display: inline-block;
  text-align: left;
  position: relative;
  padding-bottom: 10%;
  padding-top: 1%;
  width: 45%;
`;

const Itemcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  border-radius: 10px;
  margin-left: 15%;
  margin-top: 2.5%;
`;

const Span = styled.span`
  margin-bottom: 2px;
  margin-top: 0;
`;

const Title = styled.h3`
  padding: 0;
  margin-bottom: 2px;
  display: inline-block;
  width: max-content;
  margin-top: 0;
  color: #2215ad;
  font-weight: 700;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin-bottom: 5px;
  font-size: smaller;
  margin-top: 0;
  font-weight: 400;
  font-size: 1rem;
`;

const ContenerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const ContenerLoadingBar = styled.div`
  margin: 0 2px;
  width: 8px;
  height: 24px;
  background-color: #d9d9d9;
  animation: loading 1s ease-in-out infinite;
  animation-delay: 0.1s;
`;

interface Props {
  animals: Animal[];
}

export default function ResultList({ animals }: Props) {
  return (
    <ResultListContainer>
      <Suspense fallback={<div>Buscando...</div>}>
        {
          animals > [] ?
            animals.map(animal => {
              return (
                <Itemcontainer key={animal.uuid}>
                  <Span>https://{animal.url}.com</Span>
                  <Title>{animal.title}</Title>
                  <Description>{animal.description}</Description>
                </Itemcontainer>
              )
            })

            :

            <ContenerLoading>
              <ContenerLoadingBar></ContenerLoadingBar>
              <ContenerLoadingBar></ContenerLoadingBar>
              <ContenerLoadingBar></ContenerLoadingBar>
              <ContenerLoadingBar></ContenerLoadingBar>
              <ContenerLoadingBar></ContenerLoadingBar>
            </ContenerLoading>
        }
      </Suspense>
    </ResultListContainer>
  )
}