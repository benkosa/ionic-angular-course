import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipeService.getAllRecipes();
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
