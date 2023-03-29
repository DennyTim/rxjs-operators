import {first, from, last, startWith} from "rxjs";
import {add} from "../helpers";

const numbers = [1, 2, 3, 4, 5];

from(numbers)
    .pipe(
        // first()
        // last()
        startWith(0)
    )
    .subscribe(add.li)