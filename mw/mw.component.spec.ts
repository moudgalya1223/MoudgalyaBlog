import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWComponent } from './mw.component';

describe('MWComponent', () => {
  let component: MWComponent;
  let fixture: ComponentFixture<MWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MWComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
