import { Injectable } from '@angular/core';
import { IntegerFrequencyTable } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FrequencyTableService {
  private frequencyTable: IntegerFrequencyTable;

  get integerFrequencies() {
      return this.frequencyTable.integerFrequencies;
  }

  constructor() {
    this.frequencyTable = new IntegerFrequencyTable();
  }

  // Add an integer to the frequency map
  addInteger(input: number): void {
    this.frequencyTable.addInteger(input);
  }

  getSortedIntegerFrequencies() {
    return this.frequencyTable.getSortedIntegerFrequencies();
  }
}
