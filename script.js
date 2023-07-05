const getBooks = function () {
    fetch("https://striveschool-api.herokuapp.com/books")
      
      .then((res) => {
        if (res.ok) return res.json()
      })
     
      .then((data) => {
        console.log(data)
        const booksRow = document.getElementById("books-row")
        data.forEach((book) => {
          let div = document.createElement("div")
          div.classList.add("mt-5")
          div.classList.add("p-2")
          div.innerHTML = `<img src=${book.img} style="width: 100%"; height=430; border= 4px solid black;  >
                           <h4 class="text-center text-truncate"> ${book.title} </h4>
                           <h6> ${book.price}€ </h6>
                           <button class="btn btn-primary"> Rimuovi </button>
                           <button class="btn btn-dark" name="${book.title}" price="${book.price}"> Aggiungi al carrello </button>`

          booksRow.appendChild(div)
        })
      })
     
      .then(() => {
      
        const buttons = document.querySelectorAll(".btn-primary")
        buttons.forEach((button) => {
          button.addEventListener("click", function () {
            this.parentElement.style.display = "none"
          })
        })
   
        const buttonsShopping = document.querySelectorAll(".btn-dark")
        const carrelloRow = document.getElementById("carrello-row")
        buttonsShopping.forEach((button) => {
          button.addEventListener("click", function () {
            let col = document.createElement("div")
            col.innerHTML = `<button class="btn btn-danger"> Remove </button>
                             ${this.getAttribute("name")} 
                             - ${this.getAttribute("price")}`
            carrelloRow.appendChild(col)

            document.querySelectorAll(".btn-danger").forEach((button) => {
              button.addEventListener("click", function () {
                this.parentElement.style.display = "none"
              })
            })
          })
        })
      })
  }

  getBooks()