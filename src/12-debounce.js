import {debounce, debounceTime, fromEvent} from "rxjs";

const inputBox = document.getElementById("input");
const renderBox = document.getElementById("display-content");
const submitBtn = document.getElementById("submit");

const content = fromEvent(inputBox, "keyup");
const submit = fromEvent(submitBtn, "click");

content
    .pipe(
        // debounce(() => submit)
        debounceTime(2000)
    )
    .subscribe(() => {
        renderBox.innerHTML = inputBox.value;
    });