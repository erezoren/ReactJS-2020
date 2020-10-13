class LightBulb{
    constructor(divElement){
        this.divElement=divElement;
        this.bulbElem= document.createElement("DIV");                
        this.bulbElem.className = "normal"; 
        this.bulbElem.innerHTML = '<p>OFF</p>'; 
        this.divElement.appendChild(this.bulbElem);    
    }

     on(){
        this.bulbElem.className = "lighten"; 
        this.bulbElem.innerHTML = '<p>ON</p>'; 
    }

    off(){
        this.bulbElem.className = "normal"; 
        this.bulbElem.innerHTML = '<p>OFF</p>'; 
    }

}


const lb = new LightBulb(document.querySelector('div'));
const lb2 = new LightBulb(document.querySelector('div'));