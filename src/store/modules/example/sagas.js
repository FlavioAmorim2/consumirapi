import {call, put, all, takeLatest} from 'redux-saga/effects'
import { toast } from 'react-toastify';
import * as actions from './actions'
import * as types from '../types'

const requisicao = () => new Promise((resolve) => {
    setTimeout(()=>{
        resolve();
    },2000);
});

function* exampleRequest(){
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoRequestSuccess());
    } catch {
        toast.error('Erro ao enviar')
        yield put(actions.clicaBotaoRequestFailure());

    }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)])
