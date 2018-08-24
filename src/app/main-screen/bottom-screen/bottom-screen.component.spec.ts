import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomScreenComponent } from './bottom-screen.component';

describe('BottomScreenComponent', () => {
  let component: BottomScreenComponent;
  let fixture: ComponentFixture<BottomScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
