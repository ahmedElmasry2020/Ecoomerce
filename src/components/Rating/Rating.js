import React from 'react';

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
                        background: 'linear-gradient(to right, #7db9e8 50%,#7db9e8 50%)',
                        paddingLeft: '5px',
                        marginLeft: '5px'
                    }}
                    key={span}
                >
                    X</span>

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
                    background: `linear-gradient(to right, #7db9e8 ${fraction}%,#1e5799 ${remainFraction}%)`,
                    paddingLeft: '5px',
                    marginLeft: '5px'
                }}
            >
                X</span>
        </>
    )
}
export default Rating