import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipebook/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglistaddComponent } from './shoppinglist/shoppinglistadd/shoppinglistadd.component';
import { HeaderComponent } from './header/header.component';
import { Approuting } from './app-routing.module';
import { recipeService } from './recipebook/files/recipe.service';
import { RecipeaddComponent } from './recipebook/recipeadd/recipeadd.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipebookComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppinglistaddComponent,
    HeaderComponent,
    RecipeaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Approuting
  ],
  providers: [recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
