// Wordpress start here ------------------------------------

async function getData() {
    const url = "https://wordpress.toldeveloper.dk/wp-json/wp/v2/posts?_embed";
    const res = await fetch(url);
    const data = await res.json();
    appendPosts(data);
}

getData();

// append wp posts to the DOM
function appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
        console.log(post);
        htmlTemplate += /*html*/ `
      <article  class="portfolioPost">
        <div>
            <img class="portfolioIMG" src="${post.acf.myimagelabel.url}">
        </div>
        <div>
            <h3>${post.title.rendered}</h3>
            <p>${post.content.rendered}</p>
        </div>
      </article>
    `;
    }

   

    document.querySelector(".portfolio_insert").innerHTML = htmlTemplate;
}


// Activate onscroll animations -------------------------------------

  AOS.init();


// EmailJS kontaktformular ----------------------------------------

(function() {
  // https://dashboard.emailjs.com/admin/account
  // TILFØJER 0 TIL SIDST FOR AT ØDELÆGGE KEY OG DEBUGGE !!!!!!!!!!!!!!!!
  emailjs.init('_I26l-u9I7qmc80Fe');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              const form = document.querySelector('.form')
              form.reset();

              console.log('SUCCESS!');
              alert("Mail sendt! \n\nJeg vil forsøge at svare dig hurtigst muligt");

              form.reset();
          }, function(error) {
              console.log('FAILED...', error);
              alert("Noget gik galt..\n\nKontakt mig eventuelt igennem LinkedIN i stedet");
          });
  });
}




// function buttonMSG() {
//   const btn = document.getElementById('submitBtn')
//   const form = document.querySelector('.form')
//   const formName = document.getElementById("formName")
//   const formEmail = document.getElementById("formEmail")
//   const formMessage = document.getElementById("formMessage")

//   // if (formName.value.length > 0 && formEmail.value.length > 5 && formMessage.value.length > 10) {
//   //   form.reset();
//   // }
  
//   form.reset();
  

// }

