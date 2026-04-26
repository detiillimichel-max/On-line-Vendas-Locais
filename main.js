// Este é o arquivo principal que orquestra o app
document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app-root');
    
    // Injetando conteúdo de forma segura no HTML
    appRoot.innerHTML = `
        <div style="text-align: center; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <h1 style="color: #333; font-size: 24px;">Hub Estruturado com Sucesso!</h1>
            <p style="color: #666;">A base modular está pronta e segura.</p>
        </div>
    `;
});
