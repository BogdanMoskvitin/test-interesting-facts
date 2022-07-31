import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {

  getRandomListMath() {
    const randomListMath = []
    for(let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * 100);
      randomListMath.push(randomNumber)
    }
    return randomListMath
  }

  getRandomListNumber() {
    const randomListNumber = []
    for(let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * 100);
      randomListNumber.push(randomNumber)
    }
    return randomListNumber
  }
  
  getRandomListDate() {
    const randomListDate = []
    for(let i = 0; i < 5; i++) {
      let randomDay = Math.floor(Math.random() * 30) + 1;
      let randomMonth = Math.floor(Math.random() * 12) + 1;
      let randomNumber = [randomDay, randomMonth] 
      randomListDate.push(randomNumber)
    }
    return randomListDate
  }
}
