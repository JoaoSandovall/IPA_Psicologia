export type QuizWeight = 1 | 2 | 3 | 4;

export interface QuizOption {
  readonly texto: string;
  readonly peso: QuizWeight;
}

export interface QuizQuestion {
  readonly categoria: string;
  readonly pergunta: string;
  readonly opcoes: readonly QuizOption[];
}

export interface QuizResult {
  readonly min: number;
  readonly max: number;
  readonly stamp: string;
  readonly title: string;
  readonly kicker: string;
  readonly body: string;
}

export const questoes: readonly QuizQuestion[] = [
  {
    categoria: "Descontrole emocional",
    pergunta: "Nos últimos tempos, como você lida com raiva, tristeza ou ansiedade?",
    opcoes: [
      { texto: "Consigo sentir essas emoções e deixá-las passar, sem que tomem conta de mim.", peso: 1 },
      { texto: "Às vezes elas pesam mais do que eu gostaria.", peso: 2 },
      { texto: "Com frequência acabam influenciando minhas decisões e atitudes.", peso: 3 },
      { texto: "Sinto que perco o controle quando essas emoções aparecem.", peso: 4 },
    ]
  },
  {
    categoria: "Desânimo constante",
    pergunta: "Como está seu nível de disposição e ânimo no dia a dia?",
    opcoes: [
      { texto: "Tenho energia e vontade na maior parte do tempo.", peso: 1 },
      { texto: "Tenho dias de cansaço, mas nada muito diferente do normal.", peso: 2 },
      { texto: "Sinto uma apatia ou cansaço emocional que já dura um tempo.", peso: 3 },
      { texto: "Estou estagnado(a), sem vontade, com sono irregular há semanas.", peso: 4 },
    ]
  },
  {
    categoria: "Repetição de padrões",
    pergunta: "Você sente que repete os mesmos ciclos, seja nos relacionamentos ou no trabalho?",
    opcoes: [
      { texto: "Não, sinto que aprendo e sigo em frente.", peso: 1 },
      { texto: "Às vezes reconheço um padrão, mas consigo mudar.", peso: 2 },
      { texto: "Percebo que caio nos mesmos ciclos, mesmo tentando evitar.", peso: 3 },
      { texto: "Sinto que estou preso(a) em padrões que sempre se repetem.", peso: 4 },
    ]
  },
  {
    categoria: "Momentos de transição e conflito",
    pergunta: "Como você está lidando com perdas ou separações recentes na sua vida?",
    opcoes: [
      { texto: "Não tive perdas recentes que ainda pesem.", peso: 1 },
      { texto: "Tive alguma perda, mas sinto que estou processando bem.", peso: 2 },
      { texto: "Ainda sinto dificuldade em elaborar um luto ou uma separação.", peso: 3 },
      { texto: "Sinto que não consegui superar algo doloroso até hoje.", peso: 4 },
    ]
  },
  {
    categoria: "Mudanças drásticas",
    pergunta: "Como anda sua relação com mudanças e incertezas — carreira, relacionamento, rotina?",
    opcoes: [
      { texto: "Lido bem, mesmo quando as coisas mudam rápido.", peso: 1 },
      { texto: "Sinto insegurança às vezes, mas me adapto.", peso: 2 },
      { texto: "Mudanças recentes têm me deixado bastante inseguro(a).", peso: 3 },
      { texto: "Estou em um momento de grande incerteza e não sei como lidar com isso.", peso: 4 },
    ]
  },
  {
    categoria: "Pensamentos limitantes ou intrusivos",
    pergunta: "Com que frequência pensamentos negativos ou de autocrítica aparecem na sua cabeça?",
    opcoes: [
      { texto: "Raramente, e não me incomodam muito.", peso: 1 },
      { texto: "De vez em quando, mas consigo lidar.", peso: 2 },
      { texto: "Com frequência, e às vezes atrapalham meu dia.", peso: 3 },
      { texto: "Quase sempre — é um peso constante.", peso: 4 },
    ]
  },
  {
    categoria: "Autoconhecimento e desenvolvimento pessoal",
    pergunta: "O que mais te motivaria a considerar terapia hoje?",
    opcoes: [
      { texto: "Curiosidade e vontade de me conhecer melhor.", peso: 1 },
      { texto: "Melhorar algo específico na minha vida, mesmo sem urgência.", peso: 2 },
      { texto: "Sinto que algo está travando minha qualidade de vida.", peso: 3 },
      { texto: "Sinto que preciso de ajuda pra lidar com o que estou vivendo.", peso: 4 },
    ]
  },
  {
    categoria: "Percepção de quem está por perto",
    pergunta: "Pessoas próximas já demonstraram preocupação com como você está?",
    opcoes: [
      { texto: "Não, ninguém comentou nada.", peso: 1 },
      { texto: "Uma pessoa ou outra comentou algo, sem muito peso.", peso: 2 },
      { texto: "Mais de uma pessoa já demonstrou preocupação comigo.", peso: 3 },
      { texto: "Sim, e isso tem se repetido nas últimas conversas que tenho tido.", peso: 4 },
    ]
  }
] as const;

