import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'test description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
    ),
    new Recipe(
      'Cake',
      'test description',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
    ),
  ];
  // tslint:disable-next-line: typedef
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}
}
