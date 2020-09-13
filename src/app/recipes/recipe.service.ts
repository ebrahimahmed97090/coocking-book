import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Meat Recipe',
      'test description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
      [new Ingredient('meat', 1), new Ingredient('salt', 20)]
    ),
    new Recipe(
      'Cake',
      'test description',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
      [new Ingredient('flour', 1), new Ingredient('buns', 20)]
    ),
  ];
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
