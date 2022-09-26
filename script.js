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
      <article  class=${post.acf.reverse ? "'portfolioPost reversePost'" : "portfolioPost"}>
        <div class="portfolioImgCenter">
            <a href="${post.acf.netlifylink}" target="_blank"> <img class="portfolioIMG" src="${post.acf.myimagelabel.url}"> </a>
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



// TypeWriter -------------------------
// Det her kan 100% gøres på en bedre måde
// 3 funktioner, delay så de ikke kører samtidigt



// Funktion 1, webdeveloper
let i = 0;
let txt = 'Web Developer.';
let speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Funktion 2, Frontend udvikler
let i2 = 0;
let txt2 = 'Frontend Udvikler.';

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
}

// Funktion 3, IT Pedel
let i3 = 0;
let txt3 = 'IT-Pedel.';

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("demo3").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed);
  }
}

// Delay
setTimeout(typeWriter, 500);
setTimeout(typeWriter2, 2000);
setTimeout(typeWriter3, 3500);
