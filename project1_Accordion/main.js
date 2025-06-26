// static data
const data =[ 
 {
    id :'1',
    question: " What is the sun? ",
    answer: " A star "
 },{
    id :'2',
    question: "What is the symbol for gold on the periodic table?  ",
    answer: " Au "
 },
 {
    id :'3',
    question: " Who came up with the theory of evolution?  ",
    answer: "Charles Darwin "
 },
 {
    id :'4',   
    question: "What is the center of an atom called? ",
    answer: " The nucleus"
 },
 {
    id :'5',
    question: " What is the freezing temperature of water?  ",
    answer: "32°F "
 },
 {
    id :'6',
    question: " What gas do humans exhale? ",
    answer: " Carbon dioxide "
 },
 {
    id :'7',
    question: " What controls Earth’s ocean tides? ",
    answer: " The moon’s gravitational pull "
 },
 {
    id :'8',
    question: " What is the study of insects called?  y",
    answer: " Entomolog "
 },
 {
    id :'9',
    question: "What is the process of a liquid turning into a gas called? ",
    answer: " Evaporation "
 },
 {
    id :'10',
    question: " What do you call the process of a gas becoming a liquid?",
    answer: " Condensation"
 },
 {
    id :'11',
    question: " What is the colored part of the eye called?",
    answer: " Iris"
 }







  ];
//* target div class accordion
  const accordionwrapper = document.querySelector('.accordion');

//   create map function
  function createAccordionData(){

    /* set inner text of div and create map then join */ 
     /* for question*/ 
    accordionwrapper.innerHTML= data.map(dataItem => `
      <div class="accordion_item">
        <div class="accordion_title">
       
        <h3>${dataItem.question }</h3>
        <i class="fa-solid fa-arrow-up" ></i>
        </div>

        <div class="accordion_content">
        <p>${dataItem.answer }</p>
        </div>
         
        
        </div>
        `
    ).join(" ");
  }
//   call 
  createAccordionData();

// toggle answer ,arrow 180 degree 
  const getAccordionTitles = document.querySelectorAll('.accordion_title');

  console.log('====================');
//   4 node list 
  console.log('getAccordionTitles');

  console.log('====================');

  getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click',(event)=> {
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active')
        }
        else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');

            getAlreadyAddedActiveClasses.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove("active");
            });
            currentItem.classList.add("active");
        }
    });
  });