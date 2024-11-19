import * as types from '../types'
export function clicaBotaoRequest(){
        return {
        type: types.BOTAO_CLICADO_REQUEST,
    };
}
export function clicaBotaoRequestSuccess(){
        return {
        type: types.BOTAO_CLICADO_SUCCESS,
    };
}
export function clicaBotaoRequestFailure(){
        return {
        type: types.BOTAO_CLICADO_FAILURE,
    };
}
