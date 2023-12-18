import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByCityNameComponent } from './list-by-city-name.component';

describe('ListByCityNameComponent', () => {
  let component: ListByCityNameComponent;
  let fixture: ComponentFixture<ListByCityNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListByCityNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListByCityNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
