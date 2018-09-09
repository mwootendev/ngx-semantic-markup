import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdfaEntityDirective, RdfaPropertyDirective, RdfaValueDirective } from './directives';

const DIRECTIVES = [
  RdfaEntityDirective,
  RdfaPropertyDirective,
  RdfaValueDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class RdfaSemanticMarkupModule { }
