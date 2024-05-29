/////////////////////////// HEADER ////////////////////////

// let the ul go down by clicking
let menu = document.getElementById("menu-icon");
let headerUl = document.getElementById("header-ul");
menu.addEventListener("click", () => {
  if (menu.classList.contains("clicked")) {
    headerUl.style.cssText = "transform: translateY(0)";
  } else {
    headerUl.style.cssText = "transform: translateY(-100%)";
  }
});

/////////////////////////// LATEST NEWS ////////////////////

// get the artiles from the json file

function getNews(file) {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let articlesObj = JSON.parse(this.responseText);

      // create the article
      createArticle(articlesObj, articlesObj.length);
    }
  };

  myRequest.open("GET", file, true);
  myRequest.send();
}

// create the articles function
function createArticle(theObj, count) {
  let ol = document.createElement("ol");
  for (let i = 0; i < count; i++) {
    // create the elements
    let li = document.createElement("li");
    let article = document.createElement("article");
    let poster = document.createElement("div");
    let link = document.createElement("a");
    let span = document.createElement("span");
    let img = document.createElement("img");
    let content = document.createElement("div");
    let contentBody = document.createElement("div");
    let team = document.createElement("a");
    let title = document.createElement("a");
    let footer = document.createElement("footer");

    // add neciciry things
    poster.classList.add("poster-wrapper");
    link.href = "";
    img.src = theObj[i].image;
    content.classList.add("content-wrapper");
    contentBody.classList.add("content-body");
    team.innerHTML = theObj[i].team;
    team.classList.add("team");
    team.href = "";
    title.href = "";
    title.classList.add("title");
    title.innerHTML = theObj[i].title;
    dateNow = new Date().getTime();
    postDate = new Date(theObj[i].time).getTime();
    diffDate = (dateNow - postDate) / 1000 / 60 / 60;
    if (diffDate > 24) {
      footer.innerHTML = `<i class="fa-regular fa-clock"></i>    ${Math.floor(
        diffDate / 24
      )}d`;
    } else {
      footer.innerHTML = `<i class="fa-regular fa-clock"></i>    ${Math.floor(
        diffDate
      )}h`;
    }
    // append child to parent
    span.appendChild(img);
    link.appendChild(span);
    poster.appendChild(link);
    article.appendChild(poster);
    article.appendChild(content);

    contentBody.appendChild(team);
    contentBody.appendChild(title);
    contentBody.appendChild(footer);
    content.appendChild(contentBody);

    li.appendChild(article);

    ol.appendChild(li);
  }

  // append ol to latest news
  let latestNews = document.getElementById("news");
  latestNews.appendChild(ol);
}

getNews("../json/latestNews.json");
