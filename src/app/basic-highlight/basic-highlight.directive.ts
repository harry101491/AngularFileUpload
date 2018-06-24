import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit{
  @Input() defaultColor = "transparent";
  @Input() highlightColor = "red";
  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @Input() set appBasicHighlight(condition: boolean) {
  //   if(condition) {
  //     console.log("Inside when the condition is true");
  //   }
  //   else {
  //     console.log("Inside when the conditon is false");
  //   }
  // }
  constructor(
    private elementRef: ElementRef,
    private _renderer: Renderer2
    // private _templateRef: TemplateRef<any>,
    // private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this._renderer.setStyle(this.elementRef.nativeElement, "background-color", "red");
  }

  @HostListener('mouseenter') mouseEnter() {
    // this._renderer.setStyle(this.elementRef.nativeElement, "background-color", "red");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // this._renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = this.defaultColor;
  }
}
