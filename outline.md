RESOURCES


https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API indexedDB for client side storage
http://spritegen.website-performance.org/ CSS sprite generator
https://opengameart.org/ free game assets
https://game-icons.net/ free game icon

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API <canvas> element that lets JS draw stuff we’ll wanna animate
https://firebase.google.com/pricing “spark” plan for free hosting up to 10GB





SYSTEMS
[Needs Expanding]
Inventory system
Max inventory
Clickable inventory icon, maybe “I” can be inventory button
Inventory sorting (weapons, food, etc)
Death/reset system
If player dies, the day resets. Since events are random, the player will lose whatever resources they gathered for that day. 
Storage (indexedDB?)
Spells
Varying amounts based on player type
Shop
Shop inventory
Potions: Poison Cure, Burn Cure, Health, Attack Boost
Medicine: Dressing (heals sickness) 
Weapons: Ring, Sword, Bow & Arrow, Dagger
Shop Categories: Weapons, Consumables, Materials (arent consumable items) 
Specialized shops
Shop rarity + item rarity
Should cost more to buy than to sell
Hunger
After each event, lose 20% of the hunger bar. 2-5 events a day.
Players can access inventory at any time, eating different recipes will increase the percentage by different amounts.
Ingredients can be foraged, except for processed goods which must be bought in the tavern or from a traveling merchant.
Statuses
Poison/Sick (DOT)
Burn (DOT)
Stun/Root (no spells)
Frozen (skip a turn)
Vulnerable (defense down)
Fatigue (Tired (not sleeping)/Hunger (not eating))
Attacks can miss (x%)
Skip a turn in battle (x%)
Gradually more tired — day 1 (+5%), day 2 (+5%), day 3 (pass out; day is lost), day 4 (pass out; day is lost), day 5 death.
If both statuses are triggered, fatigue is x2. 
(General/battle) Sludge Potion: 25% chance to miss attacks
Character Creation
 CC - [Sex - 4 outfits] 


Diplomat (merchant) 
main trait is charisma
weapon = magical item (ring)
better merchant deals
more persuasive in character interactions  
Initiator (butcher) 
main trait is aggression
weapon = sword
better attacking stats

Survivalist (farmer)
main trait is resourcefulness
weapon = bow & arrow
forages better for resources
hunts better

Tactician (thief) 
main trait is stealth
weapon = dagger
increase chance to sneak, steal 


Customizer to the right transition > character moves in the same direction
Name to the left transition
RANDOM EVENTS
BEGINNING OF DAY:
Hunting
arrow keys and spacebar to shoot
animal moving between images
Fishing: ripple is timed, spacebar to pull rod
Foraging
Passively get yeast (10%)
all one scene; randomized loot quantity
bush: click and drag to a bag, hazelnut bush, berries: blackberries, blueberries, and strawberries, 
tree: acorns, chestnuts, almonds, chop for wood (gives wooden logs)(axe required)
mine: stones(75%), flint (25% chance of getting it; lasts 3 nights) (pickaxe required) (maybe hidden idk)
Veggies: flowers, nettles, and sorrel
Mushrooms:click and drag to bag (must cook, or 100% sick status), find yeast

