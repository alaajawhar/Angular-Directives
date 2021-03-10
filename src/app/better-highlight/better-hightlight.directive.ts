import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  // for simply changing the background
  @HostBinding('style.color') color = 'red';

  @Input() fontSize = '100px';

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // Hover
  @HostListener('mouseenter') mouseHover(eventData: Event) {
    // @ts-ignore
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#2FCE9F', false, false);
    // @ts-ignore
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', this.fontSize, false, false);
    this.color = 'yellow';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // @ts-ignore
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.color = 'red';
    // @ts-ignore
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '20px', false, false);

  }


}
