import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

export default class First extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='alert alert-info text-center'>
                <h3 className='text-danger'>Praktik Bootstrap di React</h3>
                <p>Belajar React dan Bootstrap itu mudah</p>
                <button className='button button-primary'>Setuju</button>
                <button className='btn btn-info'>Siap</button>
                </div>
            </div>
        )
    }
}