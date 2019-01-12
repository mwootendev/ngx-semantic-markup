import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[rdfa][semanticProperty]'
})
export class RdfaPropertyDirective {

  @HostBinding('attr.property')
  @Input()
  public semanticProperty: string;
  
  constructor() { }

}
