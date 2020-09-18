import { Ingredient } from './ingredient.model';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipes(): Subscription {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put('https://coocking-book-d4d21.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => {});
  }
  // tslint:disable-next-line: typedef
  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://coocking-book-d4d21.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
