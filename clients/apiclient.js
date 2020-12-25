'use strict';

const superagent = require('superagent');
const baseURL = 'https://politicsandwar.com/api/';

module.exports = class APIClient {
    #api;
    #session;
    constructor(apikey) {
        this.#api = apikey;
        this.#session = superagent.agent();
    }
    keyInfo() { //fetches info on api key
        return new Promise((resolve, reject) => {
            this.#session.get(`${baseURL}v2/nations/${this.#api}/&min_score=8000`).then(res => {
                let data = JSON.parse(res.text);
                if (data.api_request.success) {
                    let key = data.api_request.api_key_details;
                    resolve(new keyInfo(key));
                }
                else {
                    reject(`API request failed: ${data.api_request.error_msg}`);
                }
            }).catch(err => reject('API request failed'));
        })
    }
}

class keyInfo {
    api_key = '';
    nation_id = 0;
    alliance_id = 0;
    alliance_position = 0;
    daily_requests_maximum = 0;
    daily_requests_used = 0;
    daily_requests_remaining = 0;
    requests_per_second_rate_limit = 0;
    requests_made_this_second = 0;
    constructor(key) {
        api_key = key.api_key;
        nation_id = key.nation_id;
        alliance_id = key.alliance_id;
        alliance_position = key.alliance_position;
        daily_requests_maximum = key.daily_requests_maximum;
        daily_requests_used = key.daily_requests_used;
        daily_requests_remaining = key.daily_requests_remaining;
        requests_per_second_rate_limit = key.requests_per_second_rate_limit;
        requests_made_this_second = key.requests_made_this_second;
    }
}