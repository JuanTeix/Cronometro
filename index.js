class Cronometro {
    constructor(h, m, s) {
      this.h = h ;
      this.m = m;
      this.s = s;

    }
    printHr(hr){
        document.querySelector('.h').innerHTML = (hr < 10 ? (`0${hr}`) : hr)     
    }
    printMin(min){
        document.querySelector('.m').innerHTML = (min < 10 ? (`0${min}`) : min)     
    }
    printSeg(seg){
        document.querySelector('.s').innerHTML = (seg < 10 ? (`0${seg}`) : seg)     
    }

    removerClass(){
        if(btnPlayPausa.classList.contains('icon-play3')){
            btnPlayPausa.classList.remove("icon-play3");
            // btnPlayPausa.classList.remove("start");
            btnPlayPausa.classList.add("icon-pause2");
            // btnPlayPausa.classList.add("pause");
        }else{
            btnPlayPausa.classList.add("icon-play3");
            // btnPlayPausa.classList.add("start");
            btnPlayPausa.classList.remove("icon-pause2");
            // btnPlayPausa.classList.remove("pause");
        }
    }

    start(){
        var {h, m, s} = this;
        seg = this.s 
        min = this.m
        hr = this.h         
        Timer.printSeg(seg)
        Timer.printMin(min)
        Timer.printHr(hr)
    }

    play(){
        ini = false;
        Timer.removerClass()
        inter = setInterval(() => {
                seg++
                if(seg === 60){
                    seg = 1
                    Timer.printSeg(seg)
                    min++ 
                    if(min === 60){
                        min = 1 
                        Timer.printMin(min)
                        hr++  
                        Timer.printHr(hr)  
                    }else{
                        Timer.printMin(min)
                    }
                }else{
                Timer.printSeg(seg)
                }
            }, 1000);
    }
            
    pause(){
        ini = true
        Timer.removerClass()
        clearInterval(inter)    
        }

        toggel(ini){
            ini ? Timer.play() : Timer.pause()  ;
        }

        refresh(){
            Timer.pause()   
            Timer.start()
        }
}
    const Timer = new Cronometro(00, 00, 00) 
    const btReset = document.querySelector('.reset')
    const btnPlayPausa = document.getElementById('Botones')
    let inter        
    let seg  
    let min 
    let hr 
    let ini = true;
    btnPlayPausa.onclick = () => Timer.toggel(ini)
    btReset.onclick = () => Timer.refresh()
    Timer.start()




