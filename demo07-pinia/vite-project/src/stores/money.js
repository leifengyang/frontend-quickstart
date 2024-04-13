import {defineStore} from 'pinia'
import {computed, ref} from "vue";

//1、Option 写法：定义一个 money存储单元
// export const useMoneyStore = defineStore('money', {
//     state: () => ({money: 100}),
//     getters: {
//         rmb: (state) => state.money,
//         usd: (state) => state.money * 0.14,
//         eur: (state) => state.money * 0.13,
//     },
//     actions: {
//         win(arg) {
//             this.money+=arg;
//         },
//         pay(arg){
//             this.money -= arg;
//         }
//     },
// });

//2、Setup 写法：
export const useMoneyStore = defineStore('money', ()=>{
    const money = ref(100);
    const rmb = computed(()=> money.value);
    const usd = computed(()=>money.value*0.14);
    const eur = computed(()=>money.value*0.13);

    const win = (arg)=>{
        money.value+=arg;
    }
    const pay = (arg)=>{
        money.value-=arg;
    }


    return {money,rmb,usd,eur,win,pay}
});


