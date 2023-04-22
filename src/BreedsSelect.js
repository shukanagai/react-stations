// DO NOT DELETE
import * as React from 'react'
import './App.css'
import { useEffect, useState} from 'react'
export const BreedsSelect = (props) => {

    // check用stateに格納
    const dogSelected = (e) => {
       props.onChange(e.target.value);    
    }

    // 配列をoptionに
    const breeds = props.breeds.map((dog) => 
        <option key={dog} value={dog}>{dog}</option>
    );

    if(!props.selectVvalue) {
        props.onChange("affenpinscher"); 
    }

    // APIから画像取得
    const dogImgGetter = () => {
        const url = ` https://dog.ceo/api/breed/${props.selectVvalue}/images/random/12`;
        fetch(url) 
        .then((res) => res.json())
        .then((apiData) => (props.onClick(apiData.message)));
    }
    return(
        <>
            <select onChange={dogSelected} value={props.selectVvalue}>
                {breeds}
            </select>
            <button onClick={dogImgGetter}>表示</button>
        </>
    )
}