MIDDAY:
Puzzle/Minigame
Vines Event(click to remove vine)
Text appears: “A wall of vines is blocking your path!”
take damage if no weapons, possible to get poison status
might find berries
Trap - timed event
Text appears: “You have found a trap!”
‘ESCAPE’ - You can press space to escape for up to 0.5s. After 0.5s, you incur damage
Mushrooms 
Text appears: “You find a mushroom. Do you wanna eat it?”
Mushrooms will give a random status effect. (90/10 bad/good ratio)
Wandering Merchant(s)
1: weapons & armor
2: food & drink
3: potions & poisons
Dialogue
1: family of 4. Can either help them out (-food), or walk past them. They will see you again later, and have one less child if you didn’t help but it won’t affect the main story
2: a lone woman. She’s a baddie, and can give you something if you want (aka say the right things) or she’ll fight you
3: two brothers. Also baddies, and can give you something or fight you
Battle
Shaking animation for monsters if they are damaged.
Health bars above them?
Character face next to health bar
Can only do x spells per battle
Attack, defend, inventory
Should be able to know how much damage your attack will do/how much of a buff your defense will do
Raids
1: wakes you up at night and attempts to steal your money/potions, invasion/raid adds vulnerable status.
2: finds you in the day as you’re walking and attempts to steal your money/food
FIREPLACE/NIGHTTIME:
Fireplace Creation
Will cost wooden log (#), stones (2+)
Tent
Will cost Animal Hide/Pelts, Wood, Vines(plant fiber)
if no tent, can incur sick status
Traps
Vines, Sticks, Rocks (can repel raiders or wake you up (%))
Can alert you if there are raiders nearby, or help you catch food/animals.
Add bait (amount of food -> increase animal size: s, m, l)) 
Food Recipes



Dressing[medicine] : nettles, sorrel, alcohol
Mead[alcohol]: honey (flower), water
Ale[alcohol] : yeast, water
Grape Wine[alcohol]: grape, water
Potato
Carrot
Apple Walnut Bread - Apple, Walnut, Wheat,
Black Pudding - Blood, Pig Meat, nettles
Roasted Boar - Pig Meat, potatoes, ale,
Honey-Glazed Salad - Honey(flower), (any veggies)
Potato Beef Stew - potato, beef, onion, nettles
Cream and Fruit - Milk, Butter, (any fruit)
Cream Custard - Egg, Milk, Wheat, Nettles, (any nuts) 
Buttermilk - Milk, butter
Wafer -eggs, flour, sugar, ginger, cheese, salt


Crafting
Durability (weapons/items/food)
Craft vs buy
Craft it yourself - It breaks really quickly but it’s free. 
Buy it - Better durability but you gotta pay



STORY GIST
Diplomat (merchant) 
charisma/talk/negotiate
weapon = magical item (ring)
better merchant deals
Persuasion, speaking, negotiation

Initiator (butcher) 
aggression/action/himbo
weapon = sword
better attacking stats
Initiating combat, quick decision making, evasion

Survivalist (farmer) 
resourcefulness/knowledgeable of surroundings
use your surroundings to gain leverage. distraction. traps.
weapon = bow & arrow
forages better for resources
hunts better
Using surroundings

Tactician (thief) 
stealth/steal
weapon = dagger
increase chance to sneak, steal

The player has a lucky amulet. Has been passed down through generations, and has been a family secret. You remember your mother telling you that luck does not mean the same thing to everyone; people change when they think they have power. It’s best not to tell anyone, she’s always said.

Knowing this information, you’ve always been careful regarding your power. You use it to help keep your family and yourself afloat, and not for much else. You haven’t told anyone about this power, worried that it might incite greed and deceit like your mother foretold. 

A raid occurs one day, and despite your best efforts, the Amulet is stolen and your family is injured. You must venture out to several cities, some more dangerous than others, and retrieve your Amulet without being killed. You must also find a potion for your family, and you only have so long. You plan to take a trip to the Royal city, but you’ll have to make several stops along the way considering how far you must travel.

Throughout the journey, you learn more details about the Amulet’s true power. It’s not just for bringing luck—it can bring much more than that. This Amulet has the power to alter the kingdom itself.

City 1: Luck
The player learns that the amulet is more than just “lucky,” it possesses mystical properties that can be used for a wide range of things. There are certain factions that dedicate time searching for these mystical artifacts, each group defining “luck” differently. Some factions search for military advantage, some want economic gain, some want pure power. 

The player decides whether to share the secrets to help others affected by the raids, or to keep the secrets hidden to protect its power.