export const resultados: readonly QuizResult[] = [
  {
    min: 8, max: 14,
    stamp: "Tudo em\nordem",
    title: "Você parece estar navegando bem",
    kicker: "resultado 1 de 4",
    body: `
      <p>Pelas suas respostas, você parece estar lidando bem com o que a vida tem colocado no seu caminho. Isso é ótimo — mas não significa que terapia não tenha nada a te oferecer.</p>
      <p>Terapia não é só para momentos de crise: também serve pra fortalecer o que já vai bem, entender melhor seus padrões e ter um espaço só seu pra pensar em voz alta. <strong>Estar bem hoje não tira o valor de se conhecer melhor.</strong></p>
    `,
  },
  {
    min: 15, max: 21,
    stamp: "Vale a\nconversa",
    title: "Uma conversa pode fazer diferença",
    kicker: "resultado 2 de 4",
    body: `
      <p>Suas respostas mostram alguns sinais de sobrecarga — nada alarmante, mas presentes o suficiente pra merecerem atenção. É bem comum viver assim sem perceber o quanto isso pesa no dia a dia.</p>
      <p>Conversar com um psicólogo, mesmo sem uma "crise" definida, pode ajudar a organizar o que você está sentindo antes que vire algo maior. <strong>Cuidar da mente antes que doa também é cuidado.</strong></p>
    `,
  },
  {
    min: 22, max: 27,
    stamp: "Preste\natenção",
    title: "A terapia parece ser um recurso e tanto agora",
    kicker: "resultado 3 de 4",
    body: `
      <p>Suas respostas indicam um nível de desgaste que merece cuidado real. Coisas como sono ruim, isolamento e autocrítica constante tendem a se alimentar umas das outras — e raramente melhoram sozinhas com o tempo.</p>
      <p>Buscar apoio profissional agora, e não quando "piorar de vez", costuma tornar esse processo bem mais leve. <strong>Você não precisa dar conta disso sozinho(a).</strong></p>
    `,
  },
  {
    min: 28, max: 32,
    stamp: "Busque\napoio",
    title: "Este pode ser um bom momento para buscar apoio",
    kicker: "resultado 4 de 4",
    body: `
      <p>Suas respostas apontam um nível de sofrimento que já está pesando bastante no seu dia a dia. Isso não é uma sentença nem um rótulo — é só um sinal de que você está carregando mais do que deveria carregar sozinho(a).</p>
      <p>Considere conversar com um psicólogo ou psiquiatra em breve. <strong>Se em algum momento esse peso ficar difícil demais de segurar, o CVV (188) está disponível 24h, gratuito e sigiloso, para conversar com você agora.</strong></p>
    `,
  },
] as const;