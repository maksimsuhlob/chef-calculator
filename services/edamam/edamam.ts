import axios, { AxiosError } from "axios";
import { INutrientsResp, IParserResp, IParserRespError, IReceiptResponse } from "./edamam-types";
import { EdamamFoodKeys, EdamamReceiptsKeys } from "../../common/config";


const edamamFood = axios.create({
    baseURL: ' https://api.edamam.com/api/food-database/v2',
    headers: {
        'Accept-Encoding': 'gzip'
    },
    params: {
        ...EdamamFoodKeys
    }
})
const edamamReceipts = axios.create({
    baseURL: 'https://api.edamam.com',
    headers: {
        'Accept-Encoding': 'gzip',
        'Accept-Language': 'en'
    },
    params: {
        ...EdamamReceiptsKeys
    }
})

const getIngredient = async (ingredientName: string): Promise<IParserResp> => {
    try {
        const { data } = await edamamFood.get<IParserResp>('/parser', {
            params: {
                ingr: ingredientName
            }
        })
        return data
    } catch (err) {
        const error = err as AxiosError<Error>;
        if (axios.isAxiosError<IParserRespError[]>(error)) {
            // Access to config, request, and response
            console.log('getIngredient AxiosError', error)
        } else {
            // Just a stock error
            console.log('getIngredient Error', error)
        }
    }
}
const getNutrientsInfo = async (ingredient: {
    quantity: number,
    measureURI: string,
    qualifiers: string[]
    foodId: string
}): Promise<INutrientsResp> => {
    try {
        const { data } = await edamamFood.post<INutrientsResp>('/nutrients', {
            ingredients: [ingredient]
        })
        return data
    } catch (err) {
        const error = err as AxiosError<Error>;
        if (axios.isAxiosError<IParserRespError[]>(error)) {
            // Access to config, request, and response
            console.log('getNutrientsInfo AxiosError', error)
        } else {
            // Just a stock error
            console.log('getNutrientsInfo Error', error)
        }
    }
}
const getAutoComplete = async (ingredientName: string): Promise<string[]> => {
    try {
        const { data } = await edamamFood.get<string[]>('/auto-complete', {
            baseURL: 'https://api.edamam.com',
            params: {
                q: ingredientName
            }
        })
        return data
    } catch (err) {
        const error = err as AxiosError<Error>;
        if (axios.isAxiosError<IParserRespError[]>(error)) {
            // Access to config, request, and response
            console.log('getAutoComplete AxiosError', error)
        } else {
            // Just a stock error
            console.log('getAutoComplete Error', error)
        }
    }
}

const getReceipt = async (searchString: string): Promise<IReceiptResponse> => {
    try {
        const { data } = await edamamReceipts.get<IReceiptResponse>('/api/recipes/v2', {
            params: {
                q: searchString,
                type: 'public'
            }
        })
        return data
    } catch (err) {
        const error = err as AxiosError<Error>;
        if (axios.isAxiosError<IParserRespError[]>(error)) {
            // Access to config, request, and response
            console.log('getReceipt AxiosError', error)
        } else {
            // Just a stock error
            console.log('getReceipt Error', error)
        }
    }
}

export default {
    getIngredient,
    getAutoComplete,
    getNutrientsInfo,
    getReceipt
}
