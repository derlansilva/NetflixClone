import React, { useState } from 'react'

import './modal.css'

export default (item) => {
    console.log(useState())
    console.log(item)
    let firstDate = new Date(item.item.first_air_date)
    let genre = []
    for (let i in item.item.genres) {
        console.log(item.item.genres[i].name)
        genre.push(item.item.genres[i].name)
    }

    return (
        <div className="modal">
            <div className='modal--two'>

            </div>

            <div className='modal--content'>
                <div className='modal--icon'>
                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/delete-sign.png"/>
                </div>

                <section className="modal--back" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.item.backdrop_path})`
                }}>
                   
                    <div className="modal--vetical">
                        <div className="modal--horizontal">
                            <div className="modal--name">
                                {item.item.media_type == 'movie' ? item.item.original_title
                                    : item.item.original_title ? item.item.original_title
                                        : item.item.original_name
                                }

                            </div>
                            <div className="modal--info">
                                <div className="modal--points">{item.item.vote_average} pontos</div>

                                {firstDate.getFullYear() ? firstDate.getFullYear() : ''}

                                {item.item.number_of_seasons ?
                                    <div className="featured--seasons">
                                        {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}
                                    </div>
                                    :
                                    item.item.media_type == 'movie' ? ''
                                        :
                                        ''
                                }

                            </div>

                            <div className="modal--description">
                                {item.item.overview}
                            </div>

                            <div className="modal--buttons">
                                <a className='modal--close'>Fechar</a>
                                <a href={`/watch/${item.item.id}`} className="modal--watchbutton">Assistir</a>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}


