import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'just-debounce-it';
import { useDispatch } from 'react-redux';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { setAnimals } from '../app/states/animal';
import { useAnimals, useSearch } from '../hooks/useAnimals';

const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1dvh 2dvh;
  border-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const SearchInput = styled.input`
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

const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const SearchButton = styled.button`
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

interface Props {
  children: React.ReactNode
  styles: {}
}

export default function SearchBar({ children, styles }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search, updateSearch } = useSearch();
  const { animals, getAnimals } = useAnimals({ search })

  const [inputValues, setInputValues] = useState({
    q: ''
  });

  const debouncedGetMovies = useCallback( (search: string) => debounce((search: string) => () => getAnimals({ search })), [getAnimals] );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const q = String(searchParams.get('q'));

    if (searchParams.get('q') != null) {
      setInputValues({
        ...inputValues,
        q: q
      })
    }

    if (q && !search) {
      updateSearch(q)
      debouncedGetMovies(q)
    }
  }, [])

  useEffect(() => {
    dispatch(setAnimals(animals))
  }, [animals]);

  const handleSubmit = () => {
    updateSearch(inputValues.q)
    debouncedGetMovies(inputValues.q)
    navigate('/search?q=' + inputValues.q)
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      dispatch(setAnimals([]))
      handleSubmit()
    }
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value
    })
  }

  const handleClearClick = () => {
    setInputValues({
      ...inputValues,
      q: ''
    })
  }

  return (
    <>
      <SearchContainer style={styles}>
        <SearchButton onClick={handleSubmit}>
          <AiOutlineSearch />
        </SearchButton>
        <SearchInput
          type="text"
          onKeyDown={handleKeyDown}
          value={inputValues.q}
          onChange={handleChange}
          name='q' />
        {inputValues.q && (
          <ClearButton onClick={handleClearClick}>
            <AiOutlineClose />
          </ClearButton>
        )}
      </SearchContainer>
      {children}
    </>
  )
}
