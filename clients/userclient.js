'use strict';

const superagent = require('superagent');
const baseURL = 'https://politicsandwar.com';

const classes = require('./classes/exports');

module.exports = class UserClient {
    #email;
    #password;
    #session;
    #loggedin = false;
    constructor(email, password) {
        this.#email = email;
        this.#password = password;
        this.#session = superagent.agent();
    }
    login() {
        return new Promise((resolve, reject) => {
            this.#session.post(`${baseURL}/login/`).send({
                "email": this.#email, "password": this.#password, "loginform": "Login"
            }).type('form').set('Accept', 'text/plain').then(res => {
                if (res.text.includes('success')) {
                    this.#loggedin = true;
                    var _this = this;
                    setTimeout(function () {
                        _this.login(); //relogin after 1 hour
                    }, 1000 * 60 * 60);
                    resolve('Login success');
                }
                else {
                    reject('Login failed, email or password incorrect');
                }
            }).catch(err => reject('Login failed'));
        })
    }
    message(leader, { subject, body }) {
        return new Promise((resolve, reject) => {
            if (this.#loggedin) {
                let data = {
                    'newconversation': 'true',
                    'receiver': leader,
                    'carboncopy': "",
                    'subject': subject,
                    'body': body,
                    'sndmsg': 'Send Message'
                }
                this.#session.post(`${baseURL}/inbox/message`).send(data).type('form').set('Accept', 'text/plain').then(res => {
                    if (res.text.includes('success')) {
                        resolve('Success');
                        this.#loggedin = true;
                    }
                    else {
                        reject('Send failed');
                    }
                }).catch(err => reject('Send message failed'));
            }
            else {
                reject('Not logged in');
            }
        })
    }
    commend(nationid) {
        return new Promise((resolve, reject) => {
            if (this.#loggedin) {
                this.#session.post(`${baseURL}/nation/id=${nationid}`).send(`Denouncements(this, 'commendment')`).type('text/javascript').then(res => {
                    if (res.text.includes('This nation does not exist')) {
                        reject('Error: this nation does not exist');
                    }
                    else {
                        resolve('Success');
                    }
                }).catch(err => reject(`Error occurred: ${err}`));
            }
            else {
                reject('Not logged in');
            }
        })
    }
    denounce(nationid) {
        return new Promise((resolve, reject) => {
            this.#session.post(`${baseURL}/nation/id=${nationid}`).send(`Denouncements(this, 'denouncement')`).type('text/javascript').then(res => {
                if (res.text.includes('This nation does not exist')) {
                    reject('Error: this nation does not exist');
                }
                else {
                    resolve('Success');
                }
            }).catch(err => reject(`Error occurred: ${err}`));
        })
    }
    uncommend(nationid) {
        return new Promise((resolve, reject) => {
            this.#session.post(`${baseURL}/nation/id=${nationid}`).send(`Denouncements(this, 'cancel_commendment')`).type('text/javascript').then(res => {
                if (res.text.includes('This nation does not exist')) {
                    reject('Error: this nation does not exist');
                }
                else {
                    resolve('Success');
                }
            }).catch(err => reject(`Error occurred: ${err}`));
        })
    }
    undenounce(nationid) {
        return new Promise((resolve, reject) => {
            this.#session.post(`${baseURL}/nation/id=${nationid}`).send(`Denouncements(this, 'cancel_denouncement')`).type('text/javascript').then(res => {
                if (res.text.includes('This nation does not exist')) {
                    reject('Error: this nation does not exist');
                }
                else {
                    resolve('Success');
                }
            }).catch(err => reject(`Error occurred: ${err}`));
        })
    }
}