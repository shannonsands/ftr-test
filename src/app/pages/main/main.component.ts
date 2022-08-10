import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerState } from 'src/app/shared/data';
import { TimerService, FrequencyTableService, FibonacciService } from 'src/app/shared/services';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('timerOutputRef') timerOutputRef!: ElementRef;
  inputLabel!: string;
  timerOutput!: string;
  lastNumber!: number | null;
  interval!: number;

  get timerSet (): boolean {
    return this.timerService.timerState !== TimerState.Unset;
  }

  constructor(
    private timerService: TimerService,
    private frequencyTableService: FrequencyTableService,
    private fibonacciService: FibonacciService
    ) { }

  ngOnInit(): void {
    this.inputLabel = 'Please enter the amount of time in seconds between emitting numbers & their frequency';
    // Only show the timer output for 1 second at a time


  }

  setInterval(event: Event) {
    const number = (event.target as any).value;
    if (number) {
      this.interval = Number.parseFloat(number) * 1000;
      this.timerService.setInterval(this.interval, this.printSortedFreqs);
      this.inputLabel = 'Please enter the first number';
    }
  }

  updateFrequencyTable(event: Event) {
    const number = (event.target as any).value;
    // check fib and show notification
    if (number && !Number.isNaN(number)) {
      // Force numbers entered to be integers
      this.frequencyTableService.addInteger(Number.parseInt(number));
      this.lastNumber = null;
    }
  }

  // Arrow function syntax to bind to the correct scope, for use as a callback
  printSortedFreqs = (): void => {
    // const sortedFreqs = `${this.ftrTest.getSortedIntegerFrequencies()}\n`;
    setTimeout(() => {
      this.timerOutputRef.nativeElement.classList.remove('visible');
      this.timerOutputRef.nativeElement.classList.add('hidden');
    }, this.interval / 3);
    this.timerOutputRef.nativeElement.classList.remove('hidden');
    this.timerOutputRef.nativeElement.classList.add('visible');
    const sortedFreqs = this.frequencyTableService.getSortedIntegerFrequencies();
    if (sortedFreqs) {
        this.timerOutput = sortedFreqs;
    }
  }

  halt() {
    this.timerService.pauseTimer();
  }

  resume() {
    this.timerService.resumeTimer();
  }

  quit() {
    this.timerService.pauseTimer();
  }


}
