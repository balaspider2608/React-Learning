const CricketPlayerAPI = {
    players: [
        { number: 1, name: "Kirti Azad", position: "Keeping" },
        { number: 2, name: "Gavaskar", position: "Batting First Down" },
        { number: 3, name: "Vengsarkar", position: "Batting Second Down" },
        { number: 4, name: "Sachin Tendulkar", position: "Batting Opener" },
        { number: 5, name: "Krishnamacharya Srikanth", position: "Fielding Midwicket" },
        { number: 6, name: "Kapildev", position: "Bowling Pace" }
    ],
    all: function () { return this.players },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default CricketPlayerAPI

