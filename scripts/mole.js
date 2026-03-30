// Declare variables
let score = 0;
let molesLeft = 30;
let popupLength = 3000;
let hideTimeout;
let clickable = false;

// Ends game when no mole heads remain
function popUpRandomMole() {
  if (molesLeft <= 0) {
    document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
    return;
  }

  // Collect all mole head elements
  const moleHeads = document.querySelectorAll('.wgs__mole-head');

  // Exit if no mole heads exist
  if (moleHeads.length === 0) {
    return;
  }

  // Select random mole head to activate 
  const moleIndex = Math.floor(Math.random() * moleHeads.length);
  const moleHead = moleHeads[moleIndex];

  clickable = true;

  // Reset mole to visible
  moleHead.classList.remove('wgs__mole-head--hidden', 'wgs__mole-head--whacked');

  // advance game state for mole appearance
  molesLeft -= 1;
  document.querySelector('.sb__moles').innerHTML = molesLeft;

  hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
}

// Hide current mole and trigger next cycle 
function hideMole(mole) {
  clickable = false;
  mole.classList.add('wgs__mole-head--hidden');

  setTimeout(popUpRandomMole, 500);
}

// Start game
window.addEventListener('DOMContentLoaded', () => {

  // Collect all mole head elements
  const moleHeads = document.querySelectorAll('.wgs__mole-head');

  // Activate first mole
  setTimeout(popUpRandomMole, 0);

  // Attach click behavior to each mole head and ignore if inactive
  for (let moleHead of moleHeads) {
    moleHead.addEventListener('click', event => {
      if (!clickable) return;
      
      // Update score display
      score += 1;
      document.querySelector('.sb__score').innerHTML = score;
      
      // Speed up game for each click
      popupLength -= popupLength / 15;

      // Stop the scheduled hide
      clearTimeout(hideTimeout);
      hideMole(event.target);
      
      // Visually hide the mole
      event.target.classList.add('wgs__mole-head--hidden');

    // Mark mole as whacked for CSS effect
    event.target.classList.add('wgs__mole-head--whacked');
    });
  }
});
