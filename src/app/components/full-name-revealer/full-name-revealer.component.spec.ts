import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameRevealerComponent } from './full-name-revealer.component';

describe('FullNameRevealerComponent', () => {
  let component: FullNameRevealerComponent;
  let fixture: ComponentFixture<FullNameRevealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNameRevealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNameRevealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
