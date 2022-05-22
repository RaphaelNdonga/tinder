import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
        },
        {
            name: 'Raphael Ndonga',
            url: 'https://image.tmdb.org/t/p/w235_and_h235_face/oxYxGqRBrgbDtjreZms3ojDwJeD.jpg'
        }
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        // setLastDirection(direction)
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((result) =>
                    <TinderCard
                        className='swipe'
                        key={result.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, result.name)}
                        onCardLeftScreen={() => outOfFrame(result.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${result.url})` }}
                            className='card'
                        >
                            <h3>{result.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards