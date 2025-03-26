
import React from 'react';
import promo from '../data/promos.json';
import PromoCard from '../components/PromoCard';
import ViewAllPromos from '../components/ViewAllPromos';
import { motion } from "framer-motion";

const PromoList = ({ isHome = false }) => {
    const promoListing = isHome ? promo.slice(0, 3) : promo;

    return (
      <>
      <section className='flex items-center justify-center h-auto bg-fixed bg-white bg-cover px-4 py-10 opacity-90'>

        <div className="md:container md:mx-auto">
          <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          {isHome ? 'Latest Promo' : 'Available Promos'}
          </h2>
          <div className=" flex flex-wrap justify-center  grid-cols-1 gap-6 md:grid-cols-3">
          {promoListing.map( (promo,index) => (
             <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }} // Start invisible & lower
              animate={{ opacity: 1, y: 0 }} // Fade in & move up
              transition={{ duration: 0.6, delay: index * 0.3 }} // Staggered effect
            >
             <PromoCard key={promo.id} promo={promo} className="h-full"/>
            </motion.div>
              ))}
          </div>
      {isHome && <ViewAllPromos />}
        </div>
        
      </section>
      </>
    )
}


export default PromoList;
