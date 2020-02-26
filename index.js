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

    removerClass(Boo){
         let btnPlay = document.getElementsByClassName("start");
        if(Boo){
            for (var i = 0; i<btnPlay.length; i++) {
                btnPlay[i].classList.add("icon-pause2");
                btnPlay[i].classList.add("pause");
                btnPlay[i].classList.remove("icon-play3");
                btnPlay[i].classList.remove("start");
            }
         }
         else{
            let btnPause = document.getElementsByClassName("pause");
            for (var i = 0; i<btnPause.length; i++) {
                btnPause[i].classList.add("icon-play3");
                btnPause[i].classList.add("start");
                btnPause[i].classList.remove("icon-pause2");
                btnPause[i].classList.remove("pause");
            }
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
        btnCrtBoo = true
        Timer.removerClass(btnCrtBoo)
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
        btnCrtBoo = false
        Timer.removerClass(btnCrtBoo)
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
    const btPlay = document.querySelector('.start')
    const btReset = document.querySelector('.reset')
    let inter        
    let btnCrtBoo
    let seg  
    let min 
    let hr 
    let ini = true;
    btPlay.onclick = () => Timer.toggel(ini)
    btReset.onclick = () => Timer.refresh()
    Timer.start()




