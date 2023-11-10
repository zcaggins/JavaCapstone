let btn = document.getElementById(`btn`);
let output = document.getElementById(`outputtext`)

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener(`click` , function() {
    let input = document.getElementById(`Input`).value;
    if (input == number) {
        output.innerHTML = `You're correct! Your number was ${number}`
    } else if (input < number) {
        output.innerHTML = "Too low!"
    };
    if (input > number) {
        output.innerHTML = "Too high!"
    }
    
    })
