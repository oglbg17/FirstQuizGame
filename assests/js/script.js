let prompt = document.querySelector('main');
let qI = 0;

document.querySelector('.start').addEventListener('click', handleClick);


function handleClick() {
    let { Q,A,C } = qAndA[qI];
    
    prompt.innerHTML = `<h1>${Q}</h1>`;

    A.forEach(ans=>{
        prompt.innerHTML += `<button onclick="handleButton('${C}')">${ans}</button>`
    })
}

function handleButton(ans) {
    
}