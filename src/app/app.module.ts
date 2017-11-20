import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppComponent } from './app.component';
import { BlogdesignComponent } from './blogdesign/blogdesign.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { DetailsComponent } from './details/details.component';
import { LearningpurposeComponent } from './learningpurpose/learningpurpose.component';
/*import { InputText } from '@angular/forms';*/

@NgModule({
  declarations: [
    AppComponent,
    BlogdesignComponent,
    BlogpageComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DetailsComponent,
    LearningpurposeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
