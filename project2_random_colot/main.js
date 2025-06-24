//btn target 
const hexBtn =document.querySelector('.hex-btn');

// hax color value change
const hexColorvalue = document.querySelector('.hex-color-value');

// bg color change 
const hexColorContainer = document.querySelector('.hex-color-container');

// random color
hexBtn.addEventListener("click",()=>{
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput="";

    for(let i =0 ,charSetLength=characterSet.length;i<6;++i){
        hexColorOutput+=characterSet.charAt(Math.floor(Math.random()*charSetLength));
    }
    // hex color value
    hexColorvalue.textContent = `#${hexColorOutput}`
    //template lateral

    // button color 
 hexBtn.style.color =`#${hexColorOutput}`;


    // bg color 
hexColorContainer.style.backgroundColor =`#${hexColorOutput}`;
    // console.log(hexColorOutput);
});

//rgb color generator

const rgbBtn= document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getBlueInputRange = document.querySelector('#blue');
const getGreenInputRange = document.querySelector('#green');
 
    const rgbColorContainer= document.querySelector('.rgb-color-container');
    
    rgbBtn.addEventListener('click',()=>{
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    // console.log(extractRedValue,extractGreenValue,extractBlueValue)

    rgbColorContainer.style.backgroundColor =`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
    rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});