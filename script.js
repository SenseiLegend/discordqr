// DOM Elements
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
const inviteLinkInput = document.getElementById('inviteLinkInput');
const errorMessage = document.getElementById('errorMessage');
const generateQRBtn = document.getElementById('generateQRBtn');
const qrCodeContainer = document.getElementById('qrCodeContainer');

// Regex for Discord invite link validation
const discordInviteRegex = /^(https?:\/\/)?(www\.)?discord\.(gg|com)\/[a-zA-Z0-9]+/;

// Open Popup
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close Popup
closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  resetPopup();
});

// Validate Input
inviteLinkInput.addEventListener('input', () => {
  const link = inviteLinkInput.value.trim();
  if (discordInviteRegex.test(link)) {
    inviteLinkInput.style.borderColor = 'green';
    errorMessage.textContent = '';
    generateQRBtn.classList.remove('hidden');
  } else {
    inviteLinkInput.style.borderColor = 'red';
    errorMessage.textContent = 'Please enter a valid Discord invite link.';
    generateQRBtn.classList.add('hidden');
  }
});

// Generate QR Code
generateQRBtn.addEventListener('click', () => {
  const link = inviteLinkInput.value.trim();
  if (discordInviteRegex.test(link)) {
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, {
      text: link,
      width: 200,
      height: 200,
    });
    qrCodeContainer.classList.remove('hidden');
  }
});

// Reset Popup
function resetPopup() {
  inviteLinkInput.value = '';
  inviteLinkInput.style.borderColor = '#ccc';
  errorMessage.textContent = '';
  generateQRBtn.classList.add('hidden');
  qrCodeContainer.innerHTML = '';
  qrCodeContainer.classList.add('hidden');
}