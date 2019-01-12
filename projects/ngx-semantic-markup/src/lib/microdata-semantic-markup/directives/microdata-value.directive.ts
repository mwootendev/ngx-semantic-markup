import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[microdata][semanticValue]'
})
export class MicrodataValueDirective {

  @HostBinding('attr.content')
  @Input()
  public content: string;
  
  constructor() { }

}
