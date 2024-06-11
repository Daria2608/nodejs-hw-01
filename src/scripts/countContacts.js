import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const readData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(readData);
        if (data.length > 0) {
        const count = data.length;
        console.log('Success');
        return count;
        }

    } catch (error) {
        console.log(`Error : ${error}`);
    }
};

console.log(await countContacts());
