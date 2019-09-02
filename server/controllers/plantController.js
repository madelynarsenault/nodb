const plants =[
    {
        name: "Daisy",
        image: 
        "https://pixfeeds.com/images/11/358013/1200-471726916-common-daisy.jpg",
        description: ""
    },
    {
        name: "Cherry Blossom",
        image: 
        "https://i.pinimg.com/originals/81/ce/55/81ce55d3609cda35901fbb746cfad285.jpg",
        description: ""
    },
    {
        name: "Rebutia",
        image:
        "https://images.immediate.co.uk/production/volatile/sites/10/2018/08/5d7923e0-aa48-4b3e-af29-e37466f730fd-7282c39.jpg?quality=45&resize=960,640",
        description: ""
    }
]

const getPlants= (req, res) =>{
    res.json(plants);

}

module.exports ={
    getPlants
}