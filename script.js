// Function to handle confetti shower
function showerConfetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    confettiCanvas.style.display = 'block';
    
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
        confetti.clear();
    }, 5000);  // Stop confetti after 5 seconds
}

// Function to enlarge the clicked card
function enlargeCard(card) {
    // Check if the card is already enlarged
    const isEnlarged = card.classList.contains('enlarged');

    // Remove 'enlarged' class from all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((c) => c.classList.remove('enlarged'));

    // If the card wasn't already enlarged, enlarge it
    if (!isEnlarged) {
        card.classList.add('enlarged');
    }
}
