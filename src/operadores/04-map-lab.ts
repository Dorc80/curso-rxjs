import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor tristique nisi in tempus. Mauris vitae suscipit tortor. Integer a pulvinar est. Donec posuere metus eget sapien scelerisque, in molestie nisi mattis. Nunc sed nibh et nisl dapibus interdum eu eget dolor. Suspendisse potenti. Phasellus varius vestibulum efficitur. Donec id pulvinar turpis. Nam in erat sit amet mauris consequat ullamcorper. Integer tincidunt justo eget nunc sodales dapibus. Integer ullamcorper at eros sed vestibulum. Vestibulum euismod, quam ac vehicula tincidunt, justo neque cursus est, eu commodo orci neque eu risus. Duis pellentesque pharetra finibus.
<br/><br/>
Fusce quis scelerisque libero, at auctor sapien. Praesent sagittis ipsum non rhoncus convallis. Nullam et facilisis tellus. Nullam vitae lobortis risus. Mauris finibus blandit sodales. Sed facilisis tincidunt massa, id varius urna sodales eu. Phasellus luctus libero metus, at porttitor diam tristique sit amet. Integer nisl ex, interdum at massa eu, ultricies porttitor neque. Ut vulputate vehicula ipsum ac pellentesque. Pellentesque finibus at neque eu lacinia. Ut malesuada sed lacus vel maximus. Donec condimentum ultricies lacus. Quisque vitae justo quis odio semper eleifend id accumsan massa.
<br/><br/>
Morbi sodales sem nec vestibulum luctus. In dignissim risus tempus magna iaculis, sit amet tincidunt turpis rhoncus. Aliquam efficitur sodales arcu id hendrerit. Nulla facilisis justo sit amet tortor dapibus finibus. In venenatis leo ac lorem vehicula, eget maximus lacus venenatis. Nulla vel erat condimentum, placerat lorem in, suscipit ipsum. Nulla id tortor sed mauris tincidunt pretium. Curabitur at eros nunc. Curabitur vel lectus viverra, semper ante a, iaculis metus. Sed hendrerit non enim vitae accumsan. Proin ac ex ac diam convallis tincidunt. Quisque elementum volutpat lacus, id dictum mauris porta sed. Pellentesque dapibus mauris a feugiat cursus. Sed euismod diam non laoreet scelerisque. In in dolor sit amet ligula viverra varius quis quis eros.
<br/><br/>
Sed feugiat sollicitudin ante in mollis. Praesent vestibulum in velit a hendrerit. Mauris eget justo convallis, congue diam eget, mattis est. Nulla ut rhoncus nulla. Morbi ut dapibus leo. Vivamus tristique rhoncus metus. Morbi mattis elementum efficitur. Vivamus maximus ut tellus eu posuere. In eget leo id quam molestie accumsan. In at diam vel velit vehicula pulvinar. Phasellus vitae purus sed mi volutpat tristique at a felis. Aliquam iaculis pulvinar enim vitae iaculis.
<br/><br/>
Phasellus eu nisl nec tortor ornare tincidunt. Nulla finibus posuere quam, ultrices luctus nunc semper eget. Morbi dignissim volutpat leo, nec fringilla libero fringilla nec. Vestibulum consectetur ante enim, a condimentum est feugiat quis. Phasellus vel viverra ante. Fusce euismod porta maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec leo et nunc suscipit sodales id in urna. Donec sit amet sem et nunc vestibulum lacinia. Duis vestibulum imperdiet convallis. Aliquam erat volutpat. Vivamus dignissim id leo sit amet ullamcorper.
`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log({ scrollTop, scrollHeight, clientHeight });

    return (scrollTop / (scrollHeight - clientHeight)) * 100;

}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})
