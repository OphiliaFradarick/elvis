class Game{
    constructor(){

    }

    update(state){
      database.ref('/').update({
        gameState:state
      })
    }

    start(){
      form = new Form();
      player = new Player();
      form.display();
    }

    play(){
      
    }
}