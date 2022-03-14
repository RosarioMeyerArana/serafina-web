const productos = [
    {
        nombre: "Dolce Mela Bacon",
        ingredientes: "Mozarella, Manzana al vino, Manzana, Brie, Tocineta",
        precio: "$33",
        categoria: "pizze"
    },
    {
        nombre: "Dolce Pere",
        ingredientes: "Mozarella, Pera al vino, Pera, Queso Azul",
        precio: "$30",
        categoria: "pizze"
    },
    {
        nombre: "Serafina",
        ingredientes: "Pomodoro, Champiñon, Mozarella, Prosciutto, Rúgula y Parmesano",
        precio: "$28",
        categoria: "pizze"
    },
    {
        nombre: "Messicano",
        ingredientes: "Pomodoro, Mozarella, Chile con Carne, Pico de gallo, Sour Cream, Nachos, Jalapeños",
        precio: "$28",
        categoria: "pizze"
    },{
        nombre: "Quattro Formagi",
        ingredientes: "Pomodoro, Mozarella, Gruyere, Azul, Parmesano",
        precio: "$28",
        categoria: "pizze"
    },{
        nombre: "Verdure",
        ingredientes: "Pomodoro, Mozarella, Antipasto, Rúgula",
        precio: "$28",
        categoria: "pizze"
    },{
        nombre: "Florentina",
        ingredientes: "Pomodoro, Mozarella, Pepperoni, Aceitunas Negras",
        precio: "$25",
        categoria: "pizze"
    },{
        nombre: "Vitello",
        ingredientes: "Pomodoro, Mozarella, Chorizo, Aceitunas Negras, Tomate Cherry",
        precio: "$25",
        categoria: "pizze"
    },{
        nombre: "Margherita classico",
        ingredientes: "Pomodoro, Mozarella, Fior di Latte, Albahaca",
        precio: "$25",
        categoria: "pizze"
    },{
        nombre: "Carni",
        ingredientes: "Pomodoro, Mozarella, Salami, Pepperoni, Tocineta, Jamón",
        precio: "$25",
        categoria: "pizze"
    },{
        nombre: "Ciruela Bacon",
        ingredientes: "Pomodoro, Mozarella, Ciruela, Champiñones",
        precio: "$25",
        categoria: "pizze"
    },{
        nombre: "Pollo Bacon",
        ingredientes: "Pomodoro, Mozarella, Pollo, Tocineta, Miel",
        precio: "$25",
        categoria: "pizze"
    },
    {
        nombre: "Hawaiana",
        ingredientes: "Pomodoro, Mozarella, Piña, Jamón",
        precio: "$19",
        categoria: "pizze"
    },
    {
        nombre: "Pollo e funghi",
        ingredientes: "Pomodoro, Mozarella, Pollo, Champiñones",
        precio: "$19",
        categoria: "pizze"
    },
    {
        nombre: "Lasagne Pollo e Funghi",
        ingredientes: "Mozarella, Pollo, Champiñones, Salsa Alfredo",
        precio: "$26",
        categoria: "lasagne e pasta"
    },
    {
        nombre: "Lasagne Robertto",
        ingredientes: "Mozarella, Espinaca, Ricotta",
        precio: "$24",
        categoria: "lasagne e pasta"
    },{
        nombre: "Lasagne Bolognese",
        ingredientes: "Mozarella, Boloñesa, Aceite Oliva",
        precio: "$24",
        categoria: "lasagne e pasta"
    },{
        nombre: "Lasagne Misto",
        ingredientes: "Mozarella, Boloñesa, Pollo, Champiñones, Salsa Afredo",
        precio: "$24",
        categoria: "lasagne e pasta"
    },{
        nombre: "Pasta Marinaio",
        ingredientes: "Pasta, Frutos del Mar, Salsa Bisquet",
        precio: "$35",
        categoria: "lasagne e pasta"
    },{
        nombre: "Pasta Quattro Formaggi",
        ingredientes: "Pasta al vino, Queso Azul, Gruyere, Mozarella, Parmesano",
        precio: "$30",
        categoria: "lasagne e pasta"
    },
    {
        nombre: "Pasta Carbonara",
        ingredientes: "Pasta, Tocineta Ahumada, Parmesano, Huevo",
        precio: "$25",
        categoria: "lasagne e pasta"
    },
    {
        nombre: "Pasta Primaverile",
        ingredientes: "Pasta, Pollo, Vegetales Salteados, Parmesano",
        precio: "$24",
        categoria: "lasagne e pasta"
    },
    {
        nombre: "Pasta Bolognese",
        ingredientes: "Pasta, Boloñesa, Aceite de oliva, Parmesano",
        precio: "$21",
        categoria: "lasagne e pasta"
    },
    {
        nombre: "Pasta Pesto",
        ingredientes: "Pasta, Aceite de Oliva, Albahaca, Parmesano",
        precio: "$18",
        categoria: "lasagne e pasta"
    },
    {
        nombre: "Francesca",
        ingredientes: "Pan Artesanal, Carne 100% de res, queso americano, tomate, lechuga, pepinillos",
        precio: "$18",
        categoria: "burger"
    },
    {
        nombre: "Pidela con tocineta",
        ingredientes: "",
        precio: "$22",
        categoria: "burger"
    },
    {
        nombre: "Mini Pasta",
        ingredientes: "Acompañada de jugo en cajita y sorpresa",
        precio: "$18",
        categoria: "menu bambini"
    },{
        nombre: "Mini Pizza",
        ingredientes: "Acompañada de jugo en cajita y sorpresa",
        precio: "$18",
        categoria: "menu bambini"
    },
    {
        nombre: "Insalate Cesare Polli",
        ingredientes: "Clásica ensalada con salsa de anchoas, mix de lechugas, crutones, pollo parrillado y parmesano",
        precio: "$24",
        categoria: "antipasti"
    },{
        nombre: "Insalate Capresse",
        ingredientes: "Mozarella di Buffala, Tomates frescos, Mix de lechugas, Pesto",
        precio: "$21",
        categoria: "antipasti"
    },{
        nombre: "Carpaccio di Manzo",
        ingredientes: "Lomo, Parmesano, Rúgula, Cebollas, Alcaparras",
        precio: "$23",
        categoria: "antipasti"
    },{
        nombre: "Carpaccio di Salmone",
        ingredientes: "Salmón, Rúgula, Pimienta, Oliva, Parmesano",
        precio: "$23",
        categoria: "antipasti"
    },{
        nombre: "Bruschettas",
        ingredientes: "Pan Tostado, Tomate, Albahaca, Oliva, Queso",
        precio: "$12",
        categoria: "antipasti"
    },{
        nombre: "Zuppe di Pomodoro",
        ingredientes: "Crema de tomate, Albahaca, Naranja",
        precio: "$12",
        categoria: "antipasti"
    },
    {
        nombre: "Salmone Frutti di Mare",
        ingredientes: "Risotto, Langostinos, Camarones, Calamares, Mejillones, Bisquet",
        precio: "$47",
        categoria: "platti principali"
    },{
        nombre: "Risotto Frutti di Mare",
        ingredientes: "Crema de tomate, Albahaca, Naranja",
        precio: "$40",
        categoria: "platti principali"
    },{
        nombre: "Risotto di Lomo",
        ingredientes: "Arroz cremoso acompañado de lomo a la parrilla en reducción de vino tinto.",
        precio: "$42",
        categoria: "platti principali"
    },{
        nombre: "Salmone Grigliato",
        ingredientes: "Filete de Salmón parrillado acompañado de guarnición",
        precio: "$35",
        categoria: "platti principali"
    },{
        nombre: "Pesce Bianco Al Cartoccio",
        ingredientes: "Clásica preparación de pescado blanco al horno, con prosciutto y tomates frescos, servido en papel aluminio",
        precio: "$35",
        categoria: "platti principali"
    },{
        nombre: "Risotto Funghi",
        ingredientes: "Arroz cremoso con champiñon portobelo y paris.",
        precio: "$30",
        categoria: "platti principali"
    },{
        nombre: "Pepper Steak",
        ingredientes: "Lomo de res asado a la parrilla, con salsa de pimienta negra en reducción de vino tinto y guarnición",
        precio: "$34",
        categoria: "platti principali"
    },{
        nombre: "Filetto balsámico",
        ingredientes: "Lomo de res asado a la parrilla en reducción de vinagre balsámico y guarnición",
        precio: "$33",
        categoria: "platti principali"
    },{
        nombre: "Pollo Rosmarino",
        ingredientes: "Pollo parrillado en salsa blanca de ajo y romero",
        precio: "$26",
        categoria: "platti principali"
    },{
        nombre: "Pollo al Vino Blanco",
        ingredientes: "Pollo asado a la parrilla, bañado con salsa de vino blanco",
        precio: "$26",
        categoria: "platti principali"
    },
    {
        nombre: "Guarniciones",
        ingredientes: "Mix de ensalada, Polenta (Puré de maíz), Pasta (Al burro, Al ajillo, alfredo ó pomodoro), Papa francesa",
        precio: "",
        categoria: "platti principali"
    },
    {
        nombre: "Prosciutto",
        ingredientes: "",
        precio: "$9",
        categoria: "addizione"
    },
    {
        nombre: "Tocineta",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },
    {
        nombre: "Carne Hamburguesa",
        ingredientes: "",
        precio: "$7",
        categoria: "addizione"
    },
    {
        nombre: "Champiñones",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },
    {
        nombre: "Piña",
        ingredientes: "",
        precio: "$7",
        categoria: "addizione"
    },
    {
        nombre: "Pollo",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },
    {
        nombre: "Queso azul",
        ingredientes: "",
        precio: "$5",
        categoria: "addizione"
    },
    {
        nombre: "Crutones",
        ingredientes: "",
        precio: "$3",
        categoria: "addizione"
    },
    {
        nombre: "Aceitunas",
        ingredientes: "",
        precio: "$5",
        categoria: "addizione"
    },
    {
        nombre: "Jamón",
        ingredientes: "",
        precio: "$3",
        categoria: "addizione"
    },
    {
        nombre: "Peperoni",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },
    {
        nombre: "Queso mozarella",
        ingredientes: "",
        precio: "$3",
        categoria: "addizione"
    },
    {
        nombre: "Queso parmesano",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },{
        nombre: "Jalapeños",
        ingredientes: "",
        precio: "$2",
        categoria: "addizione"
    },{
        nombre: "Rugula",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },{
        nombre: "Pan",
        ingredientes: "",
        precio: "$2",
        categoria: "addizione"
    },{
        nombre: "Salami",
        ingredientes: "",
        precio: "$4",
        categoria: "addizione"
    },
    {
        nombre: "Tiiramisú",
        ingredientes: "",
        precio: "$8",
        categoria: "dolci"
    },{
        nombre: "Pannacota",
        ingredientes: "",
        precio: "$6",
        categoria: "dolci"
    },{
        nombre: "Torta de chocolate",
        ingredientes: "",
        precio: "$5",
        categoria: "dolci"
    },{
        nombre: "Copa de helado",
        ingredientes: "",
        precio: "$5",
        categoria: "dolci"
    },{
        nombre: "Bola de helado",
        ingredientes: "",
        precio: "$3",
        categoria: "dolci"
    },
    {
        nombre: "Limonada de coco",
        ingredientes: "",
        precio: "$6",
        categoria: "bebidas"
    },{
        nombre: "Limonada cerezada",
        ingredientes: "",
        precio: "$6",
        categoria: "bebidas"
    },{
        nombre: "Limonada yerbabuena",
        ingredientes: "",
        precio: "$5",
        categoria: "bebidas"
    },{
        nombre: "Limonada natural",
        ingredientes: "",
        precio: "$4",
        categoria: "bebidas"
    },{
        nombre: "Gaseosa personal",
        ingredientes: "",
        precio: "$4",
        categoria: "bebidas"
    },{
        nombre: "Agua en botella",
        ingredientes: "",
        precio: "$4",
        categoria: "bebidas"
    },{
        nombre: "Té (Limón ó durazno)",
        ingredientes: "",
        precio: "$5",
        categoria: "bebidas"
    },{
        nombre: "Soda",
        ingredientes: "",
        precio: "$4",
        categoria: "bebidas"
    },{
        nombre: "Jugos naturales",
        ingredientes: "En agua",
        precio: "$4",
        categoria: "bebidas"
    },{
        nombre: "Jugos naturales",
        ingredientes: "En leche",
        precio: "$5",
        categoria: "bebidas"
    }
]

