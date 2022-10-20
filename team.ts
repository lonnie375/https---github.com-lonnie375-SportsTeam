import { Player } from "./player";

export class Team {
    players: Player[] = []; 
    teamName: string; 

    constructor(){
        this.teamName = 'Hornets'; 
    }

    addPlayer(player: Player){
        this.players.push(player); 
    }
        
    removePlayer(index: number){
        this.players.splice(index, 1); 
    }

   setActive(index: number, activeStatus: boolean){
       if (index !== -1){
        this.players[index].active = activeStatus; 
       }
   }
    getPlayerCount():number{
        return this.players.length; 
    }

    logActivePlayers() {

     for(let player of this.players){
        if (player.active === true){
            console.log(` Name:${player.name} Jersey:${player.jersey} Active:${player.active}`);
        }
     }
    }

    getActivePlayers() {
      let active = []; 
      for(let player of this.players){
        if (player.active === true){
            active.push(player.name ,player.active, player.jersey ); 
        }
      }
      return active; 
    }


    //Extra Challenges 

    removePlayerByName(name: string){
        
       let userIndex = this.players.map( x => x.name).indexOf(name);
       this.removePlayer(userIndex); 
    }

    sortByName(){
        this.players.sort((a, b) => {
            let nameA = a.name; 
            let nameb = b.name; 
            if (nameA < nameb){
                return -1; 
            }
            if (nameA > nameb){
                return 1; 
            }
            return 0; 
        });
    }

    toString(){
        
        let teamDetails = this.teamName.toString(); 
        return `TeamName: ${teamDetails} Active Players: ${this.getActivePlayers()}`; 
    }


}
