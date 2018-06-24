import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pcomponent',
  templateUrl: './pcomponent.component.html',
  styleUrls: ['./pcomponent.component.scss']
})
export class PcomponentComponent implements OnInit {

  // @Output('externalEvent') externalEvent = new EventEmitter<void>();
  value = 9;

  constructor() { }

  ngOnInit() {
  }
}
