// (function(){

//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal= document.querySelector('.btn-equal');

//     buttons.forEach(function(button){

//         button.addEventListener('click', function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })

//     });

//     equal.addEventListener('click', function(e){

//         if(screen.value === null){
//             screen.value = "Please Enter";
//         }else{
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     })

//     clear.addEventListener('click', function(e){
//         screen.value = "";
//     })



// })();



// Bottom Number
const numbers = document.querySelectorAll(".btn");


numbers.forEach((number)=>{

    number.addEventListener("click", () => {

        // inputNumber
        inputNumber(event.target.value);

        // menampilkan dilayar
        updateScreen(currentNumber); 
    });
});

// update screen => membuat layar agar dapat menampilkan angka yang benar saat mengklik suatu tombol
// dan merubah angkanya dari screen 

const calculatorScreen = document.querySelector('.screen-calculator');


const updateScreen = (number) => {

    // screen calculatornya nampilin number;
    calculatorScreen.value = number;
}


// menyimpan 2 angka dan operator
// prevNumber => nomor sebelumbya
// currentNumber => nomor saat ini 
// operator 

let prevNumber ='';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number)=>{

    // mengatasi supaya hilang angka nolnya
    if(currentNumber === '0'){
        // jika maka direplace dengan tombol saat ini
        currentNumber = number;
    }else{
        // selain nol maka terus ditambah hehe
        currentNumber += number;
    }
    
}

// Bottom Operator 
const operators = document.querySelectorAll('.operator');

operators.forEach((operator)=>{

    // jalankan fungsi operator;
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        
    })
    

    // updateScreen(operator);

});

// input operator
const inputOperator = (operator) => {

    // supaya operator tidak bisa diaskses secara beruntun
    // if(calculationOperator === ''){
    prevNumber = currentNumber;

    // }
    calculationOperator = operator;
    
    currentNumber = '0';
}


// menjalankan function calculate '=' jika diklik
// bottom equal-sign
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{

    //jalankan kalkulasi
    calculate();
    // panggil update screen agar hasilnya ditampilkan
    updateScreen(currentNumber);
    console.log('tombol sama dengan');
});


// function calculate
const calculate = () => {

    let result = '';

    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default :
            break;
    }
    // bisa ditambahkan terus dan result disimpan ke currentNumber
    currentNumber = result;
    calculationOperator = '';

}

// button clear
const clearBtn = document.querySelector('.all-clear');

// function clear all
const clearAll=()=>{
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', ()=>{

    // jalankan clearAll
    clearAll();
    // jalankan update screen
    updateScreen(currentNumber);
});


// button desimal

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => {
    
    inputDecimal(event.target.value);
    updateScreen(currentNumber);

});

inputDecimal = (dot) => {

    // decimal supaya diinput hanya sekali saja
    if(currentNumber.includes('.')){
        return 
    }
    currentNumber += dot;
}