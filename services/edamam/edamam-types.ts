export interface IIngredient {
    foodId: string
    label: string
    knownAs: string
    nutrients: {
        ENERC_KCAL: number
        PROCNT: number
        FAT: number
        CHOCDF: number
        FIBTG: number
    }
    category: string
    categoryLabel: string
    image: string
}

export interface IMeasures {
    uri: string
    label: string
    weight: number
}

export interface IParserRespError {
    errorCode: string
    message: string
    params: string[]
}

export interface IParserResp {
    text: string
    parsed: {
        food: IIngredient
    }[]
    hints: {
        food: IIngredient
        measures: IMeasures[]
    }[]
    _links: {
        next: {
            title: string
            href: string
        }
    }
}

export type NutrientsDailyParams =
  'ENERC_KCAL'
  | 'FAT'
  | 'FASAT'
  | 'CHOCDF'
  | 'FIBTG'
  | 'PROCNT'
  | 'CHOLE'
  | 'NA'
  | 'CA'
  | 'MG'
  | 'K'
  | 'FE'
  | 'ZN'
  | 'P'
  | 'VITA_RAE'
  | 'VITC'
  | 'THIA'
  | 'RIBF'
  | 'NIA'
  | 'VITB6A'
  | 'FOLDFE'
  | 'VITB12'
  | 'VITD'
  | 'TOCPHA'
  | 'VITK1'
export type NutrientTotalParams = NutrientsDailyParams | 'WATER'
export type INutrientDaily = {
    [name in NutrientsDailyParams]: {
        label: string;
        quantity: number;
        unit: string;
    };
};
export type INutrientTotal = {
    [name in NutrientTotalParams]: {
        label: string;
        quantity: number;
        unit: string;
    };
};

export interface INutrientsResp {
    'uri': string
    'calories': number
    'totalWeight': number
    'dietLabels': string[]
    'healthLabels': string[]
    'cautions': [],
    'totalNutrients': INutrientTotal
    'totalDaily': INutrientDaily
    'ingredients': [
        {
            'parsed': [
                {
                    'quantity': 100,
                    'measure': 'gram',
                    'food': 'unbleached flour',
                    'foodId': 'food_ar3x97tbq9o9p6b6gzwj0am0c81l',
                    'weight': 100,
                    'retainedWeight': 100,
                    'measureURI': 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
                    'status': 'OK'
                }
            ]
        }
    ]
}

interface ILinks {
    self: {
        href: string
        title: string
    },
    next: {
        href: string
        title: string
    }
}

export type ImageSizeType = 'THUMBNAIL' | 'SMALL' | 'REGULAR' | 'LARGE'
export type IReceiptImage = {
    [name in ImageSizeType]: {
        url: string
        width: number
        height: number
    };
};

interface IReceiptIngredient {
    text: string
    quantity: number
    measure: string
    food: string
    weight: number
    foodId: string
}

export interface IReceiptResponse {
    from: number
    to: number
    count: number
    _links: ILinks
    hits: [
        {
            recipe: {
                uri: string
                label: string
                image: string
                images: IReceiptImage
                source: string
                url: string
                shareAs: string
                yield: number
                dietLabels: string[]
                healthLabels: string[]
                cautions: string[]
                ingredientLines: string[]
                ingredients: IReceiptIngredient[],
                calories: number
                glycemicIndex: number
                inflammatoryIndex: number
                totalCO2Emissions: number
                co2EmissionsClass: string
                totalWeight: number
                cuisineType: string[]
                mealType: string[]
                dishType: string[]
                instructions: string[]
                tags: string[]
                externalId: string
                totalNutrients: INutrientTotal
                totalDaily: INutrientDaily
                digest: {
                    label: string
                    tag: string
                    schemaOrgTag: string
                    total: number
                    hasRDI: boolean
                    daily: number
                    unit: string
                    sub: string
                }[ ]
            },
            _links: ILinks
        }
    ]
}
