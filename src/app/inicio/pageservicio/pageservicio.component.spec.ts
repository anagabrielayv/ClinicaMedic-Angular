import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageservicioComponent } from './pageservicio.component';

describe('PageservicioComponent', () => {
  let component: PageservicioComponent;
  let fixture: ComponentFixture<PageservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
