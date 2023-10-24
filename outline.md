Story Brainstorm


Crepe
Ur a peasant and u live on the outskirts of the city. Breadmaker or smthn. You get a note saying to come to the castle. You gotta get there, but it’s a full day’s trip. On the way stuff tries to stop you
The condition you arrive in changes what the king says to you? Not sure why they’d be called to the castle though
In the beginning the challenges could be like poisonous berries or a creature, and maybe once they get closer to the castle it’s a rich person being like ew a peasant why are u here
Maybe low health, low gold, and/or smthn else could be the conditions


Ur a rebel traveling to a neighboring city for refuge. You were exiled for being disloyal to the new crown. The nearest city is 3 days away, and you gotta ration food or smthn. Maybe not that since it sounds kinda extra, but battles could be someone that supports the king or smthn. 
Depending on the condition you’re in when you reach the neighboring city, they’ll accept you, deny you, or some third option
Could also be low health, low gold, relations, etc

Jordles
[I love the idea of being a peasant.] You live on the outskirts of a poor village as a farmer growing wheat to sell as a breadmaker. Your business has been doing well, because your crops have been bountiful. Your village however has been struggling economically so times are tough for everyone. Amidst this turmoil, your village is raided by bandits. Your crops/place has been ransacked including a precious family heirloom passed down from generations and your family member(s) are injured. You leave your family, to chase after these bandits and perhaps search for medicine in a neighboring village or city. Going through trials and tribulations, you meet creatures you must fight, bandits you must kill, enemies you must befriend, merchants you must buy/steal from, cities you must visit, and choices that define who your character is! 
Among your travels, you find villages and other cities that have been ransacked/destroyed, befriend allies, ransack other villages for supplies, and end up at the royal city, where you get intel that your heirloom has been sold to a rich merchant. Your heirloom turns out to be enchanted with magic, and has been keeping your family’s land blessed this whole time. Without it, your business is sure to fail and your family will perish in the village’s failing economy. You must hunt down the heirloom within the city. By the end, you find your heirloom and the king offers a compromise for your family to live in the royal city in exchange for the heirloom blessing the city’s agricultural lands. 
BTW I love this choice of font! Really aesthetic to look at! 
	



Mechanics Brainstorm


Refreshing doesn’t restart the game
Copying the general battle system from before
When a user dies they auto restart
Maybe users can input their name at the beginning and it’ll be embedded throughout the game
“Winning” could take anywhere from 5-20 min, so if it takes about 20 seconds to read + choose an action, then that’s 15-60 action screens to create, and 30-120 actions (2-4 options). Not sure how in depth we should go


https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API <canvas> element that lets JS draw stuff we’ll wanna animate
https://firebase.google.com/pricing “spark” plan for free hosting up to 10GB
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API indexedDB for client side storage
http://spritegen.website-performance.org/ CSS sprite generator
https://opengameart.org/ free game assets
https://game-icons.net/ free game ic





Brainstorming


I really love the random mechanics in rpgs. We can even randomize the environments for battles. Maybe utilize javascript objects and have them fit the same certain dimensions of our game (so its like pieces being added on to form a complete image) by randomizing the queryselector to select and use display or visibility properties. 
If we want to keep it short, we can even do “events” where it takes 10 events or so to reach the ending, and each event is either a battle event (majority), scavenging/puzzle event, merchant event, interaction event etc.  Similar to games like oregon trial or even implement a system like the 60 Seconds! game. Each of these events are randomized. We will have certain events that are hardcoded into the story, so that won’t be randomized. 
I want to incorporate a shop system, for merchants and our bread store
If we are diving deep into rpg, I want to have allies we can befriend and battle with.

Idk if you want this to be all pixel art and do enjoy the rpg digital art style? I was planning to use ai to just draw these stuff, to save time. 
Maybe a bit ambitious, but I want to implement a character creation system. I want to showcase some of my art/design skills so I can prob draw these. (if not, not a big deal) I do want to at least choose a character preset. 


Lots of click events for puzzle or scavenging environments. 
To save game state we most likely need to use local storage or cookies if we’re using JavaScript. The one that twine uses is local storage from the browser. 
asdf



