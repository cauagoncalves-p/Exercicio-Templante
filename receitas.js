const ingredientes = document.querySelector("#ingredientes")
const modoPreparo = document.querySelector("#modoPreparo")
const lista = document.querySelector("#lista")

ingredientes.addEventListener('click', () =>{
    lista.innerHTML = `<ul>
                    <li>300g de arroz arbóreo</li>
                    <li>200g de cogumelos variados (paris, shitake, portobello)</li>
                    <li>1cebola média picada</li>
                    <li>2 dentes de alho picados</li>
                    <li>150ml de vinho branco seco</li>
                    <li>1L de caldo de legumes quente</li>
                    <li>50g de manteiga</li>
                    <li>100g de queijo parmesão ralado</li>
                    <li>2 colheres de sopa de azeite de oliva</li>
                    <li>Sale pimenta a gosto</li>
                    <li>Salsinha picada para finalizar</li>
                </ul>`
})

modoPreparo.addEventListener('click', () =>{
    lista.innerHTML = `<ol>
    <li>Em uma panela média, aqueça o azeite e refogue a cebola até ficar transparente.</li>
    <li>Adicioneo alho e refogue por mais 1 minuto.</li>
    <li>Acrescente os cogumelos fatiados e cozinhe até que estejam macios e tenham liberado sua água.</li>
    <li>Adicioneo arroz arbóreo e mexa por 2 minutos até que fique levemente translúcido.</li>
    <li>Despeje ovinho branco e mexa até que seja completamente absorvido.</li>
    <li>Comece a adicionar o caldo de legumes, uma concha por vez, mexendo constantemente e esperando que o
    líquido seja absorvido antes de adicionar mais.</li>
    <li>Continue este processo por cerca de 18-20 minutos, até que o arroz esteja al dente.</li>
    <li>Retiredofogoe adicione a manteiga e o queijo parmesão, mexendo vigorosamente.</li>
    <li>Tempere com sale pimenta a gosto.</li>
    <li>Deixe descansar por 2 minutos antes de servir.</li>
    <li>Finalize com salsinha picada e mais queijo parmesão ralado, se desejar.</li>
</ol>`
})