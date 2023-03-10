import { catchError, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

// const url = 'https://api.github.com/useXXXrs?per_page=5';
const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;

}

const atrapaError = (err: AjaxError) => {
    console.warn('error en', err.message);
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuarios', err));

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuarios', err));

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
)
    .subscribe(console.log);