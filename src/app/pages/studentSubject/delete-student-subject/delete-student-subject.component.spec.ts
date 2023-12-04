import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentSubjectComponent } from './delete-student-subject.component';

describe('DeleteStudentSubjectComponent', () => {
  let component: DeleteStudentSubjectComponent;
  let fixture: ComponentFixture<DeleteStudentSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStudentSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStudentSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
