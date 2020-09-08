module.exports = {
    getInventory: (request, response) => {
        const db = request.app.get('db')

        db.get_inventory().then((products) => {
            response.status(200).send(products)
        })
    },
    getProductById: (request, response) => {
        const { id } = request.params

        const db = request.app.get('db')

        db.get_product_by_id([id]).then((product) => {
            response.status(200).send(product)
        })
    },
    createProduct: (request, response) => {
        const db = request.app.get('db')

        const { name, price, imgurl } = request.body

        db.create_product([name, price, imgurl]).then((product) => {
            response.status(200).send(product)
        })
    },
    deleteProduct: (request, response) => {

        const { id } = request.params

        const db = request.app.get('db')

        db.delete_product([id]).then(() => {
            response.sendStatus(200)
        })
    },
    editProduct: (request, response) => {
        const { id } = request.params
        const { name, price, imgurl } = request.body

        const db = request.app.get('db')
        db.edit_product([id, name, price, imgurl]).then((product) => {
            response.status(200).send(product)
        })
    }

}