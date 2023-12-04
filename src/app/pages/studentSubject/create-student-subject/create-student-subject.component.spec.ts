import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentSubjectComponent } from './create-student-subject.component';

describe('CreateStudentSubjectComponent', () => {
  let component: CreateStudentSubjectComponent;
  let fixture: ComponentFixture<CreateStudentSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStudentSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStudentSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
