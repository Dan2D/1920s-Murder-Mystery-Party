// TODO(FIX PRE WHITESPACE TEXT FOR SECRETS)
const charData = [
    {
      name: "Andrew J. McCutcheon",
      profile: "skull-logo.png",
      age: 45,
      sex: "Male",
      occupation: "Chief Executive of Superior Studios",
      homeTown: "Seattle, WA",
      chars: "Womanizer, Opportunist, Tyrant, Eccentric, Crook",
      status: "Victim"
    },
    {
      name: "Matthew Montgomery",
      profile: "medal.png",
      age: 31,
      sex: "Male",
      occupation: "Actor",
      homeTown: "Hollywood, Ca",
      chars: "Handsome, Sophisticated, Confident, Aloof, Mysterious",
      secret: `You are one of the top action stars of the times.... and you have a blatant speechnimpediment, though this fact is generally unknown.       (This is essential to the plot. It can be a lisp, stutter, squeaky or nasally voice or any kind of voice pattern out of the ordinary)

      Though, fate has been kind to you and handed you a part to play in the age of silent movies. As a result of your attempts to hide your speech impediment oustide the stage, you've become regarded as aloof and mysterious, which has only added to your fame. Starring in silent movies such as Times and Seasons, Destiny takes a Hand, and Flying Aces, Matt Montgomery became synonymous with action and heroism.

      When the Great War came, you were among the recruits who were called upon to fight for this country. Even though your movie career was put on hold, news spread and your fame boomed.

      You were having an affair with up and coming starlet Betty Sue Wilson, until McCutcheon threatened to end her career unless you cut if off. McCutcheon was jealous of your relationship with Betty Sue and intervened, this left you seething mad.`,
      costume: `Somewhat rakish, open-collar, ascot, Douglas Fairbanks-ish 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Thomas DeWit",
      profile: "tie.png",
      age: 46,
      sex: "Male",
      occupation: "Head of Acme Studios",
      homeTown: "Los Angeles, CA",
      chars: "Reserved, Professional, Confident",
      secret: `You grew up in Los Angeles, California and you were no stranger to the hustle lifestyle of the city. At a young age  you started a business selling wooden pallets you found in alleys throughout the city. You even collected groups of homeless men to work for you paying them a wage. You were becoming a upstanding and contributing member of society, but soon your business got busted. No matter, you made a good profit and moved on to the next big thing. 
      
      In your teen years you learned how to ferment fruit and made alcoholic drinks to sell to underaged teens like yourself. One day you met some rather unsavory characters for a big deal. You had done well so far, even using recycled bottles and labels, but these men had  offered you a step into the big ring. You took the deal and made a fortune! However your new friends had lacked somewhat of a moral compass and some would say were a bad influence. They liked to gamble you see, and so, being their new business associate, you did too. And you were pretty good at it too! The rush it gave you was incredible. This gambling habit lead into drinking and eventually drugs. The drugs and alcohol hit you hard and almost cost you all of your savings. But you were still you, you still had your 'Dewits'...(I couldn't resist). 
                  
      In a last ditch attempt to save yourself, you sobered up and made a plan. You arranged a highstakes poker game through your old business associates. There would be one last score and you would be sure to win... You cheated of course, but what you won wasn't what you expected. You became the new head of a movie studio in Hollywood? Acme Studios. This new industry intrigued you. You decided to move to Hollywood and give this new role a go. You loved it, the lights, the sounds, the action! You eventually worked with a Scandinavian Director named Olaf Hendrikssen, who was a bit of a drinker and gambler himself. Unfortunately your old habits came through again. You and Olaf would go on crazy drug and alcohol fueled trips to Vegas. Some were a success, but most were a money pit.
      
    Your studio was doing well and you had just acquired the rights to this new movie called 'The Wizard of Oz'. When you were contacted by a man named McCutcheon. He said he had some information you would find quite... interesting. This bastard was blackmailing you! Somehow he knew about the dirty game of cards you played to win that studio and now he was holding it above your head. He not only stole the rights to your new movie, but he even stole a number of your star actors/actresses and even your good buddy Olaf! He let you keep the studio, but if anyone ever found out, you'd be in hot water. The kind that boils you alive... You needed to get something on the monster or maybe it'd be easier if he just disappeared.`,
      costume: `A lounge Suit Jacket, Neck Tie, Suit Pants 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Kathleen O'Shea",
      profile: "note.png",
      age: 28,
      sex: "Female",
      occupation: "Actress",
      homeTown: "New York City, NY",
      chars: "Prima Donna, Prideful, Strong desire to perform",
      secret: `You are the daughter of Irish Immigrants whose love of entertainment drove her into the starlight.A love of song and dance was instilled in you by your musical Father. At a young age you started out entertaining on the streets, and eventually you saved enough money for acting lessons.Those acting lessons paid off and you landed a gig in New York where you started making films. Eventually you grew too big even for New York and ventured to Hollywood in search of greater fame.
  
      You've got close ties to Matt Montgomery, as you've been paired with him as the leading lady multiple times in the past and have had major success as a result.`,
      costume: `A sensible evening gown 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Betty Sue Wilson",
      profile: "kind.png",
      age: 22,
      sex: "Female",
      occupation: "Actress",
      homeTown: "Sibley, IA",
      chars: "Down to Earth, Loving, Humble, Hardworking",
      secret: `You are a bit of a farm girl and the youngest of 12 children, growing up Betty Sue took part in church theater and participated in public speaking meets through school. She gained a small following through her community and her extra curricular activities. Her parents saw her talent and worked extra hours to pay for singing and dancing lessons.

      Galvanized by the overwhelming support from her large family and loyal group of small town fans, you've worked hard not to dissapoint them. You recenlty caught a break and were asked to play a role in a real Hollywood movie and are quickly moving up the stardom ranks!
  
      There's just one thing... there is no Betty Sue Wilson.
      Your real name is Ramona Simpson(See Below)`,
      costume: `Flapper outfit, headband, A little rough around the edges 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Ramona Simpson",
      profile: "broken-heart.png",
      age: 24,
      sex: "Female",
      occupation: "Actress",
      homeTown: "Seattle, WA",
      chars: "Compulsive Liar, Tenacious, Bold, Vengeful",
      secret: `You are an only child born out of wedlock in a messy affair with Arthur J McCutcheon himself. Though as soon as he learned your mother, Dolores Simpson, was pregnant, he kicked her to the curb and denied any involvement. This made your mother understandably furious and she swore she'd have her revenge on the man she once loved. Your mother cultivated her hatred of McCutcheon in you and you readily took on her cause.
  
      Your whole life has known one purpose, to take revenge upon your father that abandoned you and your family. In order to get close to Arthur you've taken on the persona of Betty Sue Wilson and have been having a somewhat discreet affair with Matthew Montgomery. Your "relationship" with Matt paid off and have recently secured employment at Superior Studios as an up and coming actress, with Matt's help of course... Matt is just tool in your scheme, you don't really care about him or his feelings.`,
      status: "Suspect"
    },
    {
      name: "Olaf Hendrikssen",
      profile: "drink.png",
      age: 41,
      sex: "Male",
      occupation: "Director",
      homeTown: "Copenhagen, Denmark",
      chars:
        "Work is his Passion, Attractive, Artistic, Excessive drinking and gambling habits",
      secret: `You'rve had a love of the theater and movies ever since you can remember. You hold cinema as a higher artform and relish the time you get to spend perfecting your craft. There are two other activities that hold just as much, if not more of your fixation.... drinking and gambling. 
      
      As you can imagine, this has not been good for your career, you've been fired from your last 3 studios as a result of your more dubious habits. However, did pick up one friend along the way who shared your interests. The owner of the previous studio you had worked for before coming to Superior named Thomas Dewit. Some of your fondest alcohol filled memories were shared with Tom. Though your frequent vists to Vegas may have not helped your gambling debts. In fact, as of recently those debts have pushed you to more drastic acts to avoid the loan sharks.
      
      In attempts to pay off your debts you've been involved in an insurance fraud scheme with Clyde Willoughby. Pretending to be drunk and forcing movies to go overbudget allowed you and Clyde to skim money off the top. Although your activities did not go unnoticed. Alice Chatterly found out about your schemes and has been blackmailing you for information in return for her silence. Chatterly putting the press on you has caused unwanted stress which has made you start drinking heavily. Coming into work drunk has become a reality and eventually got you fired from Superior Studios, but you kept coming back. Arthur allowed it, but on the day he was murdered Arthur had fired you again... and this time you suspect he meant it.
  
      Do your best Scandinavian accent!!`,
      costume: `Sweater, riding crop, beret, perhaps a megaphone if you'd like 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Wilbur Andrews",
      profile: "lightbulb.png",
      age: 32,
      sex: "Male",
      occupation: "Inventor",
      homeTown: "Philadelphia, PA",
      chars: "Introverted, Especially shy with women, Thinker",
      secret: `From a young age you found you were more mechanically inclined. Your father owned a machine shop and as a child you and your friends would tinker with random thingamajigs throughout the day. Your father saw you had a gift for the sciences and enrolled you in Philadelphia's highschool for science, from which you graduated with high honors.
      
      You had dreams of joining the Army's Corps of Engineers, but the Army had other plans and assigned you to the infantry. At the battle of Argonne during the great war in 1917 you were injured whilst running with your tail between your legs and were sent home with a medal. Luckily only a few members from your squad actually know how you were discharged, it embarasses you greatly.
  
      After the war, you went into radio and filed a few patents working for a company Videola and made quite a bit of money. After some bad investments you became discouraged, but when you were about to quit your received a telegram for a job opportunity from none other than Arthur J. McCutcheon. Once you started work for McCutcheon you found it was not the great opportunity he made it sound. Any inventions you made were stolen by McCutcheon when he registered patents in his own name! You didn't see a dime of the riches he made off your inventions. And to top it off, when you threatened to quit McCutcheon started blackmailing you! Somehow he found out what really happened at Argonne and was threatening to spread the story unless you kept churning out inventions for him.
  
      If McCutcheon wasn't bad enough already, the one girl you were interested in, Irma Meyers, was romantically involved with the person whose caused all this mess in the first place, Arthur J. McCutcheon.
  
      You're extremely shy around women, socially awkward, and prefer to spend your evenings at home tinkering rather than going out and socializing. Your favorite topic of conversation are your magnificent inventions of course.`,
      costume: `Slicked back hair, White Shirt, Sports Coat, Bow Tie, a Notebook and Slide Rule, Horn-Rimmed Glasses 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Irma Meyers",
      profile: "mirror.png",
      age: 30,
      sex: "Female",
      occupation: "Actress / Hairdresser",
      homeTown: "Phoenix, AZ",
      chars:
        "Conservative, Creative, Driven, Proud, Self-Sufficient, Possesive",
      secret: `Growing up you came from a lowerclass family and at a young age had to learn to take care of yourself. Your parents made their money performing menial tasks for wealthier families, they were essentially servants. This rough life fostered a fire in you and you swore to yourself that you would never make a living doing someone elses chores. Instead you started hairdressing at a local salon and after rising up the ranks you eventually landed at Rudolpho's a famous hair salon in Hollywood that catered to only the biggest and brightest stars. Through Rudolpho's you got your foot into the film industry and started acting. It's there you met McCutcheon and started a rocky love affair. But those rose colored glasses broke soon after you noticed he had wandering eyes for nearly any woman that walked onto his set, especially that Betty Sue Wilson. This, coupled with the feeling that your affair was cooling down and the thought that McCutcheon might break it off soon drove you mad with Hysteria.
  
      The history of your love life is a bit checkered to say the least. Several years ago you found your lover in bed with another woman and in a fit of rage murdered him in cold blood. Luckily, the The studio you were working for at the time covered up the murder for you in an attempt to avoid any bad press.
  
      McCutcheon seemed to take advantage of your relationship and had you fill into his secretary position after the old one quit suddenly. Despite not being paid for the extra work, you agreed to the position, as it seemed a useful post to keep your eye on McCutcheon.`,
      costume: `Evening Gown, perhaps a bit overstated 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Alice Chatterly",
      profile: "newspaper.png",
      age: 31,
      sex: "Female",
      occupation: "Columnist and Self-Titled Reporter",
      homeTown: "Burbank, CA",
      chars:
        "Characteristics: Driven, Doesn’t play by the rules, Loves stories and gossip, Flamboyant",
      secret: `You started out your career as a typist for the Burbank Sun, where you would transcribe stories, but you really wanted to be where the action was. Crime, Murder, juicy Gossip! That's where the real stories were at!
      
      During this time women weren't allowed the position of reporter, so you came up with a plan and started writing stories of your own under the monicher "Al Chapman". You managed to put out stories for 5 months before the city editor got a whiff of what was going on. After you were found out, you were re-assigned to women's society, home, and garden pages. You ran with it and turned the section on its head, writing some very controversial editorials. Perhaps a bit too controversial for the Editor-in-Cheif who let you go after learning of your methods. However he couldn't argue with the rise and subsequent fall in popularity after firing you.
      
      You had an idea for a film focused column and went to the LA Times to talk with the editor about your idea. You were given a 3-month trial to test run your column, by the end of the 3 months you had a 10-year contract with the LA Times, were syndicated in over 52 different news papers and were quickly becoming a well known name in the news industry. You've never married and prefer it that way, your job is your true love.
  
Alice Chatterly is a special guest in this little soirée and have access to more info on the other "guests" than anyone else, probably even the detective... You've been investigating Superior Studios, but have been blocked by Arthur J. McCutcheon after painting a less that flattering image of him and the studio. Although being the reporter that you are, you found a way to trade McCutcheon for the information as long as you kept your mouth shut on some of Superiors little secrets. Recently some new faces have shown up in town and although you don't know much about them. You're going to find out one way or another just who these people are and what they want.

      The Dirt
        -You are aware that Matthew Montgomery has a glaring speech impediment he wishes to keep secret

        -You know of Irma Meyers murderous past, having knifed an ex lover in a fit of jealousy. (However you're keeping this secret in exchange for information on Superior Studios)

        -Unlike McCutcheon, you know Clyde Willoughby and Olaf Hendrikssen are embezzling money from Superior. You're keeping quiet for a peice of the action.

        -You know Giana was involved in the death of a man in Long Island when she was younger.`,
      costume: `Evening Gown, but Stylish and Flamboyant 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Clyde Willoughby",
      profile: "abacus.png",
      age: 38,
      sex: "Male",
      occupation: "Adjuster for National Professional Underwriters",
      homeTown: "New York City, NY",
      chars:
        "Sociable and Gregarious, Extroverted, Numbers Wiz, Careful and Conscientious",
      secret: `You started out in New York where after getting your CPA (Certified Public Accountant) you got a job with Underwriters National Professional which specialized in insuring the rich and famous, as well as some radio stations and theaters.However while you enjoyed working with numbers, they just didn't have the charm people do. After hearing about the roar that movies were causing around the nation, you requested a change to the Los Angeles branch. Now you get to work with numbers and be in close proximity to the stars of Hollywood! In fact you've worked with the stars at Superior Studios so much, you're considered apart of the family... although you're technically not employed by them.
  
      You have checkered past of embezzling money from your employers, being the numbers wiz you were, you thought it'd be a peice of cake... it wasn't. You were sent to jail and did your time. While in prison you had time to reflect, you realized you were to haphazard with your previous scheme, this time it'll be different, this time you won't get caught. After getting out of prison you were even more emoldened to embezzle again. Youve come up with a scheme to steal money from the settlements McCutcheon's been earning through insurance on his over-budget and behind schedule films. Olaf deliberately slows down shoots with his drunken antics and then when the film is behind schedule and the insurance film pays out its settlements to McCutcheon. You and Olaf skim money off the top of the settlements and split it down the middle. Olaf is using the money to pay off his gambling debts.
  
      If the subject of your prison time and embezzlement scheme comes up in conversation, you may lie about it as necessary. Lately you suspect McCutcheon was on to your scheme and to make matters worse Alice Chatterly has somehow found out about it as well. You've been paying her off to keep quiet, but you're not certain that will last.`,
      costume: `Slicked back hair, White Shirt, Sports Coat, Bow Tie 
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    },
    {
      name: "Giana Del Ricci",
      profile: "spirit.png",
      age: 25,
      sex: "Female",
      occupation: "Medium",
      homeTown: "Long Island, NY",
      chars:
        "Expressive, Proud, Looking to Prove Something, Long Island Classy",
      secret: `Born in what is held as the greatest state by those that live there, New York, in a city that is regarded as a spiritual haven, Long Island, you had a pretty normal life growing up. That was until you hit the tender age of 8.
      
      You were walking down the shore when you decided to explore the underside of the docks.You found some pretty shells you were going to make into a necklace, but that was a necklace that would never be worn or even made. You happened upon an old man.He was carving some strange symbols into one of the Long Island poles and speaking unintelligibley when he noticed you. You slowly backed away, frightened of the man's squalid appearance. His eyes went wide at the sight of you and he beckoned you closer. You reluctantly moved closer. He called out your name and you froze. The man said there was something inside you like a glow or spark. He forcibly grabbed you and began muttering strange cryptic Long Island-like sounds and began convulsing violently. Afterwards, the strange man fell to the ground and you ran as fast as you could away from that place.
      
      Ever since that day you began to notice strange things happening to you. Voices coming from nowhere, ethereal images of animals and strangers appearing in flashes, and strange immediate emotions upon entering rooms. You started telling people about your experiences and while you were first brushed off, eventually they began to notice you had the Long Island Light. Becoming somewhat of a local celebrity performing seances and readings to those that would listen.
      
      One day a producer visited your Long Island town and was astonished by your Long Island Light. He offered to connect you with a friend of his and talked of future wealth and fame. This didn't interest you as much as the opportunity to offer your unique services to a wider range of people. You flew to Hollywood and met a man named Andrew J. McCutcheon. At first things were going great. You were offered a spritual medium radio show and the ratings were higher than expected. You also met a nice man by the name of Clyde Willoughby who was responsible for some of the patents by which your radio show existed.
      
      You never experienced anything in your life that brought you more joy than your show. But one day, you said something to McCutcheon that spooked him something fierce. He immediatley pulled your show and threatened to turn you into a laughing stock. The dispicable man was going to fabricate evidence to try and prove to people you were just a fraud. The Long Island Light couldn't be snuffed out so easily. You were going to get your show back no matter what... 
      
      You know one of McCutchoen's dark secrets. He wasn't just some a-hole studio head, he was a murderer. At least that's what your spirits told you while you were in his office one day.`,
      costume: `Gypsy-like gown, a bit flamboyant, jewels and adornments, a gypsy head scarf  
      (These are just guidelines, please interpret the characters as you see fit!)`,
      status: "Suspect"
    }
  ];
  
  export default charData;
  