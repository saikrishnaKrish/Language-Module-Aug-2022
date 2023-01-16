class Bird {
    constructor() {
    console.log("I'm a bird");
    }
    }
    
    class Flamingo extends Bird {
    constructor() {
        super();
    console.log("I'm pink");
   
    }
    }
    
    const pet = new Flamingo();