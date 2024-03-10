import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import Edamam from '../services/edamam/edamam'
import { IIngredient } from '../services/edamam/edamam-types'

interface CounterState {
    ingredient: IIngredient|null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  ingredient: null,
  status: 'idle',
}

export const getIngredientAction = createAsyncThunk(
  'stock/getIngredient',
  async (ingredientName: string) => {
    try {
      const data = await Edamam.getIngredient(ingredientName)

      return data.parsed[0].food
    } catch (e) {
      console.error('stock/getIngredient', e)
      throw e
    }
  },
)

export const stockSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearIngredient: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ingredient = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientAction.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getIngredientAction.fulfilled, (state, action) => {
        state.status = 'idle'
        state.ingredient = action.payload
      })
  },
})

export const { clearIngredient } = stockSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => { return state.stock }

export const stockReducer = stockSlice.reducer
