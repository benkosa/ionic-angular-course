import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;

  //vytihanutie dat z route
  constructor(
    private activateRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router) { }
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
    }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      console.log('ngOnInit');
      //ak nema recipeId tak uzivatela presmerujeme na home
      if(!paramMap.has('recipeID')) {
        //redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeID = paramMap.get('recipeID');
      this.loadedRecipe = this.recipesService.getRecipe(recipeID);
    });
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}