City 2: Unlocking History
The player meets someone here that invites them to learn about the history of the Amulet, and it’s magic. The player learns that the Amulet is connected to the kingdom’s history, and once belonged to the king of the underground. 

Long ago, the ancient relic was created by a powerful being from the underground. It was a gifted weapon to the king of the underground. Legend says this being was killed in war between the overworld and underworld, and the amulet was taken as part of the spoils. It was then gifted to the Royal family, used as a way to suppress outrest and maintain control.

The amulet did what it was meant to, even in the overworld. It caused chaos and discord throughout the kingdom. The Amulet was thought to have been destroyed after the people of the royal city staged a revolt. Most believe it was destroyed in the revolt, but there are factions and mages with reason to believe it’s out there somewhere.

The player decides whether they start to focus on the Amulet’s greater purpose, or if they stick with their original goals.

City 3: Magedom
This is a city with a higher population of mages. While you are more likely to find the information you need here, you are also more likely to get caught. You have to be careful with what you say and how you say it. 

The player’s choices affect what will happen in the Royal city.

City 4: The Royal City
This is the city where the king lives. This is your final stop.

Good Ending:
The player unlocks the full potential of the Amulet, for the better. Once the player arrives in front of the King, they end up exchanging the amulet for the family’s health potion and for the family to live in the Royal city in safety and prosperity.

Bad Ending:
The player unlocks the full potential of the Amulet, for the worse. The player chooses to use it for personal gain, which attracts the attention of the factions seeking it for similar purposes. At the Royal city, the player must face off the faction leaders to keep the Amulet. Regardless of the group that ends up keeping the Amulet, the fighting doesn’t stop and chaos ensues. 

Neutral Endings:
The player does not unlock the full potential of the Amulet. They receive the potion to heal their family, and return home to resume their previous life.
Chapter 1
The player, a peasant farmer, has the rare Amulet of Fortune in their possession. This is a family heirloom that’s been passed down through generations. 

One day, as the village prepares for market day, the protagonist has to make a choice. Usually you’d leave the Amulet at home in its safe, and only take it out when you need its luck the most. You’re worried that your upcoming harvest won’t cut it and you are worried about your family’s wealth and the idea of it not making it through to the next year. However, there have been talks of raids rampaging across the kingdom. 

“

Point system for the 4 options

You have to decide if you leave the Amulet here, or take it with you to sell for better prices. (safety vs money)
1.1 - leave the amulet - safety
1.2 - take the amulet - money
1.1 Leave The Amulet
You decide to leave the amulet at home. You will be safe during the raid and you avoid a battle. 
You sell some items at the market, and when the raid starts you couldn’t have seen it coming. What do you do?
	1.3 - hide (protect self)
Tactician
	1.4 - ask someone what’s happening
Diplomat
1.5 - search for what’s happening
Survivalist
1.6 - run
Initiator

1.3 Hide
There is a random chance you encounter a raider. There is no battle since you do not have the amulet, but there are threats.
1.4 Ask For Clues
1.5 Search For Clues
1.6 Run
You run home, hoping you’re not too late. There is a random chance you encounter a raider. There is no battle since you don’t have the amulet, but there are threats.

While you’re running you notice another family being robbed and terrorized by the raiders, what do you do?
1.7 - Threaten them (initiator)
1.8 - De-escalate them (diplomat)
1.9 - Keep running. You have to fend for yourself (tactician)
1.10 - You’ll come back for them later. Your family comes first (survivalist)
1.7 Threaten Them
You decide to take matters into your own hands and you threaten the raiders. You say to leave them alone!

They give each other a look, and begin to laugh. They do not feel threatened by your presence, and continue to take from the family. Do you wish to continue?

	1.11 - Yes (initiator locked in)
	No (can no longer become initiator, reroute to main dialogue)
1.11 Yes - initiator locked in
You double down and take things into your own hands. You punch one of the raiders, and tell them to get away. Enter battle. If successful, then the family thanks you for your help and you skip to the end of the scene:

