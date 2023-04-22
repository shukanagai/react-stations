// DO NOT DELETE
import {useEffect , useState} from "react";
import * as React from 'react'
import './App.css'
import { BreedsSelect } from "./BreedsSelect";


export const DogListContainer = () => {
    // 犬一覧用state
    const [getBreeds,setBreeds] = useState(0);
    // check用state
    const [selectedBreed , setSelectedBreed] = useState(null);
    // img用state
    const [getImg , setImg] = useState(null);
    

    let breedsImg = null;
    if(getImg) {
        breedsImg = getImg.map((url) =>
            <img src={url} />
        );
    }

    // 犬一覧を取ってくる
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all") 
        .then((res) => res.json())
        .then((apiData) => (setBreeds(apiData.message)));
    } , [])
    
    // 取ってきた犬の情報を配列に
    const breeds = [];
    for(let dog in getBreeds) {
        breeds.push(dog);
    }

    return(
        <>
            <BreedsSelect breeds={breeds} onChange={setSelectedBreed}  selectVvalue={selectedBreed} onClick={setImg}/>
            <div>
                {breedsImg}
            </div>
        </>
    )
}