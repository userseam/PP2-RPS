// create an array and add some questions and answes
// note arrays are zero based. That means array [0] is the first one
$("#false-button").hide();
$("#true-button").hide();
$("#rinextquestion").hide();
$("#rireset").hide();

var score = 0;
var currentquestion = 0;
var questions = [{
  "question": "Sharks are mammals?",
  "response": "they are actually classified as fish.",
  "answer": false
}, {
  "question": "Sea otters have a favorite rock they use to break open food?",
  "response": "they keep these treasures in the loose skin under their arms.",
  "answer": true
}, {
  "question": "The blue whale is the biggest animal to have ever lived",
  "response": "and that includes dinosaurs!",
  "answer": true
    },
    {
  "question": "The hummingbird egg is the world's smallest bird egg.",
  "response": "on the flip side, ostriches lay the largest eggs.",
  "answer": true
    },
    {
  "question": "Pigs roll in the mud because they don’t like being clean.",
  "response": "pigs have few sweat glands and their muddy baths help keep them cool.",
  "answer": false
    },
    {
  "question": "Bats are blind.",
  "response": "bats often find their way using ultrasound but their eyes work, just not particularly well",
  "answer": false
    },
    {
  "question": "A dog sweats by panting its tongue.",
  "response": "canines sweat through glands in their paws.",
  "answer": false
    },
    {
  "question": "It takes a sloth two weeks to digest a meal",
  "response": "that is the slowest digestion time of any mammal!",
  "answer": true
    },
    {
  "question": "An octopus has seven hearts ",
  "response": "it has three hearts and they do a lot of work. One heart circulates blood around the body and the other two pump blood past the gills and pick up oxygen.",
  "answer": false
    },
    {
  "question": "An ant can lift 1,000 times its body weight.",
  "response": "ants can lift 5,000 times their body weight!",
  "answer": false
    },
];

  // your page initialization code here
//   fnReset(); //call reset on document ready
  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnCheck();
  });

  document.getElementById("true-button").addEventListener('click', function(event) {
    fnCheck(true);
  });
  document.getElementById("false-button").addEventListener('click', function(event) {
    fnCheck(false);
  });
  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnNext();
  });
  document.getElementById("rireset").addEventListener('click', function(event) {
    hideButton();
  });
function hideButton() {
    $("#start-button").hide();
    $("#rireset").hide();
    $("#false-button").show();
    $("#true-button").show();
    $('#Question1-text').show();
    fnReset();
    score = 0;
}
function fnReset() {

  document.getElementById('questionresponse').classList.add('rihide');
  document.getElementById('rinextquestion').classList.add('rihide');
  document.getElementById('rireset').classList.add('rihide');
//   document.getElementById('riquestionbox').classList.remove('rihide');
  currentquestion = 0;
  document.getElementById('Question1-text').innerHTML = questions[currentquestion].question;
}

function fnNext() {
    $('#questionresponse').hide();
    $('#rinextquestion').hide();

  if (currentquestion < questions.length - 1) {
      currentquestion = currentquestion + 1;
      $("#false-button").show();
    $("#true-button").show();
    // document.getElementById('rinextquestion').classList.add('rihide');
} else {
      $('#rireset').show();
      $('#Question1-text').hide();

    // document.getElementById('rinextquestion').classList.add('rihide');
    // // document.getElementById('riquestionbox').classList.add('rihide');
    // document.getElementById('rireset').classList.remove('rihide');
  }
  document.getElementById('questionresponse').classList.add('rihide');
  document.getElementById('Question1-text').innerHTML = questions[currentquestion].question;
}


function fnCheck(answer) {
    $("#false-button").hide();
    $("#true-button").hide();
  var questionAnswer = questions[currentquestion].answer;
  if (questionAnswer === answer) {
    // show correct
      score++;
 document.getElementById('questionresponse').innerHTML = "You chose: ''" + answer + "'. The answer is '" + questionAnswer + "'. " + questions[currentquestion].response;
  } else {
    // show incorrect
    document.getElementById('questionresponse').innerHTML = "You chose: ''" + answer + "'. The answer is '" + questionAnswer + "'. " + questions[currentquestion].response;
  }
  $('#questionresponse').show();
    $('#rinextquestion').show();
    console.log(score)
    $('#score').html(score)
}


