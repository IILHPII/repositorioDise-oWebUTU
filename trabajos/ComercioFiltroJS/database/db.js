const productos = [
  {
    nombre: "Gabinete Modelo A",
    tipo: "gabinete",
    marca: "Corsair",
    precio: 120
  },
  {
    nombre: "Memoria RAM DDR4 8GB",
    tipo: "memoria",
    marca: "HyperX",
    precio: 60
  },
  {
    nombre: "Procesador Intel Core i5",
    tipo: "procesadores",
    marca: "Intel",
    precio: 250
  },
  {
    nombre: "Teclado Logitech K480",
    tipo: "perifericos",
    marca: "Logitech",
    precio: 40
  },
  {
    nombre: "Fuente de poder 500W",
    tipo: "fuentes",
    marca: "Corsair",
    precio: 50
  },
  {
    nombre: "Mouse Redragon M602",
    tipo: "perifericos",
    marca: "Redragon",
    precio: 30
  },
  {
    nombre: "Memoria USB Patriot 64GB",
    tipo: "memoria",
    marca: "Patriot",
    precio: 25
  },
  {
    nombre: "Impresora HP OfficeJet Pro",
    tipo: "perifericos",
    marca: "HP",
    precio: 180
  },
  {
    nombre: "Monitor Dell 24 pulgadas",
    tipo: "perifericos",
    marca: "Dell",
    precio: 150
  },
  {
    nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3060",
    tipo: "perifericos",
    marca: "NVIDIA",
    precio: 400
  },
  {
    nombre: "Disco duro SSD Samsung 500GB",
    tipo: "almacenamiento",
    marca: "Samsung",
    precio: 80
  },
  {
    nombre: "Gabinete Modelo B",
    tipo: "gabinete",
    marca: "Corsair",
    precio: 110
  },
  {
    nombre: "Memoria RAM DDR4 16GB",
    tipo: "memoria",
    marca: "HyperX",
    precio: 100
  },
  {
    nombre: "Procesador Intel Core i7",
    tipo: "procesadores",
    marca: "Intel",
    precio: 350
  },
  {
    nombre: "Teclado Logitech K780",
    tipo: "perifericos",
    marca: "Logitech",
    precio: 60
  },
  {
    nombre: "Fuente de poder 600W",
    tipo: "fuentes",
    marca: "Corsair",
    precio: 70
  },
  {
    nombre: "Mouse Redragon M601",
    tipo: "perifericos",
    marca: "Redragon",
    precio: 35
  },
  {
    nombre: "Memoria USB Patriot 128GB",
    tipo: "memoria",
    marca: "Patriot",
    precio: 50
  },
  {
    nombre: "Impresora HP LaserJet Pro",
    tipo: "perifericos",
    marca: "HP",
    precio: 200
  },
  {
    nombre: "Monitor Dell 27 pulgadas",
    tipo: "perifericos",
    marca: "Dell",
    precio: 300
  },
  {
    nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3080",
    tipo: "perifericos",
    marca: "NVIDIA",
    precio: 700
  },
  {
    nombre: "Disco duro SSD Samsung 1TB",
    tipo: "almacenamiento",
    marca: "Samsung",
    precio: 120
  },
  {
    nombre: "Gabinete Modelo C",
    tipo: "gabinete",
    marca: "Corsair",
    precio: 130
  },
  {
    nombre: "Memoria RAM DDR4 32GB",
    tipo: "memoria",
    marca: "HyperX",
    precio: 180
  },
  {
    nombre: "Procesador Intel Core i9",
    tipo: "procesadores",
    marca: "Intel",
    precio: 500
  },
  {
    nombre: "Teclado Logitech K850",
    tipo: "perifericos",
    marca: "Logitech",
    precio: 70
  },
  {
    nombre: "Fuente de poder 750W",
    tipo: "fuentes",
    marca: "Corsair",
    precio: 90
  },
  {
    nombre: "Mouse Redragon M603",
    tipo: "perifericos",
    marca: "Redragon",
    precio: 40
  },
  {
    nombre: "Memoria USB Patriot 256GB",
    tipo: "memoria",
    marca: "Patriot",
    precio: 75
  },
  {
    nombre: "Impresora HP OfficeJet Pro X",
    tipo: "perifericos",
    marca: "HP",
    precio: 280
  },
  {
    nombre: "Monitor Dell 32 pulgadas",
    tipo: "perifericos",
    marca: "Dell",
    precio: 400
  },
  {
    nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3090",
    tipo: "perifericos",
    marca: "NVIDIA",
    precio: 1000
  },
  {
    nombre: "Disco duro SSD Samsung 2TB",
    tipo: "almacenamiento",
    marca: "Samsung",
    precio: 200
  },
  {
    nombre: "Gabinete Modelo D",
    tipo: "gabinete",
    marca: "Corsair",
    precio: 140
  },
  {
    nombre: "Memoria RAM DDR4 64GB",
    tipo: "memoria",
    marca: "HyperX",
    precio: 350
  },
  {
    nombre: "Procesador Intel Core i9 Extreme",
    tipo: "procesadores",
    marca: "Intel",
    precio: 800
  },
  {
    nombre: "Teclado Logitech K860",
    tipo: "perifericos",
    marca: "Logitech",
    precio: 80
  },
  {
    nombre: "Fuente de poder 850W",
    tipo: "fuentes",
    marca: "Corsair",
    precio: 100
  },
  {
    nombre: "Mouse Redragon M604",
    tipo: "perifericos",
    marca: "Redragon",
    precio: 45
  },
  {
    nombre: "Memoria USB Patriot 512GB",
    tipo: "memoria",
    marca: "Patriot",
    precio: 100
  },
  {
    nombre: "Impresora HP LaserJet Pro MFP",
    tipo: "perifericos",
    marca: "HP",
    precio: 350
  },
  {
    nombre: "Monitor Dell 34 pulgadas",
    tipo: "perifericos",
    marca: "Dell",
    precio: 500
  },
  {
    nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3070",
    tipo: "perifericos",
    marca: "NVIDIA",
    precio: 600
  },
  {
    nombre: "Disco duro SSD Samsung 4TB",
    tipo: "almacenamiento",
    marca: "Samsung",
    precio: 350
  }
];

// Puedes acceder a los objetos individualmente por índice, por ejemplo:
console.log(productos[0]); // Accede al primer objeto de la lista

// O puedes iterar sobre la lista de productos para realizar operaciones en cada uno de ellos.
