import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeListComponent } from './contact-type-list.component';

describe('ContactTypeListComponent', () => {
  let component: ContactTypeListComponent;
  let fixture: ComponentFixture<ContactTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
