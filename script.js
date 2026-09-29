// Confirm that the external script is linked correctly.
console.log("script.js is connected");

// Add one in-page confirmation after the RSVP button.
function handleRSVP() {
  if (document.getElementById("rsvpConfirmation")) {
    return;
  }

  const message = document.createElement("p");
  message.id = "rsvpConfirmation";
  message.classList.add("feedback-message");
  message.setAttribute("role", "status");
  message.textContent = "You're on the list — see you there!";

  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
}

// Update the displayed count whenever a visitor expresses interest.
function incrementInterest() {
  const countDisplay = document.getElementById("interestCount");
  const currentCount = Number(countDisplay.textContent);
  countDisplay.textContent = String(currentCount + 1);
}

/*
Reflection
1. I put a message into the page instead of using alert() so the
   confirmation stays with the RSVP button and does not mess with browsing.
   An alert would block the page and disappear from view when dismissed.
2. The onclick event attribute calls handleRSVP() when the button is clicked.
   The function creates a paragraph with createElement(), fills it with
   textContent, then after() inserts it beside the button for the user to see.
3. Proximity: the RSVP confirmation appears directly beneath its button.
   Repetition and contrast: it uses the site's monospace font and a dark green
   text color that stands out on the light page without overpowering it. The
   flexible action row wraps on narrow screens to preserve alignment.
*/