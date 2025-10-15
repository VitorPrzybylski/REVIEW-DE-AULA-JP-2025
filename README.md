# REVIEW-DE-AULA-JP-2025
Review da aula do jovem programador 2025

ORDEM,  SRC: INDEX>SERVICES>CONTROLLER>ROUTES>TEST

// COMANDOS 

    Instalando jest
    npm i --save-dev jest cross-env
    
    Package.json permitir testes
    "test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js"

    Watch - atualiza o server sem reiniciar ele
    "dev": "node --watch ./src/index.js" 
    EXEMPLO:
        "scripts": {
        "dev": "node --watch ./src/index.js",
        "test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js"
        },
   EXPRESS: caso nao tenha conseguido pegar o comando     
    "author": "Vitor Henrique",
    "license": "ISC",
    "dependencies": {
        "express": "5.1.0"
    },








//SRC:  tudo, menos testes    
    criar pasta src e adicionar controller, routes, services e index.js dentro dela

    //INDEX  abre a porta e fica ouvindo
        import express, { json } from 'express'
        import router from './routes/temperatura.js'
        const app =express()

        app.use(express.json())
        app.use('/api',router)

        const port =3000
        app.listen(port, ()=>{
            console.log(`Servidor Rodando na porta 3000 ${port}`)
        })

    //SERVICES faz o calculo e retorna o valor
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




    //Controller recebe a requisição, chama o service e envia a resposta
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

    //ROUTES define as rotas e as conecta ao controller”
        import express from 'express'
        import ControllerTemperatura from '../controllers/temperatura.js'
        const router = express.Router()

        //preimeiro parametro é p endpoint
        router.post('/celFah', ControllerTemperatura.convertCelToFah)
        export default router


    
//TESTES: cria um describe(grupo de erros) cada it é um possivel erro

    criar pasta __tests__, com NOME.test.js

    import { describe, it, expect } from '@jest/globals'
    import ServiceTemperatura from '../src/services/temperatura.js'

    describe('Testando a converçao Cel para Fah'), () => {

        it("testando valor zero"), () => {
            const fah = ServiceTemperatura.convertCelToFah(0)
            expect(fah).toBe(32)
        }
        it("testando com 10"), () => {
            const fah = ServiceTemperatura.convertCelToFah(10)
            expect(fah).toBe(50)
        }
    }






Camada	        Função principal                             Legenda sugerida	                                           
Service	        Lógica de negócio                           //SERVICE faz o cálculo e retorna o valor	                 
Controller	    Controle do fluxo e resposta                //CONTROLLER recebe a requisição, chama o service e envia a resposta	
Routes	        Define os endpoints e liga ao controller    //ROUTES define as rotas e exporta para o Index usar	



