import { RecipeService } from './../../recipe.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  // tslint:disable-next-line: typedef
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
}
