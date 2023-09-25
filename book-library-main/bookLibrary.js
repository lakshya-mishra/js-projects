class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    // console.log(book);
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
    // Insert Cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);

    //Clear Fields
    // title.value = '';
    // author.value = '';
    // isbn.value = '';
  };

  showAlert(message, className){
    // Create div
    const div = document.createElement('div');
    
    // Add classes
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 2000);
  };

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  };

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  };
}  

// Event Listener for adding Book
document.getElementById('book-form').addEventListener('submit', function(e){
  
  // Get Form Values
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value;

  // Instantiating Book
  const book = new Book(title, author, isbn);
  
  // Instantiate UI
  const ui = new UI();

  // Validate 
  if(title === '' || author === '' || isbn === ''){
    // Error alert
    ui.showAlert('Please fill all the fields!', 'error');
    
    //Clear Fields
    ui.clearFields();
  }else {
    // Add book to list
    ui.addBookToList(book);
    
    // Show success
    ui.showAlert('Book Added!', 'success')
    //Clear Fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for deleting Book
document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);
    
    // Show message
    ui.showAlert('Book Deleted!', 'success');
})