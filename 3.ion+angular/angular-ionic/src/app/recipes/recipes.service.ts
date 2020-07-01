import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlDN8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingeridents: ['french fires', 'pork meat', 'salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://t.aimg.sk/magaziny/MpCjWriDQaD7g0-94w5DOQ.1280~pagety-s-r-chlou-om-kou-zo-su-en-ch-paradajok.jpg?t=LzB4NjU6MTI4MHg3ODQvZml0LWluLzc0OHg0MjE&h=CAEVwMV3gHeLYrGcGUaxSg&e=2145916800&v=1',
      ingeridents: ['french fires', 'pork meat', 'salad']
    }
  ];

  constructor() { }

  getAllRecipes () {
    //vrati novu kopiu this.recipes nie pointer
    return [...this.recipes];
  }

  getRecipe (recipeId: string) {
    console.log(this.recipes);
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe (recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
