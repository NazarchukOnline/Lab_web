let app  = new Vue({
  el: "#application",
  data: {
      materials: null
  },
  mounted(){
    axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.materials = respose.data)
  } 
});