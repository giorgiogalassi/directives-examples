import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
@Directive({
  selector: '[ggFontCustomization]',
})
export class FontCustomizationDirective implements OnInit {
  @Input() ggFontCustomization = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.style.color = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontSize(25);
    this.fontColor(this.ggFontCustomization);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontSize();
    this.fontColor(this.defaultColor);
  }

  private fontSize(size: number = 16) {
    this.el.nativeElement.style.fontSize = `${size}px`;
  }

  private fontColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
