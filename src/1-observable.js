import {Observable} from "rxjs";
import {add} from "../helpers";

const observer = {
    next: add.li,
    error: add.li,
    complete: () => add.li('There are no more values')
};

const producer = new Observable(subscriber => {
    subscriber.next("Hello");
    subscriber.next("One more time");
    subscriber.complete();
});

producer.subscribe(observer)