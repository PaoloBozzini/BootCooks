export interface EdamamApiType {
      q: string;
      from: number;
      to: number;
      more: boolean;
      count: number;
      hits: RecipeType[];
      
}

export interface RecipeType {
      recipe: {
            uri: string;
            label: string;
            image: string;
            source: string;
            url: string;
            shareAs: string;
            yield: number;
            dietLabels: string[];
            healthLabels: string[];
            cautions: string[];
            ingredientLines: string[]
            ingredients: {
                  text: string;
                  weight: number;
                  foodCategory: string;
                  foodId: string;
                  image: string | null;
            }[];
            calories: number;
            totalWeight: number;
            totalTime: number;
            cuisineType: string[];
            mealType: string[];
            dishType: string[];
            totalNutrients: {
                  [Key: string]: {
                        label: string;
                        quantity: number;
                        unit: string;
                  }};
            totalDaily:{
                  [Key: string]: {
                        label: string;
                        quantity: number;
                        unit: string;
                  }
            };
            digest: {
                  label: string;
                  tag: string;
                  schemaOrgTag: string;
                  total: number;
                  hasRDI: boolean;
                  daily: number;
                  unit: string;
                  sub?: {label: string;
                        tag: string;
                        schemaOrgTag: string;
                        total: number;
                        hasRDI: boolean;
                        daily: number;
                        unit: string;
                  }[];
            }[];
      }
      bookmarked: boolean;
      bought: boolean;
}

export type RecipesStateType = RecipeType[] | []