import React from 'react';
import { contact } from '../../constants/data';
import image from '../../constants/image';
import './Contact.css';

const Contact = () => {
  return (
    <section className='app__contact section__padding' id='contact'>
        <div className='app__contact__container'>
            <div className='app__contact__mxauto'>
                <img src={image.OutlineContact} className='app__outline__contact' alt='outline__contact'/>
            <h1 className='app__contact__headtext'>CONTACT US</h1>
            <p className='app__contact__subtext'>
                Berdiri pada awal April 2021 Team M11 Esports berawal dari Divisi Dota 2. Pada bulan Oktober 2021 Team M11 Esports menambah Divisi baru yaitu PUBGM Ladies dan di awal tahun 2022 Team M11 menambah 2 divisi baru yaitu Mobile Legend Bang Bang (MLBB) dan Valorant.
                Divisi Dota 2 Team M11 sendiri sudah berhasil meraih beberapa kompetisi tingkat Nasional dan International.
            </p>
            </div>

            <div className='app__contact__flex'>
                <div className='app__contact__space'>
                    {
                        contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return (
                                <div className='app__contact__props' key={index}>
                                    <div className='app__contact__text__accent'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h2 className='app__contact__fontbody'>
                                            {title}
                                        </h2>
                                        <p className='app__contact__subtitle'>
                                            {subtitle}
                                        </p>
                                        <p className='app__contact__desc'>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {/* Form */}
                <form className='app__contact__form'>
                    <div className='app__contact__form__input'>
                        <input className='form_input' type='text' placeholder='Your name' />
                        <input className='form_input' type='email' placeholder='Your email' />
                    </div>
                    <input className='form_input' type='text' placeholder='Subject' />
                    <textarea className='app__contact__textarea' placeholder='Your message' />
                    <button className='app__contact__button'>Send message</button>
                </form>
            </div>
        </div>
    </section>
  );
};


export default Contact;