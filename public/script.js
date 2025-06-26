let editingBookId = null;

function fetchBooks() {
    fetch('/books')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('bookList');
            list.innerHTML = '';
            data.forEach((book, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="book-count">${index + 1}.</span>
                    <strong> ${book.title}</strong> by <strong>${book.author}</strong>
                    <button class="editBTn" onclick="editBook(${book.id}, '${book.title}', '${book.author}')">Edit</button>
                    <button class="deleteBtn" onclick="deleteBook(${book.id})">Delete</button>
                `;
                list.appendChild(li);
            });
            // Update the book count
            document.getElementById('bookCount').textContent = `Total Books: ${data.length}`;
        });
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (!title || !author) return alert('Enter both title and author.');

    const payload = JSON.stringify({ title, author });
    const method = editingBookId ? 'PUT' : 'POST';
    const url = editingBookId ? `/books/${editingBookId}` : '/books';

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: payload
    })
    .then(() => {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('cancelEditBtn').style.display = 'none';
        editingBookId = null;
        fetchBooks();
    });
}

function editBook(id, title, author) {
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('cancelEditBtn').style.display = 'inline';
    editingBookId = id;
}

function cancelEdit() {
    editingBookId = null;
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('cancelEditBtn').style.display = 'none';
}

function deleteBook(id) {
    fetch(`/books/${id}`, { method: 'DELETE' })
        .then(() => fetchBooks());
}

// Initial load
fetchBooks();