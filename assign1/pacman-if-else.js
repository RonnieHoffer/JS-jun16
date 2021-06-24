let powerPelletEaten = false;
let ghosts = 4;

while (true) {
    console.log('Ghosts remaining: ' + ghosts);

    if (powerPelletEaten == false) {
        console.log('Pac-Man eats the power pellet.');
        powerPelletEaten = true;
    } 
    
    else if (ghosts > 0) {
        console.log('Pac-Man eats a ghost.');
        ghosts--;
    } 
    
    else {
        break;
    };
};

console.log('Pac-Man returns hoem after a long day in the maze.');