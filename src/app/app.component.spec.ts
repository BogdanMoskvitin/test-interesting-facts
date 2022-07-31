import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

class dialogMock {
  open() {
    return {
      afterClosed: () => of({})
    }
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dialog: any; /* */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [
        AppComponent
      ],
      providers: [
        DatePipe,
        { provide: MatDialog, useClass: dialogMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog)
    fixture.detectChanges();
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('randomListMath.length should be equal five', () => {
    expect(component.randomListMath.length).toBe(5)
  })

  it('randomListNumber.length should be equal five', () => {
    expect(component.randomListNumber.length).toBe(5)
  })

  it('randomListDate.length should be equal five', () => {
    expect(component.randomListDate.length).toBe(5)
  })

  it('getRandomLists after 10000ms should return randomLists with five elements', () => {
    jasmine.clock().install();
    component.getRandomLists();
    jasmine.clock().tick(10000);
    expect(component.randomListMath.length).toBe(5)
    expect(component.randomListNumber.length).toBe(5)
    expect(component.randomListDate.length).toBe(5)
  })

  it('showMathFact should open FactDialogComponent', (() => {
    const spy = spyOn(dialog, 'open').and.callThrough();
    component.showMathFact(1);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('showNumberFact should open FactDialogComponent', (() => {
    const spy = spyOn(dialog, 'open').and.callThrough();
    component.showNumberFact(1);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('showDateFact should open FactDialogComponent', (() => {
    const spy = spyOn(dialog, 'open').and.callThrough();
    component.showDateFact(1, 1);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('getMath() should call showMathFact()', () => {
    expect(component.getMath()).toBe(component.showMathFact(1))
  })

  it('getNumber() should call showNumberFact()', () => {
    expect(component.getNumber()).toBe(component.showNumberFact(1))
  })

  it('getDate() should call showMathFact()', () => {
    expect(component.getDate()).toBe(component.showDateFact(1, 1))
  })
});
