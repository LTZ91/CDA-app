import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCitiesComponent } from './list-all-cities.component';

describe('ListAllCitiesComponent', () => {
  let component: ListAllCitiesComponent;
  let fixture: ComponentFixture<ListAllCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllCitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
