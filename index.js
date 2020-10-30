 
 var buttonColors = ["red", "blue", "green", "yellow"];
 gamePattern = [];
 userClickedPattern = [];
 function nextSequence(){
     //generates random no from 0 to 3
     userClickedPattern = [];
     level = level + 1;
     $("h1").text("Level "+level);
     var x = Math.random()*4;
     var randomNumber = Math.floor(x);
     var randomChosenColour = buttonColors[randomNumber];
     //return randomChosenColour;
     gamePattern.push(randomChosenColour);
     chooseButton(randomChosenColour);
 }
    
    //when user clicks the buttons
    
        
        $(".btn").click(function(){
            var userChosenColour = this.id;
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour+".mp3");
            animatePress(userChosenColour);
            checkAnswer(userClickedPattern.length-1);
        });
        
    
 
    // $(".yellow").click(function(){
    //     $(".yellow").addClass("pressed");
    //     setTimeout(function(){
    //         $(".yellow").removeClass("pressed");
    //     } , 100);
    // });

    //give animations
    function giveEffect(colorOfButton){
        var k = "."+colorOfButton;
        $(k).addClass("pressed");
            setTimeout(function(){
                $(k).removeClass("pressed");
            } , 100);
    }
    function animatePress(currentColor){
        giveEffect(currentColor);
    }
    function chooseButton(randomChosenColour){
        switch(randomChosenColour){
            case "yellow":
                giveEffect("yellow");
                break;
            case "blue":
                giveEffect("blue");
                break;
            case "green":
                giveEffect("green");
                break;
            case "red":
                giveEffect("red");
                break;
            default: console.log(randomChosenColour);
        }
    }
    var level = 0;
    var started = false;
    $("body").keypress(function(event){
        if(!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }  
    });


    function checkAnswer(currentLevel){
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
            console.log("success");
            if(gamePattern.length === userClickedPattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000);
            }
        }
        else{
            console.log("wrong");
            playSound("wrong.mp3");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            } , 200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
    }
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    // userClickedPattern = 
}

function playSound(path){
    var gh = new Audio(path);
    gh.play();
}





//  function chooseButton(randomChosenColour){
//      switch(randomChosenColour){
//          case "yellow":
//              $(".yelllow").animate({opacity:0.5});
//              break;
//         default:console.log(randomChosenColour);
//      }
//  }
// .removeClass("pressed")
