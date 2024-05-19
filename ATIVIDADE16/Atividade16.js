const cursos = [
    {
        id: "ads",
        name: 'Análise e Desenvolvimento de Sistemas',
        description: 'Curso focado em desenvolvimento de software, análise de sistemas e programação.',
        link: 'https://www.fatecsorocaba.edu.br/curso_ads.asp'
    },
    {
        id: "ea",
        name: 'Eletrônica Automotiva',
        description: 'Curso voltado para a eletrônica aplicada em veículos automotivos, incluindo sistemas eletrônicos embarcados.',
        link:'https://www.fatecsorocaba.edu.br/curso_ea.asp'
    },
    {
        id: "fm",
        name: 'Fabricação Mecânica',
        description: 'Curso que abrange técnicas e processos de fabricação mecânica, incluindo usinagem e controle de qualidade.',
        link:'https://www.fatecsorocaba.edu.br/curso_fm.asp'
    },
    {
        id: "gq",
        name: 'Gestão da Qualidade',
        description: 'Curso que aborda práticas e ferramentas para garantir a qualidade em processos e produtos.',
        link:'https://www.fatecsorocaba.edu.br/curso_gq.asp'
    },
    {
        id: "lg",
        name: 'Logística',
        description: 'Curso focado em gestão de operações logísticas, incluindo transporte, armazenagem e distribuição.',
        link:'https://www.fatecsorocaba.edu.br/curso_log.asp'
    },
    {
        id: "ma",
        name: 'Manufatura Avançada',
        description: 'Curso que explora tecnologias avançadas de manufatura, como automação e fabricação aditiva.',
        link:'https://www.fatecsorocaba.edu.br/curso_ma.asp'
    },
    {
        id: "pol",
        name: 'Polímeros',
        description: 'Curso dedicado ao estudo de materiais poliméricos e suas aplicações industriais.',
        link:'https://www.fatecsorocaba.edu.br/curso_pol.asp'
    },
    {
        id: "pm",
        name: 'Processos Metalúrgicos',
        description: 'Curso que abrange a ciência e engenharia de materiais metálicos, incluindo processos de fundição e soldagem.',
        link:'https://www.fatecsorocaba.edu.br/curso_pm.asp'
    },
    {
        id: "mp",
        name: 'Projetos Mecânicos',
        description: 'Curso que foca no desenvolvimento e design de sistemas e componentes mecânicos.',
        link:'https://www.fatecsorocaba.edu.br/curso_proj.asp'
    },
    {
        id: "sb",
        name: 'Sistemas Biomédicos',
        description: 'Curso que integra engenharia e ciência da saúde, voltado para o desenvolvimento de tecnologias biomédicas.',
        link:'https://www.fatecsorocaba.edu.br/curso_sb.asp'
    }
];

function detalharCurso(cursoId) {
    let opcao = confirm("Deseja abrir o detalhamento do curso?");
    if (opcao) {
        let objCurso = null;
        for (let i = 0; i < cursos.length; i++) {
            if (cursoId === cursos[i].id) {
                objCurso = cursos[i];
                break;
            }
        }

        if (objCurso) {
            let novaJanela = window.open('', '_blank', 'width=600,height=300');
            novaJanela.document.write(`<html><head><title>${objCurso.name}</title></head><body>`);
            novaJanela.document.write(`<h1>${objCurso.name}</h1>`);
            novaJanela.document.write(`<p>${objCurso.description}</p>`);
            novaJanela.document.write(`<a href='${objCurso.link}' style='margin-top: 20px'>LINK DIRETO PARA O CURSO</a>`)
            novaJanela.document.write('</body></html>');
            novaJanela.document.close();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const selectCursos = document.getElementById('cursos');
    selectCursos.addEventListener('change', function() {
        const cursoSelecionado = selectCursos.value;
        if (cursoSelecionado) {
            detalharCurso(cursoSelecionado);
        }
    });
});
