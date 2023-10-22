import './Companies.scss';
import medina from '../OneCard/images/medina.png';
import dkids from '../OneCard/images/dkids.png';
import adonis from '../OneCard/images/adonis.png';
import onclinic from '../OneCard/images/onclinic.png';
import vitamedical from '../OneCard/images/vitamedical.png';

export const Companies = () => {
    return (
        <div className='companies'>

            <header className='companies__header'>
                <img src="https://www.greenmeadowsmedical.com.au/wp-content/uploads/2021/09/Greenmeadows-medical-1.jpg" alt="medical centre" />
                <h1>All the main companies that we work with</h1>
            </header>
            <main className='companies__main'>
                <div>
                    <div>
                        <img src={medina} alt="medina medical company" />
                    </div>
                    <div>
                        <p>Medina this is a medical</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={dkids} alt="medina medical company" />
                    </div>
                    <div>
                        <p>Dkids this is a medical</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={adonis} alt="medina medical company" />
                    </div>
                    <div>
                        <p>Dkids this is a medical</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={vitamedical} alt="medina medical company" />
                    </div>
                    <div>
                        <p>Dkids this is a medical</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={onclinic} alt="medina medical company" />
                    </div>
                    <div>
                        <p>Dkids this is a medical</p>
                    </div>
                </div>
            </main>
        </div>
    );
}