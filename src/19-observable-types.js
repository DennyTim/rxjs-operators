// Hot observable or Multicast

import {Observable, shareReplay, Subject} from "rxjs";
import {add} from "../helpers";

const sub = new Subject();
const readableStream = sub.asObservable();

// setTimeout(() => {
//     readableStream.subscribe(x => add.li("S: " + x));
// }, 1000)
//
// setTimeout(() => {
//     readableStream.subscribe(x => add.li("S: " + x));
// }, 1005)
//
// setTimeout(() => {
//     readableStream.subscribe(x => add.li("S: " + x));
// }, 1010)
//
// setTimeout(() => {
//     sub.next(Date.now());
// }, 2000)

// Cold Unicast
const obs = new Observable(subscriber =>
    subscriber.next(Date.now())
).pipe(shareReplay(1));

setTimeout(() => {
    obs.subscribe(x => add.li("O: " + x));
}, 1000);

setTimeout(() => {
    obs.subscribe(x => add.li("O: " + x));
}, 2000);

setTimeout(() => {
    obs.subscribe(x => add.li("O: " + x));
}, 3000)

