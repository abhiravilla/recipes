import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedFiles/Ingredients.model';
import { IngredientService } from '../sharedFiles/Ingredients.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
 
  constructor(private ingredientSer : IngredientService) { }
  ngOnInit() { }
  
}
