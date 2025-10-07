class ServiceTemperatura{
    convertCelToFah(celsius){
        if (isNaN(celsius)){
            throw new Error("Favor informar somente numeros")
        }
        return (celsius *9/5)+32
    }

    convertFahToCel(){}
}
export default new ServiceTemperatura()