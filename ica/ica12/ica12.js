//
const newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

//
const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', testFunction);


//
let answer = "";

//Getting access to API
const endPt = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

//


//asycnc functions run in parallel to other parts of js
//This function just gets connected to the api and tests functionality
async function getQuote(){
    console.log('Test');

    //safety logic to test API funciton
    try{    
        //wait for the results of a fetch from our endpoint
        const response = await fetch(endPt);

        //
        if(!response.ok){


            //if not status 200 : everything okay when browser loads
            //then thow the status as anerror
            throw Error(response.statusText);

        }

        //otherwise print the response to the console
        const json = await response.json();
        
        //grad the question from json and call displayQuote function
        displayQuote(json['question']);
        

    }
    
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}



//
function testFunction(){
    console.log("answer button clicked");
}

function displayAnswer(answer){
    
    const questionTxt = document.querySelector('#js-answer-text');

    //shove the parameter into the div gotten by the query selector
    questionTxt.textContent = answer;
    nswerTxt.textContent = answer;
}


//
function displayQuote(question){
    
    const questionTxt = document.querySelector('#js-quote-text');

    //shove the parameter into the div gotten by the query selector
    questionTxt.textContent = question;

}


//This will run this function once when the page loads to avoid the blank div between clicks
getQuote();