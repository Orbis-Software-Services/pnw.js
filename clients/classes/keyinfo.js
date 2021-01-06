module.exports = class keyInfo {
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
        this.api_key = key.api_key;
        this.nation_id = key.nation_id;
        this.alliance_id = key.alliance_id;
        this.alliance_position = key.alliance_position;
        this.daily_requests_maximum = key.daily_requests_maximum;
        this.daily_requests_used = key.daily_requests_used;
        this.daily_requests_remaining = key.daily_requests_remaining;
        this.requests_per_second_rate_limit = key.requests_per_second_rate_limit;
        this.requests_made_this_second = key.requests_made_this_second;
    }
}