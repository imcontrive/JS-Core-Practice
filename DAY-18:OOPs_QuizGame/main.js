var data = [
  {
    prompt: 'What is not a principle of Object Oriented Programming',
    answers: [
      'Abstraction',
      'Encapsulation',
      'Inheritence',
      'Polymorphism',
      'Impressionism'
    ],
    correctIndex: 4
  },{
    prompt: 'What type of inheritence pattern is utilized in JavaScript?',
    answers: [
      'Prototypal',
      'Classical',
      'Trust'
    ],
    correctIndex: 0
  },{
    prompt: 'Which is better? Functional Programming or Object Oriented Programming?',
    answers: [
      'Object Oriented Programming',
      'Functional Programming',
      'Neither, everything has its uses'
    ],
    correctIndex: 2
  },
  {
  prompt: 'Which of the following retains the information it’s storing when the power to the system is turned off ?',
    answers: [
      'CPU',
      'RAM',
      'ROM',
      'DIMM'
    ],
    correctIndex: 2
  },{
  prompt: 'A network of computers and other devices that is confined to a relatively small space is called?',
    answers: [
      'Wide Area Network',
      'Local Area Network',
      'Global Area Network',
      ' Peer-to-Peer Network'
    ],
    correctIndex: 2
  },{
  prompt: 'Every computer connected to the Internet is identified by a unique four-part string, known as-',
    answers: [
      ' IP address',
      'Host name',
      'DOMain name',
      'NON OF THE ABOVE'
    ],
    correctIndex: 1
  },{
  prompt: 'ENIAC was the first general-purpose electronic computer. ENIAC stands for-',
    answers: [
      ' Electronic Network Interactive Analytic Computer',
      'Electronic Numerical Integrator and Computer',
      'Electronic Numerical Integrator anY Computer',
      'Electronic Numerical Integrator aLL Computer'
    ],
    correctIndex: 2
  },{
  prompt: 'Which of the following statement is correct?',
    answers: [
      '1 KB = 1024 bytes',
      '1 MB = 2048 bytes',
      '1 MB = 1000 kilobytes'
    ],
    correctIndex: 1
  },{
  prompt: 'Which of the following memories must be refreshed many times per second?',
    answers: [
      ' Static RAM',
      ' Dynamic RAM',
      'EPROM',
      'ROM'
    ],
    correctIndex: 2
  },{
  prompt: 'USB is a device used to store data and it stands for-',
    answers: [
      'Universal Serial Bus',
      'Universal Service Bus',
      'Universal Bus  Serial',
      'none of the above'
    ],
    correctIndex: 1
  }
];

// function to display Questions

class Question {
  constructor(data){
    this.propmt = data.prompt ;
    this.answers = data.answers ;
    this.correctIndex = data.correctIndex ;
  }
  checkAnswer(index){
    this.index === this.correctIndex ;
  }
}