Systems + General Programs
Systems
Character creation system
I don't want to impede 
Battle system
Attack, defend, inventory, (not sure about an escape option)
Should be able to know how much damage your attack will do/how much of a buff your defense will do
Ally/party system
Max party members
Party member interaction
Inventory system
Max inventory
Clickable inventory icon, maybe “I” can be inventory button 
Inventory sorting
Weapons
Food
etc
Shop system/economy
Shop inventory
Shop starting balance
Specialized shops
Shop rarity + item rarity
Item pricing for selling and for buying (should cost more to buy than to sell)
Death/reset system 
Checkpoints?
General Programs
DOM manipulation/click events
Essentially everything
Tutorial?
Story progression framework
Flowchart first ofc
Scripts
Storage
indexedDB?
Sprites (could use placeholders)
Reusable background images
Character/ally/enemy sprites
Shops, important buildings

[character creation]
	 CC - [Sex - 4 outfits]  
	Traits - gives beginner weapon (pitchfork/shovel/axe/pickaxe, dagger/bow/arrow, magical item, sword) (not sure if we should apply requirement for weapons to match the traits) 
	Forager(Farmer) : can forage better for resources, hunt better
	Stealth(Thief): increase chance to sneak, steal 	
Charismatic (Merchant): better merchant deals, more persuasive for character interactions 
	Aggressor (Guard/Blacksmith/Soldier): better attacking stats	

Customizer to the right transition > character moves in the same direction
Name to the left transition 

Text animation by letter??

Family medicine, injure severity
Magical medicine

Main character is unaware of the power

Fuck the lore
GO TO THE KINGDOM, 
Pick after the raid

Outfits == occupation
TRAITS =/= OCCUPATION

Story mode + “lite”/events mode

Mana bar? Can only do x spells per battle

Durability ??? (weapons/items/food)

GENERAL PREMISE (ch 1):

The player comes from nobility; and is the firstborn of the soon-to-be lord. As a new king is crowned, it’s tradition for the king, queen, and any children they may have to be granted an amulet. These amulets possess magical powers and will vary in intensity and type. []

Your family is evil, and doesn’t use their magic to help others. They only use it to make themselves more powerful. Your amulet granted you the most powerful magic yet. Knowing what would come of this, you escaped that same night you were granted the amulet. You’ve been living on your own ever since, traveling from town to town for safety.

Fast forward to present day: player is a poor farmer/merchant/butcher/thief living in the outskirts of town. They have a spouse and two kids. Open with going into town for trading purposes, and while they’re there a raid begins.

The raiders torch every house including yours. They are searching for people with magic in order to aid the war effort. They will have their men continue to hunt you down and they aim to forcibly take your amulet.

You have to gather intel without being found by the group, or killed in some other way. You have to gather help from friends (forager), steal (stealth), trick (charismatic/stealth), negotiate (charismatic), or fight (aggressor).

(Later you will find out that they work for Lord Arvell, your father. He has been planning to conduct raids in order to weaken the crown and establish a rebellion. Lord Arvell wants to overthrow the king and become king himself. His plan is finally coming to life, and he needs all of his children’s magical elements working together to solidify his plan. You are the final child he doesn’t have access to.)


SCRIPT (ch 1):

You are [player] Arvell, a successful [trait] living on the outskirts of [town]. Your family has lived here for generations, and for generations your family has been the town’s most prominent supply of [].

Today is Saturday, which means the market is open. You decide to go into town today to trade for tools. As you walk, you begin to think. As you think, you begin to worry. 

You worry about the repercussions of an unsuccessful year. While your crops have always yielded a bountiful harvest, you can’t help but fear the possibility of . . . . . 

You stop yourself–no point in dwelling. Your family needs you. Get back to it!

Thinking about them eases your nerves a bit, and you manage to “get back to it”. You keep walking.

As you enter the busier part of town, you recognize the merchant you most often trade with. He calls you over, and as you get closer he greets you.

