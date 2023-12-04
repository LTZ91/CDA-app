import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentSubjectComponent } from './update-student-subject.component';

describe('UpdateStudentSubjectComponent', () => {
  let component: UpdateStudentSubjectComponent;
  let fixture: ComponentFixture<UpdateStudentSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStudentSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateStudentSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
