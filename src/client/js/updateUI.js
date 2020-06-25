/*Update the text and print it in screen */

const text = document.querySelector('#user_text');
const polarity = document.querySelector('#polarity');
const subjectivity = document.querySelector('#subjectivity');
const p_confidence = document.querySelector('#p_confidence');
const s_confidence = document.querySelector('#s_confidence');
 

 export function updateUI(data) {

    text.innerHTML= `<span>text: </span><span class="style">${data.text}</span>`;
    polarity.innerHTML= `polarity:<span class="style">${data.polarity}</span>`;
    subjectivity.innerHTML= `subjectivity:<span class="style">${data.subjectivity}</span>`;
    p_confidence.innerHTML= `polarity_confidence:<span class="style">${data.polarity_confidence}</span>`;
    s_confidence.innerHTML= `subjectivity_confidence:<span class="style">${data.subjectivity_confidence}</span>`;
    
}


