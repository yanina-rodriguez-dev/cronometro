 //CREO  CRONOMETRO 

function Cronometro(elementosDisplay) {
   this.display = elementosDisplay;
   this.hora = 0;
   this.minutos = 0;
   this.segundos = 0;
   this.tiempo = null;


   //get y set

   this.play = function() {
       this.tiempo = setInterval(this.pantallaFuncionando.bind(this), 1000);
   }

   this.pausa = function() {
       clearInterval(this.tiempo);
   }

   this.reset = function() {
       clearInterval(this.tiempo);
       this.hora = 0;
       this.minutos = 0;
       this.segundos = 0;
       this.pantallaFuncionando();
   }

   this.pantallaFuncionando = function() {
       this.segundos++;
       if (this.segundos === 60) {
           this.segundos = 0;
           this.minutos++;
           if (this.minutos === 60) {
               this.minutos = 0;
               this.hora++;
           }
       }

       let displayhora = this.hora < 10 ? '0' + this.hora : this.hora;
       let displayminutos = this.minutos < 10 ? '0' + this.minutos : this.minutos;
       let displaysegundos = this.segundos < 10 ? '0' + this.segundos : this.segundos;

       this.display.textContent = `${displayhora}:${displayminutos}:${displaysegundos}`;
   }
}

let elementosDisplay = document.getElementById('display');
let cronometro = new Cronometro(elementosDisplay);
cronometro();