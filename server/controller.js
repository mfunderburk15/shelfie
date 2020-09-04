module.exports = {
    getInventory: (request, response) => {
        const db = request.app.get('db')

        db.get_inventory().then((products) => {
            response.status(200).send(products)
        })
    },
    createProduct: (request, response) => {
        const db = request.app.get('db')

        const { name, price, imgurl } = request.body

        db.create_product([name, price, imgurl]).then((product) => {
            response.status(200).send(product)
        })
    }
}