import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllStudentSubjectComponent } from './list-all-student-subject.component';

describe('ListAllStudentSubjectComponent', () => {
  let component: ListAllStudentSubjectComponent;
  let fixture: ComponentFixture<ListAllStudentSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllStudentSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllStudentSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
