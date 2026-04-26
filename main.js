document.addEventListener('DOMContentLoaded', async () => {
    const appRoot = document.getElementById('app-root');
    
    // 1. Monta o cabeçalho
    appRoot.innerHTML = `
        <div class="header-loja">
            <h2>Mercado Local</h2>
            <p style="color: #666;">Selecione seus produtos</p>
        </div>
    `;

    try {
        // 2. Busca os dados de forma modular (sem quebrar o app)
        const response = await fetch('src/stores/mercado-local/produtos.json');
        const produtos = await response.json();

        // 3. Cria os cartões 3D dinamicamente
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card-3d';
            
            card.innerHTML = `
                <div class="card-title">${produto.nome}</div>
                <div class="card-price">R$ ${produto.preco}</div>
                <p style="margin-top: 10px; font-size: 14px; color: #777; transform: translateZ(20px);">
                    Categoria: ${produto.categoria}
                </p>
            `;
            
            appRoot.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        appRoot.innerHTML += `<p style="color: red; text-align: center;">Erro ao carregar a loja. Tente novamente.</p>`;
    }
});
