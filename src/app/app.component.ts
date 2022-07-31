import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RandomNumbersService } from './services/random-numbers.service';
import { FactDialogComponent } from './components/fact-dialog/fact-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  mathForm : FormGroup;
  numberForm : FormGroup;
  dateForm : FormGroup;

  randomListMath: number[] = []
  randomListNumber: number[] = []
  randomListDate: number[][] = []

  constructor(
    private datePipe: DatePipe, 
    public dialog: MatDialog,
    private randomNumbersService: RandomNumbersService
  ) {
    this.mathForm = new FormGroup({       
      math: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),])
    });
    this.numberForm = new FormGroup({       
      number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),])
    });
    this.dateForm = new FormGroup({       
      date: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.randomListMath = this.randomNumbersService.getRandomListMath()
    this.randomListNumber = this.randomNumbersService.getRandomListNumber()
    this.randomListDate = this.randomNumbersService.getRandomListDate()
    this.getRandomLists()
  }

  getMath() {
    this.showMathFact(this.mathForm.value.math)
  }
  getNumber() {
    this.showNumberFact(this.numberForm.value.number)
  }
  getDate() {
    const day = this.datePipe.transform(this.dateForm.value.date, 'dd')
    const month = this.datePipe.transform(this.dateForm.value.date, 'MM')
    this.showDateFact(Number(day), Number(month))
  }

  getRandomLists() {
    setInterval(() => {
      this.randomListMath = this.randomNumbersService.getRandomListMath()
      this.randomListNumber = this.randomNumbersService.getRandomListNumber()
      this.randomListDate = this.randomNumbersService.getRandomListDate()
    }, 10000)
  }

  showMathFact(math: number) {
    this.dialog.open(FactDialogComponent, {
      data: { name: 'math', math },
    });
  }
  showNumberFact(number: number) {
    this.dialog.open(FactDialogComponent, {
      data: { name: 'number', number },
    });
  }
  showDateFact(day: number, month: number) {
    this.dialog.open(FactDialogComponent, {
      data: { name: 'date', day, month },
    });
  }
}