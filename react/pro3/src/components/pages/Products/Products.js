import React from 'react';
import data from '../../../data/Data';
import Card from '../../shared/Card/Card';

const Products = () => {

    // let data = data;
    

  return (
    <>
        <div className='row'>

            <Card data={data} />
        </div>
        
    </>
  )
}




export default Products