const addSignature = () => {
  // Get the name, hometown, and email input elements from the form
  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const emailInput = document.getElementById('email');

  const updateSignatureCount = () => {
    const signatureContainer = document.getElementById("signatures-container");
    const count = signatureContainer.children.length;
    document.getElementById("signature-count").textContent = count;
  }

  updateSignatureCount();

  // Check if any of the values are empty
  if (nameInput.value === '') {
    alert('Please fill out the Name field.');
    nameInput.classList.add('error');
    return;
  }

  if (nameInput.value.length < 2) {
    alert('Name must be at least two characters long.');
    nameInput.classList.add('error');
    return;
  }

  if (hometownInput.value === '') {
    alert('Please fill out the Hometown field.');
    hometownInput.classList.add('error');
    return;
  }

  if (!emailInput.value.includes('.com')) {
    alert('Please enter a valid email address with a .com domain.');
    emailInput.classList.add('error');
    return;
  }

  // Create a new paragraph element to display the signature
  const signature = document.createElement('p');
  signature.textContent = `${nameInput.value} from ${hometownInput.value} supports this.`;

  // Get the signature container element (where you want to append the signature)
  const signatureContainer = document.getElementById('signatures-container');

  // Append the signature to the container
  signatureContainer.appendChild(signature);

  // Clear the form fields and remove the error class
  nameInput.value = '';
  hometownInput.value = '';
  emailInput.value = '';
  nameInput.classList.remove('error');
  hometownInput.classList.remove('error');
  emailInput.classList.remove('error');

}

document.getElementById('submit-button').addEventListener('click', function() {
  // Add the signature
  addSignature();
});
