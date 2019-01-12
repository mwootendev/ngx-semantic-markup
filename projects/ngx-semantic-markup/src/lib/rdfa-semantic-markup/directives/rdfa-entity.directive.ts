import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[rdfa][semanticEntity]'
})
export class RdfaEntityDirective {

  @HostBinding('attr.typeOf')
  @Input()
  public semanticEntity: string;
  
  @HostBinding('attr.vocab')
  @Input()
  public semanticContext: string;

  
  constructor() { }
  

}
