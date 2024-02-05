# Cookie Fortune Project

This is a project comissioned by the artist Alivia, creator of all images used in it. It was comissioned for her to use on her own portfoliio, and one of my first freelance jobs.

This project is a fun, interactive web application that simulates a cookie jar. Users can click on a cookie, which triggers a series of animations. The cookie is taken out of the jar, opened, and reveals a random motivational phrase to the user.

It displays my skills in manipulating the DOM and using functions and conditional statements to put it all together and make the whole thing work.

## How It Works

The application uses JavaScript to handle user interactions and manipulate the DOM. When a user clicks on the cookie, a random number is generated. Depending on the value of this number, different animations and events are triggered.

If the random number is less than or equal to 0.25, the cookie is taken out of the jar after teasing shake of denial. After a series of animations, it goes back to original state.

If the random number is greater than 0.25 and less than or equal to 0.75, the cookie is taken out of the jar and opened, revealing a random motivational phrase. The phrase is displayed in a new paragraph element that is appended to the DOM.

if greater than 0.75 the jar shakes in denial and the user gets to try again.

After getting their fortune, the user can click on the cookie to go back to initial state.

## Project Structure

The project consists of an `index.js` file, which contains the main JavaScript logic, and an `imgs` directory, which contains the GIFs used for the animations.

## How to Use

To use the application, simply open the `index.html` file in your web browser and click on the cookie. Enjoy the animations and your motivational phrase!
