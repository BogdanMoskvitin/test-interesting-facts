import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mockMath } from 'src/app/mock/mock';
import { ApiService } from 'src/app/services/api.service';
import { FactDialogComponent } from './fact-dialog.component';
import { of } from 'rxjs';

describe('FactDialogComponent', () => {
  let component: FactDialogComponent;
  let fixture: ComponentFixture<FactDialogComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj<ApiService>(['getData']);
    apiServiceSpy.getData.and.returnValue(of(mockMath))
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FactDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: ApiService, useValue: apiServiceSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FactDialogComponent', () => {
    expect(component).toBeTruthy();
  });

  it('responseData should have math', () => {
    expect(component.responseData).toBe(mockMath)
  })
});
