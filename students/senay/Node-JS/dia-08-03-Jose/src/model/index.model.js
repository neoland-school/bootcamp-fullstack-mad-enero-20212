import { writeFile } from 'fs/promises';
import { readFileSync } from 'fs';

export const ModelDemo = (usuario) => {
    const user = {
        email: usuario.email,
        password: usuario.password,
        userName: usuario.userName
    }

    const data = readFileSync('.user.json', { encoding: 'utf-8' });
    const obj = JSON.parse(data);
    obj.push(user)

    writeFile('./users.json', JSON.stringify(obj), () => { })
}