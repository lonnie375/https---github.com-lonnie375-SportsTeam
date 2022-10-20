import { Player } from "./player";
import { Team } from "./team";

let team1 = new Team(); 
team1.addPlayer({
    name: 'Ronald Jackson', jersey: 52, active: true
}); 
team1.addPlayer({
    name: 'Shawn Kemp', jersey: 32, active: true
});
team1.addPlayer({
    name: 'Michael Jordan', jersey: 23, active: true
});
team1.addPlayer({
    name: 'Carmello Anthony', jersey: 32, active: false
});

team1.addPlayer({
    name: 'Kobe Bryant', jersey: 24, active: false
}); 



//Get total count of players on team 
// console.log(team1.getPlayerCount());

//Log Active players 
// team1.logActivePlayers(); 


//getActivePlayers => returns a list 
// console.log(team1.getActivePlayers());

//SetActive players 
// team1.setActive(3, true); 
// //Get active players. Should be 4
// team1.logActivePlayers(); 

// //Remove player - should be 4 players now
// team1.removePlayer(4); 
// console.log(team1.getPlayerCount());

// team1.sortByName(); 
// console.log(team1);

console.log(team1.toString());