import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {

    try {

        const readData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(readData);
        const newContact = createFakeContact();
        const addContact = [...data, newContact];
        await fs.writeFile(PATH_DB, JSON.stringify(addContact));
        console.log('Success');
    }
    catch (error) {
        console.log(`Error : ${error}`);
    }
};

await addOneContact();
