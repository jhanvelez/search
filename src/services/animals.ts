import { AnimalApi } from "../models/animal";
import { v4 as uuidv4 } from "uuid";

const apikey = "zxqtcvzWZQ2TmdRXgvT47A==RteuVJa24Xbk0bTq";

interface Props {
  search: string;
}

export const searchAnimals = async ({ search }: Props) => {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/animals?name=${search}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apikey,
        },
      }
    );
    const json = await response.json();

    const animals = json;

    return animals?.map((animal: AnimalApi) => ({
      uuid: uuidv4(), // Al no tener retorno de un id en la API creo uno
      title: animal.name,
      description: Object.values(animal.characteristics)
        .join(" ")
        .toLocaleLowerCase(),
      image: animal.name,
      url: Object.values(animal.locations).join("").toLowerCase(),
    }));
  } catch (e) {
    throw new Error("Error searching animals");
  }
};
