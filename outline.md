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
Storage (indexedDB?)
Shop System
Shop inventory
Potions: Poison Cure, Burn Cure, Health, Attack Boost, 
Medicine: Dressing (heals sickness) 
Weapons: Ring, Sword, Bow & Arrow, Dagger
Specialized shops
Shop rarity + item rarity
Should cost more to buy than to sell
Statuses
Poison/Sick (DOT)
Burn
Stun/Root (no spells)
Frozen (no action)
Vulnerable (defense down)
Fatigue
Attacks can miss (x%)
Skip a turn in battle (x%)
Gradually more tired — day 1 (+5%), day 2 (+5%), day 3 (pass out; day is lost) 
Character Creation
 CC - [Sex - 4 outfits]  
Diplomat (merchant) 
Weapon = magical item (ring)
better merchant deals, more persuasive for character interactions 
Initiator (butcher) 
Weapon = sword
better attacking stats
Survivalist (farmer)
Weapon = bow & arrow
can forage better for resources, hunt better
Tactician (thief) 
Weapon = dagger
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
Crafting
Durability (weapons/items/food)
Craft vs buy
Craft it yourself - It breaks really quickly but it’s free. 
Buy it - Better durability but you gotta pay
STORY
Chapter 1
Player has a family heirloom, the rare Amulet of Prosperity. Without your amulet, you would have much less success in your work, and would not be able to support your family in the coming years. 

Player is a peasant farmer/merchant/butcher/thief living in the outskirts of town. You have a spouse and two kids. Open with going into town for trading purposes, and while you’re there a raid begins.

When the raiders get to your house, your wife and two children are at home. Your son gets badly injured during the raid, and will need a strong potion if he’s going to live through to the next season. You will have to find someone that sells potions with the necessary herbs.

You have to help your son without having your amulet stolen, which will become more difficult in each city, and without being killed in some way.
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
Your son doesn’t make it


SCRIPT
Notes
RAID SHOULD MAKE YOU END WITH A D.I.S.T. TRAIT!
Trait cannot be overwritten
Chapter 1

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

You see your son laid out on the ground, your spouse holding him.
You don’t trust that your house could have been unscathed. You keep running, until all you can see is green.









You leave your home behind. You have to do something.

[GREET]
[DON'T GREET]
“Good to see you, [player]! How have you been?
“Uh…okay then. What did you need?”


After item has been chosen [item is free]
