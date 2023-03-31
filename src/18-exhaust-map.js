import {exhaustMap, fromEvent, interval} from "rxjs";
import {take} from "rxjs/operators";
import {add} from "../helpers";

const button = document.getElementById("submit");
const submitEvent = fromEvent(button, "click");

const result = submitEvent.pipe(
    exhaustMap(() => interval(1000).pipe(take(5)))
);

result.subscribe((x) => add.li(x))