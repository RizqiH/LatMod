import React from 'react'
import AlertProps from '../component/alert_props';

export default class First extends React.Component{
    render(){
        return(
            <div className='container'>
               <AlertProps type = "danger" title = "Fatal Error">
                   Ini adalah alert tipe danger
               </AlertProps>
               <AlertProps type = "warning" title = "Warning">
                   Ini adalah alert tipe warning
               </AlertProps>
               <AlertProps type = "success" title = "Successful">
                   Ini adalah alert tipe success
               </AlertProps>
            </div>
            
            //props biar gakbuat alert banyak banyak jadi cukup satu alert
        )
    }
}