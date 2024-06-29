// 문제1. "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
function greet(){
    console.log("안녕 내 이름은 제시카야");
}
greet()


// 문제2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
function greetName(name){
    console.log("안녕 내 이름은 "+name+"야");
}
greetName('에밀리')
greetName('할리')


// 문제3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
function greetNameReturn(name){
    return name
}
let person = greetNameReturn('minwoo')
console.log("안녕 내 이름은 "+person+"야");    


// 문제4. meetAt 함수를 만들어주세요
function meetAt(year, month, day){
    if (arguments.length == 1){
        console.log(year+"년")
    }else if(arguments.length == 2){
        console.log(year+"년",month+"월")
    }else{
        console.log(year+"/"+month+"/"+day)
    }
}
meetAt(2022)
meetAt(2032, 3)
meetAt(1987, 10, 28)


// 문제5. findSmallestElement 함수를 구현해 주세요.
function findSmallestElement(arr){
    if(arr.length == 0) {
        return undefined;
    }
    let min = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(min > arr[i]) {
        min = arr[i]
        }
    }
    return min;
}

let numberArr = [100, 200, 3, 0, 2, 1]
console.log(findSmallestElement(numberArr))

numberArr = []
console.log(findSmallestElement(numberArr))


// 문제6-1. 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오.
inputMoney = 58520
let 오만원 = Math.floor(inputMoney / 50000)
inputMoney = inputMoney % 50000
let 만원 = Math.floor(inputMoney / 10000)
inputMoney = inputMoney % 10000
let 오천원 = Math.floor(inputMoney / 5000)
inputMoney = inputMoney % 5000
let 천원 = Math.floor(inputMoney / 1000)
inputMoney = inputMoney % 1000
let 오백원 = Math.floor(inputMoney / 500)
inputMoney = inputMoney % 500
let 백원 = Math.floor(inputMoney / 100)
inputMoney =  inputMoney % 100
let 십원 = Math.floor(inputMoney / 10)
inputMoney =  inputMoney % 10
let 일원 = Math.floor(inputMoney / 1)
inputMoney =  inputMoney % 1

console.log("50000 X", 오만원)
console.log("10000 X", 만원)
console.log("5000 X", 오천원)
console.log("1000 X", 천원)
console.log("500 X", 오백원)
console.log("100 X", 백원)
console.log("10 X", 십원)
console.log("1 X", 일원)

// 문제6-2. (함수, 반복문) 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오.
function calculateMoney(inputMoney){
    for (i=0; i<arr.length; i++) {
        console.log(arr[i] , "X", Math.floor(inputMoney / arr[i]));
        inputMoney = inputMoney % arr[i]
    }    
}

let arr = [50000, 10000, 5000, 1000, 500, 100, 10, 1]
calculateMoney(12300)

calculateMoney(85350)