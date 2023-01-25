
  const { createApp } = Vue

  createApp({
    data() {
      return {
        newToDo:"",
        list:[
            "comprare latte",
            "comprare pane",
            "comprare acqua",
            "comprare pasta",
        ]
      }
    },
    methods:{
        removeToDo(item){
            this.list.splice(item,1)
        },
        addToDo(){
            if(this.newToDo != ""){
                this.list.push(this.newToDo);
            this.newToDo ="";
            }
            else{

            }
            
        }
    }
  }).mount('#app')
