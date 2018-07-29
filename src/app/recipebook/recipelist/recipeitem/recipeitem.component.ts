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
    console.log("In recipe item component "+this.item.name);
    this.router.navigate(['/recipebook','recipedetail']);
    // this.recpSer.recipeSelected.emit(this.index);
  } 
}
