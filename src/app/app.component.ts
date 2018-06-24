import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  OnChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
OnInit,
AfterViewInit,
OnDestroy,
OnChanges {
  @Input('name') elementName: string;
  @ViewChild('pElement') pElement: ElementRef;
  constructor()
  {
    console.log("Inside the constructor method");
  }

  ngOnInit() {
    console.log("Inside the ngOnInit method");
  }

  ngAfterViewInit() {
    console.log("Inside the ngAfterViewInit method");
  }

  ngOnDestroy() {
    console.log("Inside the ngOnDestroy Method");
  }

  ngOnChanges() {
    console.log("Inside the ngOnChanges Method");
  }

  onElementClick(elementRef: HTMLParagraphElement) {
    console.log(this.pElement.nativeElement);
  }

  externalEventFunction() {
    console.log("Event has happened");
  }
}
