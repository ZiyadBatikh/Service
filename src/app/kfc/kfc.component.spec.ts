import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfcComponent } from './kfc.component';

describe('KfcComponent', () => {
  let component: KfcComponent;
  let fixture: ComponentFixture<KfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
