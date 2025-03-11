let standCount = 0;

document.getElementById('bottle').addEventListener('click', function() {
    this.classList.add('flip');
    setTimeout(() => {
        this.classList.remove('flip');
        // Randomly decide if the bottle should stand or not
        if (Math.random() > 0.5) {
            this.classList.add('stand');
            standCount++;
            document.getElementById('counter').innerText = `Stands: ${standCount}`;
        } else {
            this.classList.add('fall');
            // Reset the count if the bottle falls
            standCount = 0;
            document.getElementById('counter').innerText = `Stands: ${standCount}`;
            // Make the bottle stand again after 3 seconds if it falls
            setTimeout(() => {
                this.classList.remove('fall');
                this.classList.add('stand');
            }, 3000); // 3 seconds
        }
    }, 2000); // Duration of the flip animation

    // Remove the stand class after a short delay to reset the bottle
    setTimeout(() => {
        this.classList.remove('stand');
    }, 5000); // Adjust the delay as needed
});