import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-blogpage', // generally we follow like an element Eg: <app-blogpage></app-blogpage>
  // selector: '[app-blogpage]' this is an attribute selector Eg: <div app-servers></div>,
  // selector: '.app-blogpage' this is an class selector Eg: <div class="app-servers"></div>,
  // select by Id and pseudo like hover wont work
  templateUrl: './blogpage.component.html',

  /*either template or template url can be used*/
  /*template: `<p>  inline styling works! </p>`,*/

  styleUrls: ['./blogpage.component.css'],

  /*either styles or styleUrls can be used*/
  /*styles: [`
    h3 {
      color: dodgerblue;
    }
  `],*/
// encapsulation: ViewEncapsulation.Emulated // None, Native
  encapsulation: ViewEncapsulation.None
})
export class BlogpageComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  myname: String = 'Venkata Jamili';
  email: String = 'Venkataj22@gmail.com';
  mobile = '(248) 845-8558';
  mobiles = ['(248) 845-8558', '(908) 251-0284'];
  contactInfoStatus: String = 'Show Contact Info';
  listeningInputEvent = ''; // Instead of Empty we can give text which displays by default
  showInformation = true;

  getMobileNumber() {
    // this.mobiles.push(this.mobile); //Line is used to push the additional numbers in case of ngFor we use
    return this.mobile;
  }

  onClickContactInfo() {
    this.contactInfoStatus = 'Hide Contact Info';
  }

  getContactStatus() {
    return this.showInformation ? 'green' : 'red';
  }

  onListeningInputTextEvent(event: Event) {
    /*instead of Event type we can keep any if we don't know*/
    this.listeningInputEvent = (<HTMLInputElement>event.target).value;
    /* event.target.value gives typescript error as it don't know the value type so as we know it is HTMLInputElement we added it*/
  }

  constructor() {
    console.log('constructor called!');
    // property binding
    setTimeout(() => {
      this.showInformation = false; // false to hide
    }, 2000);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
   // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}

// Databinding is like communication to display business logic on template
// String Interpolation (  {{ data }}  )
// Property Binding (  [property] = "data"  )
// Event Binding (  (event) = "expression"  )
// Two way Binding (  ([ngModal]) = "data"  )
