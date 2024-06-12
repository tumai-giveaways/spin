document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const popup = document.getElementById('popup');
    const winningMessage = document.getElementById('winningMessage');
    const confirmButton = document.getElementById('confirmButton');
    const segments = 12; // Number of segments in the wheel
    const maxNumber = 1600; // Maximum number to spin to
    let deg = 0;

    // Generate segments with question marks
    for (let i = 0; i < segments; i++) {
        const segment = document.createElement('div');
        segment.className = 'segment';
        segment.style.transform = `rotate(${i * (360 / segments)}deg)`;
        wheel.appendChild(segment);
    }

    spinButton.addEventListener('click', () => {
        const randomDeg = Math.floor(2000 + Math.random() * 3000);
        deg += randomDeg;
        wheel.style.transform = `rotate(${deg}deg)`;

        // Calculate the winning segment
        const winningSegment = (segments - Math.floor((deg % 360) / (360 / segments))) % segments;
        const winningNumber = Math.floor(winningSegment * (maxNumber / segments));

        // Show the winning number in a popup after the spin ends
        setTimeout(() => {
            winningMessage.textContent = `You won the number: ${winningNumber}`;
            popup.style.display = 'flex';
        }, 8000); // Match the timeout with the CSS transition duration
    });

    confirmButton.addEventListener('click', () => {
        window.location.href = "https://tumai-giveaways.xyz"; // Redirect to the desired URL
    });
});
