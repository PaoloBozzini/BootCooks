import { Diet, MealType, CuisineType, Health, Range, DishType} from './edamamQueryType'

export interface Query {
      type: "text" | "checkbox" | "radio";
      name: string;
      class?: string;
      options?: Option[];
      onChange?: (event: Event) => void;
}



type Option = {
      label: string;
      value: Diet | MealType | CuisineType | Health | Range | DishType ;
      checked?: boolean;
}


// interface Option {
//       label: string;
//       checked?: boolean;
// }

// export type DietOptions = DietOption[]
// export type MealTypeOptions = MealTypeOption[]
// export type CuisineTypeOptions = CuisineTypeOption[]
// export type HealthOptions = HealthOption[]
// export type RangeOptions = RangeOption[]
// export type DishTypeOptions = DishTypeOption[]


// interface DietOption extends Option{
//       value: Diet
// }

// interface MealTypeOption extends Option {
//       value: MealType
// }

// interface CuisineTypeOption extends Option {
//       value: CuisineType
// }

// interface HealthOption extends Option {
//       value: Health
// }

// interface RangeOption extends Option {
//       value: Range
// }

// interface DishTypeOption extends Option {
//       value: DishType
// }

