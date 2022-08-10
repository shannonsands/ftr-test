import { Injectable } from '@angular/core';

const TOTAL_FIB_NUMBERS = 1000;
@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  // Cache of all fib numbers
  fibNumbers: number[] = [];

  constructor() {
    // Create the Fib number cache
    this.fibonacci(TOTAL_FIB_NUMBERS);
  }

  // Compute first 1000 numbers in fib sequence & cache result
    // For loop method for better performance vs recursive method
    fibonacci(num: number): void {
      let first = 0, second = 1;
      let nextTerm: number;
      for (let i = 0; i < num; i++) {
          this.fibNumbers.push(first);
          nextTerm = first + second;
          first = second;
          second = nextTerm;
      }
  }

  // Check a number is in the fib cache
  isFib(input: number): boolean {
    return !!this.fibNumbers.find(n => n === input);
}
}
