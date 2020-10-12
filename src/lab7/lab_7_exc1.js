class LightBulb{
    constructor(divElement){
        this.divElement=divElement;
        this.bulbElem= document.createElement("DIV");                
        this.bulbElem.className = "normal"; 
        this.divElement.appendChild(his.bulbElem);    
    }

     on(){
        this.bulbElem.className = "blink"; 
    }

    off(){
        this.bulbElem.className = "normal"; 
    }

}