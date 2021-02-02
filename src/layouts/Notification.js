import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';

import '../styles/_notification.scss';


const paw = <svg className="paw" width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>

const Notification = () => {

    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    return (
        <div className="toast-wrapper">
            <Toast show={show} onClose={toggleShow} delay={3000} autohide>
                <Toast.Header>
                    <img src={paw} alt="" />
                    <strong className="mr-auto">HycelClub</strong>
                    <small>1 min ago</small>
                </Toast.Header>
                <Toast.Body>Świetnie! Dodałeś nowego psa :D</Toast.Body>
            </Toast>
        </div>

    );
}

// const Notification = () => {

//     const ShowNotifi = () => {
//         const [show, setShow] = useState(false);

//     return (
//         <div className="toast-wrapper">
//             <Toast onClose={() => setShow(false)}
//                 show={show} delay={3000} autohide>
//                 <Toast.Header>
//                     {paw}
//                     <strong className="mr-auto">HycelClub</strong>
//                     <small>1 min ago</small>
//                 </Toast.Header>
//                 <Toast.Body>Świetnie! Dodałeś nowego psa :D</Toast.Body>
//             </Toast>
//         </div>

//     );
// }
// }

export default Notification;
