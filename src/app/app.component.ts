import { Component, EventEmitter, Output  } from '@angular/core';
/*import { InputText } from '@angular/forms';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() featureSelected = new EventEmitter<string>(); // To instantiate we should put paranthesis

  title = 'Jamili Blog';
  /*InputText = ''*/

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
