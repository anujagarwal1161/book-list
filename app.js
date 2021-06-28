function book(title,author,isbn)
{
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
function UI(){}
UI.prototype.addElement=function(books)
{
    const list=document.querySelector('.Add');
    const row=document.createElement('tr');
    row.innerHTML = '<td>' + books.title + '</td>'+'<td>' + books.author + '</td>'+'<td>' + books.isbn + '</td>' +'<td><a href="#" class="delete">X</a></td>';
        list.appendChild(row); 
}
 UI.prototype.addAlert=function(message, className)
{
    const div=document.createElement('div');
    div.className='alert';
    div.className=className;
    div.appendChild(document.createTextNode(message));
    // get parent
    const parent=document.querySelector('.myform');
    const form=document.getElementById('book');
    parent.insertBefore(div,form);
    setTimeout(function()
    {
        document.querySelector('.alert').remove();
    }, 30);
}
UI.prototype.clearFields=function()
{
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}
UI.prototype.deleteBook = function(target)
{
if(target.className === 'delete')
{
    target.parentElement.parentElement.remove();
}
}
   document.getElementById('book').addEventListener('submit',
function(e)
{
    const title=document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn=document.getElementById('isbn').value
    const booklist=new book(title,author,isbn);
    const ui=new UI();
    if(title === '' || author === '' || isbn === '')
    {
        ui.addAlert('please fill in all details','error');
    }
    else
    {
    ui.addElement(booklist);
    ui.addAlert('Book Added','success');
    ui.clearFields();
    e.preventDefault(); 
    }
});
document.querySelector('.Add').addEventListener('click',
function(e)
{
  const ui=new UI();
  ui.deleteBook(e.target);
  ui.addAlert('Book removed', 'success');
  e.preventDefault();                                                                                           
});