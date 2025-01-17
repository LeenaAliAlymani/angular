import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactTypeFormComponent } from './contact-type-form.component';

describe('ContactTypeFormComponent', () => {
  let component: ContactTypeFormComponent;
  let fixture: ComponentFixture<ContactTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
