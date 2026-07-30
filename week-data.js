// Week of 2026-08-03 — WEEK 2 v2, HEB-only. Fresh pull 7/30 under the new rules:
// varied preps for banked protein, staple investments encouraged, kid dislikes don't
// steer the menu. Two free-protein bank nights + two 30%+ ad features.
// Bath relay: chicken Mon 3:30 (150°F) → chops Tue 1:30 (140°F) → carnitas Wed after
// dinner (165°F, ~23 hr) → Thu taco night. Bans continue: no bagged salads, no raw herbs.
const WEEK = {
  id: "2026-08-03",
  label: "Dinners Mon Aug 3 – Thu Aug 6 · HEB Irving only · shop Sun Aug 2",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 7/29–8/4, pulled 7/30. Anchors: HCF chicken breast $1.97/lb (34% off — banked as 3 bags, 3 different preps), BBQ boneless pork loin chops $2.99/lb (33% off), pork butt country-style ribs $2.29/lb (Thursday carnitas), peaches $1.47/lb, tangelos $0.97/lb. Staple investments this week (~$19, amortizes): Kadoya sesame oil, Fiesta cumin, Stubb's, guajillo restock x3. ⚠ Outbreak check 7/30: cyclospora now 9 states / 1,947 cases — bagged-salad AND raw-herb bans CONTINUE (no cilantro garnish on taco night; skip the ad's salad kits). App check before Sunday: the Meal Deal's contents + the skillet→free-cheese Combo Loco.",
  meals: [
    {
      id: "prep",
      title: "Sunday: Shop + 20-Minute Seal Session",
      slot: "Prep · Sun Aug 2",
      time: "~20 min after put-away",
      equipment: ["Chamber sealer"],
      summary:
        "Two seal jobs: bank the chicken deal as three DIFFERENT future dinners (new rule — no more one-rub-fits-all), and stage Thursday's carnitas. Monday's protein is already in the freezer from last week. No bath run tonight.",
      links: [
        { label: "Serious Eats — sous vide chicken breast guide (times & temps)", url: "https://www.seriouseats.com/food-lab-complete-guide-to-sous-vide-chicken-breast", tag: "primary" },
        { label: "r/sousvide — carnitas threads", url: "https://www.reddit.com/r/sousvide/search/?q=carnitas", tag: "reddit" }
      ],
      recipe: {
        activeTime: "~20 min",
        cookTime: "none today — first bath run is Monday 3:30",
        ingredients: [
          "2 packs HCF boneless skinless split chicken breast (~5.6 lb total, $1.97/lb verified — the banking deal)",
          "~3.5 lb pork butt country style ribs ($2.29/lb — Thursday's carnitas)",
          "rubs from the pantry: fajita seasoning, Kinder's Cowboy Butter, NEW Fiesta cumin, oregano, kosher salt + pepper",
          "2 garlic cloves (banked heads) + 1 tangelo"
        ],
        steps: [
          "PUT-AWAY, the ones that matter: peaches → COUNTER until ripe (Tuesday's). Roma tomatoes → COUNTER, never the fridge. Corn → fridge in husks. Flour tortillas → counter sealed (Monday); corn tortillas → pantry (Thursday, shelf-stable). Tangelos → counter bowl. Everything else is normal.",
          "SEAL SESSION 1 — Chicken bank, 4 bags with 4 DIFFERENT jobs (2 packs = ~5.6 lb, ~1.4 lb per bag): bag 1 = fajita rub (proven), bag 2 = Kinder's Cowboy Butter (proven on the chops), bag 3 = plain salt + pepper (the wild card — Stubb's glaze, lemon butter, parm crust at cook time), bag 4 = soy-ginger (2 tbsp soy + 1 tbsp brown sugar + grated ginger — all owned). Seal, label each with its rub, FREEZE. Four future dinners at ~$2.75 each, no two alike.",
          "SEAL SESSION 2 — Thursday's carnitas: rub the rib strips all over with 1 tbsp cumin + 1 tsp oregano (crushed) + 1.5 tsp kosher salt + black pepper, drop in 2 sliced garlic cloves, squeeze in the juice of 1 tangelo (peel strips in too). Seal flat, label, FREEZE — they're cooked day 4, so the shelf-life rule says freeze; the bag drops frozen into Wednesday night's bath.",
          "Cleanup: sealer wipe. Done."
        ]
      }
    },
    {
      id: "fajitas",
      cost: { est: 10.0, servings: 4, note: "protein is FREE — last week's fajita-rubbed chicken bags ($7.50 already spent); new money is tortillas, peppers, cheese block, sour cream. Banked onion + limes close it out" },
      nutrition: { serving: "3 fajitas (chicken, peppers, cheese, sour cream)", calories: 720, protein: 48, carbs: 62, fat: 30 },
      daytime: ["MON ~3:30 PM (1 min): bath to 150°F, both frozen chicken bags in — they ride ~2.5 hr and hold happily past that"],
      title: "Blackstone Chicken Fajitas with Charred Peppers & Onions",
      slot: "Dinner 1 · Mon Aug 3",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "The freezer bank's first payout: fajita-rubbed breasts sealed 7/26 go from frozen to perfectly cooked with one bag drop, then hit the Blackstone hard for color alongside charred peppers and the banked onion. Warm tortillas, hand-grated cheese, sour cream, lime. Kids: same components, their way — quesadillas or plain chicken tacos, zero extra cooking.",
      links: [
        { label: "Serious Eats — sous vide chicken breast guide", url: "https://www.seriouseats.com/food-lab-complete-guide-to-sous-vide-chicken-breast", tag: "primary" },
        { label: "r/blackstonegriddle — fajita threads", url: "https://www.reddit.com/r/blackstonegriddle/search/?q=fajitas", tag: "reddit" }
      ],
      swapNote: "Bags were sealed raw with the rub on 7/26 — frozen straight into the bath is the designed move (150°F, add ~1 hr vs thawed).",
      recipe: {
        activeTime: "~25 min at dinner",
        cookTime: "chicken ~2.5 hr at 150°F from frozen (unattended)",
        ingredients: [
          "both fajita-rubbed chicken bags from the freezer (2.15 lb total, sealed 7/26)",
          "3 bell peppers (mixed colors), sliced into strips",
          "the banked jumbo yellow onion, sliced into strips",
          "10-12 flour tortillas",
          "8 oz block colby jack, grated (hand grater — small batch, skip the processor)",
          "sour cream, banked limes in wedges",
          "1 tbsp canola oil, kosher salt"
        ],
        steps: [
          "~3:30 PM: bath to 150°F, both frozen bags in. Nothing else until dinner.",
          "Dinner: grate the cheese, wedge 2 limes, set out sour cream — the toppings bar is done.",
          "Blackstone on high, oil: peppers + onion down first with a pinch of salt — char 6-8 min, pushing them around. Shove to the cool side.",
          "Pull the chicken, pat dry (keep the bag juices). Slice into strips — it's fully cooked; you're only building color.",
          "Strips onto the hot side ~2 min, hard sear, then toss with the vegetables and a splash of the bag juices.",
          "Tortillas: 20 seconds per side on the griddle edge, stack in a towel.",
          "KID CHECKPOINT: plain chicken + cheese + tortillas out before anything gets mixed — quesadillas on the cool corner if they want them melted. No second dish.",
          "Platter the rest. Build at the table. Cleanup: griddle scrape, one platter, trash the bags."
        ]
      }
    },
    {
      id: "bbqchops",
      cost: { est: 13.5, servings: 4, note: "~2.5 lb pre-seasoned BBQ chops @ $2.99/lb (33% off) + 5 ears corn + ~2 lb peaches ($1.47 feature)" },
      nutrition: { serving: "1 large chop + 1 ear buttered corn + sliced peaches", calories: 640, protein: 44, carbs: 48, fat: 28 },
      daytime: [
        "TUE ~1:30 PM (1 min): bath to 140°F, chops in (they hold until dinner, no rush)",
        "TUE after dinner (5 min): rice cooker — 2 cups jasmine for tomorrow's fried rice → spread on a plate, fridge uncovered once cool. Fried rice NEEDS day-old rice"
      ],
      title: "Texas BBQ Pork Chops with Griddled Corn & Fresh Peaches",
      slot: "Dinner 2 · Tue Aug 4",
      time: "~20 min at dinner",
      equipment: ["Sous vide", "Blackstone", "Rice cooker (evening, for Wed)"],
      summary:
        "The ad does the seasoning work: Simply Seasoned BBQ chops at 33% off go bag-to-bath at 1:30, then take a hard sear next to corn rolling in Kerrygold on the flat top. Peaches at $1.47/lb are dessert masquerading as a side. The quiet job tonight: an evening rice batch that makes tomorrow's fried rice possible.",
      links: [
        { label: "Serious Eats — sous vide pork chops guide", url: "https://www.seriouseats.com/sous-vide-pork-chops-recipe", tag: "primary" },
        { label: "r/sousvide — pork chop time/temp threads", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20chops", tag: "reddit" }
      ],
      swapNote: "140°F = juicy with a touch of blush, safe and ideal for lean loin chops. Corn griddles husk-off: butter, salt, rolling sear.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "chops 2-4 hr at 140°F (in since 1:30, unattended)",
        ingredients: [
          "~2.5 lb H-E-B Simply Seasoned BBQ boneless pork loin chops (bag as-bought, 1 layer)",
          "5 ears corn, shucked",
          "2 tbsp Kerrygold butter + kosher salt",
          "~2 lb yellow peaches, sliced at dinner",
          "1 tbsp canola oil"
        ],
        steps: [
          "~1:30 PM: seal the chops flat (pre-seasoned — nothing added), bath to 140°F, in they go.",
          "Dinner: Blackstone on high. Corn first: film of oil, roll the ears 8-10 min until charred in spots; finish with butter + salt.",
          "Pull the chops, pat VERY dry.",
          "Sear 60-90 seconds per side — crust only, they're already perfectly cooked.",
          "Rest 3 min while you slice the peaches.",
          "Plate: chop, ear of corn, pile of peaches. Kids: everything here is already kid-food.",
          "AFTER DINNER (5 min): rice cooker on — 2 cups jasmine, rinsed, 2.25 cups water. When it flips to warm, spread the rice on a plate to cool, then fridge UNCOVERED. Dry, cold rice is tomorrow's whole game.",
          "Cleanup: griddle scrape, tongs, trash the bag."
        ]
      }
    },
    {
      id: "friedrice",
      cost: { est: 3.9, servings: 4, note: "the bank eats: shrimp ($0), broccoli ($0), day-old rice, banked garlic + ginger + soy. New money is 4 eggs, green onions, and a thread of the NEW Kadoya sesame oil (staple investment — pennies per use from here on)" },
      nutrition: { serving: "~2 cups shrimp fried rice", calories: 560, protein: 26, carbs: 66, fat: 20 },
      daytime: [
        "WED morning (10 sec): shrimp bag freezer → fridge bowl",
        "WED after dinner (1 min): bath to 165°F, FROZEN carnitas bag in — ~23 hr to Thursday dinner"
      ],
      title: "Blackstone Shrimp Fried Rice",
      slot: "Dinner 3 · Wed Aug 5",
      time: "~20 min at dinner",
      equipment: ["Blackstone"],
      summary:
        "Clean-out-the-bank night that eats like a hibachi order: yesterday's chilled rice crisped on the flat top with eggs, the banked Gulf shrimp, broccoli, and a soy-garlic-ginger finish — plus the week's best staple investment, a thread of Kadoya toasted sesame oil off the heat. Kids plate before the finishers get loud. After dinner, one bag drop starts Thursday's carnitas.",
      links: [
        { label: "The Woks of Life — Shrimp Fried Rice (the reference)", url: "https://thewoksoflife.com/shrimp-fried-rice/", tag: "primary" },
        { label: "r/blackstonegriddle — fried rice threads", url: "https://www.reddit.com/r/blackstonegriddle/search/?q=fried%20rice", tag: "reddit" }
      ],
      swapNote: "Day-old fridge rice only — fresh rice steams and clumps. Sesame oil is a FINISHER, never a cooking oil — it burns. The 50/70 shrimp are small: 60-90 seconds, done.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "all griddle, no bath tonight (the bath's job starts AFTER dinner: carnitas in at 165°F)",
        ingredients: [
          "banked Gulf 50/70 shrimp, ~0.5 lb (thawed in the fridge since morning), patted dry",
          "yesterday's rice, cold from the fridge (~6 cups), clumps broken up",
          "banked steamable broccoli bag — microwave 3 min, drain HARD",
          "4 eggs, beaten",
          "1 bunch green onions, sliced (whites and greens separate)",
          "3 garlic cloves minced + 1 tbsp grated ginger (the banked knob)",
          "3 tbsp soy sauce + 1 tbsp butter + 1 tsp Kadoya toasted sesame oil (off heat, at the end)",
          "2 tbsp canola oil · adults: crushed red pepper or 1-2 snipped arbol chiles"
        ],
        steps: [
          "MORNING: shrimp bag into a fridge bowl. (Forgot? 10 min in cold water at 5:30 — they're small.)",
          "Microwave the broccoli bag 3 min, drain HARD, rough-chop the big florets.",
          "Blackstone on high, half the canola: shrimp 60-90 seconds until just pink, push to the cool side.",
          "Rest of the canola: garlic, ginger, green onion whites — 30 seconds until loud and fragrant.",
          "Rice on, spread thin. Let it SIT 60 seconds untouched to crisp, then flip-and-spread. Repeat twice — 4-5 min total.",
          "Clear a spot, pour the eggs, scramble ragged, then chop everything together.",
          "Broccoli + shrimp back in, soy around the edges (it should hiss), butter, toss.",
          "OFF the heat: 1 tsp sesame oil over everything, toss once. That thread is the whole hibachi smell.",
          "KID CHECKPOINT: their plates now — mild, everything in it already approved. Then green onion tops + heat (crushed red pepper or snipped arbol) for the adults.",
          "AFTER DINNER (1 min): bath to 165°F, frozen carnitas bag in. Tomorrow is already cooking. Cleanup: griddle scrape, one bowl."
        ]
      }
    },
    {
      id: "carnitas",
      cost: { est: 15.6, servings: 5, note: "~3.5 lb country-style ribs @ $2.29/lb (boneless butt strips = carnitas without the bone work) + corn tortillas, quick guajillo salsa, white onion, limes, tangelos, FREE refried beans (Combo Loco). Kids' quesadilla cheese carries over from Monday's block" },
      nutrition: { serving: "3 tacos (crispy carnitas, salsa, onion) + tangelo", calories: 690, protein: 40, carbs: 58, fat: 34 },
      daytime: ["THU ~12:30 PM (10 min): quick guajillo-arbol salsa (fully cooked — ban-safe) → fridge jar. Carnitas ride since last night — nothing else"],
      title: "Blackstone Carnitas Tacos with Guajillo Salsa",
      slot: "Dinner 4 · Thu Aug 6",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "The taco night that got cut from week 1 finally lands: pork butt strips (the same cut as carnitas, pre-boned at $2.29/lb) ride 23 hours at 165°F with cumin, oregano, garlic, and tangelo, then shred and CRISP hard on the Blackstone. Warm corn tortillas, a quick cooked guajillo salsa from the restocked bags, charred white onion, lime, tangelos on the side. No cilantro — outbreak ban — and honestly the charred onion + lime don't miss it. Kids: plain crispy carnitas or quesadillas with Monday's cheese.",
      links: [
        { label: "Serious Eats — sous vide carnitas (Kenji's method)", url: "https://www.seriouseats.com/sous-vide-carnitas-for-tacos-recipe", tag: "primary" },
        { label: "r/sousvide — carnitas threads", url: "https://www.reddit.com/r/sousvide/search/?q=carnitas", tag: "reddit" }
      ],
      swapNote: "165°F/~23 hr from frozen = shreddable with structure. Crisp in the rendered bag fat — that's confit economics from a $2.29/lb cut.",
      recipe: {
        activeTime: "~25 min at dinner (+10 min salsa at midday)",
        cookTime: "carnitas ~23 hr at 165°F (in since Wednesday night, from frozen)",
        ingredients: [
          "~3.5 lb country-style ribs (in the bath since Wednesday night — cumin, oregano, garlic, tangelo in the bag)",
          "SALSA (midday): 2 guajillos + 1-2 arbol (stemmed, seeded), 2 roma tomatoes, 1 garlic clove, 0.25 tsp salt — soak chiles 10 min in just-boiled water, blend all with a splash of soak water, simmer 5 min in 1 tsp oil until darkened. Jar → fridge",
          "12-16 corn tortillas",
          "1 white onion: half in thick slabs for charring, half diced raw for the table",
          "Mi Tienda refried beans, 17.6 oz (the Combo Loco freebie) — warmed in a small pot with a splash of water",
          "3 limes in wedges + 4-5 tangelos on the side",
          "kids: leftover colby jack from Monday's block"
        ],
        steps: [
          "~12:30 PM: make the salsa (above). It's fully cooked — ban-safe — and better by dinner.",
          "Dinner: pull the bag, pour the juices into a bowl and skim the fat — keep BOTH.",
          "Shred the pork into rough chunks — it falls apart on contact.",
          "Blackstone on high with 2 tbsp of the bag fat: carnitas spread thin, DON'T TOUCH for 2-3 min until the bottom is deep brown and crackly, flip once, 2 more min. Char the onion slabs alongside.",
          "Splash the meat with a few spoons of bag juices right at the end — steam + glaze in one move.",
          "Tortillas: 20 seconds per side on the griddle edge, stack in a towel.",
          "KID CHECKPOINT: crispy plain carnitas out first — tacos or quesadillas with Monday's cheese on the cool corner. No second dish.",
          "Warm the refried beans in a small pot (splash of water, medium-low, stir) while the meat crisps — free side from the Combo Loco.",
          "Table: carnitas, warm tortillas, beans, salsa jar, charred + raw onion, lime wedges, tangelos. Build your own.",
          "Cleanup: griddle scrape while warm, one bowl, trash the bag. Leftover carnitas reseal for Friday — they reheat crispy."
        ]
      }
    }
  ],
  // Read-only "On Hand" snapshot for the public page. Regenerated with each weekly plan
  // from pantry/inventory.json — sanitized: no staples ledger, no names.
  bank: [
    { name: "Cantaloupe (second half, cut)", qty: "~half melon", location: "fridge", useBy: "2026-07-31", note: "Finish as breakfasts by Friday — short clock" },
    { name: "Organic limes", qty: "~3-5", location: "fridge", useBy: "2026-08-09", note: "Monday's fajita wedges — planned in (Thursday buys fresh ones)" },
    { name: "Fresh ginger (partial knob)", qty: "~1 inch", location: "fridge", useBy: "2026-08-20", note: "Wednesday's fried rice — planned in" },
    { name: "Jumbo yellow onion, whole", qty: "1 (1.72 lb)", location: "pantry", useBy: "2026-08-26", note: "Monday's fajita onion — planned in" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "Fajitas, fried rice, carnitas bag, salsa — planned in all week" },
    { name: "Fajita-rubbed chicken breast bags, sealed raw", qty: "2.15 lb (2 per bag)", location: "freezer", useBy: "2026-11-26", note: "MONDAY'S PROTEIN — both bags drop frozen at 150°F ~3:30" },
    { name: "Gulf 50/70 shrimp, chamber-resealed", qty: "~0.5 lb", location: "freezer", useBy: "2026-10-28", note: "WEDNESDAY'S PROTEIN — fried rice; freezer → fridge Wednesday morning" },
    { name: "Steamable broccoli florets", qty: "1 x 12 oz bag", location: "freezer", useBy: "2027-01-27", note: "Wednesday's fried rice vegetable — planned in" },
    { name: "Dried chiles", qty: "~2-4 guajillos + most of the arbol bag", location: "pantry", useBy: "2027-07-28", note: "Thursday's salsa uses 2 guajillos + 1-2 arbol; the 3-bag restock on this week's list covers salsa macha and the next diabla" },
    { name: "H-E-B Breaded Shrimp (Meal Deal anchor, arriving Sunday)", qty: "2 boxes, 10-14 oz", location: "freezer", useBy: "2027-02-02", note: "Assigned: shrimp po'boy night — waiting for the outbreak bans to lift so bagged slaw is back in play; scheduled automatically that week" }
  ],
  grocery: [
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Simply Seasoned BBQ Boneless Pork Loin Chops (ad item @ $2.99/lb, 33% off)", qty: "2 PACKAGES (~2.5 lb) — Tuesday; 2 packages triggers the clipped Combo Loco (free Mi Tienda beans)", est: 7.5 },
        { name: "H-E-B Pork Butt Country Style Ribs (ad @ $2.29/lb — online shows $2.72/lb Texas pack; trust the shelf tag) — Thursday's CARNITAS", qty: "~3.5 lb", est: 8.5 },
        { name: "Hill Country Fare Boneless Skinless Split Chicken Breast — $1.97/lb VERIFIED, packs avg 2.79 lb ($5.50/pack)", qty: "2 packs (~5.6 lb, $11) — NOT this week's dinners: 4 bags, 4 preps, Sunday", est: 11.0 }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "Bell peppers — 1 green ($0.76) + 2 color ($1.53 ea), prices VERIFIED", qty: "3 — Monday's fajitas", est: 3.8 },
        { name: "H-E-B Sweet Corn on the Cob, 4 ct — $3.44 VERIFIED", qty: "1 pack (1 ear each) — Tuesday", est: 3.4 },
        { name: "Yellow peaches (ad item @ $1.47/lb)", qty: "~2 lb, firm-ripe — Tuesday's fruit side", est: 3.0 },
        { name: "Green onions", qty: "1 bunch — Wednesday's fried rice", est: 1.0 },
        { name: "Roma tomatoes", qty: "2 — Thursday's salsa", est: 0.8 },
        { name: "White onion", qty: "1 — Thursday: half charred, half raw for the table", est: 1.0 },
        { name: "Limes", qty: "3 loose — Thursday (Monday uses the banked ones)", est: 1.0 },
        { name: "Minneola tangelos (ad item @ $0.97/lb)", qty: "~2 lb — 1 into Sunday's carnitas bag, the rest Thursday's side + snacking", est: 2.0 }
      ]
    },
    {
      section: "Dairy & Eggs",
      items: [
        { name: "H-E-B Grade AA Cage Free Large Brown Eggs, 12 ct — $2.79 VERIFIED (price cut) — STAPLE first-buy", qty: "1 dozen", est: 2.8 },
        { name: "H-E-B Colby & Monterey Jack, 8 oz block — $3.13 VERIFIED (grate at home)", qty: "1 block — fajitas Monday, kid quesadillas Thursday", est: 3.1 },
        { name: "H-E-B Sour Cream, 16 oz", qty: "1 — fajitas", est: 2.5 }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
        { name: "H-E-B Bakery Flour Tortillas, 10 ct — $2.08 VERIFIED (price cut; the Butter version is $2.59 if it tempts)", qty: "1 pack — Monday (day-1 fresh ✓)", est: 2.1 },
        { name: "Corn tortillas, 20-30 ct (Mi Tienda or La Ranchera style)", qty: "1 pack — Thursday (shelf-stable, day-5 safe ✓)", est: 2.5 }
      ]
    },
    {
      section: "Meal Deal (CLIPPED in app — anchor + 4 free items ring up together)",
      items: [
        { name: "H-E-B Frozen Breaded Wild Popcorn Shrimp, 14 oz — $7.32 each VERIFIED — MEAL DEAL ANCHOR, buy 2 (po'boy night base, waiting on the ban lift)", qty: "2 boxes", est: 14.6 },
        { name: "FREE: Hill Country Fare Cookie Bears 6-ct (dessert rule: free-with-purchase ✓)", qty: "1", est: 0.0 },
        { name: "FREE: Clorox Disinfecting Wipes, 35 ct", qty: "1", est: 0.0 },
        { name: "FREE: H-E-B Macaroni & Cheese Dinner (→ kid stash)", qty: "1", est: 0.0 },
        { name: "FREE: H-E-B Steamable Green Beans, 12 oz (frozen — choose green beans over broccoli; a bag's already banked)", qty: "1", est: 0.0 }
      ]
    },
    {
      section: "Combo Loco (CLIPPED — rings free with Tuesday's 2 chop packages)",
      items: [
        { name: "FREE: H-E-B Mi Tienda Refried Beans, 17.6 oz (choose beans over rice — jasmine's stocked)", qty: "1 — Thursday's taco side", est: 0.0 }
      ]
    },
    {
      section: "Staples Stock-Up (already owned, NOT on the list: jasmine rice, fajita seasoning, soy, red wine vinegar, crushed red pepper, oregano, both oils, Kerrygold, brown sugar, kosher salt, pepper grinder, mustard)",
      items: [
        { name: "Kadoya Pure Sesame Oil, 5.5 oz — $5.23 VERIFIED — STAPLE INVESTMENT (premium-staples rule names this exact bottle)", qty: "1 bottle", est: 5.2 },
        { name: "Bolner's Fiesta Ground Comino (cumin), 3.5 oz — $3.65 VERIFIED — STAPLE first-buy (carnitas Thursday + all future Mexican weeks)", qty: "1 shaker", est: 3.7 },
        { name: "Stubb's Original Bar-B-Q Sauce, 36 oz — $5.53 VERIFIED (half the per-oz of the 18 oz — premium-staples math says big bottle)", qty: "1 bottle", est: 5.5 },
        { name: "Fiesta 'Chili Cascavel (Guajillo)' — RESTOCK x3 (label quirk: these ARE guajillos; $2.16 each receipt-learned)", qty: "3 x 1.5 oz bags — Thursday's salsa now; salsa macha + next diabla ahead", est: 6.5 }
      ]
    }
  ]
};
