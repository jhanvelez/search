// interfas para manejar el objeto local
export interface Animal {
  uuid: number;
  name: string;
  url: string;
  title: string;
  description: string;
}

// Se crea esta interface para indentificar que elementos nos retorna la API
export interface AnimalApi {
  characteristics: number;
  name: string;
  url: string;
  locations: string;
  description: string;
}
