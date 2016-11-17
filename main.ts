import { Observable } from 'rxjs';

let circle = document.getElementById('circle');
let source = Observable.fromEvent(document,'mousemove')
                        .map((e: MouseEvent) => {
                            return {
                                x: e.clientX,
                                y: e.clientY
                            }
                        }).delay(100);
                        //.filter(value => value.x < 500);

                        
function onNext (value) {
       circle.style.left = value.x + "px";
       circle.style.top = value.y + "px"; 
      console.log(value.x);
}

source.subscribe(
    onNext,
    e => console.log(`error: ${e}`),
    () =>  console.log(`completed`)
);