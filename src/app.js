/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "lastofus", "iendwithcom", "iendwithit"];
  var ul = document.getElementById("domainsList");
  var generateButton = document.getElementById("trigger");
  var clearButton = document.getElementById("clear");
  generateButton.addEventListener("click", function() {
    generateDomain(pronoun, adj, noun);
  });
  clearButton.addEventListener("click", function() {
    clearList();
  });

  function generateDomain(arr1, arr2, arr3) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          if (arr3[k].slice(-2) === "us") {
            var li = document.createElement("li");
            li.innerHTML = `${arr1[i]}${arr2[j]}${arr3[k].slice(0, -2)}.${arr3[
              k
            ].slice(-2)}`;
            ul.appendChild(li);
          } else {
            var li = document.createElement("li");
            li.innerHTML = `${arr1[i]}${arr2[j]}${arr3[k]}.com`;
            ul.appendChild(li);
          }
        }
      }
    }
  }

  function clearList() {
    ul.innerHTML = "Click the button to see the available domains";
  }
};
