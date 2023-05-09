import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 30%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1dvh;
  border-radius: 30px;
  height: 50%;
  margin: auto 0;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0;
  margin-right: 8px;
  font-size: 16px;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #ccc;
  cursor: pointer;
  margin: auto;

  &:hover {
    color: #000;
  }
`;
