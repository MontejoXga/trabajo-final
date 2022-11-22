import React from 'react'
import {Card} from "./Card"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const Main = () => {

    const[url,setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=4e4262f5add91c0e7887e0437a7f87c8&hash=bf28c6b8a294cb19965af89efdf86d6a")
    const[item,setItem]=useState();
    const[search,setSearch]=useState("");

    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    },[url])

    const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=4e4262f5add91c0e7887e0437a7f87c8&hash=bf28c6b8a294cb19965af89efdf86d6a`)
    }

  return (
    <>
        <div className='header'>
            <div className='background'>
                <img src='./imagenes/background.jpg' alt='imagen de fondo'/>
            </div>
            <div className='search-bar'>
                <img src='./imagenes/logo.jpg' alt='Logo' />
                <input type='search' placeholder='Buscar nombre' className='search'
                onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchMarvel}/>
            </div>
                    
        </div>
        <div className='content'>
            {
                (!item)?<p>No encontrado</p>:<Card data={item}/>   
            }

        </div>   
    </>
  )
}
