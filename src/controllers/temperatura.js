import ServiceTemperatura from '../services/temperatura.js'
class ControllerTemperatura {
    convertCelToFah(req,res){
        try {
            const celsius = req.body.celsius
            //chama o service
            //fazer a formula
            const fah = ServiceTemperatura.convertCelToFah(celsius)
            //pega o resultado

            res.send({ data:{ celsius, fah} })
        } catch (error) {
            res.status(400).send({ msg:error.message })
        }
    }
    convertFahToCel(req,res){
      try {
            
        } catch (error) {
            res.status(400).send({msg:error.message})
        }
    }
    

}
export default new ControllerTemperatura()