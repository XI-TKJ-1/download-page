document.addEventListener('DOMContentLoaded', (event) => {
    const inputElement = document.getElementById('nama');
    const submitButton = document.getElementById('submit');
    const formView = document.getElementById('form-view');
    const idCardView = document.getElementById('id-card-view');
    const backButton = document.getElementById('back-button');
    const loadingElement = document.getElementById('loading');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    function formatDate(date) {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                         'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        return `${dayName}, ${date.getDate()} ${monthName} ${date.getFullYear()}`;
    }

    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function cekKodam() {
        const nama = inputElement.value;
        const kodams = [
            'Layla','Hello Word', 'Sangkuriang', 'Roro Jonggrang', 'Jaka Tarub', 'Malin Kundang', 
            'Timun Mas', 'Batu Belah Batu Betangkup', 'Nyi Roro Kidul', 
            'Kancil', 'Ande-Ande Lumut', 'Siti Nurbaya',
            'Ratu Naga', 'Pocong', 'Kuntilanak', 'Sundel Bolong', 
            'Jelangkung', 'Kuntilanak', 'Kuntilanak Putih', 
            'Nyi Roro Kidul', 'Jelangkung',
            'Boboho', 'Si Doel', 'Susi Susanti', 'Tengkorak', 'Ratu Pantai Selatan', 
            'Gara-Gara Jembatan', 'Ratu Badui', 'Naga Bonar', 'Koper', 'Sarip Dol',
            'Abyss', 'Aldous', 'Lancelot', 'Leomord', 'Lylia', 
            'Fanny', 'Lunox', 'Kaja', 'Chou', 'Gusion', 
            'Granger', 'Esmeralda', 'Selena', 'Odette', 'Helcurt',
            'Karina', 'Kagura', 'Hayabusa', 'Aamon', 'Clint'
        ];

        const titles = {
            'Hello Word': 'Lagendary',
            'Layla': 'Dark Sistem', 'Abyss': 'Dark Sistem', 'Aldous': 'Dark Sistem', 'Lancelot': 'Dark Sistem', 
            'Leomord': 'Dark Sistem', 'Lylia': 'Dark Sistem', 'Fanny': 'Dark Sistem', 'Lunox': 'Dark Sistem', 
            'Kaja': 'Dark Sistem', 'Chou': 'Dark Sistem', 'Gusion': 'Dark Sistem', 'Granger': 'Dark Sistem', 
            'Esmeralda': 'Dark Sistem', 'Selena': 'Dark Sistem', 'Odette': 'Dark Sistem', 'Helcurt': 'Dark Sistem', 
            'Karina': 'Dark Sistem', 'Kagura': 'Dark Sistem', 'Hayabusa': 'Dark Sistem', 'Aamon': 'Dark Sistem', 
            'Clint': 'Dark Sistem'
        };

        const indonesianNames = [
            'Layla', 'Sangkuriang', 'Roro Jonggrang', 'Jaka Tarub', 'Malin Kundang', 
            'Timun Mas', 'Batu Belah Batu Betangkup', 'Nyi Roro Kidul', 
            'Kancil', 'Ande-Ande Lumut', 'Siti Nurbaya', 'Ratu Naga', 
            'Pocong', 'Kuntilanak', 'Sundel Bolong', 'Jelangkung', 
            'Kuntilanak Putih', 'Nyi Roro Kidul', 'Boboho', 'Si Doel', 
            'Susi Susanti', 'Tengkorak', 'Ratu Pantai Selatan', 
            'Gara-Gara Jembatan', 'Ratu Badui', 'Naga Bonar', 'Koper', 'Sarip Dol'
        ];

        const indonesianHorrorNames = ['Pocong', 'Kuntilanak', 'Sundel Bolong', 'Jelangkung', 'Kuntilanak Putih'];

        if (nama.trim() === "") {
            alert("Masukkan nama");
            return;
        }

        loadingElement.style.display = 'block';
        formView.style.display = 'none';

        setTimeout(() => {
            loadingElement.style.display = 'none';
            idCardView.style.display = 'block';

            const kodam = kodams[Math.floor(Math.random() * kodams.length)];
            let title = titles[kodam] || 'Kroco';
            if (indonesianNames.includes(kodam) && !indonesianHorrorNames.includes(kodam)) {
                title = 'Langka';
            }
            const titleClass = `title-${title.replace(' ', '-')}`;
            const now = new Date();
            document.getElementById('nama-pemilik').innerText = `Nama: ${nama}`;
            document.getElementById('kodam').innerHTML = `Kodam: ${kodam} <span class="${titleClass}">${title}</span>`;
            document.getElementById('tanggal').innerText = `Tanggal: ${formatDate(now)}`;
            document.getElementById('jam').innerText = `Waktu: ${formatTime(now)}`;
            document.getElementById('ip-address').innerText = `IP Address: 192.168.1.1`;
        }, 1000);
    }

    submitButton.addEventListener('click', cekKodam);

    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            cekKodam();
        }
    });

    backButton.addEventListener('click', () => {
        idCardView.style.display = 'none';
        formView.style.display = 'block';
        inputElement.value = '';
    });

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
