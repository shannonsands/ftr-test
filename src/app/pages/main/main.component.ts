import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerState } from 'src/app/shared/data';
import { TimerService, FrequencyTableService, FibonacciService } from 'src/app/shared/services';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  quitApp = false;

  get timerSet (): boolean {
    return this.timerService.timerState !== TimerState.Unset;
  }

  get timerPaused(): boolean {
    return this.timerService.timerState === TimerState.Paused;
  }

  constructor(
    private timerService: TimerService,
    private frequencyTableService: FrequencyTableService,
    private fibonacciService: FibonacciService,
    private snackBarService: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.inputLabel = 'Please enter the amount of time in seconds between emitting numbers & their frequency';
    // Only show the timer output for 1 second at a time


  }

  setInterval(event: Event) {
    console.log('Set Interval');
    const number = (event.target as any).value;
    if (number) {
      this.interval = Number.parseFloat(number) * 1000;
      this.timerService.setInterval(this.interval, this.printSortedFreqs);
      this.inputLabel = 'Please enter the first number';
    }
  }

  updateFrequencyTable(event: Event) {
    const number = (event.target as any).value;
    if (number && !Number.isNaN(number)) {
      // Force numbers entered to be integers
      this.frequencyTableService.addInteger(Number.parseInt(number));
      this.lastNumber = null;
      // check fib & show notification
      const isFib = this.fibonacciService.isFib(Number.parseInt(number));
      if (isFib) {
        this.snackBarService.open('FIB', 'dismiss', {
          duration: 1000
        });
      }

    }
  }

  // Arrow function syntax to bind to the correct scope, for use as a callback
  printSortedFreqs = (): void => {
    setTimeout(() => {
      if (!this.timerPaused) {
        this.timerOutputRef.nativeElement.classList.remove('visible');
        this.timerOutputRef.nativeElement.classList.add('hidden');
      }
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
    this.timerOutputRef.nativeElement.classList.remove('hidden');
    this.timerOutputRef.nativeElement.classList.add('visible');
  }

  resume() {
    this.timerService.resumeTimer();
  }

  quit() {
    this.timerService.quitTimer();

  }
}
