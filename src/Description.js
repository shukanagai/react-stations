// DO NOT DELETE
import {useState} from "react";
import * as React from 'react'
import './App.css'
import { DogImage } from "./DogImage";

export const Description = () => {
    const [getUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
    const update = () => {
        fetch("https://dog.ceo/api/breeds/image/random") 
        .then((res) => res.json())
        .then((apiData) => (setDogUrl(apiData.message)));
    }
    return(
    <>
         <article className="dog">
            <div className="imgBox">
              <h2>犬の画像を表示するサイトです</h2>
              <DogImage {...{url:getUrl}} />
            </div>
            <div className="btnBox">
              <button onClick={update}>更新</button>
            </div>
        </article>
    </>
    )
}