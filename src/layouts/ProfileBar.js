import React from 'react';

import Button from 'react-bootstrap/Button';

import { NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import '../styles/_ProfileBar.scss';

const paw = <svg className="paw" width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#F47457" />
    <g clip-path="url(#clip0)">
        <path d="M36 33.7034C35.3411 30.3635 33.0571 27.6244 29.8899 26.3768C26.7227 25.1293 23.1843 25.5748 20.4248 27.5682L13.7747 32.3713C12.6715 33.1681 11.8709 34.2756 11.46 35.573C11.0489 36.8708 11.0662 38.2369 11.5095 39.5243C11.9537 40.8112 12.7826 41.8976 13.9063 42.6664C15.03 43.4351 16.3435 43.8132 17.7041 43.7603L17.7954 43.7564C21.2091 43.6488 24.5395 44.9741 26.9462 47.4008C27.5671 48.0267 28.2969 48.5071 29.0997 48.8233C29.5362 48.9952 29.9948 49.1186 30.4688 49.1909C31.8149 49.3953 33.162 49.166 34.3649 48.5277C35.5671 47.8894 36.5119 46.9019 37.0967 45.6723C37.6815 44.4426 37.8512 43.087 37.588 41.7512L36 33.7034Z" fill="white" />
        <path d="M17.4188 26.3743C18.8296 26.3863 20.1494 25.7656 21.1352 24.6263C22.0735 23.5422 22.5969 22.1072 22.6088 20.5853C22.6201 19.0641 22.1191 17.6213 21.1981 16.5223C20.2306 15.3682 18.9209 14.7264 17.5119 14.7161C14.678 14.6929 12.3505 17.2893 12.3233 20.5057C12.3047 23.0669 13.7513 25.2581 15.7728 26.0544C16.2889 26.2577 16.8426 26.37 17.4188 26.3743Z" fill="white" />
        <path d="M27.3939 24.4883C30.4706 25.7002 34.0972 23.8344 35.478 20.3291C36.8591 16.8228 35.4795 12.9844 32.4028 11.7724C29.3264 10.5606 25.6999 12.4271 24.3187 15.9333C22.9379 19.4387 24.3175 23.2764 27.3939 24.4883Z" fill="white" />
        <path d="M36.4151 29.8461L36.4154 29.8462C36.8268 30.1897 37.28 30.4549 37.7609 30.6443C40.0046 31.5282 42.8346 30.7564 44.6577 28.5752C45.7073 27.3198 46.2775 25.7797 46.263 24.239C46.2482 22.6261 45.6029 21.2055 44.4457 20.2385C43.2883 19.2714 41.7755 18.8887 40.1857 19.1604C38.667 19.4199 37.2528 20.2545 36.2038 21.5102C33.9903 24.159 34.0851 27.8984 36.4151 29.8461Z" fill="white" />
        <path d="M48.4581 33.7329L48.4576 33.7317C46.9532 31.3285 43.5124 30.7579 40.7865 32.4602C38.062 34.1644 37.0666 37.5063 38.5674 39.9093C39.1146 40.7861 39.9197 41.4193 40.8541 41.7873C42.4826 42.4288 44.5043 42.265 46.239 41.1826C48.9633 39.4783 49.9589 36.1366 48.4581 33.7329Z" fill="white" />
    </g>
    <defs>
        <clipPath id="clip0">
            <rect width="40.8282" height="40.8282" fill="white" transform="translate(18.5278 3.56436) rotate(21.5)" />
        </clipPath>
    </defs>
</svg>

const profile = <svg id='settings' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
</svg>
const ProbileBar = () => {

    return (
        <div className="profileBar">
            <div className="logo">
                {paw}
            </div>
            <div className="user">
                <NavDropdown title={profile}
                    id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Ustawienia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Polityka pryw.</NavDropdown.Item>
                    <NavDropdown.Item className='logOut' href="/">Wyloguj</NavDropdown.Item>
                </NavDropdown>
                <Link to='/'><Button className="log-out" id="logout" variant="outline-dark">Wyloguj</Button></Link>
            </div>
        </div>
    );
}

export default ProbileBar;