// Mendapatkan elemen list
let list = document.querySelector('.todo-list');

// Fungsi untuk Tambah task pada list
document.querySelector('.todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // dapatkan input dari user
    let input = document.querySelector('.todo-input');

    // Jika input tidak kosong
    if (input.value.trim() !== '') {
        // Buat elemen "li" baru
        let newItem = document.createElement('li');
        
        // Tambahkan class "todo-item" pada elemen "li" baru
        newItem.classList.add('todo-item');

        // Menambahkan isi nya dengan input dari user dan elemen "li" baru ke dalam list
        newItem.textContent = input.value;
        list.appendChild(newItem);

        // Kosongkan input
        input.value = '';

        // Event listener untuk toggle completed
        newItem.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
    
    // Jika input kosong muncul alert
    } else {
        alert('Please enter a task.');
    }
});

// Fungsi untuk Simpan task pada list
document.querySelector('.save-list-button').addEventListener('click', function() {
    // Simpan list ke localStorage
    localStorage.setItem('todoList', list.innerHTML);
});

// Fungsi untuk Load task pada list
window.addEventListener('DOMContentLoaded', (event) => {
    // Mendapatkan data list dari localStorage
    let savedList = localStorage.getItem('todoList');

    // Jika list tidak kosong
    if (savedList) {
        // Tampilkan list yang sudah tersimpan pada list
        list.innerHTML = savedList;
    }
});

// Fungsi untuk Hapus task pada list
document.querySelector('.empty-list-button').addEventListener('click', function() {

    //hapus semua elemen "li" dari list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Hapus list dari localStorage
    localStorage.removeItem('todoList');
});

// Fungsi untuk Hapus task yang sudah selesai pada list
document.querySelector('.clear-completed-button').addEventListener('click', function() {
    // Mendapatkan list yang sudah ditandai selesai
    let completedTasks = document.querySelectorAll('.todo-item.completed');
    
    // Hapus semua list yang sudah ditandai selesai
    completedTasks.forEach(function(task) {
        task.remove();
    });

    // Simpan update list ke localStorage
    localStorage.setItem('todoList', list.innerHTML);
});