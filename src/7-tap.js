import {interval, tap} from "rxjs";
import {take} from "rxjs/operators";
import {add} from "../helpers";

const counter = interval(1000);

counter
    .pipe(
        take(10),
        tap(value => {
            add.li(`Some value: ${value}`);
            return value + 1;
        })
    )
    .subscribe(window.console.log);