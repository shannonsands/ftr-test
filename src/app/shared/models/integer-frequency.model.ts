// Simple interface for the k-v store for the frequency table
export interface IntegerFrequency {
    [key: number]: number;
}

// Storage & methods for operating on the frequency table
export class IntegerFrequencyTable {
    integerFrequencies: IntegerFrequency = {};

    // Add an integer to the frequency map
    addInteger(input: number): void {
        if (!this.integerFrequencies[input]) {
            this.integerFrequencies[input] = 0;
        }
        this.integerFrequencies[input]++;
    }

    getSortedIntegerFrequencies(): string | undefined {
        // Get an array of the keys:
        if (Object.keys(this.integerFrequencies).length > 0) {
            // Sort all the keys & return results as a formatted string
            return Object.keys(this.integerFrequencies)
            .map((k: string) => {
                return Number.parseInt(k);
            })
            .sort((a: number, b: number) => {
                return this.integerFrequencies[b] - this.integerFrequencies[a];
            })
            .map((k: number) => {
                return `${k}:${this.integerFrequencies[k]}`;
            })
            .join(', ');
        }
        return;
    }




}
