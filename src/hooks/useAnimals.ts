import { useRef, useState, useEffect, useCallback } from "react";
import { searchAnimals } from "../services/animals";
import { Animal } from '../models/animal';

interface Props {
  search: string;
}

export const useAnimals = ({ search }: Props) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  

  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  const getAnimals = useCallback(async ({ search }: Props) => {
    if (search === previousSearch.current) return;
    // search es ''

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newAnimals = await searchAnimals({ search });
      setAnimals(newAnimals);
    } catch (e: any) {
      setError(e.message);
    } finally {
      // tanto en el try como en el catch
      setLoading(false);
    }
  }, []);

  return { animals: animals, getAnimals, loading };
}

export const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar un animal vacio");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError("");
  }, [search]);

  return { search, updateSearch, error };
};
