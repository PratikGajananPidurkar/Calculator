// script.js

const socialMediaHandles = [
    { name: 'Twitter', username: 'your_twitter_handle' },
    { name: 'Facebook', username: 'your_facebook_username' },
    { name: 'Instagram', username: 'your_instagram_username' },
    { name: 'Linkedin', username: 'your_instagram_username' },
    { name: 'whatsapp', username: 'your_instagram_username' },
    // Add more social media handles as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const qrCodesContainer = document.getElementById('qr-codes');

    let row;
    socialMediaHandles.forEach((handle, index) => {
        if (index % 2 === 0) {
            row = document.createElement('div');
            row.classList.add('qr-row');
            qrCodesContainer.appendChild(row);
        }

        const qrCode = generateQRCode(handle.username);
        const qrCodeElement = document.createElement('div');
        qrCodeElement.classList.add('qr-code');
        qrCodeElement.innerHTML = `
            <h3>${handle.name}</h3>
            <img src="${qrCode}" alt="${handle.name} QR Code">
        `;
        row.appendChild(qrCodeElement);
    });
});

function generateQRCode(text) {
    // You'll need to replace 'QRCodeGeneratorLibrary' with the actual library you're using
    // Example: QRCodeGeneratorLibrary.generate(text);
    return `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200`;
}