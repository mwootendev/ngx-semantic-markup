import { NgModule } from '@angular/core';

import { MicrodataSemanticMarkupModule } from './microdata-semantic-markup/microdata-semantic-markup.module';
import { RdfaSemanticMarkupModule } from './rdfa-semantic-markup/rdfa-semantic-markup.module';

@NgModule({
  imports: [
    MicrodataSemanticMarkupModule,
    RdfaSemanticMarkupModule
  ],
  exports: [
    MicrodataSemanticMarkupModule,
    RdfaSemanticMarkupModule
  ]
})
export class NgxSemanticMarkupModule { }
