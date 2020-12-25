module.exports = class nation {
    cities = [];
    projects = [];
    info = {
        id: 0,
        name: '',
        prename: '',
        color: '',
        uuid: '',
        flag: '',
        government: '',
        founded: '',
        daysold: 0,
        approval: 0.0,
        rank: 0,
        totalnations: 0,
        cities: 0,
        score: 0.0,
        population: 0,
        gdp: 0,
        infra: 0,
        land: 0,
        vm: false,
        beigeturns: 0,
        radiation: 0.0,
        season: '',
        citytimer: 0,
        lastactive: 0,
        leader: {
            name: '',
            title: ''
        },
        policies: {
            social: '',
            domestic: '',
            war: '',
            economy: ''
        },
        position: {
            continent: '',
            latitude: '',
            longitude: ''
        }
    }
    aa = {
        name: '',
        rank: '',
        id: 0
    }
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
            infdestroyed: 0.0,
            inflost: 0.0,
            looted: 0.0
        },
        wars: {
            offensive: [],
            defensive: []
        },
        canspy: false
    }
    constructor(raw) {
        this.cities = raw.cityids;
        this.info.citytimer = raw.cityprojecttimerturns;
        this.info.id = parseInt(raw.nationid);
        this.info.name = raw.name;
        this.info.prename = raw.prename;
        this.info.position.continent = raw.continent;
        this.info.policies.social = raw.socialpolicy;
        this.info.policies.war = raw.war_policy;
        this.info.policies.domestic = raw.domestic_policy;
        this.info.policies.economy = raw.ecopolicy;
        this.info.uuid = raw.uniqueid;
        this.info.color = raw.color;
        this.info.lastactive = raw.minutessinceactive;
        this.info.government = raw.government;
        this.info.founded = raw.founded;
        this.info.daysold = raw.daysold;
        this.aa.name = raw.alliance;
        this.aa.rank = raw.allianceposition;
        this.aa.id = raw.allianceid;
        this.info.flag = raw.flagurl;
        this.info.leader.name = raw.leadername;
        this.info.leader.title = raw.title;
        this.info.approval = parseFloat(raw.approvalrating);
        this.info.rank = raw.nationrank;
        this.info.totalnations = raw.nrtotal;
        this.info.cities = raw.cities;
        this.info.position.latitude = raw.latitude;
        this.info.position.longitude = raw.longitude;
        this.info.score = parseFloat(raw.score);
        this.info.population = parseInt(raw.population);
        this.info.gdp = parseInt(raw.gdp);
        this.info.infra = raw.totalinfrastructure;
        this.info.land = raw.landarea;
        this.military.soldiers.amt = raw.soldiers;
        this.military.soldiers.casualties = raw.soldiercasualties;
        this.military.soldiers.killed = raw.soldierskilled;
        this.military.tanks.amt = raw.tanks;
        this.military.tanks.casualties = raw.tankcasualties;
        this.military.tanks.killed = raw.tankskilled;
        this.military.aircraft.amt = raw.aircraft;
        this.military.aircraft.casualties = raw.aircraftcasualties;
        this.military.aircraft.killed = raw.aircraftkilled;
        this.military.ships.amt = raw.ships;
        this.military.ships.casualties = raw.shipcasualties;
        this.military.ships.killed = raw.shipskilled;
        this.military.missiles.amt = raw.missiles;
        this.military.missiles.launched = raw.missilelaunched;
        this.military.missiles.eaten = raw.missileseaten;
        this.military.nukes.amt = raw.nukes;
        this.military.nukes.launched = raw.nukeslaunched;
        this.military.nukes.eaten = raw.nukeseaten;
        this.military.otherstats.infdestroyed = parseFloat(raw.infdesttot);
        this.military.otherstats.inflost = parseFloat(raw.infraLost);
        this.military.otherstats.looted = parseFloat(raw.moneyLooted);
        this.info.vm = raw.vmmode != "0";
        this.military.wars.offensive = raw.offensivewar_ids;
        this.military.wars.defensive = raw.defensivewar_ids;
        this.info.beigeturns = raw.beige_turns_left;
        this.info.radiation = raw.radiation_index;
        this.info.season = raw.season;
        this.military.canspy = raw.espionage_available;
        projects.forEach(p => {
            if (raw[p] === "1") {
                this.projects.push(p);
            }
        })
    }
}

const projects = ['ironworks', 'bauxiteworks', 'armsstockpile', 'emgasreserve', 'massirrigation', 'inttradecenter', 'missilelpad', 'nuclearresfac', 'irondome', 'vitaldefsys', 'intagncy', 'uraniumenrich', 'propbureau', 'cenciveng', 'city_planning', 'adv_city_planning', 'space_program', 'spy_satellite', 'moon_landing', 'green_technologies', 'telecommunications_satellite', 'recycling_initiative', 'pirate_economy', 'clinical_research_center', 'specialized_police_trainings', 'arable_land_agency', 'adv_engineering_corps']