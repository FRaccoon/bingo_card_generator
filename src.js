
const m = 1, M = 75;

window.addEventListener('DOMContentLoaded', (e) => {
    const a = [];
    for(let i=m; i<=M; i++) a.push(i);

    for(let i = M-m; i>0; i--) {
        const r = Math.floor(Math.random() * (i+1));
        [a[i], a[r]] = [a[r], a[i]];
    }

    const tb = document.getElementById('card');
    for(let i=0; i<5; i++) {
        const tr = document.createElement('tr');
        for(let j=0; j<5; j++) {
            const td = document.createElement('td');
            td.innerText = (i === 2 && j === 2) ? 'x' : a[i*5+j];
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    }
});