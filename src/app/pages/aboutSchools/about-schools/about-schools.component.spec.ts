import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSchoolsComponent } from './about-schools.component';

describe('AboutSchoolsComponent', () => {
  let component: AboutSchoolsComponent;
  let fixture: ComponentFixture<AboutSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
