module.exports = class nation {
    cities = [];
    citytimer = 0;
    id = 0;
    name = '';
    prename = '';
    position = {
        continent: '',
        latitude: '',
        longitude: ''
    }
    color = '';
    policies = {
        social: '',
        domestic: '',
        war: '',
        economy: ''
    }
    uuid= '';
    lastactive = 0;
    government = '';
    founded = '';
    daysold = '';
    aa = {
        name: '',
        rank: '',
        id: 0
    }
    flag = '';
    leader = {
        name: '',
        title: ''
    }
    approval = 0.0;
    rank = 0;
    totalnations = 0;
    cities = 0;
    score = 0.0;
    population = 0;
    gdp = 0;
    infra = 0;
    land = 0;
    military = {
        soldiers: {
            amt: 0,
            casualties: 0,
            killed: 0
        },
        tanks: {
            amt: 0,
            casualties: 0,
            killed: 0
        },
        aircraft: {
            amt: 0,
            casualties: 0,
            killed: 0
        },
        ships: {
            amt: 0,
            casualties: 0,
            killed: 0
        },
        missiles: {
            amt: 0,
            launched: 0,
            eaten: 0
        },
        nukes: {
            amt: 0,
            launched: 0,
            eaten: 0
        },
        otherstats: {
            destroyed: 0.0,
            lost: 0.0,
            looted: 0.0
        },
        wars: {
            offensive: [],
            defensive: []
        },
        canspy: false
    }
    projects = [];
    vm = false;
    beigeturns = 0;
    radiation = 0.0;
    season = '';
    constructor(raw){
        this.cities = raw.cityids;
        this.citytimer = raw.cityprojecttimerturns;
        this.id = parseInt(data.nationid);
        this.name = data.name;
        this.prename = data.prename;
        this.position.continent = data.continent;
        this.policies.social = data.socialpolicy;
        this.policies.war = data.war_policy;
        this.policies.domestic = data.domestic_policy;
        this.uuid = data.uniqueid;
        this.color = data.color;
        this.lastactive = data.minutessinceactive;
        //still working on it lol
    }
}