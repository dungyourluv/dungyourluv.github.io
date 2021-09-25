//get class
const mainName = document.querySelector('.content-text p:nth-child(2)')
const mainAnswer = document.querySelector('.js--answer')
const mainPoint = document.querySelector('.js--point')
const mainTime = document.querySelector('.js--time')
//get value form
const form = document.querySelector('.form')
const formName = document.getElementById('form-name')
const formAnswer = document.getElementById('form-answer')
//get button
const formBtn = document.querySelector('.form-btn');
//check value input
console.log(formAnswer,formName)
function formHandel() {
    const nameInput = formName.value;
    const answerInput = Number(formAnswer.value);
    console.log(answerInput)
    if(isNaN(answerInput)) {
        console.log('hello')
        alert(`lười làm hiệu ứng check thông báo cho lẹ =)), ô thứ 2 nhập số chứ không phải ${formAnswer.value} `);
        return
    }
    if(answerInput > 20) {
        alert(`tối đa được 20 câu hỏi m nhập ${answerInput} m đòi xôi à  :v`)
    }
    if (nameInput =='' || answerInput == '' ) {
        alert('nhap du de')
        return
    }
    output(nameInput,answerInput)
}

formBtn.addEventListener('click', formHandel);

function output(nameInput,answerInput,) {
    form.style.display = 'none';
    mainName.innerText = nameInput;
    mainAnswer.innerText = answerInput+'/20';
    let pointoutput = answerInput*5;
    mainPoint.innerText = pointoutput;
    mainTime.innerText = '00:0' + Math.floor(Math.random() * 9) + ':'+Math.floor(Math.random() * 60);;
}