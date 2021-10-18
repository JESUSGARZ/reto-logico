strings = [
    "hola soy un texto",
    "pero no necesariamente",
    "soy el que mas ",
    "caracteres tiene",
    "eso",
    "unica y exclusivamente depende de ti",
    "y de tu talento y creatividad",
    "para encontrarlo"
]

function stringLength (array) {
    const caracterNum = array.map(item => (item.length) );
    const index = caracterNum.indexOf(Math.max.apply(null,caracterNum));
    const string = array[index]
    console.log(`el string con mas caracteres es: ${string} `)
    console.log(`con el indice: ${index} `)

}