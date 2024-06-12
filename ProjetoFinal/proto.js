document.addEventListener('DOMContentLoaded', () => {
    const novaSecaoBtn = document.getElementById('novaSecaoBtn');
    const modalNovaSecao = document.getElementById('modalNovaSecao');
    const modalNovaTarefa = document.getElementById('modalNovaTarefa');
    const closeButtons = document.querySelectorAll('.close');
    const salvarSecaoBtn = document.getElementById('salvarSecaoBtn');
    const cancelarSecaoBtn = document.getElementById('cancelarSecaoBtn');
    const salvarTarefaBtn = document.getElementById('salvarTarefaBtn');
    const cancelarTarefaBtn = document.getElementById('cancelarTarefaBtn');
    const secoesContainer = document.getElementById('secoes');
    const tabelaTarefas = document.querySelector('#tabelaTarefas tbody');
    const pendentesBtn = document.getElementById('pendentesBtn');

    let secoes = JSON.parse(localStorage.getItem('secoes')) || [];
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    let editandoSecaoId = null;
    let editandoTarefaId = null;
    let mostrandoPendentes = true;

    function salvarDados() {
        localStorage.setItem('secoes', JSON.stringify(secoes));
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    novaSecaoBtn.addEventListener('click', () => {
        abrirModal(modalNovaSecao);
        tituloModalSecao.textContent = 'Nomear seção';
        document.getElementById('nomeSecao').value = '';
        document.getElementById('corSecao').value = '#ff69b4';
        editandoSecaoId = null;
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            fecharModal(button.closest('.modal'));
        });
    });

    cancelarSecaoBtn.addEventListener('click', () => fecharModal(modalNovaSecao));
    cancelarTarefaBtn.addEventListener('click', () => fecharModal(modalNovaTarefa));

    salvarSecaoBtn.addEventListener('click', () => {
        const nomeSecao = document.getElementById('nomeSecao').value;
        const corSecao = document.getElementById('corSecao').value;

        if (nomeSecao) {
            if (editandoSecaoId) {
                const secao = secoes.find(s => s.id == editandoSecaoId);
                secao.nome = nomeSecao;
                secao.cor = corSecao;
            } else {
                const novaSecao = {
                    id: Date.now(),
                    nome: nomeSecao,
                    cor: corSecao,
                    status: 'pendente',
                    ativa: true
                };
                secoes.push(novaSecao);
            }
            salvarDados();
            renderizarSecoes();
            fecharModal(modalNovaSecao);
        }
    });

    salvarTarefaBtn.addEventListener('click', () => {
        const secaoId = modalNovaTarefa.dataset.secaoId;
        const tituloTarefa = document.getElementById('tituloTarefa').value;
        const dataVencimentoTarefa = document.getElementById('dataVencimentoTarefa').value;
        const prioridadeTarefa = document.getElementById('prioridadeTarefa').value;
        const descricaoTarefa = document.getElementById('descricaoTarefa').value;

        if (tituloTarefa && dataVencimentoTarefa && prioridadeTarefa) {
            if (editandoTarefaId) {
                const tarefa = tarefas.find(t => t.id == editandoTarefaId);
                tarefa.titulo = tituloTarefa;
                tarefa.dataVencimento = dataVencimentoTarefa;
                tarefa.prioridade = prioridadeTarefa;
                tarefa.descricao = descricaoTarefa;
            } else {
                const novaTarefa = {
                    id: Date.now(),
                    secaoId,
                    titulo: tituloTarefa,
                    dataVencimento: dataVencimentoTarefa,
                    prioridade: prioridadeTarefa,
                    descricao: descricaoTarefa,
                    status: 'pendente'
                };
                tarefas.push(novaTarefa);
            }
            salvarDados();
            renderizarTarefas();
            fecharModal(modalNovaTarefa);
        }
    });

    function renderizarSecoes() {
        secoesContainer.innerHTML = '';
        secoes.forEach(secao => {
            if ((mostrandoPendentes && secao.status !== 'concluida') || (!mostrandoPendentes && secao.status === 'concluida')) {
                const secaoElement = document.createElement('div');
                secaoElement.className = 'secao';
                secaoElement.style.borderColor = secao.cor;
                secaoElement.innerHTML = `
                    <div style="background-color: ${secao.cor};"></div>
                    <span onclick="editarSecao(${secao.id})">${secao.nome}</span>
                    <button style="font-size: 1.1rem; color: green; font-weight: bold;"  onclick="adicionarTarefa(${secao.id})">+</button>
                    <button onclick="excluirSecao(${secao.id})">🗑️</button>
                    <label class="switch">
                        <input type="checkbox" ${secao.ativa ? 'checked' : ''} onclick="alternarAtividadeSecao(${secao.id})">
                        <span class="slider"></span>
                    </label>
                `;
                secoesContainer.appendChild(secaoElement);
            }
        });
        renderizarTarefas();
    }

    function formatarData(data) {
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    }

    function renderizarTarefas() {
        tabelaTarefas.innerHTML = '';
        const tarefasOrdenadas = tarefas.sort((a, b) => new Date(a.dataVencimento) - new Date(b.dataVencimento));
        const hoje = new Date();

        tarefasOrdenadas.forEach(tarefa => {
            const secao = secoes.find(s => s.id == tarefa.secaoId);
            if (secao && secao.ativa && ((mostrandoPendentes && tarefa.status === 'pendente') || (!mostrandoPendentes && tarefa.status === 'concluida'))) {
                const dataVencimento = new Date(tarefa.dataVencimento);
                const diffTime = dataVencimento - hoje;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                let estiloTitulo = '';
                let imagemAviso = '';

                if (diffDays <= 3) {
                    estiloTitulo = 'style="color: red; font-weight: bold;"';
                    imagemAviso = '<img src="warning.png" alt="Aviso" class="alerta">';
                } else if (diffDays <= 7) {
                    estiloTitulo = 'style="color: #fcba03; font-weight: bold;"';
                }

                const tarefaElement = document.createElement('tr');
                tarefaElement.innerHTML = `
                    <td onclick="${mostrandoPendentes ? `concluirTarefa(${tarefa.id})` : `reabrirTarefa(${tarefa.id})`}">
                        ${mostrandoPendentes ? '<button class="btn-check">✓</button>' : '<button class="btn-x">X</button>'}
                    </td>
                    <td class="nome-tarefa" ${estiloTitulo} onclick="editarTarefa(${tarefa.id})">
                        <div class="tarefa-cell">
                            ${tarefa.titulo} ${imagemAviso}
                        </div>
                    </td>
                    <td>${formatarData(tarefa.dataVencimento)}</td>
                    <td>
                        <div class="preenche-prioridade ${tarefa.prioridade.toLowerCase()}">
                            <span>${tarefa.prioridade}</span>
                        </div>
                    </td>
                    <td><button onclick="excluirTarefa(${tarefa.id})">🗑️</button></td>
                `;
                tarefaElement.style.borderLeft = `5px solid ${secao.cor}`;
                tabelaTarefas.appendChild(tarefaElement);
            }
        });
    }

    pendentesBtn.addEventListener('click', () => {
        mostrandoPendentes = !mostrandoPendentes;
        pendentesBtn.textContent = mostrandoPendentes ? 'Pendentes' : 'Encerradas';
        pendentesBtn.style.backgroundColor = mostrandoPendentes ? '#ffcc00' : '#A0ED8A';
        pendentesBtn.style.color = mostrandoPendentes ? '#996600' : '#269505';
        renderizarSecoes();
        renderizarTarefas();
    });

    window.concluirTarefa = (tarefaId) => {
        const tarefa = tarefas.find(t => t.id == tarefaId);
        tarefa.status = 'concluida';
        salvarDados();
        renderizarTarefas();
        verificarStatusSecao(tarefa.secaoId);
    };

    window.reabrirTarefa = (tarefaId) => {
        const tarefa = tarefas.find(t => t.id == tarefaId);
        tarefa.status = 'pendente';
        salvarDados();
        renderizarTarefas();
        verificarStatusSecao(tarefa.secaoId);
    };

    function verificarStatusSecao(secaoId) {
        const secao = secoes.find(s => s.id == secaoId);
        if (secao) {
            const tarefasSecao = tarefas.filter(t => t.secaoId == secaoId);
            const todasConcluidas = tarefasSecao.every(t => t.status == 'concluida');
            secao.status = todasConcluidas ? 'concluida' : 'pendente';
            salvarDados();
            renderizarSecoes();
        }
    }

    window.excluirTarefa = (tarefaId) => {
        tarefas = tarefas.filter(t => t.id != tarefaId);
        salvarDados();
        renderizarTarefas();
    };

    window.excluirSecao = (secaoId) => {
        secoes = secoes.filter(s => s.id != secaoId);
        tarefas = tarefas.filter(t => t.secaoId != secaoId);
        salvarDados();
        renderizarSecoes();
        renderizarTarefas();
    };

    window.editarSecao = (secaoId) => {
        const secao = secoes.find(s => s.id == secaoId);
        tituloModalSecao.textContent = 'Alterar seção';
        document.getElementById('nomeSecao').value = secao.nome;
        document.getElementById('corSecao').value = secao.cor;
        editandoSecaoId = secaoId;
        abrirModal(modalNovaSecao);
    };

    window.adicionarTarefa = (secaoId) => {
        tituloModalTarefa.textContent = 'Adicionar Tarefa';
        document.getElementById('tituloTarefa').value = '';
        document.getElementById('dataVencimentoTarefa').value = '';
        document.getElementById('prioridadeTarefa').value = 'BAIXA';
        document.getElementById('descricaoTarefa').value = '';
        modalNovaTarefa.dataset.secaoId = secaoId;
        editandoTarefaId = null;
        abrirModal(modalNovaTarefa);
    };

    window.editarTarefa = (tarefaId) => {
        const tarefa = tarefas.find(t => t.id == tarefaId);
        tituloModalTarefa.textContent = 'Alterar Tarefa';
        document.getElementById('tituloTarefa').value = tarefa.titulo;
        document.getElementById('dataVencimentoTarefa').value = tarefa.dataVencimento;
        document.getElementById('prioridadeTarefa').value = tarefa.prioridade;
        document.getElementById('descricaoTarefa').value = tarefa.descricao;
        modalNovaTarefa.dataset.secaoId = tarefa.secaoId;
        editandoTarefaId = tarefaId;
        abrirModal(modalNovaTarefa);
    };

    window.alternarAtividadeSecao = (secaoId) => {
        const secao = secoes.find(s => s.id == secaoId);
        secao.ativa = !secao.ativa;
        salvarDados();
        renderizarTarefas();
    };

    renderizarSecoes();
    renderizarTarefas();

    function abrirModal(modal) {
        modal.style.display = 'block';
    }

    function fecharModal(modal) {
        modal.style.display = 'none';
    }
});