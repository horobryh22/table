import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://filltext.com/?rows=58&id={number|1000}&date={date}&name={firstName}&count={randomNumber|1000}&distance={randomNumber|1000}&delay=3`,
});
