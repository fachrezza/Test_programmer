// Data artikel untuk contoh (bisa diganti dengan API)
const articles = [
    { id: 1, title: "Article 1", content: "This is the first article." },
    { id: 2, title: "Article 2", content: "This is the second article." },
    { id: 3, title: "Article 3", content: "This is the third article." },
    { id: 4, title: "Article 4", content: "This is the fourth article." },
    { id: 5, title: "Article 5", content: "This is the fifth article." },
    { id: 6, title: "Article 6", content: "This is the sixth article." },
    { id: 7, title: "Article 7", content: "This is the seventh article." },
    { id: 8, title: "Article 8", content: "This is the eighth article." },
    { id: 9, title: "Article 9", content: "This is the ninth article." },
    { id: 10, title: "Article 10", content: "This is the tenth article." }
];

const articlesPerPage = 5; // Jumlah artikel yang ditampilkan per halaman
let currentPage = 1; // Halaman pertama yang ditampilkan

// Fungsi untuk menampilkan artikel berdasarkan halaman saat ini
function displayArticles(page) {
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const currentArticles = articles.slice(start, end);

    const container = document.getElementById("articles-container");
    container.innerHTML = ""; // Kosongkan container sebelum menampilkan artikel baru

    currentArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
        `;
        container.appendChild(articleElement);
    });

    // Update tombol paginasi
    updatePagination(page);
}

// Fungsi untuk memperbarui status tombol navigasi
function updatePagination(page) {
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    // Menonaktifkan tombol prev jika halaman pertama
    if (page === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Menonaktifkan tombol next jika sudah di halaman terakhir
    if (page * articlesPerPage >= articles.length) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Fungsi untuk mengubah halaman
function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= Math.ceil(articles.length / articlesPerPage)) {
        currentPage = newPage;
        displayArticles(currentPage);
    }
}

// Menampilkan artikel pertama saat halaman pertama dimuat
displayArticles(currentPage);
