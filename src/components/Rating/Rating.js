import React from 'react';
import styles from './Rating.module.scss';
const Rating = () => {
    debugger
    const randomRating = Math.round(Math.random() * 5 * 100) / 100
    const randomRatingCompleted = Math.trunc(randomRating)
    const fraction = (randomRating % 1) * 100
    const remainFraction = 100 - fraction
    let completedArray = []
    for (var i = 0; i < randomRatingCompleted; i++) {
        completedArray.push(i)
    }
    const completedPart = () => {

        const spans = completedArray.map((span, index) => {
            return (

                <span
                    style={{
                        marginLeft: '5px',
                    }}
                    key={span}
                >
                    <i className="fa fa-star"
                        style={{
                            fontSize: '30px',
                            color:'#FFD700'
                        }}
                        aria-hidden="true"></i>

                </span>

            )
        })
        return spans
    }
    // background: linear-gradient(to right, #7db9e8 50%,#1e5799 50%);

    return (

        <>
            {completedPart()}
            <span
                style={{
                    marginLeft: '5px'
                }}
                className={styles.lastIcon}
            >
                <i className="fa fa-star"
                    style={{
                        fontSize: '30px',
                        background: `linear-gradient(to right, #FFD700 ${fraction}%,#ddd ${remainFraction}%)`,

                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        MozBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'

                    }}


                    aria-hidden="true"></i>
            </span>
        </>
    )
}
export default Rating