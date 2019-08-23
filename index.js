// Generate Silence by notchris <mail@chrismcgrane.com>

module.exports = class Silence {
    constructor(seconds) {
        this.seconds = seconds;
    }

    generate (opt) {
        let isOdd = (num) => { return num % 2; }
        let str = "A".repeat(this.seconds * 235530);
        let shift;

        if (this.seconds <= 59) {
            shift = "UklGRiSAoQBXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABAAZGF0YQCAoQ";
        } else {
            if (isOdd(this.seconds)) {
                shift = "UklGRiRyOCVXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABAAZGF0YQByOCU";
            } else {
                shift = "UklGRiTyliRXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABAAZGF0YQDyliQ";
            }
        }

        switch (opt) {
            case 'base64':
                return shift + str;
            case 'datauri':
                return 'data:audio/wav;base64,' + shift + str;
            case 'element':
                let a = new Audio('data:audio/wav;base64,' + shift + str);
                a.controls = true;
                return a;
            default:
                return shift + str;
        }
    }
};