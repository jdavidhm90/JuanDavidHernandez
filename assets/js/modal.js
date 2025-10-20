const images = document.querySelectorAll(".gallery__item img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal"); 

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalImage = document.createElement("img");
    modalImage.src = img.src; 

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "x"; // Add an "x" to the close button
    closeBtn.addEventListener("click", () => {
      modal.remove();
    });

    const modalLabel = document.createElement("div"); // Create label element
modalLabel.classList.add("modal-label"); // Add CSS class

const labelText = img.parentElement.dataset.modalLabel; // Get label from data attribute
modalLabel.textContent = labelText; // Set label text

        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalLabel);
        modalContent.appendChild(closeBtn); // Close button last

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });
  });
});

      function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

