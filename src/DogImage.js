// DO NOT DELETE
import * as React from 'react'
import './App.css'

export const DogImage = (data) => {
    return (
        <>
            <div className="img">
                <img src={data.url} alt='犬の画像'/>
            </div>
        </>
    )
}