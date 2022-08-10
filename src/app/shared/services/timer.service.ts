import { Injectable } from '@angular/core';
import { TimerState } from '../data';

/**
 * Wraps the setInterval function to allow for pause and resume
 */
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // time remaining when paused
  remaining = 0;
  timeStarted = new Date();
  timer: any;
  resumeId: any;
  // ms timer was paused
  pausedTime = 0;
  lastPausedTime = new Date();
  private interval!: number;
  callback!: Function;
  // Initially, timer is unset without an interval
  private state = TimerState.Unset;

  get timerState () {
    return this.state;
  }

  constructor() {
    this.timer = null;
    this.resumeId = null;
  }

  setInterval(interval: number, callback: Function): void {
    this.interval = interval;
    this.callback = callback;
    this.createTimer();
  }

  // Run the stored callback function each time the timer fires
  createTimer(): void {
    this.timer = setInterval(() => {
        this.callback();
    }, this.interval);
    this.timeStarted = new Date();
    this.state = TimerState.Running;
  }

  // Stop the timer, recording the time remaining and when
  pauseTimer(): void {
      //store remaining ms then clear the timer
      this.lastPausedTime = new Date();
      // Interval, minus the difference between paused & started, and add last total of all time paused
      this.remaining = this.interval - (this.lastPausedTime.valueOf() - this.timeStarted.valueOf()) + this.pausedTime;
      clearInterval(this.timer);
      clearTimeout(this.resumeId);
      this.state = TimerState.Paused;
  }

  // get the remaining time, do a single timeout & then just restart setInterval again
  resumeTimer(): void {
      this.pausedTime += new Date().valueOf() - this.lastPausedTime.valueOf();
      this.resumeId = setTimeout(() => {
          this.callback();
          this.createTimer()
      }, this.remaining);
      this.state = TimerState.Running;
  }
}
