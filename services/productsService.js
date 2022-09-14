const restclient = require('nordic/restclient')({
    timeout: 5000,
  });
  const normalizer = require('./transforms/normalizarProductos')
  
  class ProductsService {
  
    static getProducts(siteID, q='motorola', limit=10, offset) {
      return restclient.get(`/sites/${siteID}/search`,
        {
          params: {
            q, limit, offset
          }
        })
        .then(res => normalizer(res.data.results))
        .catch(() => [])
    }
  }
  
  module.exports = ProductsService;
  