import { MicrodataSemanticMarkupModule } from './microdata-semantic-markup.module';

describe('MicrodataSemanticMarkupModule', () => {
  let microdataSemanticMarkupModule: MicrodataSemanticMarkupModule;

  beforeEach(() => {
    microdataSemanticMarkupModule = new MicrodataSemanticMarkupModule();
  });

  it('should create an instance', () => {
    expect(microdataSemanticMarkupModule).toBeTruthy();
  });
});
