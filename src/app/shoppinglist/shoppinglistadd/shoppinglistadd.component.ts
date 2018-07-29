import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../sharedFiles/Ingredients.model';
import { IngredientService } from '../../sharedFiles/Ingredients.service';

@Component({
  selector: 'app-shoppinglistadd',
  templateUrl: './shoppinglistadd.component.html',
  styleUrls: ['./shoppinglistadd.component.css']
})
export class ShoppinglistaddComponent implements OnInit {

  @ViewChild('name') Ingname: ElementRef;
  @ViewChild('quantity') Ingquantity:ElementRef;
  ingItem : Ingredient;
  constructor(private ingredientSer : IngredientService) { }
  ngOnInit() { }
  ingAdd(){
    this.ingItem=new Ingredient(this.Ingname.nativeElement.value,this.Ingquantity.nativeElement.value);
    console.log("in list-edit ingAdd "+this.ingAdd);
    this.ingredientSer.addIngredient(this.ingItem);
  }

}
