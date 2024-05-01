// rgb(0-255,0-255,0-255)

const rgbGenerator = () =>{
    const red = Math.floor(Math.random() * 256)
    const green =Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}


// let array = [];
 let score =0
 let wrongAttempt = 0

 function generateRandomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let color = `rgb(${red},${green},${blue})` ;
    document.querySelector('.color_pallet').style.backgroundColor = color;
    return color;
 }

function resetGame() {
    score = 0
    wrongAttempt = 0;
    document.querySelector('.score').textContent = score;
    generateOptions();
}

function generateOptions(){
   
    const options = document.querySelectorAll('.color')
    let array = []
    document.querySelector('.score').textContent = score;

    options.forEach(option => {
    let color = generateRandomColor();
    array.push(color);
    option.textContent = color;
    option.addEventListener('click', () => {
        if(color === answer) {
            score++;
            document.querySelector('.score').textContent = score;
            console.log('yayy');
            generateRandomColor();
        }
        else {
            wrongAttempt++;
            if (wrongAttempt >= 3){
                alert('Game over! You made 3 wroong attempts.')
                // document.querySelector('.btn').style.display = 'block';
                // resetGame();
                location.reload();
                console.log('game over');
            } 
            else{ alert('Wrong choice! Try again.')
        }
            console.log('nope');
        }

        
    });
}
);


let answer = array[Math.floor(Math.random() * 4)]

    document.querySelector(".color_pallet").style.backgroundColor = answer;
}

document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.btn').style.display = 'none';
    generateOptions();
});

generateOptions();