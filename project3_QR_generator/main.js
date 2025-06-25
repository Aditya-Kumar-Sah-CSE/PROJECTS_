// ctrl + right button file open

// target

const qrinput= document.getElementById('qr-input');
const qrimg= document.getElementById('qr-img');
const qrbtn= document.getElementById('qr-btn');

// console.log(qrbtn,qrimg,qrinput);

// button click pe kam - use add event 

qrbtn.addEventListener('click', ()=>{

    const inputValue = qrinput.value;
    // console.log(inputValue)

    if (!inputValue) {
        alert('Please enter a valid URL');
        return;
    }
    else{
        // goqr.me
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt=`QR Code for : ${inputValue}`
    }
});
    
