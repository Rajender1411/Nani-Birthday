// Confetti Shower Effect
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
