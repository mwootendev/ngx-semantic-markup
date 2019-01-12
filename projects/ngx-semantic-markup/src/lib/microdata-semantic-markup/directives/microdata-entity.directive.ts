import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[microdata][semanticEntity]'
})
export class MicrodataEntityDirective {

  @Input() semanticEntity: string;
  
  @Input() semanticContext: string = 'http://schema.org/';
  
  constructor() { }
  
  @HostBinding('attr.itemtype')
  public get itemtype() {
    return this.semanticContext + this.semanticEntity;
  }
  
  @HostBinding('attr.itemscope')
  public get itemscope() {
    return '';
  }
  
}
