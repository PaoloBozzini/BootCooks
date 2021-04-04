export interface EdamamQueryType {
  q: string;
  ingr?: Maximum;
  diet?: Diet;
  cuisineType?: CuisineType[];
  health?: Health[];
  mealType?: MealType;
  dishtype?: DishType[];
  calories?: Range;
  time?: Range;
  excluded?: string;
}

type Minimum = number;
type Maximum = number;
export type Range = `${Minimum}+` | `${Minimum}-${Maximum}` | `${Maximum}`;

export type Diet = "balanced" | "high-protein" | "low-fat" | "low-carb";

export type MealType = "lunch" | "snack" | "breakfast" | "dinner";

export type DishType =
  | "Alcohol-cocktail"
  | "Biscuits and cookies"
  | "Bread"
  | "Cereals"
  | "Condiments and sauces"
  | "Drinks"
  | "Desserts"
  | "Egg"
  | "Main course"
  | "Omelet"
  | "Pancake"
  | "Preps"
  | "Preserve"
  | "Salad"
  | "Sandwiches"
  | "Soup"
  | "Starter";

export type Health =
  | "alcohol-free"
  | "immune-Supportive"
  | "celery-free"
  | "crustcean-free"
  | "dairy-free"
  | "eggs-free"
  | "fish-free"
  | "fodmap-free"
  | "gluten-free"
  | "keto-friendly"
  | "kidney-friendly"
  | "kosher"
  | "low-potassium"
  | "lupine-free"
  | "mustard-free"
  | "low-fat-abs"
  | "No-oil-added"
  | "low-sugar"
  | "paleo"
  | "peanut-free"
  | "pescatarian"
  | "pork-free"
  | "red-meat-free"
  | "sesame-free"
  | "shellfish-free"
  | "soy-free"
  | "sugar-conscious"
  | "tree-nut-free"
  | "vegan"
  | "vegetarian"
  | "wheat-free";

export type CuisineType =
  | "american"
  | "asian"
  | "british"
  | "caribbean"
  | "central europe"
  | "chinese"
  | "eastern europe"
  | "french"
  | "indian"
  | "italian"
  | "japanese"
  | "kosher"
  | "mediterranean"
  | "mexican"
  | "middle eastern"
  | "nordic"
  | "south american"
  | "south east asian";
