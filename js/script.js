let quizHead = document.querySelector('.quiz-question');
let buttons = document.querySelector('.buttons');
let quizPage = document.querySelector('.quiz-page');

class Question{
  constructor(question,answers){
    this.question= question;
    this.answers = answers;
  };
  AnswerValue(i){
    return this.answers[i].value;
  }
};

class Answer{
  constructor(text, value){
    this.text = text;
    this.value = value;
  }
};

class Quiz{
  constructor(question){
    this.question = question;

    this.score = 0;

    this.current = 0;
  };
  Click(i){
    let value = this.question[this.current].AnswerValue(i);
    this.score += value;

    this.Next();
  };
  Next(){
    this.current++;

    if(this.current >= this.question.length)
    {
      this.End();
    }
    
  };
  End(){
    return this.score;
  }
};

//Answers
let question = [
  new Question('2 + 2 = ?',[
    new Answer('0', 0),
    new Answer('1', 0),
    new Answer('4', 1),
    new Answer('5', 0)
  ]),
  new Question('5 + 2 = ?',[
    new Answer('0', 0),
    new Answer('7', 1),
    new Answer('10', 0),
    new Answer('5', 0)
  ]),
  new Question('2 + 0 = ?',[
    new Answer('0', 0),
    new Answer('1', 0),
    new Answer('2', 1),
    new Answer('5', 0)
  ]),
  new Question('2 + 10 = ?',[
    new Answer('12', 1),
    new Answer('1', 0),
    new Answer('14', 0),
    new Answer('5', 0)
  ]),
  new Question('2 + 11 = ?',[
    new Answer('0', 0),
    new Answer('1', 0),
    new Answer('13', 1),
    new Answer('5', 0)
  ]),
  new Question('2 * 3 = ?',[
    new Answer('9', 0),
    new Answer('18', 0),
    new Answer('6', 1),
    new Answer('5', 0)
  ]),
  new Question('2 + 1.1 = ?',[
    new Answer('3.1', 1),
    new Answer('2.1', 0),
    new Answer('2.2', 0),
    new Answer('0', 0)
  ]),
  new Question('2 - 0 = ?',[
    new Answer('0', 0),
    new Answer('1', 0),
    new Answer('2', 1),
    new Answer('5', 0)
  ])
];

let quiz = new Quiz(question);

Update();

function Update(){
  if(quiz.question.length > quiz.current){

    quizHead.innerHTML = quiz.question[quiz.current].question;

    buttons.innerHTML = '';

    for(let i = 0; i < quiz.question[quiz.current].answers.length; i++){
      let btn = document.createElement('button');
      btn.classList.add('quiz-button');
      btn.innerHTML = quiz.question[quiz.current].answers[i].text;
      btn.setAttribute('index', i);

      buttons.appendChild(btn);
    };

    quizPage.innerHTML = (quiz.current + 1) + '/' + quiz.question.length;

    Init();

  }else if(quiz.question.length = quiz.current){
    alert('Your Score ' + quiz.End());
  }
};

function Init(){
  let btns = document.querySelectorAll('.quiz-button');

  for(let i = 0; i < btns.length;i++){
    btns[i].addEventListener('click', function(){
      quiz.Click(btns[i].getAttribute('index'));
      Update();
    })
  }
}