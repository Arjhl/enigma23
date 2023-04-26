import { createContext } from "react";

const defaultValue = [
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/ppt.jpg",
    name: "Paper Presentation",
    venue: "",
    time: "",
    date: "",
    description: `"Research is a formalized curiosity. It is poking and prying with a purpose."
This event aims at hunting those hidden researchers by providing them a platform to present their research ideas. This event being a national level event holds a ground for a broader perspective on research and presentation`,
    rules: [
      "B.E and M.Tech students with valid college ID card are allowed to present paper",
      "College ID card is compulsory during the presentation. ",
      ".A paper may comprise a maximum of 4 authors but only a maximum of 2 people are allowed to present the paper. ",
      "Participants should carry 3 photocopies of their paper and also softcopy of the paper along with a power point presentation.",
      "Abstract and paper must be compulsorily in standard IEEE format. ",
      "Only one paper can be submitted by a team. Submission of more than one paper can lead to disqualification. ",
      "Participants from different institutions can also comprise a team.",
    ],
    type: "national",
    head: "",
    id: 1,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/robokombat.png",
    name: "RoboKombat",
    venue: "",
    time: "",
    date: "",
    description: `"War does not determine who is right. Only who is left"
"Steel smashing steel!".The the ultimate battle of two powerful futuristic robots where sparks fly!, metal crunches!, a wheel pops free and ricochets off the arena!. The rumbling engines battle it out to decide who takes the glory.`,
    rules: [
      "Contestants will have to register online. On spot registrations can also be done.",
      "A team can consist of maximum 5 members.",
      "The bot has to be submitted to organizers 90min before the event.",
      "The machine would be checked for safety during registrations. In case of unsafe bots, the team will be allowed to modify the bot within 90min. If team fails it will be disqualified.",
      "Only three persons (team members) are allowed to take part in the competition (within the demarcated area): one will control the bot, another will control weapons and third one will help with the control wires.",
      "The wire coming out of the bot should be contained in a pipe (or other alternatives). Any kind of exposed wiring should be held together by cello tape. ",
      "Any kind of damage to the arena will not be entertained a warning will be given and if done after the first warning, the robot will be disqualified.",
      "All the required accessories have to be bought by the participants. The robot should not vary for each round.",
      "No technical assistance will be provided by the coordinators during the time of the event. ",
      "No practice runs will be provided. ",
      "Provision must be made by the participants to show internal circuit when demanded by organizers for inspection.",
      "Jumping and hoping is not allowed. ",
    ],
    type: "design",
    head: "",
    id: 2,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/robosoccer.jpg",
    name: "RoboSoccer",
    venue: "",
    time: "",
    date: "",
    description: `Soccer with robots!
This event is no different from a regular soccer game: attack, defend, strategise, score more goals than your opponent and take glory back home! A manually controlled robot wired or wireless has to push the ball in the opposite team's goal post and also it has to prevent the opposite team from pushing the ball in their own goal post. Robots can have kicking mechanisms`,
    rules: [],
    type: "design",
    head: "",
    id: 3,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/xtreme.png",
    name: "Xtreme Machine",
    venue: "",
    time: "",
    date: "",
    description: `Magnetized with the world of bots?
The future of the world is in the intelligent robots. This is a robotic contest to prove your mettle in dexterous design of a pick and place robot. Here, the perplexed gushing bots wander around the strategical arena to uphill the given task.`,
    rules: [],
    type: "design",
    head: "",
    id: 4,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/mystique.jpg",
    name: "Mystique Locomotor",
    venue: "",
    time: "",
    date: "",
    description: `"The ultimate ATV challenge".
Don't run away from challenges, run over them.
Participants build an all terrain vehicle to master the terrain and race the bots against all hurdles on a custom designed track while staying balanced.`,
    rules: [],
    type: "design",
    head: "",
    id: 5,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/spud.jpg",
    name: "SpudZooka",
    venue: "",
    time: "",
    date: "",
    description: `"The one behind the gun lives forever".
This event is one of the most intriguing events of Enigma . It deals with the designing of a spud gun from the scratch that fires a projectile using fuel. The chemical explosion of fuel effectuates thrust in the projectile. Participants have to fire the projectile into the bull's eye to grab a prize.`,
    rules: [],
    type: "design",
    head: "",
    id: 6,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/megastruct.jpg",
    name: "Megastructure",
    venue: "",
    time: "",
    date: "",
    description: `"Creativity is the intelligence having fun".
Imagination is more important than knowledge. For knowledge is limited, imagination embraces the entire world, stimulating the progress. Any work will be creative if done by a thinking mind. Megastructure is an event where the participants are given few articles using which a structure has to be constructed.`,
    rules: [],
    type: "design",
    head: "",
    id: 7,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/inquiz.jpg",
    name: "Ingenium",
    venue: "",
    time: "",
    date: "",
    description: `"Thoughts without content are empty, intuitions without concepts are blind."Ingenium emphasis on all the engineering fields and provides a common coliseum for imaginative, inventive and innovative application of scientific dictum to design and develop new structures and ideas`,
    rules: [],
    type: "paper",
    head: "",
    id: 8,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/ingenium.jpg",
    name: "Inquizitive",
    venue: "",
    time: "",
    date: "",
    description: `Experience the blend of core science and technology in the intense world of quizzing. Competitors challenge and make every attempt to win the title of the ultimate vanquisher.`,
    rules: [],
    type: "paper",
    head: "",
    id: 9,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/resonance.jpg",
    name: "Resonance",
    venue: "",
    time: "",
    date: "",
    description: `The most beautiful discovery of all times is 'Friendship'. The greatest quality of a true friendship is to understand and to be understood. They say, if you want to find out who is a true friend, screw up or go through challenging time. Here comes an astounding event to face the challenge and check the 'resonance' between two friends where everyone strives to be called a true friend. `,
    rules: [],
    type: "paper",
    head: "",
    id: 10,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/playbytes.jpg",
    name: "Play Bytes",
    venue: "",
    time: "",
    date: "",
    description: `Put on your geeky hats and set adrift into the world of codes! This is an event specially for the coding trekkies and computer enthusiasts who are ready to challenge the herculean coding ultimatum. `,
    rules: [],
    type: "paper",
    head: "",
    id: 11,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/mcedollar.jpg",
    name: "MCE Dollars",
    venue: "",
    time: "",
    date: "",
    description: `Stay Tuned!`,
    rules: [],
    type: "online",
    head: "",
    id: 12,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/factual.jpg",
    name: "Factual Reel",
    venue: "",
    time: "",
    date: "",
    description: `This is all about the fragments and materials “taken from the raw”, made in a way as “creative treatment of actuality”. We are with one such stand posing the inceptive engineers to exhibit their social concern, by reeling a motion picture of about 2-3 minutes, which are primarily being judged by people around on social networking sites, themselves deciding the better system to adapt to take better account of needs`,
    rules: [],
    type: "online",
    head: "",
    id: 13,
  },
];

export const EventContext = createContext(defaultValue);

const CtxProvider = (props) => {
  return (
    <EventContext.Provider value={defaultValue}>
      {props.children}
    </EventContext.Provider>
  );
};

export default CtxProvider;
