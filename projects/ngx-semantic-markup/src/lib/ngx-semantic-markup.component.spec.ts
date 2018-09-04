import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSemanticMarkupComponent } from './ngx-semantic-markup.component';

describe('NgxSemanticMarkupComponent', () => {
  let component: NgxSemanticMarkupComponent;
  let fixture: ComponentFixture<NgxSemanticMarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSemanticMarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSemanticMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
