"use strict";
exports.__esModule = true;
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
        this.teamName = 'Hornets';
    }
    Team.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    Team.prototype.removePlayer = function (index) {
        this.players.splice(index, 1);
    };
    Team.prototype.setActive = function (index, activeStatus) {
        if (index !== -1) {
            this.players[index].active = activeStatus;
        }
    };
    Team.prototype.getPlayerCount = function () {
        return this.players.length;
    };
    Team.prototype.logActivePlayers = function () {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.active === true) {
                console.log(" Name:".concat(player.name, " Jersey:").concat(player.jersey, " Active:").concat(player.active));
            }
        }
    };
    Team.prototype.getActivePlayers = function () {
        var active = [];
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.active === true) {
                active.push(player.name, player.active, player.jersey);
            }
        }
        return active;
    };
    //Extra Challenges 
    Team.prototype.removePlayerByName = function (name) {
        var userIndex = this.players.map(function (x) { return x.name; }).indexOf(name);
        this.removePlayer(userIndex);
    };
    Team.prototype.sortByName = function () {
        this.players.sort(function (a, b) {
            var nameA = a.name;
            var nameb = b.name;
            if (nameA < nameb) {
                return -1;
            }
            if (nameA > nameb) {
                return 1;
            }
            return 0;
        });
    };
    Team.prototype.toString = function () {
        var teamDetails = this.teamName.toString();
        return "TeamName: ".concat(teamDetails, " Active Players: ").concat(this.getActivePlayers());
    };
    return Team;
}());
exports.Team = Team;
