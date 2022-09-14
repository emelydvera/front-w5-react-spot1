const React = require('react');
const { useState } = React;
const ProductCard = require('../ProductCard/ProductCard');

function ProductList({ products }) {

  const [favoritos, setFavoritos] = useState([]);

  const addFav = (id) => {
    let elemento = products.find(e => e.id === id)
    setFavoritos(prev => ([...prev, elemento]))

  }

  const removeFav = (id) => {
    let elemento = favoritos.filter(e => e.id !== id);
    setFavoritos(elemento)
  }


  console.log(favoritos);
  return (

    <ol>
      {
        products.length > 0 ?

          products.map(e => {
            return (

              <ProductCard key={e.id} elements={e} addFav ={addFav } removeFav={removeFav} />

            )
          })
          :
          <p>No se encontraron productos</p>
      }
    </ol>

  )


}

module.exports = ProductList
