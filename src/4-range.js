import {concatMap, range, timer} from "rxjs";
import {add} from "../helpers";
import {map} from "rxjs/operators";

const numbers = range(50, 10);

numbers.pipe(
    concatMap(value =>
        timer(1000).pipe(map(() => value))
    ),
).subscribe(add.li);