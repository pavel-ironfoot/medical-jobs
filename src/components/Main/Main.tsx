import { Aside } from '../Aside';
import { Katalog } from '../Katalog';

import './Main.scss';

export const Main = () => {
    return (
        <main className='main'>
            <Aside />
            <Katalog />
        </main>
    );
}