import React, { useEffect, useState } from 'react';
import c from './MainPage.module.css';
export const MainPage = () => {

    const [url, setUrl] = useState(null);

    useEffect(() => {
        try {
            setUrl(require(`../../public/images/${Math.floor(Math.random() * 319) + 1}.png`));
        } catch (error) {
            regenerate();
        }
    }, [])

    const regenerate = () => {
        try {
            setUrl(require(`../../public/images/${Math.floor(Math.random() * 319) + 1}.png`));
        } catch (error) {
            regenerate();
        }
    }

    return (
        <div className={c.cont}>
            <div className={c.photoDisplay}>
                <img src={url} alt={'Вибач, якийсь трабл, але я тебе люблю!'} className={c.photo}></img>
            </div>
            <div className={c.butt} onClick={regenerate}>REGENERATE</div>
        </div>
    )
}
