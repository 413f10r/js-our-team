const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*Dato un array di oggetti rappresentante un team di un’azienda, 
creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare 
il nuovo membro sulla pagina (usate una foto qualunque, anche vostra 
se volete sentirvi parte del team! */

const teamCard = document.querySelector('.cardContainer')

function cicloAddMembers() {
  for (let i = 0; i < teamMembers.length; i++) {
    let element = teamMembers[i]

    cardContainer.innerHTML += `
     <div class="card d-flex flex-row  bg-dark  text-light p-2 px-3 my-3">

      <img  style="max-width: 216px; max-height: 216px; object-fit: cover; min-height: 216px;" src='${element.img}' class="p-2 rounded" alt="imgProfilo">

      <div class="card-body d-flex flex-column lh-lg align-items-center">

        <h5 class="card-title my-2">${element.name}</h5>
        <span class="card-text my-2">${element.role}</span>
        <span class="card-text my-2">${element.email}</span>

      </div>

    </div>

    
    `

  }
}

cicloAddMembers()

//recuperiamo i valori degli input del form

const btn = document.getElementById('btn')

btn.addEventListener('click'), function (event) {
  event.preventDefault()
  const name = document.getElementById('name').value
  const role = document.getElementById('role').value
  const image = document.getElementById('image').value
}

teamMembers.push(
  {
    name,
    role,
    image
  }
)

console.log(teamMembers)





/*   `
    <div class="card d-flex flex-row  bg-dark  text-light p-2 px-3 my-3">

      <img  style="max-width: 216px; max-height: 216px; object-fit: cover; min-height: 216px;" src='${element.img}' class="p-2 rounded" alt="imgProfilo">

      <div class="card-body d-flex flex-column lh-lg align-items-center">

        <h5 class="card-title my-2">${element.name}</h5>
        <span class="card-text my-2">${element.role}</span>
        <span class="card-text my-2">${element.email}</span>

      </div>

    </div>
    
    `
    */