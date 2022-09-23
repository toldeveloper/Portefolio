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
      <article class="portfolioPost">
        <div>
            <img src="${post.acf.myimagelabel.url}">
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




  AOS.init();
