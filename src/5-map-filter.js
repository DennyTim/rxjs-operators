import {filter, interval} from "rxjs";
import {map, take} from "rxjs/operators";
import {add} from "../helpers";

const numbers = ["zero", "one", "two", "three", "four"];

const counter = interval(1000).pipe(take(4));

counter
    .pipe(
        filter(value => value % 2),
        map((value) => numbers[value])
    )
    .subscribe(add.li)