import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.post(url, {
//     id: 1,
//     nombre: 'David'
// }, {
//     'my-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'my-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'David'
    }
}).subscribe(console.log);