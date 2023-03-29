import {of, pluck} from "rxjs";

const deepObject = {
    company: {
        name: 'NetCracker'
    }
};

of(deepObject)
    .pipe(pluck("company", "name"))
    .subscribe(window.console.log)