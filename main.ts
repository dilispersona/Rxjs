import { Observable } from 'rxjs';

//create a observable stream of data
let numbers = [1,2,34,45,23,24];
//let source = Observable.from(numbers);

let source = Observable.create(observer => {
    
    let index = 0;
    let produceValue = () => {
        
        observer.next(numbers[index++]);
        if(index < numbers.length){
            setTimeout(produceValue,2000);
        }else{
            observer.complete();
        }
    }
        
     produceValue();  
})



//observer maily contains 3 methods next, error, complete

/*class MyObserver{
    //Every time Observable has  a new item , it will invoke this method of observer
    next(value){
        console.log(`value: ${value}`);
    }

    // in case of error it will invoke error method of observer
    error(e){
        console.log(`error: ${e}`);
    }

    complete(){
        console.log(`completed`);
    }

}
*/
//subscribe to listen to Observable stream of data
//way to listen is by passing an Observer

//a better way of listening
source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () =>  console.log(`completed`)
);