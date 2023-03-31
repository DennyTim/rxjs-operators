import {interval, reduce} from "rxjs";
import {scan, take} from "rxjs/operators";
import {add} from "../helpers";

const fs = interval(100)
    .pipe(
        take(10),
        /**
         * scan returns result for each value in thread
         * and previous result for each iteration before
         * */
        // scan((acc, val) => {
        //     const n = val + 1;
        //     const last = acc[n];
        //     const beforeLastValue = acc[n - 1];
        //     return [...acc, last + beforeLastValue]
        // }, [0, 1])

        reduce((acc, value) => {
            const n = value + 1;
            const last = acc[n];
            const beforeLastValue = acc[n - 1];
            return [...acc, last + beforeLastValue]
        }, [0, 1])
    )

fs.subscribe(add.li)