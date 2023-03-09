import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {

    // Crear un contador 1, 2, 3, 4, 5, .....
    let count = 0;

    const interval = setInterval(() => {
        // cada segundo
        subscriber.next(++count);
        console.log(count);

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }

});

const sub1 = intervalo$.subscribe(observer);
const sub2 = intervalo$.subscribe(observer);
const sub3 = intervalo$.subscribe(observer);

sub1.add(sub2)
sub1.add(sub3);

setTimeout(() => {

    sub1.unsubscribe();
    // sub2.unsubscribe();
    // sub3.unsubscribe();

    console.log('Completado timeout');

}, 3000);