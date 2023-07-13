const designUploadInput = document.getElementById('design-upload');
const designPreviewContainer = document.getElementById('design-preview');

designUploadInput.addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result;
            designPreviewContainer.innerHTML = '';
            designPreviewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
