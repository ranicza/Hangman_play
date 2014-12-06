var words = [
    ["C", "R", "O", "C", "O", "D", "I", "L", "E"],
    ["J","A","V","A","S","C","R","I","P","T"],
    ["A","N","A","G","R","A","M"],
  ]
var questions = [
    ['The Character of Andrew Chukovsky\'s book'],
    ['This is what are you stadying'],
    [' The result of rearranging the letters of a word' +
    ' to produce a new word, using all the original letters exactly once']
]

var rand = Math.floor((Math.random()*(words.length)));

var choisenWord = words[rand];
var word = new Array(choisenWord.length);
var error = 0;

var ChoisenQuestion = function(){
    switch(choisenWord){
        case words[0]: return questions[0]; break;
        case words[1]: return questions[1]; break;
        case words[2]: return questions[2]; break;
    }
};

var encodedWord = function(){
    for (var i = 0; i < word.length; i++){
        word[i] = "_ ";
    }
};

var checkOutLetter = function(letter){
    return (choisenWord.indexOf(letter) > -1);
};

var allLettersFound = function(){
    var win = true;
    for(var i = 0; i < word.length; i++){
        if(word[i] == "_ ") win = false;
    } if(win){
        alert("YOU WIN!");
    }
};

var showImage = function(){
    switch(error){
        case 0: break;
        case 1: return '<img src="img/1.jpg">'; break;
        case 2: return '<img src="img/2.jpg">'; break;
        case 3: return '<img src="img/3.jpg">'; break;
        case 4: return '<img src="img/4.jpg">'; break;
        case 5: return '<img src="img/5.jpg">'; break;
        case 6: return '<img src="img/6.jpg">'; break;
        case 7: return '<img src="img/end.jpg">' + '</br>'+ '<p>GAME OVER</p>'; break;
    }
};

$(document).ready(function() {
    encodedWord();
    var current_word = word;
    var current_question = ChoisenQuestion();

    $('#wrong-letters').hide();
    $('#word').append(current_word);
    $('#question').append(current_question);

    $('#letter-form').submit(function(event){
        event.preventDefault();

        var checkLetter = $('#letter').val().toUpperCase();
        if(checkLetter.length == 1 && checkLetter.match(/[A-z]/g)){
            if(checkOutLetter(checkLetter)){
                for (var i = 0; i < choisenWord.length; i++){
                    if(choisenWord[i] == checkLetter){
                        word[i] = checkLetter + " ";
                        $('#word').empty().append(current_word);
                    }
                    $('#letter').val('');
                    allLettersFound();
                }
            }else{
                error++;
                $('#wrong-letters').show();
                $('#letter').val('');
                $('#wrong').append(checkLetter + "   ");
                $('#hangman').hide();
                $('#show-image').empty().append(showImage());
                if(error == 7){
                    $('#letter-form').hide();
                    $('#question').hide();
                    $('#word').hide();
                    $('#wrong-letters').hide();
                }
            }
        }else alert("Write a letter correctly!");
        $('#letter').val('');
    });

    $('#restart').click(function(){
        location.reload();
    });
});




//----------------------------------------------------------------------------------------------------------------------
//                                        VERSION 2
//----------------------------------------------------------------------------------------------------------------------



//
//var deadMan = ['/  \\ ', ' /\\  ', "  |  ", "  |  ","-----", "  |  ", "  \\/ ", ' /\\  '];
//function getField(){
//    return field = "    ________________\n"+
//    "  " + deadMan[7] +"            |\n"+
//    " " + deadMan[6] +"             |\n"+
//    " " + deadMan[5]+"             |\n"+
//    " " +deadMan[4] + "             |\n" +
//    " " + deadMan[3] + "             |\n" +
//    " " + deadMan[2] + "             |\n"+
//    "  " + deadMan[1]+ "            |\n"+
//    "  " + deadMan[0]+ "            |\n"+
//    "                  ______|_____\n";
//}
//
//var saveMan = function(element){
//    for (var j =0; j <element - 1; j++){
//        for (var i = 0; i < deadMan.length; i++){
//            deadMan[j] = "     ";
//            $('#show-image').empty().append("<pre>" + getField() + "</pre>");
//         }
//    }
//};
//
//var words = [
//    ["C", "R", "O", "C", "O", "D", "I", "L", "E"],
//    ["J","A","V","A","S","C","R","I","P","T"],
//    ["A","N","A","G","R","A","M"],
//]
//var questions = [
//    ['The Character of Andrew Chukovsky\'s book'],
//    ['This is what are you stadying'],
//    [' The result of rearranging the letters of a word' +
//    ' to produce a new word, using all the original letters exactly once']
//]
//
//var rand = Math.floor((Math.random()*(words.length)));
//
//var choisenWord = words[rand];
//var word = new Array(choisenWord.length);
//var trueLetter = 0;
//
//var ChoisenQuestion = function(){
//    switch(choisenWord){
//        case words[0]: return questions[0]; break;
//        case words[1]: return questions[1]; break;
//        case words[2]: return questions[2]; break;
//    }
//};
//
//var encodedWord = function(){
//    for (var i = 0; i < word.length; i++){
//        word[i] = "_ ";
//    }
//};
//
//var checkOutLetter = function(letter){
//    return (choisenWord.indexOf(letter) > -1);
//};
//
//var allLettersFound = function(){
//    var win = true;
//    for(var i = 0; i < word.length; i++){
//        if(word[i] == "_ ") win = false;
//    } if(win){
//        alert("YOU WIN !");
//    }
//};
//
//$(document).ready(function() {
//
//    encodedWord();
//    var current_word = word;
//    var current_question = ChoisenQuestion();
//
//    $('#wrong-letters').hide();
//    $('#word').append(current_word);
//    $('#question').append(current_question);
//
//    $('#letter-form').submit(function(event){
//        event.preventDefault();
//
//        var checkLetter = $('#letter').val().toUpperCase();
//        if(checkLetter.length == 1 && checkLetter.match(/[A-z]/g)){
//            if(checkOutLetter(checkLetter)){
//                for (var i = 0; i < choisenWord.length; i++){
//                    if(choisenWord[i] == checkLetter){
//                        word[i] = checkLetter + " ";
//                        trueLetter++;
//                        $('#word').empty().append(current_word);
//                        saveMan(trueLetter);
//                    }
//                    $('#letter').val('');
//                    allLettersFound();
//                    //if(allLettersFound() != false){
//                    //    $('#show-image').append('</br'+ '<p> YOU WIN !</p>');
//                    //    $('#letter-form').hide();
//                    //    $('wrong-letters').hide();
//                    //}
//
//
//                }
//            }else{
//                $('#wrong-letters').show();
//                $('#letter').val('');
//                $('#wrong').append(checkLetter + "   ");
//            }
//        }else alert("Write a letter correctly!");
//        $('#letter').val('');
//    });
//
//    $('#restart').click(function(){
//        location.reload();
//    });
//});