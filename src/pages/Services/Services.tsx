
import React from 'react';
import Hero from './Hero';
import Missions from './Missions';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
const Services: React.FC = () => {
    return (
        <>
            <Hero />
            <Missions />
            <Section1 />
            <Section2 />
            <Section3/>
        </>
    );
}

export default Services;