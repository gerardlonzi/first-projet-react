import React from 'react'
import img1 from '/images/img1.jpeg' 
import img2 from '/images/img2.jpeg' 
import img3 from '/images/img3.jfif' 
import img4 from '/images/img4.jfif' 
import img5 from '/images/img5.jfif' 
import img6 from '/images/img6.jfif' 
import img7 from '/images/img7.jfif' 
import img8 from '/images/img8.jfif' 
import img9 from '/images/img8.jfif' 
import img10 from '/images/img8.jfif' 


export default function Search(){
    const product = [
        {
            names : 'Aspirine',
            prix : '$10' ,
            imgs : img1
        },
        {
            names : 'Paracetamol',
            prix : '$10' ,
            imgs : img2
        },
        {
            names : 'Ibuprofun',
            prix : '$10' ,
            imgs : img3
        },
        {
            names : 'Advil',
            prix : '$10' ,
            imgs : img4
        },
        {
            names : 'Tylenol',
            prix : '$10' ,
            imgs : img5
        },
        {
            names : 'Vicodin',
            prix : '$10' ,
            imgs : img6
        },
        {
            names : 'Zithromax',
            prix : '$10' ,
            imgs : img7
        },
        {
            names : 'crestor',
            prix : '$10' ,
            imgs : img8
        },
        {
            names : 'crestor',
            prix : '$10' ,
            imgs : img9
        },
        {
            names : 'crestor',
            prix : '$10' ,
            imgs : img10
        }
    ]

    
    return(
        <div className='sea'>
            <div className="search">
                <input type="text" className='bar' placeholder='Search'/><i class="material-icons">search</i>
            </div>
            <h1>10 Most search Drugs</h1>
            <div className="products">
                    {product.map((n, index) =>
                    
                        <div key={index} className='content'>
                            <div className='im'>
                                <img src={n.imgs} alt="" />
                            </div>
                            <h3>{n.names}</h3>
                            <p>{n.prix}</p>
                        </div>
                    )}
            </div>
        </div>
        
        
    )
} 

function fil(){
    const value = document.querySelector('.bar')
    value.addEventListener('input',(e)=>{
        let val = e.target.value
        product.filter(adr => adr.names.includes(val))
})
}

