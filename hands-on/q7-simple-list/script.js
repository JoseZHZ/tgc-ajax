let url = 'https://anapioficeandfire.com/api/books/';
let bookList = document.querySelector('#book-list');
document.querySelector('#btn-load-books').addEventListener('click', async function() {
    let r = await axios.get(url);
    let booksArray = r.data
    for (let eachBook of booksArray) {
        let ulElement = document.createElement('ul')
        let liElementName = document.createElement('li')
        liElementName.innerText = eachBook.name
        let liElementNumberOfPages = document.createElement('li')
        liElementNumberOfPages.innerText = eachBook.numberOfPages
        ulElement.appendChild(liElementName)
        ulElement.appendChild(liElementNumberOfPages)
        bookList.appendChild(ulElement)
    }
})