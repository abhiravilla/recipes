import { Ingredient } from './Ingredients.model';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class IngredientService{
    ingredients : Ingredient[] = [new Ingredient('test ingredient',2)];
    addIngredient(item: Ingredient){
        this.ingredients.push(item);
    }
}