When you make it home, you notice that your house is burning. The raiders destroyed your house and took the amulet. Your family members were at home, and one is injured. They attempted to shield the others from the raiders and took the brunt of the attack.

1.8 De-escalate Them


==================================================================================
1.2 Take The Amulet
You decide to take the amulet with you. Before the raid, you sell one or two items at higher prices than you otherwise would have. It gets taken from you in battle, but you do get better prices for market day before that happens. You attempt to run back to your home and notice your family in disarray. In the chaos of the raid, one of your family members has had their legs smashed by burned down pillars of the home.
Chapter 1
The player, a peasant farmer, has the rare Amulet of Fortune in their possession. This is a family heirloom that’s been passed down through generations. 

One day, as the village prepares for market day, the protagonist has to make a choice. Usually you’d leave the Amulet at home in its safe, and only take it out when you need its luck the most. You’re worried that your upcoming harvest won’t cut it and you are worried about your family’s wealth and the idea of it not making it through to the next year. However, there have been talks of raids rampaging across the kingdom.

You have to decide if you leave the Amulet here, or take it with you to sell/buy for better prices.
1.1 - leave the amulet
1.2 - take the amulet

1.1 Leave The Amulet
You decide to leave the amulet at home. The raiders destroyed your house and took the amulet, but you do avoid taking damage in a battle. Your family members were at home, and one is injured. They attempted to shield the others from the raiders and took the brunt of the attack.
1.2 Take The Amulet
You decide to take the amulet with you. It gets taken from you in battle, but you do get better prices for market day before that happens. You attempt to run back to your home and notice your family in disarray. In the chaos of the raid, one of your family members has had their legs smashed by burned down pillars of the home.
Chapter 2
Player has now left town to hopefully find a lead before it’s too late. You’re on your way to the first city–one that you used to frequent as a kid. You’re familiar with its layout, and there are people you used to know here. Should you be able to find them, they can probably get you some help. The trip will take 2 days/4 events.

When you get to the city, you see that it’s in disarray. You see people that you can only assume are from various nearby towns, looking for medicine or food or shelter.

You stop by a shop you used to hang around, and speak to the lady behind the counter. Depending on your interactions with her, she will give you different information about what’s happening and what you should do next.

If you get the right information, you can talk to your old friend and she’ll tell you where he is. From there, he’ll help you and join your party if you choose to have him.

If you don’t get the information, you can still investigate and talk to citizens to get a better idea of what’s happening.
Chapter 3
You continue onto the next city. It takes 2 days/5 events to make it.

There are lots of people living here who understand magic, so you hope to find someone that will understand what you’re trying to do. This is not a city you’ve been to before, but you’ve heard stories. It’s . . . peculiar, based on what you’ve heard. Hopefully that’s just what you’ll need. 

You will have to be careful who you talk to, and how you talk to them, when you’re here. By now, word has spread that someone in the kingdom holds the Amulet of Prosperity, and there are people out there who would kill for success like that. Raids are still happening at this point, so raiders are never too far away. You can ask your friend(s) to go out and report back to you, decide to go out anyway (aggressor), conceal your face/go out at night (stealth), or convince people to take your side/avoid the topic (charisma)

In this city, you will find out that the potion you need
Chapter 4
After 3 days/6 events you make it to the royal city.

IDEAL ENDING:
The king trades you the amulet, in exchange for the healing potion. You and your family will also be allowed to live in the royal city, safety guaranteed. 

MID ENDINGS:
Kill the raiders ??

BAD ENDING:
Your family member doesn’t make it


SCRIPT
Notes
RAID SHOULD MAKE YOU END WITH A D.I.S.T. TRAIT!
Trait cannot be overwritten
Chapter 1 (old)

You are [player] Arvell, a successful [trait] living on the outskirts of [town]. Your family has lived here for generations, and for generations your family has been the town’s most prominent supply of [].

