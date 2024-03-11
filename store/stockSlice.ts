import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import Edamam from '../services/edamam/edamam'
import { IIngredient } from '../services/edamam/edamam-types'

interface StockState {
    ingredient: IIngredient|null;
    status: 'idle' | 'loading' | 'failed';
    autocomplete: string[]
}

const initialState: StockState = {
  ingredient: null,
  status: 'idle',
  autocomplete: [],
}

export const getIngredientAction = createAsyncThunk(
  'stock/getIngredientAction',
  async (ingredientName: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(clearAutocomplete())
      const data = await Edamam.getIngredient(ingredientName)

      return data.parsed[0].food
    } catch (e) {
      console.error('stock/getIngredient', e)
      throw e
    }
  },
)
export const getIngredientAutocompleteAction = createAsyncThunk(
  'stock/getIngredientAutocompleteAction',
  async (ingredientName: string) => {
    try {
      return await Edamam.getAutoComplete(ingredientName)
    } catch (e) {
      console.error('stock/getIngredientAutocompleteAction', e)
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
    clearAutocomplete: (state) => {
      state.autocomplete = []
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
      .addCase(getIngredientAutocompleteAction.fulfilled, (state, action) => {
        state.autocomplete = action.payload
      })
  },
})

export const { clearIngredient, clearAutocomplete } = stockSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStock = (state: RootState) => { return state.stock }

export const stockReducer = stockSlice.reducer
