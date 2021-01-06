'use strict';

const superagent = require('superagent');
const baseURL = 'https://politicsandwar.com/api/';
const keyInfo = require('./classes/keyinfo');
const nation = require('./classes/nation');

module.exports = class APIClient {
    #api;
    #session;
    constructor(apikey) {
        this.#api = apikey;
        this.#session = superagent.agent();
    }
    keyInfo() { //fetches info on api key
        return new Promise((resolve, reject) => {
            this.#session.get(`${baseURL}v2/nations/${this.#api}/&min_score=9000`).then(res => {
                let data = JSON.parse(res.text);
                if (data.api_request.success) {
                    let key = data.api_request.api_key_details;
                    resolve(new keyInfo(key));
                }
                else {
                    reject(`API request failed: ${data.api_request.error_msg}`);
                }
            }).catch(err => reject(`API request failed: ${err}`));
        })
    }
    getNation(id) {//fetch nation info
        return new Promise((resolve, reject) => {
            this.#session.get(`${baseURL}nation/id=${id}&key=${this.#api}`).then(res => {
                let data = JSON.parse(res.text);
                if (data.success) {
                    resolve(new nation(data));
                }
                else {
                    reject(`API request failed: ${data.general_message}`);
                }
            }).catch(err => reject(`API request failed: ${err}`));
        })
    }
    getCity(id) { //fetch city info
        
    }
}