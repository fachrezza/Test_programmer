// Fungsi untuk menangani login
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form untuk submit secara default

    // Ambil nilai username dan password dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lakukan validasi sederhana untuk username dan password
    if (username === "" || password === "") {
        showMessage("Please enter both username and password.", "error");
        return;
    }

    // Lakukan permintaan ke API untuk autentikasi
    authenticateUser(username, password);
});

// Fungsi untuk autentikasi pengguna
function authenticateUser(username, password) {
    // URL API yang akan digunakan untuk autentikasi (hanya simulasi)
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Fetch data user (untuk simulasi autentikasi)
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            // Cari user berdasarkan username (menggunakan email di sini sebagai pengganti)
            const user = users.find(user => user.email.toLowerCase() === username.toLowerCase());

            if (user) {
                // Jika user ditemukan, simpan token di localStorage (simulasi)
                const token = "fakeToken123"; // Simulasi token
                localStorage.setItem('authToken', token);
                showMessage("Login berhasil!", "success");
            } else {
                // Jika user tidak ditemukan, tampilkan pesan gagal
                showMessage("Login gagal. Username atau password salah.", "error");
            }
        })
        .catch(error => {
            // Tangani error jika permintaan gagal
            console.error('Error during authentication:', error);
            showMessage("Login gagal. Terjadi kesalahan server.", "error");
        });
}

// Fungsi untuk menampilkan pesan status
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.className = type; // Set kelas berdasarkan tipe (success/error)
}
