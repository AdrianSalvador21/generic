import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[twoAutoFocus]'
})
export class AutofocusDirective implements AfterContentInit {

  @Input() public appAutoFocus: boolean;

  public constructor(protected el: ElementRef) {

  }

  public ngAfterContentInit() {
    setTimeout(() => {

      this.el.nativeElement.focus();

    }, 100);

  }

}
