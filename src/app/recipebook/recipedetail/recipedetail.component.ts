import { Component, OnInit } from '@angular/core';
import { Recipe } from '../files/recipe.model';
import { recipeService } from '../files/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  recipe_detail : Recipe;
  itemIndex : number;
  
  constructor(private recpSer : recipeService,private route: ActivatedRoute) { }

  ngOnInit() {
    // this.recpSer.recipeSelected.subscribe(
    //   (index:number) => {
    //     console.log('In the recipedetail '+index+' fergerg');
    //     this.itemIndex = index;
    //     this.recipe_detail=this.recpSer.getSpecificItem(this.itemIndex);
    //     console.log('In recipedetail after assign '+this.recipe_detail.name);
    //   }
    // );   
      this.route.queryParams.subscribe(
        params => {
        this.itemIndex = +params['index'];
        this.recipe_detail=this.recpSer.getSpecificItem(this.itemIndex);
      }); 
  }
}