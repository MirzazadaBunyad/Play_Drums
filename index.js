const soundMappings = {
  "a": "tom-1.mp3",
  "s": "tom-2.mp3",
  "d": "tom-3.mp3",
  "f": "tom-4.mp3",
  "j": "snare.mp3",
  "k": "crash.mp3",
  "l": "kick-bass.mp3"
};

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  const button = document.querySelectorAll(".drum")[i];
  button.addEventListener("click", () => handleButtonClick(button.innerHTML));
}

document.addEventListener("keypress", (event) => {
  handleButtonClick(event.key);
});

function handleButtonClick(key) {
  makeSound(key);
  buttonAnimation(key);
}

function makeSound(key) {
  const soundFile = soundMappings[key];
  if (soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  } else {
    key;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
