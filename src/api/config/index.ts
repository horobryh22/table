import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://filltext.com/?rows=32&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}',
});
