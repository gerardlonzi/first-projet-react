import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./navbar/img.jpg"

export default function Home(){
    return(
        <div className='blocks'>
            <div className="bloc1">
                <h1>Take care of your Health <br /> Anytime Anywhere</h1>
                <p>a la vie qui nous mene la ohh ohh je me retiens de tous attente de la vie<br /> qui  me donne les cours bien dur Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Doloribus, reiciendis animi. Placeat  iusto itaque aperiam<br /> hic, quasi delectus beatae dolorum molestias eius porro culpa alias quam<br /> dolor? Voluptatum veniam nulla et vero vel a animi mollitia exercitationem cumque aperiam, nam distinctio neque amet minus molestias.</p>
                <Link to="/Dashboard" className='btn2'>Try Now</Link>
            </div>
            <div className="bloc2">
                <img src={img1} alt="" />
                <p> facere ea provident corrupti reiciendis illum aperiam  molestiae, eum reprehenderit odio atque corporis possimus vel cupiditate?</p>
            </div>
        </div>
    )
}