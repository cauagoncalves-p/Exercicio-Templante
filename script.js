document.addEventListener('DOMContentLoaded', ()=>{
    const receitas = [
        {
            imagem: "./source/receitas/risoto.png", 
            textoAlternativo: 'Risoto de Cogumelo', 
            titulo: 'Risoto de Cogumelo',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '30 min', 
            servePessoa: '6 porções', 
            dificuldade: 'Médio'
        },
        {
            imagem: "./source/receitas/frangoAssado.png", 
            textoAlternativo: 'Frango assado com ervas', 
            titulo: 'Frango assado com ervas',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '60 min', 
            servePessoa: '6 porções', 
            dificuldade: 'Fácil'
        },
        {
            imagem: "./source/receitas/saladaCreprese.png", 
            textoAlternativo: 'Salada Creprese', 
            titulo: 'Salada Creprese',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '15 min', 
            servePessoa: '2 porções', 
            dificuldade: 'Fácil'
        },
        {
            imagem: "./source/receitas/lasanhabolonhesa.png", 
            textoAlternativo: 'Lasanha à Bolonhesa', 
            titulo: 'Lasanha à Bolonhesa',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '90 min', 
            servePessoa: '8 porções', 
            dificuldade: 'Médio'
        },
        {
            imagem: "./source/receitas/bolodeCenoura.png", 
            textoAlternativo: 'Bolo de cenoura', 
            titulo: 'Bolo de cenoura',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '45 min', 
            servePessoa: '10 porções', 
            dificuldade: 'Fácil'
        },
        {
            imagem: "./source/receitas/moquecadePeixe.png", 
            textoAlternativo: 'Moqueca de Peixe', 
            titulo: 'Moqueca de Peixe',
            descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit, sed inventore iste magni amet.', 
            tempo: '50 min', 
            servePessoa: '4 porções', 
            dificuldade: 'Médio'
        }
    ];

    const cardReceitas = document.querySelector('#card-receitas-js');

    receitas.forEach(receita => {
        const Receitas = document.createElement('div');
        Receitas.classList.add('card-receita')

        Receitas.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.textoAlternativo}">
        <div class="info-receita">
            <a href=""><h4>${receita.titulo}<h4><a/>
            <p>${receita.descricao}</p>

            <div class="icons-info">
                <div class="info-i"> <i class="fa-solid fa-clock"></i> <p>${receita.tempo}</p> </div>
                <div class="info-i"> <i class="fa-solid fa-users"></i> <p>${receita.servePessoa}</p> </div>
                <div class="info-i"> <i class="fa-solid fa-hands"></i> <p>${receita.dificuldade}</p> </div>
            </div>
        </div>
        `;

        cardReceitas.appendChild(Receitas)
    });
})

