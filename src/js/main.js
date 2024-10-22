document.addEventListener("DOMContentLoaded", function () {
    const addClientButton = document.getElementById("addClientButton");
    const addClientModal = document.getElementById("addClientModal");
    const closeModalButton = document.getElementById("closeModalButton");
    const uploadFilesButton = document.querySelector(".uploadFilesButton");
    const nameInputField = document.querySelector(".nameInputField");
    const additionalActionsColumn = document.querySelector(".additionalActionsColumn");
    const uploadFilesBtn = document.querySelector(".uploadFilesBtn");
    const fileInfoContainer = document.querySelector(".fileInfoContainer");
    const fileInput = document.getElementById("fileInput");
    const viewSummary = document.getElementById("viewSummary");
    const viewSummaryModal = document.getElementById("viewSummaryModal");
    const closeSummaryButton = document.getElementById("closeSummaryButton");


    if (uploadFilesBtn) {
        uploadFilesBtn.addEventListener("click",function(){
            fileInput.click();

    });



    // // Show the modal when "Add Client" button is clicked
    // addClientButton.addEventListener("click", function () {
    //     addClientModal.style.display = "flex"; // Display the modal
    // });

    // // Hide the modal when the close button is clicked
    // closeModalButton.addEventListener("click", function () {
    //     addClientModal.style.display = "none"; // Hide the modal
    // });
    
    
    viewSummary.addEventListener('click', function() {
        viewSummaryModal.style.display = "flex";  // Ensure it's flex to match other modal behavior
    });
    
    closeSummaryButton.addEventListener("click", function() {
        viewSummaryModal.style.display = "none";  // Hide the modal when the close button is clicked
    });

    fileInput.addEventListener('change', function () {
        // Clear the existing content in fileInfoContainer (optional, based on preference)
        fileInfoContainer.innerHTML = '';

        // Loop through the selected files and display their names in the container
        Array.from(fileInput.files).forEach(function (file) {
            // Create a new row for each file
            const fileRow = document.createElement('div');
            fileRow.classList.add('fileInfoRow');

            // Create an element to hold the file name
            const fileNameElement = document.createElement('p');
            fileNameElement.classList.add('fileName');
            fileNameElement.textContent = file.name;

            // Create the icon element for the file status
            const fileStatusIcon = document.createElement('img');
            fileStatusIcon.classList.add('fileStatusIcon');
            fileStatusIcon.setAttribute('src', './assets/90410cffd815afcaabb8327315f546c6.svg');
            fileStatusIcon.setAttribute('alt', 'File status icon');
            

            // Append the file name and icon to the file row
            fileRow.appendChild(fileNameElement);
            fileRow.appendChild(fileStatusIcon);

            // Append the file row to the file info container
            fileInfoContainer.appendChild(fileRow);
            
            const divider = document.createElement('img');
            divider.classList.add('dividerLine');
            divider.setAttribute('src', './assets/f7b97f226fb21759ab170421000923ed.svg');
            fileInfoContainer.appendChild(divider);
        });

      });

    }

    
    
    // Show the modal when "Add Client" button is clicked
    addClientButton.addEventListener("click", function () {
        addClientModal.style.display = "flex"; // Display the modal
    });

    // Hide the modal when the close button is clicked
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
                        <button class="launchButton"  onclick="window.location.href='Launch.html'" >Launch</button>
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

    function showTab(tabId) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        // Show the clicked tab
        document.getElementById(tabId).classList.add('active');
        
        // Remove the indicator from all buttons
        document.querySelectorAll('.actionButtonsRow img').forEach(icon => icon.classList.remove('activeTabIcon'));
    
        // Add the indicator below the clicked button
        if (tabId === 'vendorsTab') {
            document.querySelector('#vendorsBtn + img').classList.add('activeTabIcon');
        } else if (tabId === 'accountsTab') {
            document.querySelector('#accountsBtn + img').classList.add('activeTabIcon');
        } else if (tabId === 'downloadTab') {
            document.querySelector('#downloadBtn + img').classList.add('activeTabIcon');
        }
    }
    
});
