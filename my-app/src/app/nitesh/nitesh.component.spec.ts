import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiteshComponent } from './nitesh.component';

describe('NiteshComponent', () => {
  let component: NiteshComponent;
  let fixture: ComponentFixture<NiteshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiteshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiteshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