Today is Saturday, which means the market is open. You decide to go into town to trade for tools. As you walk, you begin to think. As you think, you begin to worry. 

You worry about the repercussions of an unsuccessful year. While your crops have always yielded a bountiful harvest, you can’t help but fear the possibility of . . . . . 

You stop yourself–no point in dwelling. “Worry doesn’t put food on the table,” your spouse would say. Your family needs you. Get back to it!

Thinking about them eases your nerves a bit, and you manage to “get back to it”. You keep walking.

As you enter the busier part of town, a friend recognizes you. He calls you over, and as you get closer he greets you.

You hear something . . . No, you hear multiple things. 

You hear people shouting. You hear horse hooves hitting the ground. It sounds closer with every passing second . . . 

Before you have any chance to think, you hear screams that take your body’s full attention. It all transforms within seconds. Every direction you look is the same chaos: burning, crumbling, and continuous shouting. 

Fight (aggressor), hide (logical thinking, not coward) (stealth),  preparing before running (resourceful), 

[RUN] +1 aggressor
[HIDE] +1 stealth
You regain control over your body and start to sprint towards home. You ignore all sounds, sights, and smells as best as you can.
In one motion, you leap over the market stall, and crouch below it. You and your merchant friend try your best to keep silent.

		             ▼						       ▼

[LIVE]
[DIE]
[LIVE]
[DIE]
You managed to defend yourself from the attacker! Although you feel a bit lighter . . .

You can see your house in the distance, untouched. That feels too good to be true, but you’d have to get closer to find out.
[die]


[die]

		             ▼						       ▼
[GO HOME] 
[KEEP RUNNING] 




Nothing else you can do about it, you have to go in. Once inside, you notice it’s a complete mess. They were definitely here. 

You see your child/spouse laid out on the ground, your spouse holding him.
You don’t trust that your house could have been unscathed. You keep running, until all you can see is green.









You leave your home behind. You have to do something.

[GREET]
[DON'T GREET]
“Good to see you, [player]! How have you been?
“Uh…okay then. What did you need?”


After item has been chosen [item is free]
Chapter 1 (new)
You are a humble farmer living on the outskirts of town. 

Your family has lived here for generations, and for generations your family has been a prominent food supply for the people living here.

Today is Saturday, which means it’s Market Day! You’ve been waiting all week, hoping to sell off your recent harvest. 

As you walk to town, you begin to think. As you think, you begin to worry. 

You worry about your family, and about yourself as well. Money has been sparse, and a lot is riding on this harvest’s trade.

You consider turning back for your lucky amulet, which is usually kept safely at home. It would make today go smoother, but you know it could also cause problems.

The amulet has been with your family for several generations, and for as far back as you can remember it's been something that was kept hidden.

You have only ever seen it worn for emergencies, for fear of inciting greed.

Will you decide to leave the Amulet safely at home? Or will you take it with you to benefit your family?
Leave it.
Take it.
You have chosen to leave the amulet at home. It’s better to be safe than sorry.

You keep on the walk to town, and when you get there you see that Market Day has definitely started.

There are several shop stands set up, each one specializing in something different. It’s a very busy day! There are possibly hundreds of people wandering about, trying to find and make deals.

You walk up to the weapons shop, and begin to trade.



You have chosen to take the amulet with you. It’s better to be safe than sorry.

You turn back home, and open the container you keep from under the bed. 

Quickly, you grab the amulet and place it around your neck. The container gets set back where it was, and you return to your original goal.

You keep on the walk to town, and when you get there you see that Market Day has definitely started.

There are several stands set up, each one specializing in something different. It’s a very busy day! There are possibly hundreds of people wandering about, trying to find and make deals.

You walk up to the weapons shop, and begin to trade.


[sell + purchase 1 item]

Wait. You hear something. 

No, you hear multiple things.

There is shaking and rattling and 
