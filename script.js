const addBookButton =document.querySelector('.AddBookButton');
const submitButton =document.querySelector('.SubmitButton');
const closeButton =document.querySelector('.CloseButton');
const BookDetailDialog=document.querySelector('.BookDetailsDialog');
const form = document.querySelector('.BookDetails');
const BooksContainer=document.querySelector('.BooksContainer');
const BookList=[];

addBookButton.addEventListener('click' , () => {
    BookDetailDialog.showModal();
}
)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const BookName=form.BookName.value.trim();
    const AuthorName=form.AuthorName.value.trim();
     if (!BookName || !AuthorName) {
        alert("Please fill in all fields.");

    }else{
        const newBook={BookName ,AuthorName};
        BookList.push(newBook);
        renderBooks();
        form.reset();
        BookDetailDialog.close();
    }
    // form.reset();
    // BookDetailDialog.close();
    



})


closeButton.addEventListener('click',()=>{
    BookDetailDialog.close();
})

function renderBooks(){
    BooksContainer.innerHTML ='';
    BookList.forEach((book)=>{
        const card = document.createElement('div');
        card.className='BookItem';
        card.innerHTML +=`
        <h3 class="BookTitle">${book.BookName}</h3>
        <p class="AuthorName">${book.AuthorName ? `by ${book.AuthorName}` : ''}</p>
    `;
    BooksContainer.appendChild(card);
    })
}