const React = require('react');
const serialize = require('serialize-javascript');
const Script = require('nordic/script');
const Style = require('nordic/style');

function View(props) {

    const { title } = props;

    const preloadedState = {
        props
    }

    const handleClick = () => {
        console.log('Aqui estoy');
    }
    return (
        <>
            <Style href="productItem.css" />
            <Script>
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
                    console.log('Page is loaded!');
                `}
            </Script>
            <Script src='vendor.js' />
            <Script src='productItem.js' />
            <h1>{title}</h1>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

module.exports = View;