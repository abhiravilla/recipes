import { Component, OnInit } from '@angular/core';
import { recipeService } from './files/recipe.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  providers : [recipeService]
})
export class RecipebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
