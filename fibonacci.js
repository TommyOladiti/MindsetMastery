class Fibonacci {
    constructor() {
        // Where does your sequence start by default? 
        this.init1 = 0;
        this.init2 = 1;
    }

    next() {

        // Return the next Fibonacci number in the current sequence
        const next = this.init1 + this.init2;

        this.init1 = this.init2;
        this.init2 = next;

        // for (let i = 2; i <= seed; i++)
            return next;
    }

    prev() {
        const prev = this.init2 - this.init1;

        this.init2 = this.init1;
        this.init1 = prev;

        return prev;
    }

    init(seed) {
        // if (this.init1 || this.init2 <= 1) {
        //     return seed;
        // }

        // for (let i = 2; i <= seed; i++) {
        //     seed[i] = seed[i - 2] + seed[i - 1];
        // }
        // return seed[seed.length - 1];
        this.init1 = 0;
        this.init2 = 1;

        while (this.init2 < seed){
            this.next();
        }

        if(this.init2 != seed){

        throw new Error('not a real fib number!');

        }
        // Initialize sequence with number to start from
        // throw new Error('Initializing sequence is not yet supported!');
                
    }

    skip(forward) {
        // Return the Fibonacci number further on in the sequence
        for (let i=0;i<forward; i++){
            this.next();
        }

        return this.init2;
    }


    // prev(backwards){
    //     for (let b=0;b<backwards;b--){
    //         this.init1();
    //     }

    //     return this.init2;
    // }
}

module.exports = Fibonacci;