import { createContext } from "react";

const defaultValue = [
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/ppt.jpg",
    name: "Paper Presentation",
    venue: "Alumni Hall",
    link: "mailto:mce.techclub@gmail.com",
    time: "10:30AM",
    date: "04/06",
    description: `
"Ideologists arise, not from the ashes but from opportunities"
Being an excellent platform to showcase the research and
ideas, this event has seen considerable amount of growth
since past years, both in terms of its quality and sublime
contribution towards providing nascent engineers a
platform to showcase and present their interest, depth and
research on a topic of their interest. Hence it has evolved as
a NATIONAL LEVEL event, providing budding engineers
across the country to outsmart the rest by their ideas.
`,
    rules: [
      {
        head: "Rules",
        content: [
          " B.E and M.Tech students with valid college ID card are allowed to present paper.",
          "College ID card is compulsory during the presentation.",
          "A paper may comprise a maximum of 4 authors but only maximum of 4 people and minimum of 2 people are allowed to present the paper.",
          " Participants should carry 3 photocopies of their paper and also soft copy of the paper along with a power point presentation. ",
          "Abstract and paper must be compulsorily in standard IEEE format.",
          "Only one paper can be submitted by a team. Submission of more than one paper can lead to disqualification.",
          `Participants from different institutions can also comprise a
team.`,
        ],
      },
    ],
    type: "national",
    head: "Stuthi B Iyer",
    id: 1,
  },
  {
    image: "https://wallpapercave.com/dwp1x/wp10467049.jpg",
    name: "AeroNautica",
    venue: "Football Ground",
    time: "12:30PM",
    date: "04/06",
    description: `Welcome to the pulsating heart of drone racing, where the fusion of technology and sport gives birth to an electrifying display of aerial mastery. Witness the convergence of man and machine, where passion and skill converge to create a spectacle that pushes the boundaries of possibility.
`,
    link: "https://forms.gle/UBrPpp3zSKLzfXah8",
    rules: [
      {
        head: "General Rules",
        content: [
          "Contestants will have to register their team name and details in the registration desk. If the participants are delayed in registering their teams within the specified time, they will be disqualified with no compromise.",
          "Every member of the participating team must carry valid student ID or CompanyID cards of their college which they will be required to produce at the time of registration.",
          "A team may comprise a maximum of four participants.",
          "A team can comprise of students from different colleges/teams.",
          "A team is NOT permitted to compete with more than one bot.",
          "There are no restrictions on number of teams from a college.",
          "The event organizers reserve the right to stop the match at any point of time if they deem that the match is turning out to be dangerous.",
        ],
      },
      {
        head: "Event Format",
        content: [
          "Round 1: Obstacle course. The points will be initiated from 0. For each successful passing of the obstacles, 5 points will be awarded. If the drone touches the obstacle, 2 points will be deducted.",
          "A Bonus point of 2 points for quickest time and perfect landing.(1 point for quickest timing and 1 point for perfect landing)",
          "Round 2: Obstacle course with more number of obstacles and certain targets with rules same as round 1.",
        ],
      },
      {
        head: "Event Rules",
        content: [
          "A team of maximum 4 members is allowed.",
          "A total of 2 rounds will be held.",
          "It may vary depending on the number of participants.",
          "Also, no participants are allowed inside the arena.",
          "Trail run or practice in the arena is not allowed.",
          "The organizing team holds all the right to change any or all rules, and conditions declared according to anyone from the organizing committee.",
          "If any fraudulent behaviour from any team is noticed in terms of model specifications or wrong information provided by any other the organization holds the power to disqualify or deregister the team without being answerable to anyone. You are advised to keep a pair of charged batteries.",
          "Any change in the problem statement would be notified to the participants. The decision of organizers will be final and binding on all.",
          "The organizers are not responsible for any damage to the drones caused during the race",
        ],
      },
      {
        head: "Arena Specifications",
        content: [
          " The dimension of the arena will not exceed 25x25(in metres).",
          "In this specified dimension, the obstacles will be arranged as per the event organisers.",
          "A white line will be drawn to specify the dimension of the arena and participants will not be allowed to cross this white line border. The participants can make a follow up with the bot only in the outskirts of the white line",
        ],
      },
      {
        head: "Drone Specifications",
        content: [
          " Dimension of the drone should not exceed 30 cm x 30 cm x 15 cm (l x b x h).",
          "Frame size should be between 20 cm to 30 cm",
          "Battery or power supply should not exceed 6S or 24V",
          "Wing type: Only Rotary",
          "Max Take-off weight: 2.5 kg",
          "Minimum endurance: 10 to 15 minutes",
          "Must be operated in Line of sight.",
          "The radio telemetry should be 900MHz to 2.4 GHz.",
          "Markings for the head of the drone must be done by the participant.",
          "Ready-made drones are not allowed.",
        ],
      },
    ],
    type: "design",
    head: "Likhith M",
    id: 2,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/robokombat.png",
    name: "RoboKombat",
    link: "https://forms.gle/w3rS5L1jW5KJSiu89",
    venue: "Auditorium",
    time: "11:00AM",
    date: "04/06",
    description: `The battleground is set to witness the flying blades and alley of destruction.Dust up and awake the ferocious gladiator.
`,
    rules: [
      {
        head: "Rules",
        content: [
          "Contestants will have to register online. On spot registration can also be done.",
          "A team can consist of a maximum of 5 members.",
          "The bot has to be submitted to organizers 90 min before the event.",
          "The machine will be checked for safety during registrations. In case of unsafe bots, the team will be allowed to modify the bot within 90min. If the team fails,it will be disqualified.",
          "Only three persons(team members)are allowed to take part in the competition with in the demarcated area: one will control the bot, another will control weapons and third one will help with the control wires.",
          "The wire coming out of the bot should be contained in a pipe (or other alternatives). Any kind of exposed wiring should be held together by cello tape.",
          "Any kind of damage to the arena will not be entertained, a warning will be given and if the damage is done after the first warning, the robot will be disqualified.",
          "All the required accessories have to be bought by the participants. The robot should not vary for each round.",
          "No technical assistance will be provided by the coordinators during the time of the event.",
          "No practice runs will be provided. Provision must be made by the participants to show internal circuit when demanded by organisers for inspection.",
          "Jumping and hoping is not allowed.",
          "This is an open event.",
          "Only wedge and drum bots are allowed.",
        ],
      },
      {
        head: "Robot Specifications(Wired)",
        content: [
          "The maximum dimensions of the bot should not exceed 600mmX600mmX600mm (+10% tolerance)(excluding remote controls and control wire).",
          "Weight of the robot should not exceed 50kg (+5% tolerance is allowed) (including remote controls and control wire ).",
        ],
      },
      {
        head: "Robot Specifications(Wireless)",
        content: [
          "The maximum dimensions of the bot should not exceed 600mmX600mmX600mm (+5% tolerance) (excluding remote controls and control wire).",
          "Weight of the robot should not exceed 50kg (+5% tolerance is allowed) (including Battery, excluding Remote control and Control wires).",
        ],
      },
      {
        head: "Robot Control Requirements",
        content: [
          `The robot can be wired or wireless. For wired robots,all the controlling wires should be bound into a single strip and properly  nsulated for at least 3cm in length from the robot base. It shouldn't get tangled with the opponent's
wires. For wireless robots, use a four-frequency remote
control circuit or two dual control circuits to avoid the
interface.`,
          `Remote controls that are readily available in the market
may also be used with suitable modifications if needed.`,
          `The teams should pair up the wireless remote with the
machine before putting it into the arena. • In the case of
wired bots, the wire should be at least 10m long and the
wires should remain slack at any instant during the fight.
All the wires coming out of the machine should be
stacked as a single unit.`,
          `The wire coming out of the bot should be contained in a
pipe (or other alternatives). Any kind of exposed wiring
should be held together by cello tape.`,
          `Only three persons (team members) are allowed to take
part in the competition (within the demarcated area) : one
will control the bot; another will control weapons and
third one will help with the control wires.`,
        ],
      },
      {
        head: "Battery And Power",
        content: [
          `The bot should be self-powered with battery not
exceeding 48v. In case higher voltage is being used for
weapons, please get the approval by organizers before
that leads to disqualification.`,
          `Battery should be properly protected from the eternal
damages.`,
          `Immobilized electrolyte types (such as gel cells, lithium,
NiCad or dry cells) are not allowed.`,
          `230-volt AC source will be provided. Teams have to bring
their own battery eliminators.`,
          `Also multiple rounds may be conducted back-to-back so
the batteries are advised to be kept fully charged with
backup batterys.`,
        ],
      },
      {
        head: "Arena Specifications",
        content: [
          `Combat arena specifications: 10x10 ft roughed steel
battle surface, surrounding 8 feet height mesh protection.`,
          `Participants have to get helmets for protection.`,
        ],
      },
      {
        head: "Team Regulations",
        content: [
          `Teams of 2-5 Members.`,
          `Multiple number of teams from same college are allowed`,
          `The participants must carry valid student ID or Company
ID cards of their college/company which they will be
required to produce at the time of registration.`,
          `An individual cannot be a member of more than one team`,
          `A robot cannot be shared by two or more teams`,
          `The robot should follow the specifications provided. Any
deviation from the mentioned specifications will lead to
direct disqualifications`,
          `Both wired and wireless bots are allowed`,
          `Structural Integrity of the bot should be maintained.`,
          `Changes to structure between matches are not allowed.
Bots with wired controls should have a dedicated person to
hold the wires and prevent it from entangling.`,
          `Wireless radio controllers shouldn't interfere with
opponent’s transmitter.`,
          `The decisions made by the Judge panel will be final .`,
        ],
      },
    ],
    type: "design",
    head: "Reon Julius Rodrigues",
    id: 3,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/robosoccer.jpg",
    name: "RoboSoccer",
    venue: "Auditorium",
    time: "02:00PM",
    date: "04/06",
    description: `Recast your fighting bot to play soccer. Clone your Robo and make it conquer Ronaldo.
`,
    link: "https://forms.gle/YLKMzhSjiJYy5brMA",
    rules: [
      {
        head: "GamePlay",
        content: [
          ` This is a 1 on 1 type game.`,
          `Tennis Ball will be used.`,
          `Robots will be placed in different halves of the arena with ball
in centre of the arena.`,
          `Each team will try to score a goal by pushing the ball.`,
          `Team with the greater number of goals wins the match.`,
          `If the ball goes out of the arena, it will be placed in the center
and match will be resumed.`,
          `In case of a tie, a penalty time of 2 more minutes will be given.
If the tie is not yet broken, 3 penalty kicks will be provided.`,
          `The robot has to hits/strike the ball (placed on the penalty line
of the arena) such that the bot should not cross the penalty
line while striking the ball.`,
        ],
      },
      {
        head: "Robot Specifications",
        content: [
          `The following size limitations apply for each robot, including
whatever kick mechanisms the bot have:
Width – 300mm max,
Length – 300mm max,
Height – 300mm max`,
          `An error of (± 5%) is permitted.`,
          `Weight: 5 kg (Tolerance of ±5 %)`,
          `The robot cannot have a potential more than 12V between
any two points.`,
          `The external device, which is used to control the machine, is
not included in the size constraint.`,
          `The machine can be wired/wireless.`,
          `The machine must not be made from Lego parts, or any
ready-made assembly kits, however participants are allowed
to use their own creativity for the kick mechanism.`,
          `The robot can be powered by a source such as a battery fixed
on the robot or by a stationary power source connected to
the robot by a cord.`,
          `Participants should keep spare batteries. If they require any
power supply or batteries, it should be informed 3 days prior
(prior to the date of Enigma). If this is not informed to the
organizers earlier and any new scenes created regarding this
will lead to invitation of penal action as decided by the event
organizers.`,
          `The length of the wire (for wired bots) should be long enough
to cover the whole arena and wire should remain slack during
the complete game.`,
        ],
      },
      {
        head: "Arena Dimensions",
        content: [
          `The arena is made up of plywood of dimensions 8 feet in
length and 6 feet in width.`,
          `The arena has a 40 cm wide goal post on either side.`,
          `The arena is bounded from all sides`,
        ],
      },
      {
        head: "Rules And Regulations",
        content: [
          `A team can have a maximum of 4 members and minimum 2
members.`,
          `Only 2 members of each team may be present at a time in the
arena. All other team members must remain outside the game
zone.`,
          `Once the weight of bot is finalized no modifications in the
weight will be allowed`,
          `Weight of the bot will be checked before the start of each
match.`,
          `Each team will be given a time span of 2 minutes at the
beginning of each half to make any changes or modifications
to the bot (modification in weight is not allowed)`,
          `Every match will consist of 2 rounds of 2 minutes each and
each subsequent round will have a time gap of 1 minute.`,
        ],
      },
      {
        head: "Judging Criteria",
        content: [
          `  For each goal scored by a team, 4 points will be awarded.`,
          `If the bot damages the arena or the opponent's bot (major
damage), 2 points will be deducted.`,
          `A warning will be given for not following the rules after which
2 points will be deducted for every warning
The winner shall be declared on the basis of the points
scored.`,
          `The opponent team must be treated with the sportsman
spirit. Non compilence of this rule shall invite penal action
which is decided by the organizers.`,
          `In case of any argument, any chaos or any confusion in
between the event, the organizers decision will be ultimate
and no further compromise will be held on the topic.`,
        ],
      },
    ],
    type: "design",
    head: "Likhith M",
    id: 4,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/xtreme.png",
    name: "Xtreme Machine",
    venue: "Auditorium",
    time: "9:30AM",
    date: "04/06",
    description: `A robotic contest where remote control bots pick and place things to complete the task.
`,
    link: "https://forms.gle/Un73cG3bwQZEJVdp9",
    rules: [
      {
        head: "Rules",
        content: [
          `The students must carry a valid ID card of their college which they
will be required to produce at the time of registration.`,
          `Both online and offline registrations can also be done.
The robot can be wired or wireless.`,
          `A team may consist of a maximum of FIVE participants.
Only 2 members of a team are allowed to stay around the
arena (for controlling and assisting ).`,
          `All the required accessories have to be brought by the
participants. The robot should not vary for each round.
No technical assistance will be provided by the coordinators
during the time of the event.`,
          `Ready made toolkits are NOT allowed.`,
          `Human interference( e.g. touching the robot ) during the game
is not allowed.`,
          `The team is NOT permitted to compete with more than one
bot.`,
          `Teams will NOT be allowed to modify the bot during their trail.
Judge’s decision will be Final.`,
        ],
      },
      {
        head: "Robot Specifications",
        content: [
          `    The robot should be self-powered with a battery not
exceeding 24V.`,
          `Robot powered by onboard batteries must be sealed and
immobilized with in a thick shell of at least 5mm.`,
          `Single-phase external 230V AC power will be supplied.
Maximum voltage between any two points on the robot must
not exceed 24VDC or 240VAC.`,
          `All efforts must be made to protect battery terminals from a
direct shot and causing battery fire.`,
          `Failure to do so will cause direct disqualification.
The maximum dimensions of the bot should not exceed
30cmX30cmX30cm(+5% tolerance)(excluding remote
controls and control wire).`,
        ],
      },
      {
        head: "Robot Control Requirements",
        content: [
          `In the case of the wired robots, the wires should remain slack
at any instant during the event.`,
          `IN THE CASE OF WIRED BOTS THE WIRE SHOULD BE AT LEAST
5 METERS LONG.`,
          `In the case of a wire less system , it should have a minimum
two/three frequency remote control circuit or two dual
control circuits or a transmitter-receiver paired module so
that the frequency interferences with opponent team can be
avoided.`,
          `The teams should pair up the wireless remote with the
machine before putting it into the arena.`,
          `Remote controls that are readily available in the market may
also be used.`,
        ],
      },
    ],
    type: "design",
    head: "Reon Julius Rodrigues",
    id: 5,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/mystique.jpg",
    name: "Mystique Locomotor",
    link: "https://forms.gle/W1LEp9PHA6RnD3rWA",
    venue: "Auditorium",
    time: "9:30AM",
    date: "04/06",
    description: `'The ultimate ATV challenge '. Participants build an ATV to master the terrain and race the bots against all hurdles while staying balanced.
`,
    rules: [
      {
        head: "Machine Specification",
        content: [
          `Machine should fit in a box of dimensions 300 mm x 300
mmx 300 mm (l*b*h) at any moment. The external device
which is used to control the machine is not included in the
size constraint.`,
          `The machine should be controlled by a wired/wireless
remote-control mechanism throughout the race.`,
          `Weight of the bot should be under 3 kg with +5% tolerance
inc. battery if powered on board.`,
          `The machine must not be made from Lego parts or any ready-
made assembly kits other than the parts mentioned below.`,
          `The machine may consist of: Gears, Differential gear, springs,
shock absorbers, servo motors, batteries, wheels, wheel hub,
Belt drives, Chain drives are allowed.`,
        ],
      },
      {
        head: "Track Specification",
        content: [
          ` The track will be an all-terrain track with sharp turns and
jumps. The machine should be able to cross, bumps, rough
patches on the track.`,
          `Although organizers make efforts to maintain the track's
quality, it is inevitable that the track will undergo wear and
tear from the machines running on it. As a result, the machines
must be able to perform well on the weakened track.`,
          `Track may consist of following obstacles: Any type of rough
terrains like Sand path, Sack Bridge, Slippery surface, Gravel,
Small bumps, Ramps, Hole traps, Bridges, Valleys, etc.`,
          `AC power supply of 240 volts will be provided. The machine
must use only mechanical power generated by DC motors.`,
          `Use of any other sources such as IC Engines, chemicals,
compressed gas, rockets etc. is not allowed.`,
          `The machine will be inspected and if found to be dangerous,
the team will be disqualified. This decision rests solely with
the judges and the organizers.`,
          `Use of pneumatic and hydraulic tools is not allowed.`,
        ],
      },
      {
        head: "Rules",
        content: [
          ` All the team members must be full-time students at an
accredited University/college`,
          `Only students from the same college can form a team`,
          `Individual cannot be a member of more than one team.`,
          `Robots cannot be shared by two or more teams.`,
          `The machines must undergo bot check by the organizers 90
minutes before the event.`,
          `Only one person can control the machine and one person can
stay near the arena for monitoring the machine (Includes
electrical)`,
          `Participants must keep spare batteries. If power supply or
batteries are required pertaining to this, it should be informed
3 days prior to the event. If not informed to the organizers, it
will lead to immediate disqualification.`,
          `The track will have check points at regular intervals. If a bot
tumbles, or halts, or goes off the track at any point, one of the
organizers will reset the bot to the previous checkpoint. The
time shall still be running in the meantime.`,
          `If the bot is unable to pass through any obstacle, the bot will
be permitted to skip the obstacle (with the operator consent)
with a penalty of 90 seconds, to the time taken by the bot to
complete the whole track. The machine is allowed to skip only
one obstacle throughout its course around the track.`,
          `Team members are not permitted to touch their machines
during the race. In case of any minor damage to the bot, the
team members will be permitted to repair their bot.`,
          `If there are any technical issues, a 30-second time frame will
be provided for repairs, and if the repairs exceed the allotted
time, the timer will be resumed.`,
          `The machine which reaches the destination in the least time
will be declared as the winner.`,
        ],
      },
      {
        head: "Score Calculation",
        content: [
          ` It will be as follows`,
          `SCORE = Time taken to reach the finish line + penalty
Organizers will not provide any kind of accessories during or
before the event.`,
          `Only the participants of the team whose match is on are
allowed to stay near the arena during the event and if there
are any clarifications, only the participants are expected to
communicate with the judges/organizers, in case any person
other than participants interferes, the team will be
disqualified at the spot without any further discussions.
The organizers reserve the right to change any or all of the
above rules as they deem fit.`,
          `Violation of any of the above rules will lead to disqualification.
The judges decision shall be final binding on all.`,
        ],
      },
    ],
    type: "design",
    head: "Mohammad Arshil Ali",
    id: 6,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/spud.jpg",
    name: "SpudZooka",
    venue: "Football Ground",
    link: "https://forms.gle/gqUL5c7j37cgNNoJ7",
    time: "10:30AM",
    date: "04/06",
    description: `A gun in the hand is better to get locked. Enrich your skills, unload the passion and shoot at the right path.
`,
    rules: [
      {
        head: "Rules",
        content: [
          `Spudzooka! is a team event. Each team shall have a maximum
of three members.`,
          `Participants from different institutions can also comprise a
team.`,
          `A participant can be a member of only one team.
Participating team must have a brief idea about the design
and working of the model.`,
          `There is NO elimination of teams in transition rounds.
Winning team will be declared on the basis of cumulative
points earned by the team.`,
          `Any modification in the design of spudgun is allowed (Eg:
LASER pointer , Stand etc).`,
          `Failure of any spudgun during the event will be considered as
disqualified.`,
        ],
      },
      {
        head: "Tips And Hints Fuel",
        content: [
          `In case of combustion based spudguns ,Fuels in liquid and
gaseous states are allowed. Solid fuels such as gunpowder or
crackers are not allowed`,
        ],
      },
      {
        head: "Projectile",
        content: [
          `Teams should bring their own projectiles. Please note that the
projectile should not be hard like Golfball. Tennis balls are
allowed. If at all customized projectiles are made
e.g.clay/plaster of Paris, paper balls, wet paper balls etc ball
they must be wrapped in sufficiently thick cloth before firing
as the cloth provides necessary packing inside the barrel.
Make sure you have enough number of projectiles(20-
30no.)if they are destructible`,
        ],
      },
      {
        head: "Sparking",
        content: [
          `Kitchen Gas Lighter ,BBQ lighter, flint wheel lighter used in
cigarettes lighter etc are good sparking agents`,
        ],
      },
    ],
    type: "design",
    head: "Sampathkumara S N",
    id: 7,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/megastruct.jpg",
    name: "Megastructure",
    venue: "SA101",
    time: "1:30PM",
    date: "03/06",
    description: `A rostrum where creativity meets madness, a chance to build your own structure`,
    rules: [
      {
        head: "Rules",
        content: [
          `A Maximum of 3 participants can be in a team.`,
          `Only the materials provided by the organizers should
be used.`,
          `The participants are allowed to use mobile phones
during the event.`,
          `The topic will be provided on the spot.`,
          `The duration of this event is 3 hours.`,
          `The decision of the judges will be final.`,
          `Organizers hold the rights to change the rules at any
point of time during the event and the decision will be
final.`,
        ],
      },
    ],
    type: "design",
    head: "",
    id: 8,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/inquiz.jpg",
    name: "Ingenium",
    venue: "SA101",
    time: "5:30PM",
    date: "01/06",
    description: `Apply the scientific principles by innovative approaches and make the craziest thing ever!
`,
    rules: [
      {
        head: "Rules",
        content: [
          `B.E students with valid ID cards can participate.
Number of participants in each team must be a maximum of 4
or minimum of 2 participants.`,
          `The first round will be a preliminary test which will be based
on basic engineering concepts.`,
          `Shortlisted teams will enter the next round for which details
will be revealed during the event.`,
          `During the second round, all participants in the team must be
present.`,
          `Participants are not allowed to use their mobiles or any other
electronic gadgets during the event.`,
          `Once the team gets registered, replacement of any
participant in the team is not allowed.`,
          `Any evidence of malpractice or violation of the above rules will lead to spot elimination`,
          `Organizing committee has all the rights to do any
modifications.`,
          `The judge’s decision shall be final.`,
        ],
      },
    ],
    type: "paper",
    head: "",
    id: 9,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/ingenium.jpg",
    name: "Inquizitive",
    venue: "SA101",
    time: "6:20PM",
    date: "02/06",
    description: `Ditch all your knowledge and presence of mind to answer the trivia.
`,
    rules: [
      {
        head: "Round 1(General Round):",
        content: [
          `This round consists of 5 questions with 4 options in each
topic. (3 topics)`,
          `Participants should choose one among the 4 options.`,
          `For each correct answer, the team gets +5 points and 0 for
incorrect answers.`,
          `No negative marking and if the first team fails to answer then
the question is passed to the 2nd team and gets +3 points in
case of correct answer.`,
        ],
      },
      {
        head: "Round 2(Rapid Fire Round):",
        content: [
          `Each team will have a duration of 1 minute to answer 5 rapid-
fire questions.`,
          `+5 points for correct answer and 0 for incorrect.`,
        ],
      },
      {
        head: "Round 3(Buzzer Round):",
        content: [
          `Consists of 6 questions.`,
          `Each team is given a buzzer and whoever presses it first will
be given a chance to answer first and gets +5 points in case
of a correct answer`,
          `If the first team fails to answer, then the question is passed to
the 2nd buzzed team which gets +3 points in case of correct
answer`,
        ],
      },
      {
        head: "Round 4(Audio-Visual-Video Round):",
        content: [
          `Each team will receive a prompt that may include multimedia
elements, such as an image, video, or audio file.`,
          `For each correct answer, the team gets +5 points and 0 for
incorrect answers.`,
          `No negative marking and no passing of the question`,
        ],
      },
    ],
    type: "paper",
    head: "",
    id: 10,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/resonance.jpg",
    name: "Resonance",
    venue: "SA201",
    time: "5:30PM",
    date: "02/06",
    description: `It's all about how your friendship is more compatible and deals with the scenario of  incompatibility! `,
    rules: [
      {
        head: "Rules",
        content: [
          `The event is all about calculating the level of
understanding between two friends.`,
          `The event consists of 2 rounds.`,
          `Number of participants in each team must be 2 .`,
          `First round will be a written test where two friends will
be seated in different classrooms and will be asked
the same questions about each other.`,
          `Shortlisted teams with highest scores in the first
round will enter the final round for which details will
be revealed during the event.`,
          `Participants are not allowed to use their mobiles or
any other electronic gadgets during the event.`,
          `Once the team gets registered, replacement of any
participant in the team is not allowed.`,
          `Any evidence of malpractice or violation of above
rules will lead to the spot elimination`,
          `Organizing committee has all the rights to do any
modifications.`,
        ],
      },
    ],
    type: "paper",
    head: "",
    id: 11,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/playbytes.jpg",
    name: "Play Bytes",
    venue: "SA201",
    time: "6:20PM",
    date: "01/06",
    description: `Be pro in the art of programming and forefront the realms of coding.
 `,
    rules: [
      {
        head: "Rules",
        content: [
          `The event is open to students of any branch, with
valid ID cards`,
          `The event consists of 1 round.`,
          `Participants compete individually.`,
          `Participants must adhere to the rules and guidelines
set forth for each specific challenge.`,
          `Participants must register in advance to participate
in the PlayBytes event.`,
          `Registration details, including deadlines and
procedures, will be communicated through official
channels (social media, etc.).`,
          `Any additional registration requirements specific to
certain challenges will be clearly stated.`,
          `Participants must follow the instructions provided
by the event organizers and comply with their
decisions.`,
          `Questions will cover topics related to computer
science and C programming`,
          `Participants will have a total of 60 minutes to
complete the round.`,
          `Mobile phones or any electronic devices are strictly
prohibited during the event.`,
          `Any evidence of malpractice or violation of above
rules will lead to the spot elimination`,
          `Scores will be calculated based on the total
number of correct answers and coding challenge
performance.`,
          `Organizing committee has all the rights to do any
modifications`,
          `The first to complete the contest will be declared
as winner`,
        ],
      },
    ],
    type: "paper",
    head: "",
    id: 12,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/mcedollar.jpg",
    name: "MCE Dollars",
    venue: "",
    time: "9:15AM",
    date: "16/04",
    description: `People hate math but love counting dollars. Get ready to sell your stocks and rank at the highest locus.
`,
    rules: [],
    type: "online",
    head: "",
    id: 13,
  },
  {
    image: "https://arjhl.github.io/Enigma22/Events/images/factual.jpg",
    name: "Factual Reel",
    venue: "",
    time: "",
    link: "mailto:mce.techclub@gmail.com",
    date: "",
    description: `Make reality come alive on the screen. Our contest celebrates the art of factual storytelling, showcasing remarkable stories. Challenge perceptions and ignite curiosity with 'Factual reels'`,
    rules: [
      {
        head: "Rules",
        content: [
          `Submission of your video should be done before 4th
of June 2023.`,
          `Video length should be under 1minutes.`,
          `The video should be done based on the theme
provided.`,
          `Should use your own video footage only.`,
          `Any copied videos if found will get disqualified`,
        ],
      },
    ],
    type: "online",
    head: "",
    id: 14,
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
