import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IDialogData, IResponseData } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fact-dialog',
  templateUrl: './fact-dialog.component.html'
})
export class FactDialogComponent implements OnInit, OnDestroy {

  responseData: IResponseData = {} as IResponseData
  aSub: Subscription = {} as Subscription

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.aSub = this.apiService.getData(this.data)
      .subscribe(res => this.responseData = res)
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe()
  }
}