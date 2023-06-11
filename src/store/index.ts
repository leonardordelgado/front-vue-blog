import { InjectionKey } from "vue";
import { createStore, Store ,useStore as useVueStore} from "vuex";

import { OBTEM_POSTS } from "./actions";
import { ARMAZENA_POSTS } from "./mutations";

import IPosts from "@/interface/IPosts";

import https from '@/server';


export interface Estado{
    post : IPosts[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state:{
        post: []
    },
    mutations:{
        [ARMAZENA_POSTS](state,post: IPosts[]){
            state.post = post
        }
    },
    actions:{
      async  [OBTEM_POSTS]({commit}){
      await  https.get('/')
            .then(resposta => commit(ARMAZENA_POSTS, resposta.data))
      }
    }
});
export function useStore(): Store<Estado>{
    return useVueStore(key)
}