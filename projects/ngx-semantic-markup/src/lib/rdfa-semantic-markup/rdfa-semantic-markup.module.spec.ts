import { RdfaSemanticMarkupModule } from './rdfa-semantic-markup.module';

describe('RdfaSemanticMarkupModule', () => {
  let rdfaSemanticMarkupModule: RdfaSemanticMarkupModule;

  beforeEach(() => {
    rdfaSemanticMarkupModule = new RdfaSemanticMarkupModule();
  });

  it('should create an instance', () => {
    expect(rdfaSemanticMarkupModule).toBeTruthy();
  });
});
