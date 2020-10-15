class LightBulb{
    constructor(divElement){
        this.divElement=divElement;
        this.bulbElem= document.createElement("div");
        this.off()
        this.divElement.appendChild(this.bulbElem);    
    }

     on(){
        this.bulbElem.className = "lighten"; 
        this.bulbElem.textContent = 'ON';
    }

    off(){
        this.bulbElem.className = "normal"; 
        this.bulbElem.textContent = 'OFF';
    }

}


const bulbDiv = document.querySelector("div");

const lb = new LightBulb(bulbDiv);
const lb2 = new LightBulb(bulbDiv);