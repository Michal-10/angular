import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CustomDirectiveLs7]',
  standalone: true
})
export class CustomDirectiveLs7Directive {

  constructor(private el:ElementRef) {}

  @Input() colorDirective:string='';

  @HostListener ('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.colorDirective; 
  }
  
  @HostListener('mouseleave') onMouseLeave() { 
    this.el.nativeElement.style.backgroundColor = ''; 
  } 
  
}
