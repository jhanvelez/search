import { Animal } from '../models/animal';
import { configureStore } from '@reduxjs/toolkit';
import { animalSlice } from '../app/states/animal'

export interface AppStore {
  animals: Animal[]
}

export default configureStore<AppStore>({
  reducer: {
    animals: animalSlice.reducer
  }
});