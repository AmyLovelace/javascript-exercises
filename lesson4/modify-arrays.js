
const michis = ['petusa','pancito','molotov','mechita','copin']

console.log(michis[3])

michis[2] ='katiuska'; //asi modificas un array

michis.push('walter');//se agrega un elemento al final del array

console.log(michis.length)
michis[michis.length]='comebasula'//asi puedes agregar al final del array
for (let i = 0 ; i< michis.length; i ++){
    console.log(i + ' : ' + michis[i] + ' cosita preciosa')
} 

