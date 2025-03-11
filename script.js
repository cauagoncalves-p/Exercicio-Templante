document.addEventListener('DOMContentLoaded', ()=>{
    const receitas = [
        {
            imagem: "./source/receitas/risoto.png", 
            textoAlternativo: 'Risoto de Cogumelo', 
            titulo: 'Risoto de Cogumelo',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '30 min', 
            servePessoa: '6 pessoas', 
            dificuldade: 'Médio'
        }
    ];

    const cardReceitas = document.querySelector('#card-receitas-js');

    receitas.forEach(receita => {
        const Receitas = document.createElement('div');
        Receitas.classList.add('card-receita')

        Receitas.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.textoAlternativo}">
        <div class="info-receitas">
            <h4>${receita.titulo}<h4>
            <p>${receita.descricao}</p>

            <div class="icons-receita">
                <div class="info-i"> <i class="fa-solid fa-clock"></i> <p>${receita.tempo}</p> </div>
                <div class="info-i"> <i class="fa-solid fa-users"></i> <p>${receita.servePessoa}</p> </div>
                <div class="info-i"> <i class="fa-solid fa-hands"></i> <p>${receita.dificuldade}</p> </div>
            </div>
        </div>
        `;

        cardReceitas.appendChild(Receitas)
    });
})


<div class="receitas-principais" id="card-receitas-js">
<div class="card-receita" id="div-receitas">
    <img src="./source/receitas/risoto.png" alt="risoto">
    <div class="info-receita">
        <h4>Risoto de Cogumelos</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.</p>

        <div class="icons-info">
            <div class="info-i"><i class="fa-solid fa-clock"></i><p>30 min</p></div>
            <div class="info-i"><i class="fa-solid fa-users"></i> <p>6 pessoas</p></div>
            <div class="info-i"><i class="fa-solid fa-hands"></i> <p>Médio</p></div>
        </div>
    </div>
</div>
</div>