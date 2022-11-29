import React from 'react';

export const Children = React.memo(({ number, increment }: any) => {
    return(
        <button
            className="btn btn-primary"
            onClick={ () => increment(number) }
        >
            { number }
        </button>
    )
})