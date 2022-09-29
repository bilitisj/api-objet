//-------------- USER --------------
let user = {
    id: "user01",
    mail:"user01@exemple.com", // string | null
    pseudo:"user01",
    password:"pass",
    table_character:["perso01", "persoO2"],
    disabled: false,
    date: {
        creation:"",
        update: ""
    }
}

//-------------- CHARACTER --------------
let character = {
    id: "perso01",
    id_user:"user01",
    accessories: {
        hat: {},
        head: {},
        body: {},
        hand_l: {},
        hand_r: {},
        feet: {},
        background: {}
    },
    disabled: false,
    date: {
        creation:"",
        update: ""
    },
    stats: {
        connexions: 0,
        win: 0,
        loose: 0,
        ar:0,
    }
}

//-------------- ACCESSORIES --------------
let categories = [
    {
        category:"hats",
        accessories: [
            {
                name: "chapeau melon",
                disabled: false,
                color:"black"
            },
            {
                name: "courrone",
                disabled: false,
                color:"gold"
            }
        ]
    },
    {
        category:"heads",
        accessories: [
            {
                name: "lunettes",
                disabled: false,
                color:"black"
            },
            {
                name: "moustache",
                disabled: false,
                color:"grey"
            }
        ]
    },
    {
        category:"backgrounds",
        accessories: [
            {
                name: "lune",
                disabled: false
            },
            {
                name: "plage",
                disabled: false
            }
        ]
    }
]

//-------------- VIEW --------------
let view = {
    id: "view01",
    default_background: {
        active: true,
        background: "lune"
    }
}

//-------------- LOG --------------
let log = {
    
}
export {character, user, categories, view, log};