[GREET]
[DON'T GREET]
“Good to see you, [player]! Are you here to trade?”
“Uh…okay then. What did you need?”

		             ▼						       ▼
[SELL]
[BUY]
[SELL]
[BUY]
[sell menu] 
[buy menu]
[sell menu] (worse)
[buy menu] (worse)


[After a random amount of items have been sold/bought (<= 3 or so)]:

You hear something . . .

No, you hear multiple things. You hear people shouting, and the repetitive sound of horse hooves hitting the ground. 

Before you have any chance to think, you hear screams that take your body’s full attention. It all transforms within seconds. Every direction you look is the same chaos: roofs burning bright, pillars crumbling, and the continuous shouting from both attackers and civilians. 

[RUN]
[HIDE]
You regain control over your body and start to sprint towards home. You ignore all sounds, sights, and smells as best as you can.

[random chance of being attacked]
In one motion, you leap over the market stall, and crouch below it. You and your merchant friend try your best to keep silent.

[random chance of being seen]

		             ▼						       ▼
[LIVE]
[DIE]
[LIVE]
[DIE]
You managed to defend yourself from the attacker!

You can see your house in the distance, untouched. That feels too good to be true, but you’d have to get closer to find out.
[die]
You managed to survive the raid without being seen!

You and the merchant do something. Heirloom stuff happens


[die]

		             ▼						       ▼
[GO HOME]
[KEEP RUNNING]




Nothing else you can do about it, you have to go in. Once inside, you notice it’s a complete mess. They were definitely here. 

You see your wife and children laid out on the ground, 
You don’t trust that your house could have been unscathed while so many others are burning. You keep running, until all you can see is green.









You leave your home behind. You have to do something.

. . . the merchant offers to come along as well.
[ACCEPT] [DECLINE]

You don’t have much–just what you were able to gather from your home. The merchant’s home was burned down in the raid, but he does have some money with him. Together you might last a few days.



GENERAL PREMISE (ch 2):

Player has now left town to gather information on how they can hopefully ward off their family before it’s too late. You’re on your way to your father’s manor, which is about a week long trip. You will need to stop at cities along the way for supplies and hopefully intel.

The first stop is a city you used to frequent as a kid, only a few months after leaving home. There’s certain people you’re hoping are still there, or you at least hope you can get some sort of lead. The trip will take 2 days (2/4/6 events)

When you get to the city, you see that it’s in disarray. Refugees from all the nearest towns have come with their families in hopes that cities further north haven’t turned to ash too. You stop by the inn you used to hang around, and speak to the lady behind the counter. Depending on your interactions with her, she will give you different information about what’s happening and what you should do next.

If you get the right information, you can talk to your old friend and she’ll tell you where he is. From there, he’ll help you and join your party if you choose to have him.

If you don’t get the information, you can still investigate and talk to citizens to get a better idea of what’s happening.

From here you become set on which type of path you’re taking (aggressor/stealth/etc)


GENERAL PREMISE (ch 3):

You continue on your way to the manor. You make another stop in the next city, after x events. Then after y events you make it to the manor.

At the second city, your face is on wanted posters around the city. Word of the plans have spread at this point, and everyone knows what the raids are about now. You don’t know how they know your face (the merchant friend ratted you out for money/power), but you have to be careful walking around here in the open. You can ask your friend(s) to report back to you, say fuck it and go out anyway (aggressor), conceal your face/go out at night (stealth), or convince people to take your side/not say anything (charisma)

This is not a city you’ve been to before, but you’ve heard stories. It’s very…peculiar based on what you’ve heard. Hopefully that’s just what you’ll need. There are lots of people living here who understand magic, so you hope to find someone that will understand what you’re trying to do.



GENERAL PREMISE (ch 4):

You finally arrive at your father’s manor.

Endings:
You get found out before you finish; death; etc
You get your siblings on board with your side of the plan–without you three, the rebellion wouldn’t be successful at all (charisma)
You kill your father and thereby take his throne as the eldest child (aggressor)
You steal your family members’ amulets and crush them all so that the advantage doesn’t exist anymore (stealth)
You and your party do something (forager)

RANDOM EVENTS
WANDERING MERCHANT(S):
1: weapons & armor
2: food & drink
3: potions & poisons

VICTIM(S) OF RAIDS:
1: family of 4. Can either help them out (-food), or walk past them. They will see you again later, and have one less child if you didn’t help but it won’t affect the main story
2: a lone woman. She’s a baddie, and can join your party if you want (aka say the right things)
3: two brothers. Also baddies, can join your party if you want (aka say the right things)

BATTLE:
Shake them if they are damaged.
Status: Poison/Sick (DOT), Burn, Stun/Root (no spells), Frozen (no action), vulnerable (defense down), 
Health bars above them?
Character face next to health bar

BANDITS:
1: wakes you up at night and attempts to steal your money/potions, invasion/raid adds vulnerable status.
2: finds you in the day as you’re walking and attempts to steal your money/food

HUNTING/FORAGING:
Hunting: hunting minigame ig
Foraging: foraging minigame ig

RARE EVENTS:
1: being recognized as the child of Lord Arvell and having to diffuse/fight/etc

PUZZLE/MINIGAME:
random

FIREPLACE/RESTING:
Fireplace is for cooking food that was hunted/raw
Wooden log (#)
stones(75%), flint (25% chance of getting it; lasts 3 nights) (pickaxe only)
“Do you want to have a fireplace tonight?” 
yes = consume Wooden log (#), stones (2+)

