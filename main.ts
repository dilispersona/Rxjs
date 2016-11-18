import { Observable } from 'rxjs';

let output = document.getElementById('output');
let button = document.getElementById('button');
let click = Observable.fromEvent(button, 'click');


function load(url: string) {

    return Observable.create(observer => {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.send();
        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });
    })

}

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    })
}

click.flatMap(e => load("movies.json"))
    .subscribe(
       renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log(`completed`)
    );