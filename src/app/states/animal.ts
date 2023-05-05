import { Animal } from '../../models/animal';
import { createSlice } from '@reduxjs/toolkit';

const initialState : Animal[] = [];

export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setAnimals: (state, action) => {
      return action.payload;
    },
    setSearchStatus: (state, action) => {

      console.log(action.type)

      return action.payload;
    }
  }
});
export const { setAnimals } = animalSlice.actions;


export default animalSlice.reducer;