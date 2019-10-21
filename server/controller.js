module.exports = {
    getInventory: (req, res) => {
        res.status(200).send('It worked')
    },

    addInventory :(req, res) => {
        inventory.length 
        ? id = inventory[inventory.length -1].id +1
        : id = 0
        const newInventory ={
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            id
        }

        inventory.push(newInventory)

        res.status(200).send(inventory)
    },
    
}   