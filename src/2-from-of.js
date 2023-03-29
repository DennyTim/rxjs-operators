import {from, fromEvent, of} from "rxjs";

const submit = document.getElementById("submit");

fromEvent(submit, "click")
    .subscribe(event => console.log(event.target));

of(["apples", "oranges", "grapes"])
    .subscribe(data => console.log('of', data));

from(["apples", "oranges", "grapes"])
    .subscribe(data => console.log('from', data));