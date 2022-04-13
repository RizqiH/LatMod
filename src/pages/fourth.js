import React from 'react'
import Media from '../component/media'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


export default class Fourth extends React.Component{
    render(){
        return(
            <div className='container'>
                <Media image="logo_react.png" title="Reat Js" type = "info">
                    Framework untuk FrontEnd Development
                </Media>
                <Media image="logo_node.png" title="Node Js" type = "success">
                    Framework untuk BackEnd Development
                </Media>
             
            </div>
        )
    }
}