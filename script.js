// Function demonstrating scope, parameters, return values, and animation triggering

// Global variable
const box = document.getElementById('box');

// Function with parameters and return value
function triggerAnimation() {
  const animationName = getAnimationName('slideRight');
  applyAnimation(animationName);
}

// Returns the animation name string
function getAnimationName(name) {
  return name;
}

// Applies animation using inline style and resets it
function applyAnimation(name) {
  box.style.animation = `${name} 2s ease-in-out`;

  // Remove animation after it ends to allow replaying
  box.addEventListener('animationend', () => {
    box.style.animation = '';
  }, { once: true });
}
