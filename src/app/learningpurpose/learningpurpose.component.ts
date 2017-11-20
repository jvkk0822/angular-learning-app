import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-learningpurpose',
  templateUrl: './learningpurpose.component.html',
  styleUrls: ['./learningpurpose.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LearningpurposeComponent implements OnInit {

  /* Component Lifecycle*/
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
