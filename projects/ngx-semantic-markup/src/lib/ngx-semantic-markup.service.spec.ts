import { TestBed, inject } from '@angular/core/testing';

import { NgxSemanticMarkupService } from './ngx-semantic-markup.service';

describe('NgxSemanticMarkupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxSemanticMarkupService]
    });
  });

  it('should be created', inject([NgxSemanticMarkupService], (service: NgxSemanticMarkupService) => {
    expect(service).toBeTruthy();
  }));
});
