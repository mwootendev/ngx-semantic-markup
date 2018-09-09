import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrodataEntityDirective, MicrodataPropertyDirective, MicrodataValueDirective } from './directives';

const DIRECTIVES = [
  MicrodataEntityDirective,
  MicrodataPropertyDirective,
  MicrodataValueDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class MicrodataSemanticMarkupModule { }
