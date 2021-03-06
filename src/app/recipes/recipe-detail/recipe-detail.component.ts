import { DataStorageService } from './../../shared/data-storage.service';
import { RecipeService } from './..//recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line: no-string-literal
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onAddTpShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.dataStorageService.storeRecipes();

    this.router.navigate(['/recipes/']);
  }
}
