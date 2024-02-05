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

// Get the jar image element by ID
const jarImage = document.getElementById("jar");

// Get the animation image element by ID
const animationImage = document.getElementById("animation");

// Add onclick event to the jar image
jarImage.addEventListener("click", () => {
  // Generate a random number between 0 and 1
  const random = Math.random();

  //PURPLE:
  // Check if the random number is less than or equal to 0.33 (33% chance)
  if (random <= 0.05) {
    // Change the src of the animation image to the shake.gif
    animationImage.src = "./imgs/animations/shake.gif";

    // Remove the jar image from the DOM
    jarImage.remove();

    // Set a timer to revert the changes after 2 seconds
    setTimeout(() => {
      // Change the src of the animation image back to fullPic.png
      animationImage.src = "./imgs/animations/cookieOut.gif";

      // Set a timer to revert the changes after 2 seconds
      setTimeout(() => {
        // Change the src of the animation image back to fullPic.png
        animationImage.src = "./imgs/fullPic.png";
        // Add the class "cookie" to the animation image
        animationImage.classList.add("animation");

        // Create a new image element
        const cookieImage = document.createElement("img");

        // Set the src attribute to the cookie.gif path
        cookieImage.src = "./imgs/animations/cookie.gif";

        // Add the class "cookie" to the cookie image
        cookieImage.id = "cookie";

        // Append the cookie image to the document body
        const luckBox = document.createElement("div");
        luckBox.classList.add("luckBox");
        const box = document.querySelector(".box");
        box.appendChild(luckBox);
        box.appendChild(cookieImage);

        setTimeout(() => {
          cookieImage.src = "./imgs/openCookie.png";
          // Randomly pick a motivational phrase from the array
          const randomPhrase =
            motivationalPhrases[
              Math.floor(Math.random() * motivationalPhrases.length)
            ];

          // Create a new paragraph element
          const phraseParagraph = document.createElement("p");

          // Set the text content of the paragraph to the random phrase
          phraseParagraph.textContent = randomPhrase;

          // Append the paragraph to the document body
          phraseParagraph.id = "luck";
          luckBox.appendChild(phraseParagraph);

          // Add onclick event to the cookie image
          cookieImage.addEventListener("click", () => {
            // Remove the cookie image from the DOM
            cookieImage.remove();
            phraseParagraph.remove();
            luckBox.remove();

            // Append the jar image back to the DOM
            box.insertBefore(jarImage, animationImage);
          });
        }, 2400);
      }, 2500);
    }, 1300);
  }

  //YELLOOW:
  // Check if the random number is greater than 0.33 and less than or equal to 0.66 (33% chance)
  else if (random > 0.05 && random <= 0.65) {
    // Change the src of the animation image to cookie out
    animationImage.src = "./imgs/animations/cookieOut.gif";

    // Remove the jar image from the DOM
    jarImage.remove();

    // Set a timer to revert the changes after 2 seconds
    setTimeout(() => {
      // Change the src of the animation image back to fullPic.png
      animationImage.src = "./imgs/fullPic.png";
      // Add the class "cookie" to the animation image
      animationImage.classList.add("animation");

      // Create a new image element
      const cookieImage = document.createElement("img");

      // Set the src attribute to the cookie.gif path
      cookieImage.src = "./imgs/animations/cookie.gif";

      // Add the class "cookie" to the cookie image
      cookieImage.id = "cookie";

      // Append the cookie image to the document body
      const luckBox = document.createElement("div");
      luckBox.classList.add("luckBox");
      const box = document.querySelector(".box");
      box.appendChild(luckBox);
      box.appendChild(cookieImage);

      setTimeout(() => {
        cookieImage.src = "./imgs/openCookie.png";
        // Randomly pick a motivational phrase from the array
        const randomPhrase =
          motivationalPhrases[
            Math.floor(Math.random() * motivationalPhrases.length)
          ];

        // Create a new paragraph element
        const phraseParagraph = document.createElement("p");

        // Set the text content of the paragraph to the random phrase
        phraseParagraph.textContent = randomPhrase;

        // Append the paragraph to the document body
        phraseParagraph.id = "luck";
        luckBox.appendChild(phraseParagraph);

        // Add onclick event to the cookie image
        cookieImage.addEventListener("click", () => {
          // Remove the cookie image from the DOM
          cookieImage.remove();
          phraseParagraph.remove();
          luckBox.remove();

          // Append the jar image back to the DOM
          box.insertBefore(jarImage, animationImage);
        });
      }, 2400);
    }, 2500);
  }

  //GREEN:
  else {
    // Change the src of the animation image to the shake.gif
    animationImage.src = "./imgs/animations/shake.gif";

    // Remove the jar image from the DOM
    jarImage.style.opacity = "0";

    // Set a timer to revert the changes after 2 seconds
    setTimeout(() => {
      // Change the src of the animation image back to fullPic.png
      animationImage.src = "./imgs/fullPic.png";

      // Append the jar image back to the DOM
      jarImage.style.opacity = "100";
    }, 1300);
  }
});
