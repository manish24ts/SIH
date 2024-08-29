const leaderboardData = [
    { name: "John Doe", score: 100 },
    { name: "Jane Smith", score: 90 },
    { name: "Bob Johnson", score: 80 },
    { name: "Alice Brown", score: 70 },
    { name: "Mike Davis", score: 60 },
    { name: "Emily Taylor", score: 50 },
    { name: "Sarah Lee", score: 40 },
    { name: "David Kim", score: 30 },
    { name: "Lisa Nguyen", score: 20 },
    { name: "Kevin White", score: 10 }
  ];
  
  const leaderboardTable = document.getElementById("leaderboard-table");
  const leaderboardDataElement = document.getElementById("leaderboard-data");
  
  leaderboardData.sort((a, b) => b.score - a.score);
  
  leaderboardData.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.name}</td>
      <td>${player.score}</td>
    `;
    leaderboardDataElement.appendChild(row);
  });