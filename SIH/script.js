const games = [
    {
      title: "Game 1",
      description: "This is game 1",
      thumbnail: "game1.jpg",
      url: "game1.html"
    },
    {
      title: "Game 2",
      description: "This is game 2",
      thumbnail: "game2.jpg",
      url: "game2.html"
    },
    {
      title: "Game 3",
      description: "This is game 3",
      thumbnail: "game3.jpg",
      url: "game3.html"
    },
    {
        title: "Game 4",
        description: "This is game 4",
        thumbnail: "game4.jpg",
        url: "game4.html"
      },
      {
        title: "Game 5",
        description: "This is game 5",
        thumbnail: "game5.jpg",
        url: "game5.html"
      },
      {
        title: "Game 6",
        description: "This is game 6",
        thumbnail: "game6.jpg",
        url: "game6.html"
      },
      {
        title: "Game 7",
        description: "This is game 7",
        thumbnail: "game7.jpg",
        url: "game7.html"
      },
      {
        title: "Game 8",
        description: "This is game 8",
        thumbnail: "game8.jpg",
        url: "game8.html"
      },
      {
        title: "Game 9",
        description: "This is game 9",
        thumbnail: "game9.jpg",
        url: "game9.html"
      }
  ];
  
  // Generate game thumbnails
  const gameGrid = document.querySelector(".game-grid");
games.forEach((game) => {
  const gameThumbnail = document.createElement("div");
  gameThumbnail.classList.add("game-thumbnail");
  gameThumbnail.innerHTML = `
    <img src="${game.thumbnail}" alt="${game.title}">
    <h2>${game.title}</h2>
    <p>${game.description}</p>
    <button data-url="${game.url}">Play Now</button>
  `;
  gameGrid.appendChild(gameThumbnail);
});

// Add event listeners to game thumbnails
const gameThumbnails = document.querySelectorAll(".game-thumbnail");
gameThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const gameUrl = e.target.getAttribute("data-url");
      window.location.href = gameUrl;
    }
  });
});