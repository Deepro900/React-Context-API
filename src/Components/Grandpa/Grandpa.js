import React, { createContext, useState } from 'react';

import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';


export const RingContext = createContext('Matir Ring');
export const MoneyContext = createContext('')

const Grandpa = () => {
    const house = 7;
    const [money, SetMoney] = useState(555);
    // const  = 'diamond ring';
    return (
        <RingContext.Provider value='Dadu ring'>
            <MoneyContext.Provider value={[money, SetMoney]}>
                < div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house} ></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;