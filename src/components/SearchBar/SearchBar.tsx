import React, { useState, useMemo, useEffect } from "react";
import debounce from "just-debounce-it";
import { useDispatch } from "react-redux";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

import { setAnimals } from "../../app/states/animal";
import { useAnimals, useSearch } from "../../hooks/useAnimals";

import {
  ClearButton,
  SearchContainer,
  SearchButton,
  SearchInput,
} from "./styles";

interface Props {
  children: React.ReactNode;
  styles: {};
}

export default function SearchBar({ children, styles }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { search, updateSearch } = useSearch();
  const { animals, getAnimals } = useAnimals({ search });

  const debouncedGetAnimals = useMemo(
    () =>
      debounce((search: string) => {
        getAnimals({ search });
      }, 300),
    [getAnimals]
  );

  const [inputValues, setInputValues] = useState(() => {
    const searchQuery = queryParams.get("q");

    if (searchQuery) {
      updateSearch(searchQuery);
      debouncedGetAnimals(searchQuery);
      return { q: searchQuery };
    }

    return { q: "" };
  });

  useEffect(() => {
    dispatch(setAnimals(animals));
  }, [animals, dispatch]);

  const handleSubmit = () => {
    navigate("/search?q=" + inputValues.q);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      dispatch(setAnimals([]));
      handleSubmit();
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleClearClick = () => {
    setInputValues({
      ...inputValues,
      q: "",
    });
  };

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
          name="q"
        />
        {inputValues.q && (
          <ClearButton onClick={handleClearClick}>
            <AiOutlineClose />
          </ClearButton>
        )}
      </SearchContainer>
      {children}
    </>
  );
}
