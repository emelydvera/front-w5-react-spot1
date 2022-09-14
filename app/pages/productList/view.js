const React = require('react');
const { useEffect, useState } = React
const Style = require('nordic/style');
const ProductList = require('../../components/ProductList/ProductList');
const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
});
const serialize = require('serialize-javascript');
const Script = require('nordic/script');

function View(props) {

    const { products, q, limit, device } = props;

    const preloadedState = {
        products, q, limit, device
    }

    const [data, setData] = useState(products);
    const [offset, setOffset] = useState(0);

    const handleClick = () => {
        setOffset(offset => offset + 10)
    }

    useEffect(() => {
        if (offset > 0) {

            restclient.get('/get-products', {
                params: {
                    q: q,
                    limit,
                    offset
                }
            })
                .then(res => setData(res.data))
                .catch(() => [])
        }

    }, [offset]);

    return (
        <>
            <Style href="productList.css" />
            <Script>
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
                    console.log('Page is loaded!');
                `}
            </Script>
            <Script src='vendor.js' />
            <Script src='productList.js' />

            {/* <button onClick={handleClick}>Siguiente Página</button> */}

            {/* <ul>

                <li >
                    <h3 className='titulo'>Computador</h3>
                    <p>$ 35000</p>
                    <p> bla bla bla </p>
                    <span>span inline</span>
                </li>
                <li >
                    <h3 className='titulo'>Televisor </h3>
                    <p>$ 35000</p>
                    <p> bla bla bla </p>
                    <span>span inline</span>
                </li>
            </ul> */}

            {/* <div>
                <nav>
                    <ul>
                        <li className="uno"><a href="">uno</a></li>
                        <li className='dos'><a href="">dos</a></li>
                        <li className="tres"><a href="">tres</a></li>
                    </ul>
                </nav>
            </div> */}

            {/* {
                data.length > 0 ?

                    <ProductList products={data} />
                    :
                    <p>No se encontraron productos</p>
            } */}


            {/* <div className="box-container">
                <div className="box-item uno">1</div>
                <div className="box-item dos">2</div>
                <div className="box-item tres">3</div>
                <div className="box-item cuatro">4</div>
            </div> */}

            {/* {device.mobile ? <p>Hola sot Mobile</p> : <p>soy otra cosita</p>} */}

            <div>
                <section className="section-uno">

                    <ul>

                        <a href=""><li>Computador</li></a>
                        <a href=""><li>Televisor</li></a>
                        <a href=""><li>Camas</li></a>
                        <a href=""><li>Celulares</li></a>
                        <a href=""><li>Cobijas</li></a>
                        <a href=""><li>Deporte</li></a>

                    </ul>

                </section>

                <section className="section-dos">

                    <div className='uno'>
                        Hola,  soy la numero uno
                    </div>
                    <div className='dos'>
                        Hola,  soy la numero dos
                    </div>
                    <div className='tres'>
                        Hola,  soy la numero tres
                    </div>

                </section>
            </div>
        </>

    )
}


module.exports = View;