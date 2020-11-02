const string = process.argv[2]
const hash = process.argv[3]


const crypto = require("crypto")


function hash_encript(string, hash_){
    if(hash_ == undefined){
        console.log("ERROR: escolha o tipo de hash ")
        return
    }
    try{
        const hash = crypto.createHash(hash_)
    
        hash.update(string)
        var final_hash = hash.digest("hex")
        console.log(final_hash)
    }catch{
        console.log("ERROR: tipo de hash nao suportado! ")
    }
    
}

if(string == "-h"){
    const all_hash = crypto.getHashes()
    console.log("--------------------------------------")
    console.log("example: node script.js string hash ")
    console.log(all_hash)
}else{
    hash_encript(string, hash_encript)
}


//console.log("Argumentos: " + command[2])

