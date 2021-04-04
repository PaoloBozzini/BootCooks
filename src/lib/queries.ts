import { Query } from "../types/query"

const queries:Query[] = [

      {
            type: 'text',
            name:'q'
      },
      {
            type: 'radio',
            name: 'mealType',
            class: 'Course',
            options:[
                  {
                        label: 'Breakfast',
                        value: 'breakfast'
                  },
                  {
                        label: 'Lunch',
                        value: 'lunch'
                  },
                  {
                        label: 'Snack',
                        value: 'snack'
                  },
                  {
                        label: 'Dinner',
                        value: 'dinner'
                  }
            ] 

      },
      {
            type: 'radio',
            name: 'diet',
            class: 'Diet',
            options: [
                  {
                        label: 'Balanced',
                        value: 'balanced'
                  },
                  {
                        label: 'High protein',
                        value: 'high-protein'
                  },
            
                  {
                        label: 'Low fat',
                        value: 'low-fat'  
                  },
                  {
                        label: 'Low carb',
                        value: 'low-carb'
                  },
            ] 
      },
      {
            type: 'checkbox',
            name: 'cuisineType',
            class: 'Cuisine',
            options: [
                  {
                        label: 'American',
                        value: 'american'
                  },
                  {
                        label: 'Chinese',
                        value: 'chinese'
                  },
                  {
                        label: 'French',
                        value: 'french'
                  },
                  {
                        label: 'Indian',
                        value: 'indian'
                  },
                  {
                        label: 'Italian',
                        value: 'italian'
                  },
                  {
                        label: 'Japanese',
                        value: 'japanese'
                  },
                  {
                        label: 'Kosher',
                        value: 'kosher'
                  }
            ]
      },
      {
            type: 'checkbox',
            name: 'health',
            class: 'Health',
            options: [
                  {
                        label: 'Alcohol Free',
                        value: 'alcohol-free'
                  },
                  {
                        label: 'Celery Free',
                        value: 'celery-free'
                  },
                  {
                        label: 'Crustcean Free',
                        value:'crustcean-free'
                  },
                  {
                        label: 'Dairy Free',
                        value: 'dairy-free'
                  },
                  {
                        label: 'Eggs Free',
                        value: 'eggs-free'
                  },
                  {
                        label: 'Fish Free',
                        value: 'fish-free'
                  },
                  {
                        label: 'Gluten Free',
                        value: 'gluten-free'
                  },
                  {
                        label: 'Lupine Free',
                        value: 'lupine-free'
                  },
                  {
                        label: 'Mustard Free',
                        value: 'mustard-free'
                  },
                  {
                        label: 'Low Sugar',
                        value: 'low-sugar'
                  },
                  {
                        label: 'Peanut Free',
                        value: 'peanut-free'
                  },
                  {
                        label: 'Pescatarian',
                        value: 'pescatarian'
                  },
                  {
                        label: 'Sesame Free',
                        value: 'sesame-free'
                  },
                  {
                        label: 'Shellfish Free',
                        value: 'shellfish-free'
                  },
                  {
                        label: 'Soy Free',
                        value: 'soy-free'
                  },
                  {
                        label: 'Vegan',
                        value: 'vegan'
                  },
                  {
                        label: 'Vegetarian',
                        value: 'vegetarian'
                  }

            ]
      }
]

export default queries