import { Observable } from 'rxjs';

//let circle = document.getElementById('circle');

let output = document.getElementById('output');
let button = document.getElementById('button');
let click = Observable.fromEvent(button,'click');

                    /*    .map((e: MouseEvent) => {
                            return {
                                x: e.clientX,
                                y: e.clientY
                            }
                        }).delay(100);
                        .filter(value => value.x < 500);*/

                        
/*function onNext (value) {    
       circle.style.left = value.x + "px";
       circle.style.top = value.y + "px"; 
      console.log(value.x);
}*/


/*
source.subscribe(
    ,
    e => console.log(`error: ${e}`),
    () =>  console.log(`completed`)
);*/


function load(url: string){
    //instantiate a xmlhttprequest object

    var xhr =  new XMLHttpRequest();

    // 

    xhr.open("GET", url);// open the get request with the url 
    xhr.send();// request will happen asyn , so we need another event handler to know when we get reponse 


    //so we want to handle load event on xmlHttprequest  object.... this event would be raised when we get the response
    
    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(m => {
            let div = document.createElement("div");
            div.innerText = m.title;
            output.appendChild(div);
        })
    })

}

click.subscribe(
    e => load("movies.json"),
    e => console.log(`error: ${e}`),
    () =>  console.log(`completed`)
);