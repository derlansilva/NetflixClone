import React, {  useState } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import './movierow.css'
import { NavigateNext } from "@material-ui/icons";
import Modal from './modal'

export default ({ title, items }) => {
    const [scrollX, setScroolX] = useState(0)
    
    const [show , setShow]  = useState(false)
    const [idModal , setIdModal] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScroolX(x)
    }
    const handleModal = (item) => {
        setShow(true)
        setIdModal(item)
        let modal = document.body.style.transition= 'all ease 0.5s'
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        console.log(scrollX)
        let listW = items.results.length * 150
        if (window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScroolX(x)
    }

    

    return (
        <div className="movieRow">
            <h2>{title}</h2>  
            {show ? <Modal item={idModal}/> : null}
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fonteSize: 50 }} />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNext style={{ fonteSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map(((item, key) => {
                        return (
                            <div key={key} className="movieRow--item" onClick={() => handleModal(item)}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>

                            </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}