const players = [
  { id: 1, name: "DragonSlayer", scores: [120, 85, 200, 95], level: 8, badge: "gold" },
  { id: 2, name: "NightWolf",    scores: [60, 75, 50],        level: 5, badge: null },
  { id: 3, name: "StarQueen",    scores: [300, 250, 180, 90, 120], level: 12, badge: "diamond" },
  { id: 4, name: "IronFist",     scores: [40, 30],             level: 2, badge: null },
  { id: 5, name: "ShadowBlade",  scores: [150, 200, 175],      level: 9, badge: "silver" },
];

function getTotalScore(player){
    let totalScore = 0;
    for (let i = 0; i < player.scores.length; i++) {
        totalScore += player.scores[i];
    }
    return totalScore;
}
// Test 1
console.log(getTotalScore(players[0])); 
console.log(getTotalScore(players[3])); 

function getRanking(players) {
    const totalScores = players.map(player => ({
        name: player.name,
        totalScore: getTotalScore(player),
        badge: player.badge || "none"
    }));
    return totalScores.sort((a, b) => b.totalScore - a.totalScore);
}

// Test 2
console.log(getRanking(players));


function getTopPlayers(players, n){
    const ranking = getRanking(players);
    const names = ranking.map(player => player.name);
    return names.slice(0, n);
}

// Test 3
console.log(getTopPlayers(players, 3));

function formatPlayerCard(player){
    const name = player.name;
    const level = player.level;
    const totalScore = getTotalScore(player);
    const badge = player.badge;
    if(badge == "diamond"){
        return `${name} | Lv.${level} | ${totalScore} | 💎 DIAMOND`;
    }
    else if(badge == "gold"){
        return `${name} | Lv.${level} | ${totalScore} |  🥇 GOLD`;
    }
    else if(badge == "silver"){
        return `${name} | Lv.${level} | ${totalScore} |  🥈 SILVER`;
    }
    else{
        return `${name} | Lv.${level} | ${totalScore}`;
    }
}

// Test 4
console.log(formatPlayerCard(players[0]));
console.log(formatPlayerCard(players[1]));
console.log(formatPlayerCard(players[2]));