function confirmarAgendamento(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos dados (Requisitos da Fase 2)
    const nome = document.getElementById('nomeCliente').value;
    const endereco = document.getElementById('enderecoCliente').value; // Novo campo
    const data = document.getElementById('dataAgendamento').value;
    const servico = document.getElementById('servicoSelecionado').value;
    const nomePet = document.getElementById('nomePet').value;

    // Validação básica
    if (!data || !servico || !nome || !endereco) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Formatação da data para PT-BR
    const dataObj = new Date(data + 'T00:00:00');
    const dataFormatada = dataObj.toLocaleDateString('pt-BR');
    const horario = document.getElementById('horaAgendamento').value;

    // Mensagem de confirmação simulando o cadastro no sistema
    let mensagem = `✅ CADASTRO E AGENDAMENTO REALIZADOS!\n\n`;
    mensagem += `Cliente: ${nome}\n`;
    mensagem += `Endereço: ${endereco}\n`; // Mostrando que capturou o endereço
    mensagem += `Pet: ${nomePet}\n`;
    mensagem += `\nServiço: ${servico}\n`;
    mensagem += `Data: ${dataFormatada} às ${horario}\n\n`;
    mensagem += `A equipe Pet Amigo agradece!`;

    alert(mensagem);
    
    // Limpa o formulário para novo uso
    document.getElementById('formAgendamento').reset();
}