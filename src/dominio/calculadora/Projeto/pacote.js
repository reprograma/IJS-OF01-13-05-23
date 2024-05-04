const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

function calcularPacote(totalDeHorasPorProjeto) {
    if (totalDeHorasPorProjeto >= 0 && totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_basico) {
        return 'pacote_basico';
    } else if (totalDeHorasPorProjeto > MAX_HORAS_POR_PACOTE.pacote_basico && totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_intermediario) {
        return 'pacote_intermediario';
    } else if (totalDeHorasPorProjeto > MAX_HORAS_POR_PACOTE.pacote_intermediario) {
        return 'pacote_premium';
    }
}

exports.calcularPacote = calcularPacote;
