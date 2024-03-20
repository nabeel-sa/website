'use client';
import {useState} from 'react';
import {motion} from 'framer-motion';
import styles from '../styles';
import {TypingText, ExploreCard, TitleText} from '../components';
import {staggerContainer} from '../utils/motion';
import {exploreWorlds} from '../constants';
const Explore = () => {const [active, setActive] = useState('world-2');return (
    <section className={`${styles.paddings}`} id="explore">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: false, amount: 0.2}} className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <TypingText title="| Skills & Expertise" textStyles="text-center"/>
            <TitleText title={<>Gained by theory and practise | <br className="md:block hidden "/>Implemented in real-life projects</>} textStyles="text-center"/>
            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-4">{exploreWorlds.map((world, index) => (
                <ExploreCard key={world.id}{...world} index={index} active={active} handleClick={setActive}/>))}
            </div>
        </motion.div>
    </section>);};
export default Explore;
