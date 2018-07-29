import { Component, OnInit } from '@angular/core';
import { Recipe } from '../files/recipe.model';
import { recipeService } from '../files/recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes : Recipe[]; 
  constructor(private recpServ : recipeService) { }
  ngOnInit() {  
    this.recipes =  this.recpServ.getRecipeCopy();
  }
}
