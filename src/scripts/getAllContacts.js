import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
try {
    const readData = await fs.readFile(PATH_DB, 'utf-8');
    const data = JSON.parse(readData);
    console.log('Success');
    return data;
} catch (error) {
console.log(`Error : ${error}`);
}
};

console.log(await getAllContacts());
