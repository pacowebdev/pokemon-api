import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class StyleCardDirective {

  private initialColor: string = 'lightgrey'
  private defaultColor: string = 'steelblue'
  private defaultHeight: number = 180

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight)
    this.setBorderColor(this.initialColor)
  }

  @Input('pokemonBorderCard') borderColor: string

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.initialColor)
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorderColor(color: string) {
    this.el.nativeElement.style.border = `3px solid ${color}`
  }
}
