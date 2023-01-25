
  const { createApp } = Vue;
  createApp({
    data() {
      return {

        newElement:"",
        list:[
          {
            text:"comprare latte1",
            done:false
          },  
          {
            text:"comprare latte2",
            done:true
          }, 
          {
            text:"comprare latte3",
            done:false
          }, 
          {
            text:"comprare latte4",
            done:true
          }, 
            
        ]
      }
    },
    methods:{

      addElement(){
        this.list.push({
          text:this.newElement,
          done:false
        });
        this.newElement ="";
      },

        removeElement(i){
          this.list.splice(i,1)
        }
    }
  }).mount('#app')
