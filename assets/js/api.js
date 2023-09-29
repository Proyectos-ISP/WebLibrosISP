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
                        <div class="card" id="card-main">
                        <img src="${book.front_url}" class="card-img-top" id="card-image">
                            <div class="card-body" id="card-bdy">
                                <h5 class="card-title">${book.name}</h5>
                                <h8 class="card-text">${book.gender}
                                <br>
                                <br>
                                <button class="btn btn-dark" id="buttonShowMore" id="btn-showmore" type="button" data-bs-toggle="modal" data-bs-target="#showmoreBooksModal"><i class="bi bi-eye"></i></i> 
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
    addBook: ()=>{

        const title = document.getElementById("txtTitle")
        const gender = document.getElementById("txtGender")
        const pages = document.getElementById("txtPages")
        const author = document.getElementById("txtAuthor")
        const editorial = document.getElementById("txtEditorial")
        const synopsis = document.getElementById("txtSynopsis")
        const front_url = document.getElementById("txtFile")

        const newBook ={
            "name": title.value,
            "pages": pages.value,
            "author": author.value,
            "editorial": editorial.value,
            "front_url": front_url.value,
            "synopsis": synopsis.value,
            "gender": gender.value
        };


        fetch(urlApi, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(response =>{
            console.log(response);
            window.location.href="index.html";
        });


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
