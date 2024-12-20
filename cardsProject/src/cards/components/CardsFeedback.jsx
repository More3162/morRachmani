import React from 'react'
import Spinner from '../../components/Spinner'
import Typography from '@mui/material/Typography'
import Error from '../../components/Error'
import Cards from './Cards'


export default function CardsFeedback({
    isLoading,
    cards,
    error,
    handleDelete,
    handleLike
}) {
    if (isLoading) return <Spinner />

    if (error) return <Error errorMessage={error} />

    if (cards && cards.length === 0)
        return (<Typography m={2}>
            Oops... it seems there are no business cards to display
        </Typography>
        );

    if (cards) return <Cards
        cards={cards}
        handleDelete={handleDelete}
        handleLike={handleLike} />


    return null;
}
