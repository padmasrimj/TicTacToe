"use strict";

class Events{
  static eventStart(){
    $(_iboard.boardFrame).on("click","td",(event)=>{
        if(!$(event.target).hasClass(_iboard.class.blocked)){
          $(event.target).addClass(_iboard.class.players[player%2]+" "+_iboard.class.blocked);
          player++;
          if(player>=5){
            let result = Lifecycle.checkGameOver();
            console.log(result);
            if(result){
              console.log($(_iboard.id.stop));
              $(_iboard.id.stop).css("display","block");
              $(_iboard.id.winner).html(result.winner +" won the game");
              $(_iboard.class.controlpanel).animate({ "margin-left": "250px" }, "slow" );
              $(_iboard.class.controlpanel).css("z-index","-1");

            }
          }
        }
    })
  }

  static gameControls(){
    $(_iboard.id.multi).on("click",(event)=>{
        $(_iboard.id.start).slideUp();
        $(_iboard.class.controlpanel).animate({ "margin-left": "315px" }, "slow" );
        $(_iboard.class.controlpanel).animate({ "z-index": "0" }, "fast" );
    });
    $(_iboard.id.new).on("click",(event)=>{
      Lifecycle.newGame();
      $(_iboard.id.stop).slideUp();
      $(_iboard.class.controlpanel).animate({ "margin-left": "315px" }, "slow" );
      $(_iboard.class.controlpanel).animate({ "z-index": "0" }, "fast" );
    })
    $(_iboard.id.pausegame).on("click",(event)=>{
      $(_iboard.id.stop).slideUp();
      $(_iboard.id.paused).css("display","block");
    })
  }

}
Events.eventStart();
Events.gameControls();
