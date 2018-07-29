import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';

export class recipeService{

    private recipe_array : Recipe[] = [new Recipe('Recipe1','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe2','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe3','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe4','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe5','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe6','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe7','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe8','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg'),
    new Recipe('Recipe9','Sample recipe','https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg')];
    
    recipeSelected = new EventEmitter<number>();
    
    add_recipe (item : Recipe){
        this.recipe_array.push(item);
    }
    getRecipeCopy(){
        return this.recipe_array.slice();
    }
    updateRecipe(index:number, item: Recipe){

    }
    getSpecificItem(index:number){
        return this.recipe_array[index];
    }
    getRecipeRef(){
        return this.recipe_array;
    }
}