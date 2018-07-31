import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const appRoute : Routes = [ { path: '', redirectTo:'/recipebook', pathMatch:'full' },
                            { path : 'recipebook', component : RecipebookComponent, children:[
                                { path : 'recipelist', component:RecipebookComponent, children:[
                                    { path : 'recipeitem', component:RecipebookComponent}
                                ]},
                            ]},
                            { path : 'recipebook/recipedetail', component:RecipedetailComponent},
                            { path : 'recipebook/recipedetail:index', component:RecipedetailComponent},
                            { path : 'shoppinglist', component : ShoppinglistComponent},
                            { path: '**',redirectTo:'/recipebook'}
                           ];
@NgModule({
    imports: [ RouterModule.forRoot(appRoute,{ enableTracing: true })],
    exports:[RouterModule]
    })

export class Approuting{}