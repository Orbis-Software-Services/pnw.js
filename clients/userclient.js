'use strict';

const superagent = require('superagent');
const baseURL = 'https://politicsandwar.com';

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
                fs.writeFileSync('kek.html', res.text);
                if (res.text.includes('success')) {
                    resolve('Login success');
                    this.#loggedin = true;
                }
                else {
                    reject('Login failed, email or password incorrect');
                }
            }).catch(err => reject('Login failed'));
        })
    }
    message(leader, {subject, body}) {
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
                    fs.writeFileSync('kek.html', res.text);
                    if (res.text.includes('success')) {
                        resolve('Login success');
                        this.#loggedin = true;
                    }
                    else {
                        reject('Login failed, email or password incorrect');
                    }
                }).catch(err => reject('Login failed'));
            }
            else {
                reject('Not logged in');
            }
        })
    }
}
