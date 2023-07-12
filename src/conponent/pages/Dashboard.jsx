import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import img from "./navbar/img.jpg"
import logo from './navbar/logo.png'

export default function Dashboard(){
   
    let location = useLocation()
    let pathname = location.pathname
    let val = pathname.split("/")[2]  
    
    return(
       
        <div className="all">
            
            <div className='element'>
                <div className="elem1">

                </div>
                <div className="elem2">
                    <div className="container">
                            <i class="fa fa-archive"></i>
                        <Link to='/Dashboard/Appointment' className={ val=="Appointment"?`nav-active `: ""}>Appointment</Link>
                    </div>
                    <div className="container">
                    <i class="material-icons">people</i>
                        <Link to="/Dashboard/Doctor" className={ val=="Doctor"?`nav-active `: ""}>Doctor</Link>
                    </div>
                    <div className="container">
                    <i class="material-icons">search</i>
                        <Link to="/Dashboard/search" className={ val=="search"?`nav-active `: ""}>Search</Link>
                    </div>
                    <div className="container mm">  
                    <i class="material-icons">dashboard</i>
                        <Link to="/Dashboard/Dashboard" className={ val=="Dashboard"?`nav-active `: ""}>Dashboard</Link>
                    </div>
                    <div className="container">
                    <i class="material-icons">library_add</i>
                        <Link to="/Dashboard/loboratory" className={ val=="loboratory"?`nav-active `: ""}>Laboratory</Link>
                    </div>
                </div>
                <div className="elem3">
                    <div className="container">
                    <i class="material-icons">history</i>
                        <Link to="/Dashboard/history" className={ val=="history"?`nav-active `: ""}>History</Link>
                    </div>
                    <div className="sms">
                        <div className='md'>
                    <i class="material-icons ">mail</i>
                        <Link to="/Dashboard/message" className={ val=="message"?`nav-active `: ""}>Message</Link>

                        </div>
                        <span>8</span>
                    </div>
                    <div className="container">
                    <i class="material-icons ">settings</i>
                        <Link to="/Dashboard/setting" className={ val=="setting"?`nav-active `: ""}>Setting</Link>
                    </div>
                </div>
                <div className="elem4">
                    <img src={img} alt="" />
                    <p>Jessica smith</p>
                    <i class="material-icons">navigate_next</i>
                </div>
                
            </div>
            <div className="content">
                <Outlet/>
            </div>
           
        </div>
       
    )
}
