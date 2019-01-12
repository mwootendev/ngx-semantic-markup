import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[microdata][semanticProperty]'
})
export class MicrodataPropertyDirective {

  @HostBinding('attr.itemprop')
  @Input()
  public semanticProperty: string;
  
  constructor() { }
}
