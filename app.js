function ready()
{
    var word1="programming";
    var word2="aeroplane";
    var word3="snake";
    var word4="computer"
    var word5="hangman";
    var choosenWord='';
    var win=0;
    var lost=0;
    var temp=[];
    window.addEventListener("keydown",keyPressed);

    chooseWord();

    function chooseWord()
    {
        var num=Math.floor(Math.random()*5);
        console.log(num);
        if(num==0)
        {
            choosenWord=word1;
        }
        else if(num==1)
        {
            choosenWord=word2;
        }
        else if(num==2)
        {
            choosenWord=word3;
        }
        else if(num==3)
        {
            choosenWord=word4;
        }
        else if(num==4)
        {
            choosenWord=word5;
        }

        for(var i=0; i<choosenWord.length; i++)
        {
            createWord(choosenWord[i]);
        }
    }
    function createWord(character)
    {
        //get main container
        var wordContainer=document.querySelector(".words-container");
        //create word div
        var wordDiv=document.createElement('div');
        wordDiv.classList.add("word");
        //create h2
        var hDiv=document.createElement('h2');
        //assign char to h2
        hDiv.innerText=character;
        hDiv.classList.add("alpha");
        //append it to wordDiv
        wordDiv.append(hDiv);
        //finally append to main Div
        wordContainer.append(wordDiv);

        return;
    }
    function keyPressed(event)
    {
        var flag=0;
        var key=event.key;
        var arrayWords=document.querySelectorAll(".alpha");

        for(var k=0; k<temp.length; k++)
        {
            if(key==temp[k])
            {
                alert("Key already pressed");
                return;
            }
        }
        for(var j=0; j<arrayWords.length; j++)
        {
            var ele=arrayWords[j].innerText;

            if(ele==key)
            {
                flag=1;
                arrayWords[j].style.opacity=1;
                win++;
                //temp.push(key);
            }
        }
        if(flag!=1)
        {
            lost++;
            updateWrong(key);
            updateHangman();
            flag=0;
        }
        temp.push(key);
        checkwin();
    }
    function checkwin()
    {
        if(win==choosenWord.length)
        {
            console.log("win");
            alert("You won");
            location.reload();
        }
    }
    function updateWrong(key)
    {
        var wrong=key;
        var wrongWords=document.querySelector(".w-words");
        
        if(wrongWords.innerText.length==0)
        {
            wrongWords.append(wrong);
        }
        else
        {
            wrongWords.append(","+wrong);
        }
       
    }
    function updateHangman()
    {
        var Head=document.querySelector("#head");
        var Stomach=document.querySelector("#stomach");
        var LeftHand=document.querySelector("#left-hand");
        var RightHand=document.querySelector("#right-hand");
        var LeftLeg=document.querySelector("#left-leg");
        var RightLeg=document.querySelector("#right-leg");

        if(lost<=6)
        {
            if(lost==1)
            {
                Head.style.opacity=1;
            }
            else if(lost==2)
            {
                Stomach.style.opacity=1;
            }
            else if(lost==3)
            {
                LeftHand.style.opacity=1;
            }
            else if(lost==4)
            {
                RightHand.style.opacity=1;
            }
            else if(lost==5)
            {
                LeftLeg.style.opacity=1;
            }
            else if(lost==6)
            {
                RightLeg.style.opacity=1;
                alert("You lost");
                location.reload();
            }
        }
       
    }

}
ready();