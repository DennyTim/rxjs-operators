import {fromEvent, interval, range, takeLast, takeUntil} from "rxjs";
import {add} from "../helpers";
import {take, takeWhile} from "rxjs/operators";

const btn = document.getElementById("submit");
const buttonEvents = fromEvent(btn, "click");

// range(1, 10)
interval(500)
    .pipe(
        // take(10),
        // takeLast(5)
        // takeWhile(number => number < 5)
        takeUntil(buttonEvents)
    )
    .subscribe(window.console.log)