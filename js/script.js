// 1 Creo l'array di oggetti con le varie informazioni
// 2 Stampo su console le varie informazioni e la stringa della foto
// 3 Stampo le stesse cose del punto 2 su DOM 



// 1 

const arrTeam = [
  {
    nome : 'Wayne Barnett' , 
    ruolo : 'Founder & CEO' ,
    foto : 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome : 'Angela Caroll' , 
    ruolo : 'Chief Editor' ,
    foto : 'angela-caroll-chief-editor.jpg'
  },
  {
    nome : 'Walter Gordon' , 
    ruolo : 'Office Manager' ,
    foto : 'walter-gordon-office-manager.jpg'
  },
  {
    nome : 'Angela Lopez' , 
    ruolo : 'Social Media Manager' ,
    foto : 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome : 'Scott Estrada' , 
    ruolo : 'Developer' ,
    foto : 'scott-estrada-developer.jpg'
  },
  {
    nome : 'Barbara Ramos' , 
    ruolo : 'Graphic Designer' ,
    foto : 'barbara-ramos-graphic-designer.jpg'
  }
]


const row = document.querySelector('.row');


for(let member of arrTeam){
// 2
  console.log(arrTeam);
// 3
  // ul.innerHTML += `<li>nome: ${member.nome} ,ruolo: ${member.ruolo} ,<img src="img/${member.foto}"> </li>`

row.innerHTML += ` <div class="col-4 d-flex flex-column my-5 ">
<div class="img">
  <img src="img/${member.foto}" alt="">
</div>
 <h3>${member.nome}</h3>
 <div class="role">
  ${member.ruolo}
 </div>
</div>`
}




