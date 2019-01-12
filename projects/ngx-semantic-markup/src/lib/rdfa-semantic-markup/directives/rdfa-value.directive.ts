import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[rdfa][semanticValue]'
})
export class RdfaValueDirective {

  @HostBinding('attr.content')
  @Input()
  public semanticValue: string;
  
  constructor() { }

}
