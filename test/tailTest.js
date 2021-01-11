const tail = require("../tail");
const assertEqual = require("../assertEqual");

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 3);
