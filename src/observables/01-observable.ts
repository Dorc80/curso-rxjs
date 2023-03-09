import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<String> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<string>(subs => {

    subs.next('hola');
    subs.next('mundo');

    subs.next('hola');
    subs.next('mundo');
    
    subs.complete();
    
    subs.next('hola');
    subs.next('mundo');

});

obs$.subscribe(observer);

