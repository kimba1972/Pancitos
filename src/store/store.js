import Vue from 'vue'
import Vuex from 'vuex';
import artesanal from '../assets/artesanal.jpg'
import baguette from '../assets/baguette.jpg'
import integral from '../assets/integral.jpg'
import molde1 from '../assets/molde1.jpg'
import integral1 from '../assets/integral1.jpg'
import canela from '../assets/canela.jpg'
import irlandes from '../assets/irlandes.jpg'
import axios from 'axios';
import { db } from '../main';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panes: [
      {
        titulo: "Artesanal",
        img: artesanal,
        precio:"$1.000"},
      {
        titulo: "Baguette",
        img:baguette,
        precio:"$800"
      },
      {
        titulo: "Integral",
        img:integral,
        precio:"$2.000"},
      {
        titulo: "Molde1",
        img:molde1,
        precio:"$1.500"
      },
      {
        titulo: "Integral1",
        img:integral1,
        precio:"$500"
      }, 
    ],
      dulces:[
        {
          titulo: "Canela",
          img:canela,
          precio:"$500"
        },
        {
          titulo: "Irlandes",
        img:irlandes,
        precio:"$400"
        },
      ],
    infoApi: [],
  
    uidUser: '',
    pancitos: [],
    idProducto: '',

  }, 
  mutations: {
    datosApi(state){
      axios.get('https://thereportoftheweek-api.herokuapp.com/reports').then(response=>{
        console.log(response.data);
        state.infoApi = response.data;
      }).catch(error=>console.error(error));
    },
    traerdb(state){
      db.collection("productos").onSnapshot(info=>{
          let aux = [];
          info.forEach((element)=>{
             aux.push({
               codigo: element.data().codigo,
               nombre: element.data().nombre,
               stock: element.data().stock,
               precio: element.data().precio,
               idDoc: element.id

             })

          });
          state.pancitos = aux;
      })
    },
    guardandoIdProducto(state,id){
      state.idProducto= id;
    }
  },
  actions: {
    traerInfoApi(context){
      context.commit('datosApi');
    },
    activandoMutacionDB(context){
      context.commit('traerdb');
    },
    pasandoIdproducto(context,id){
      context.commit('guardandoIdProducto',id)
    }
  },
  getters: {
    mostrandoPancitos(state){
      return state.pancitos; 
    },
    enviarpanes(state){
      return state.panes;
    },
    enviardulces(state){
      return state.dulces;
    },
    enviandoInfoApi(state){
      return state.infoApi;
    }
  }
})
