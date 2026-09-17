// Fotoğraf Galerisi Sürükleme / Değiştirme Fonksiyonu
function changeImage(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('img');
    let activeIndex = -1;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
            img.classList.remove('active');
        }
    });

    let newIndex = activeIndex + direction;

    if (newIndex >= images.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = images.length - 1;
    }

    images[newIndex].classList.add('active');
}

// Modal İletişim Kutusu
function openModal(employeeName) {
    document.getElementById('modalTitle').innerText = employeeName + " ile İletişime Geçin";
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Form Gönderme
function submitForm(event) {
    event.preventDefault();
    alert('Mesajınız başarıyla iletildi! En kısa sürede dönüş yapılacaktır.');
    closeModal();
}