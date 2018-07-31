import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../files/recipe.model';
import { recipeService } from '../../files/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

 @Input() index : number;
 item : Recipe; 
  constructor(private recpSer : recipeService , private router : Router) { 
    }
  ngOnInit() {
    this.item = this.recpSer.getSpecificItem(this.index);
    }
  clicked(){
    this.router.navigate(['/recipebook','recipedetail'],{ queryParams: { index: this.index } });
    // this.recpSer.recipeSelected.emit(this.index);
  } 
}
