import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
    const readData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(readData);
        if (data.length > 0) {
        data.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(data));
        }
} catch (error) {
console.log(`Error : ${error}`);
}
};

await removeLastContact();
