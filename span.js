const textElement = document.getElementById('animated-text');
const textArray = ['Programming', 'Web Design', 'Social Skills', 'Marketing'];
let index = 0;

function changeText() {
    index = (index + 1) % textArray.length;
    textElement.classList.remove('fade-in');
    setTimeout(() => {
        textElement.textContent = textArray[index];
        textElement.classList.add('fade-in');
    }, 200);
}

setInterval(changeText, 3000);
