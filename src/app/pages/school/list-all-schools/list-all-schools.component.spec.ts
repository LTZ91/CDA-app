import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSchoolsComponent } from './list-all-schools.component';

describe('ListAllSchoolsComponent', () => {
  let component: ListAllSchoolsComponent;
  let fixture: ComponentFixture<ListAllSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
