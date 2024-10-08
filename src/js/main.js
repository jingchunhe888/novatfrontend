document.addEventListener("DOMContentLoaded", function () {
  const addClientButton = document.getElementById("addClientButton");
  const addClientModal = document.getElementById("addClientModal");
  const closeModalButton = document.getElementById("closeModalButton");
  const uploadFilesButton = document.querySelector(".uploadFilesButton");
  const nameInputField = document.querySelector(".nameInputField");
  const additionalActionsColumn = document.querySelector(".additionalActionsColumn");

  // Show the modal when "Add Client" button is clicked
  addClientButton.addEventListener("click", function () {
      addClientModal.style.display = "flex"; // Display the modal
  });

  // Hide the modal when the close SVG is clicked
  closeModalButton.addEventListener("click", function () {
      addClientModal.style.display = "none"; // Hide the modal
  });

  // Handle the upload files button click
  uploadFilesButton.addEventListener("click", function () {
      const clientName = nameInputField.value.trim(); // Get the client name

      if (clientName) {
          // Create a new client entry with the visual format
          const newClientDiv = document.createElement("div");
          newClientDiv.classList.add("secondaryContentBox");
          newClientDiv.innerHTML = `
                <div class="inlineFlexRow">
                    <div class="imageAndInputRow">
                        <img class="inputImage" src="./assets/5c888555c687b87831f5b010ce9b0b09.svg" alt="alt text" />
                        <p class="inputLabel">${clientName}</p>
                    </div>
                    <div class="actionButtonRow">
                        <button class="launchButton">Launch</button>
                        <img class="launchImage deleteButton" src="./assets/ea2fc0acd1114d349e894974986b105c.svg" alt="Delete" style="cursor: pointer;" />
                    </div>
                </div>
                <img class="separatorLine" src="./assets/f7b97f226fb21759ab170421000923ed.svg" alt="alt text" />
          `;

          // Append the new client entry to the additionalActionsColumn
          additionalActionsColumn.appendChild(newClientDiv);

          // Attach the delete functionality
          const deleteButton = newClientDiv.querySelector(".deleteButton");
          deleteButton.addEventListener("click", function () {
              newClientDiv.remove(); // Remove the client entry
          });

          // Reset the input field and hide the modal
          nameInputField.value = ""; // Clear the input field
          addClientModal.style.display = "none"; // Hide the modal
      } else {
          alert("Please enter a client name."); // Show alert if no name is provided
      }
  });
});
