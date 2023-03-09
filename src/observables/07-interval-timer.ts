import { interval, timer } from 'rxjs';

const obeserver = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(obeserver);
timer$.subscribe(obeserver);
console.log('Fin');