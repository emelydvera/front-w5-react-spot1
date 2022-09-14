const React = require('react');
const { useState } = React
const Image = require('nordic/image');
const PropTypes = require('prop-types');

function ProductCard({ elements, addFav, removeFav }) {

    const { id, title, price, permalink, thumbnail } = elements;

    const [isFav, setIsFav] = useState(false);

    const handleClick = (id) => {
        isFav ? removeFav(id) : addFav(id)
        setIsFav(isFav => !isFav);
    }

    return (

        <li key={id}>
            <h3 className='titulo'>{title}</h3>
            <p>{price}{id}</p>
            <a href={permalink}>
                <Image src={thumbnail} alt={title} lazyload="off" />
            </a>
            <button aria-label='agregar a favoritos' onClick={(e) => handleClick(id)}>{isFav ? 'Quitar de Favoritos' : 'Agregar a favoritos'}</button>
        </li>

    )
}



ProductCard.propTypes = {
    elements: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired
    })
}

module.exports = ProductCard



