import React, { useEffect, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import './Init.css';
 
function Init() {
    const [happy, setHappy] = useState(false);
    const [birthday, setBirthday] = useState(false);
    const [b, setB] = useState(false);

    useEffect(() => {
        setTimeout(() => { setHappy(true) }, 500);
        setTimeout(() => { setBirthday(true) }, 1200);
        setTimeout(() => { setB(true) }, 1600);          

    }, []);


    return (
        <div className="container vertical-center">
            <div className="col-md">
                <div id="envolvente">
                    <CSSTransition in={happy} appear={true} timeout={1200} classNames="fade">
                        <div className="text-to-render">
                            {happy ? <div className="transition-text">Happy </div>
                                :
                                null}
                        </div>
                    </CSSTransition>

                    <CSSTransition in={birthday} appear={true} timeout={1200} classNames="fade">
                        <div className="text-to-render">
                            {birthday ? <div className="transition-text-2">Birthday </div>
                                :
                                null}</div>
                    </CSSTransition>

                    <CSSTransition in={b} appear={true} timeout={1200} classNames="fade">
                        <div className="text-to-render">
                            {b ? <div className="transition-text-3"> to you! :)</div>
                                :
                                null}</div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}


export default Init;