const filtroPizza = productos.filter((prod) => prod.categoria === "pizze")
const filtroPasta = productos.filter((prod) => prod.categoria === "lasagne e pasta")
const filtroPlato = productos.filter((prod) => prod.categoria === "platti principali")
const filtroBurger = productos.filter((prod) => prod.categoria === "burger")
const filtroAddizione = productos.filter((prod) => prod.categoria === "addizione")
const filtroDolci = productos.filter((prod) => prod.categoria === "dolci")
const filtroBebidas = productos.filter((prod) => prod.categoria === "bebidas")
const filtroAntipasti = productos.filter((prod) => prod.categoria === "antipasti")  
const filtroBambini = productos.filter((prod) => prod.categoria === "menu bambini")


const sectionPizza = document.getElementById('sectionPizza')
const sectionPasta = document.getElementById('sectionPasta')
const sectionPlatoPrincipal = document.getElementById('sectionPlatoPrincipal')
const sectionBurger = document.getElementById('sectionBurger')
const sectionAddizione = document.getElementById('sectionAddizione')
const sectionDolci = document.getElementById('sectionDolci')
const sectionBebidas = document.getElementById('sectionBebidas')
const sectionAntipasti = document.getElementById('sectionAntipasti')
const sectionBambini = document.getElementById('sectionBambini')


console.log(pizza)

const newDivPizza = document.createElement("div")
pizza.appendChild(newDivPizza)

const pizzaproducts = filtroPizza.map((prod) => (`<div class="col-4 text-center">
<p class="nombre">${prod.nombre}</p>
<p class=ingredientes>
    (${prod.ingredientes})
    </p>
<p class=precio>${prod.precio}</p>
</div>`))
    
console.log(pizzaproducts)
