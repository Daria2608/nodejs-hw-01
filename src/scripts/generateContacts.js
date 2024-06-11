import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {

    // пустий масив для зберігання нових контактів
    let contacts = [];

    // виклик функції, яка створює контакти і додаєм в масив
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }

    try {
        const readData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(readData);
        const newContact = [...data, ...contacts];
        await fs.writeFile(PATH_DB, JSON.stringify(newContact));
        console.log('Success');
    }
    catch (error) {
        console.log(`Error : ${error}`);
    }

};

await generateContacts(3);
