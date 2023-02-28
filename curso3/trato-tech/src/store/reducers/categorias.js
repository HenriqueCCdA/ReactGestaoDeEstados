import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorios: (state, {payload}) => {
      state.push(...payload);
    }
  }
});

export const { adicionarCategorios } = categoriasSlice.actions;

export default categoriasSlice.reducer;
