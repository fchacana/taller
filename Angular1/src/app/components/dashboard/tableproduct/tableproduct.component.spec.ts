import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableproductComponent } from './tableproduct.component';

describe('TableproductComponent', () => {
  let component: TableproductComponent;
  let fixture: ComponentFixture<TableproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
