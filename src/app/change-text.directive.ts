import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {
  numberOfClicks = 0;
  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive.";
 }
 @HostListener('click', ['$event.target'])
 onClick(btn) {
   console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
}
}
