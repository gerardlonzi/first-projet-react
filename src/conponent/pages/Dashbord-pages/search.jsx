import React from 'react'


const product = [
    {
        img :require('./images/img1.jpeg'),
        names : 'Aspirin',
        prix : '10$'

    },
    {
        img :require('./images/img2.jpeg'),
        names : 'Aspirin',
        prix : '10$'

    }
]
export default function Search(){
    return(
        <div className='sea'>
            <div className="search">
                <input type="text" className='bar' placeholder='Search'/><i class="material-icons">search</i>
            </div>
            <h1>10 Most search Drugs</h1>
            <div className="product">
                    <img src={require('./images/img1.jpeg').default} alt="" />
            </div>
        </div>
    )
    }    