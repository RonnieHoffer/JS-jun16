const ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};
    console.log(ghosts);
    console.log(ghosts.inky); // => 'Cyan'
    console.log(ghosts.blinky); // => 'Red'
    console.log(ghosts['inky']); // => 'Cyan'
    console.log(ghosts['blinky']); // => 'Red'

    const ghostName = 'clyde';
    console.log(ghosts[ghostName]);