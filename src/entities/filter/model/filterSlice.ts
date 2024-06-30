import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
  genre: string | null;
  year: string | null;
  name: string | null;
}

const initialState: FilterState = {
  genre: null,
  year: null,
  name: null,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateGenre: (state: FilterState, action: PayloadAction<string | null>) => {
      state.genre = action.payload;
    },
    updateYear: (state: FilterState, action: PayloadAction<string | null>) => {
      state.year = action.payload;
    },
    updateName: (state: FilterState, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateYear, updateName, updateGenre } = filterSlice.actions

export default filterSlice.reducer
