const API_URL = "https://fakerapi.it/api/v2/addresses?_quantity=10";

const addressList = document.getElementById("address-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Placeholder images
const placeholderImages = [
  "https://placekitten.com/300/200",
  "https://picsum.photos/300/200",
  "https://placebear.com/300/200",
  "https://via.placeholder.com/300x200",
];

// Fetch and render address cards
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderAddresses(data.data));

function renderAddresses(addresses) {
  addresses.forEach((address, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageUrl = placeholderImages[index % placeholderImages.length];

    card.innerHTML = `
      <img src="${imageUrl}" alt="Imagen de dirección">
      <h3>${address.streetName}</h3>
      <p>${address.city}, ${address.country}</p>
    `;

    card.addEventListener("click", () => openModal(address, imageUrl));
    addressList.appendChild(card);
  });
}

// Open modal and display address details
function openModal(address, imageUrl) {
  modal.querySelector("img").src = imageUrl;
  modalTitle.textContent = `${address.street}, ${address.city}`;
  modalDescription.innerHTML = `
    <p><strong>País:</strong> ${address.country} (${address.country_code})</p>
    <p><strong>Código Postal:</strong> ${address.zipcode}</p>
    <p><strong>Latitud:</strong> ${address.latitude}</p>
    <p><strong>Longitud:</strong> ${address.longitude}</p>
  `;

  modal.classList.remove("hidden");
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
