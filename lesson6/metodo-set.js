let bichito = {
    nombre : 'froper',
    apellido :'pupo',
    status : 'alive',
    idioma :'es',
    get lang (){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },


    get nombreCompleto () {
        return  this.nombre + ' ' + this.apellido ;
    }
}

console.log (bichito.lang)

bichito.lang = 'en'

console.log (bichito.lang)

console.log (bichito.idioma)