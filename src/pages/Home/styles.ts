import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const HomeText = styled.p`
  padding: 0 1dvh;
  margin: 0 1dvh;
  font-size: smaller;
`;

export const HomeContainerSearch = styled.div`
  padding: 0 1dvh;
  margin: 0 1dvh;
  text-align: center;
  margin-top: 10%;
`;

export const HomeContainerButton = styled.button`
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
