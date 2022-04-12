//1
const promiseHelloWorld = new Promise((resolve, reject) => {
    resolve('Hello world');
});

promiseHelloWorld.then((value) => console.log(value));

//2
const promiseHelloWorldRejected = new Promise((resolve, reject) => {
    reject('Hello world rejected');
});

promiseHelloWorldRejected.then(() => console.log('Hello world'), (value) => console.log(value));

//3
const promiseRandomNum = new Promise((resolve, reject) => {
    resolve(Math.floor(Math.random()*11));
});

promiseRandomNum.then((value) => {
    const num = document.createElement('p');
    num.textContent = value;
    document.body.appendChild(num)
})

//4
const promiseRandomNumv2 = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()*11)
    console.log(number);
    if (number % 2 === 0) {
        resolve(number);
    } else {
        reject('odd number: promise rejected')
    }
});

promiseRandomNumv2.then((value) => console.log(value), (value) => console.log(value));

//5
const promiseTwoSeconds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved after two seconds');
    }, 2000)
});

promiseTwoSeconds.then((value) => console.log(value));