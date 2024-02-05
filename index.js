//Creates arrawy of motivational phrases that will be randomly picked and displayed when the cookie is clicked.
const motivationalPhrases = [
  "Wow! Your hair looks amazing today.",
  "I know it's been a long year, but it's only going uphills from here!",
  "I know where you live.",
  "You never cease to amaze me. you got this, keep at it!",
  "Fires would be easier to prevent if they didn't sound like rats.",
  "Your energy is just perfect today, I might just be a cookie but... I love it!",
  "Your outfit is amazing, honestly where did you buy it?",
  "Remember that there's always a new happy to be found.",
  "Waking up is already an impressive feat, you're doing great!",
  "Don't forget to water your plants! Seriously, do not!",
  "I predict that in your future... Wow. holy shit! Am I allowed to say? It says that you're gonna be really happy!",
];

// Get the jar and animation images by ID.
const jarImage = document.getElementById("jar");
const animationImage = document.getElementById("animation");

// Add onclick event to the jar image.
jarImage.addEventListener("click", () => {
  // Generate a random number between 0 and 1.
  const random = Math.random();

  //SHAKE AND FORTUNE (25% chance):
  // Check if the random number is less than 0.25.
  if (random <= 0.25) {
    // Change the src of the animation image to the shake.gif and remove the jar from DOM.
    animationImage.src = "/imgs/shake.gif";
    jarImage.remove();

    // Set timers to change pictures when animations are over.
    setTimeout(() => {
      // Change the src of the animation image back to fullPic.png
      animationImage.src = "/imgs/cookieOut.gif";

      setTimeout(() => {
        // Change the src of the animation image back to fullPic.png
        animationImage.src = "/imgs/fullPic.png";
        animationImage.classList.add("animation");

        // Creates new image elements and the div it will be placed in, giving both the proper classes and ids.
        const cookieImage = document.createElement("img");
        cookieImage.src = "/imgs/cookie.gif";
        cookieImage.id = "cookie";
        const luckBox = document.createElement("div");
        luckBox.classList.add("luckBox");

        //Gets the box div and appends the new elements to it.
        const box = document.querySelector(".box");
        box.appendChild(luckBox);
        box.appendChild(cookieImage);

        setTimeout(() => {
          cookieImage.src = "/imgs/openCookie.png";
          // Randomly pick a motivational phrase from the array.
          const randomPhrase =
            motivationalPhrases[
              Math.floor(Math.random() * motivationalPhrases.length)
            ];

          // Create a new paragraph element and set the text content of the paragraph to the random phrase, giivng it an id and appending it to the luckBox.
          const phraseParagraph = document.createElement("p");
          phraseParagraph.textContent = randomPhrase;
          phraseParagraph.id = "luck";
          luckBox.appendChild(phraseParagraph);

          // Add onclick event to the cookie image that will remove the cookie image, the paragraph and the luckBox.
          cookieImage.addEventListener("click", () => {
            cookieImage.remove();
            phraseParagraph.remove();
            luckBox.remove();

            // Append the jar image back to the DOM.
            box.insertBefore(jarImage, animationImage);
          });
        }, 2400);
      }, 2500);
    }, 1300);
  }

  //FOTUNE (50% chance):
  // Check if the random number is greater than 0.25 and less than or equal to 0.75.
  else if (random > 0.25 && random <= 0.75) {
    // Change the src of the animation image to cookie out and remove the jar from DOM.
    animationImage.src = "/imgs/cookieOut.gif";
    jarImage.remove();

    // Set timers to change pictures when animations are over.
    setTimeout(() => {
      // Change the src of the animation image back to fullPic.png.
      animationImage.src = "/imgs/fullPic.png";
      animationImage.classList.add("animation");

      // Creates new image elements and the div it will be placed in, giving both the proper classes and ids.
      const cookieImage = document.createElement("img");
      cookieImage.src = "/imgs/cookie.gif";
      cookieImage.id = "cookie";
      const luckBox = document.createElement("div");
      luckBox.classList.add("luckBox");

      // Add onclick event to the cookie image that will remove the cookie image, the paragraph and the luckBox.
      const box = document.querySelector(".box");
      box.appendChild(luckBox);
      box.appendChild(cookieImage);

      setTimeout(() => {
        cookieImage.src = "/imgs/openCookie.png";
        // Randomly pick a motivational phrase from the array.
        const randomPhrase =
          motivationalPhrases[
            Math.floor(Math.random() * motivationalPhrases.length)
          ];

        // Create a new paragraph element and set the text content of the paragraph to the random phrase, giivng it an id and appending it to the luckBox.
        const phraseParagraph = document.createElement("p");
        phraseParagraph.textContent = randomPhrase;
        phraseParagraph.id = "luck";
        luckBox.appendChild(phraseParagraph);

        // Add onclick event to the cookie image that will remove the cookie image, the paragraph and the luckBox.
        cookieImage.addEventListener("click", () => {
          cookieImage.remove();
          phraseParagraph.remove();
          luckBox.remove();

          // Append the jar image back to the DOM.
          box.insertBefore(jarImage, animationImage);
        });
      }, 2400);
    }, 2500);
  }

  //SHAKE:
  else {
    // Change the src of the animation image to the shake.gif.
    animationImage.src = "/imgs/shake.gif";

    // Change jar opacity to 0.
    jarImage.style.opacity = "0";

    // Set a timer to revert the changes in the end of animation.
    setTimeout(() => {
      // Change the src of the animation image back to fullPic.png
      animationImage.src = "/imgs/fullPic.png";

      // Change jar opacity back to 100.
      jarImage.style.opacity = "100";
    }, 1300);
  }
});
