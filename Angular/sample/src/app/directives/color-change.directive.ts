import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective implements OnChanges {
  @Input() appColorchange:string;

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  ngOnChanges():void{
    this.setColor(this.appColorchange || 'black')
  }

  setColor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color)
  }
}