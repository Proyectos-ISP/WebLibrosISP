const urlApi = 'https://ispdatabase1-0c05.restdb.io/rest/libros?apikey=6514e9466888543cf70c01b1';

const appBooks = {
    booksListener: ()=>{
        const conteiner = document.getElementById("bookListener");

        let htmlConteiner = "";
        
        fetch(urlApi)
        .then(response => response.json())
        .then(books =>{

            for(const book of books) {
                htmlConteiner += `
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <img src="${book.front_url}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${book.name}</h5>
                                <h8 class="card-text">${book.gender}
                                <br>
                                <br>
                                <button class="btn btn-dark" id="buttonShowMore" type="button" data-bs-toggle="modal" data-bs-target="#showmoreBooksModal"><i class="bi bi-eye"></i></i> 
                                Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                
                </div>
                `;
            };
            conteiner.innerHTML = htmlConteiner;
        })
    },
    addBooks: ()=>{
        return;
    }
    // showInfoBooks: ()=>{
    //     const conteiner = document.getElementById("buttonShowMore")

    //     let htmlConteiner = "";

    //     fetch(urlApi)
    //     .then(response => response.json())
    //     .then(books =>{
    //         for (const book of books) {
    //             htmlConteiner+=`

    //             `
    //         }
    //     })
        
    // }
}

appBooks.booksListener();
