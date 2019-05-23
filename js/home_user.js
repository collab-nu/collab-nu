var sections = [
  {
  searchTerm : "Music",
  items : [
    {
      tag : "Music | Drama",
      title : "The Dolphin Show XVII",
      author : "dolphShow",
      image : "../images/dolphin.jpg"
    },
    {
      tag : "Music | Film",
      title : "My First Film",
      author : "SofSpiel",
      image : "../images/film.jpg"
    },
    {
      tag : "Music | Arts",
      title : "Pryan's BlarinetPalooza",
      author : "Pryan Bardo",
      image : "../images/blarinet.jpg"
    },
    {
      tag : "Music | Arts",
      title : "Bardo's Clarinet Palooza",
      author : "Pryan Bardo",
      image : "../images/clarinet.jpg",
      href : "project_view.html"
    },
    {
      tag: "Music",
      title: "Jazz Band",
      author: "jazzyMan",
      image: "../images/jazz.jpg"
    },
    {
      tag: "Music",
      title: "Orchestra - Violin Needed!",
      author: "desperate grad",
      image: "../images/violin.jpg"
    },
    {
      tag: "Music | Writing",
      title: "Soundtrack for My Book",
      author: "payinexposure",
      image: "../images/book.jpg"
    },
    {
      tag: "Music",
      title: "Jam Session",
      author: "unemployed",
      image: "../images/jam.jpg"
    }

  ]
},
{
  searchTerm: "Sports",
  items: [
    {
      tag: "Sports",
      title: "IM - Basketball",
      author: "basketcase",
      image: "../images/basketball.jpg"
    },
    {
      tag: "Sports | Drama",
      title: "Baseball players needed for chorus!",
      author: "idontdance",
      image: "../images/baseball.jpg"
    },
    {
      tag: "Sports",
      title: "IM - Soccer",
      author: "brazilian",
      image: "../images/soccer.jpg"
    },
    {
      tag: "Sports | Games",
      title: "Fantasy Football Anyone?",
      author: "Josh Smith",
      image: "../images/football.jpg"
    },
    {
      tag: "Sports",
      title: "IM Team",
      author: "vague",
      image: "../images/jersey.jpg"
    },
    {
      tag: "Sports | Food",
      title: "Team Cook Needed!",
      author: "cookiemonster",
      image: "../images/cookie.jpg"
    }
  ]
  }
]


function filter(term) {
  var grid = document.getElementById('grid-container');
  var secTitle = document.createElement('h1');
  var row = document.createElement('div');
  row.classList.add("row");
  row.id = "row";
  secTitle.classList.add("section-title");
  secTitle.innerHTML = term;
  grid.innerHTML = "";
  grid.appendChild(secTitle);
  grid.appendChild(row);
  for (var i=0; i<sections.length; i++) {
    if (sections[i].searchTerm == term) {
      for (var z=0; z<sections[i].items.length; z++) {
        var itemWrapper = document.createElement('div');
        var img = document.createElement('img');
        var tag = document.createElement('p');
        var title = document.createElement('h3');
        var author = document.createElement('p');
        author.classList.add("item-text","item-author");
        author.innerHTML = sections[i].items[z].author;
        title.classList.add("item-text", "item-title");
        title.innerHTML = sections[i].items[z].title;
        tag.classList.add("item-text","item-tag");
        tag.innerHTML = sections[i].items[z].tag
        img.classList.add("item-image");
        img.src = "../images/kitten.jpg"//sections[i].items[z].image;
        itemWrapper.classList.add("col-3","item-wrapper")
        if (sections[i].items[z].href != null) {
          console.log("Fourth Layer??")
          var clickable = document.createElement('a');
          clickable.href = sections[i].items[z].href;
          clickable.appendChild(img);
          itemWrapper.appendChild(clickable);
        } else {
          itemWrapper.appendChild(img);
        }
        itemWrapper.appendChild(tag);
        itemWrapper.appendChild(title);
        itemWrapper.appendChild(author);
        row.appendChild(itemWrapper);
      }
    }
  }
}
