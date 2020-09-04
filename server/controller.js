module.exports = {
    getInventory: (request, response) => {
        const db = request.app.get('db')

        db.get_inventory().then((products) => {
            response.status(200).send(products)
        })
    },
}