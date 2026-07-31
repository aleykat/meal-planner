// Week of 2026-08-03 — WEEK 2 v3, HEB-only. Rerun 7/31: Jessica joins Tuesday (3
// adults + 2 kids) — swapped carnitas (already sized for 5) onto Tuesday as GUEST
// NIGHT and moved BBQ chops to Thursday, at zero extra purchase cost. Wednesday's
// fried rice DOUBLED its shrimp per feedback (+1 lb fresh, $7.97 in-store).
// Bath relay: chicken Mon 3:30 (150°F) → carnitas Mon after dinner (165°F, ~23-24 hr,
// fridge-cold — only 1 day out, no freezing needed) → chops Thu 1:30 (140°F).
// Bans continue: no bagged salads, no raw herbs.
const WEEK = {
  id: "2026-08-03",
  label: "Dinners Mon Aug 3 – Thu Aug 6 · HEB Irving only · shop Sun Aug 2",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 7/29–8/4, pulled 7/30; rerun 7/31 for the Tuesday guest + shrimp fix. Anchors: HCF chicken breast $1.97/lb (34% off — banked as 4 bags, 4 different preps), BBQ boneless pork loin chops $2.99/lb (33% off), pork butt country-style ribs $2.29/lb (now Tuesday's GUEST NIGHT carnitas — Jessica joins, 3 adults + 2 kids), peaches $1.47/lb, tangelos $0.97/lb. Staple investments this week (~$19, amortizes): Kadoya sesame oil, Fiesta cumin, Stubb's, guajillo restock x3. Wednesday's fried rice shrimp DOUBLED per feedback (+1 lb fresh Gulf 50/70, $7.97 in-store). ⚠ Outbreak check 7/30: cyclospora now 9 states / 1,947 cases — bagged-salad AND raw-herb bans CONTINUE (no cilantro garnish on taco night; skip the ad's salad kits). App check before Sunday: the Meal Deal's contents + the skillet→free-cheese Combo Loco.",
  meals: [
    {
      id: "prep",
      title: "Sunday: Shop + 20-Minute Seal Session",
      slot: "Prep · Sun Aug 2",
      time: "~20 min after put-away",
      equipment: ["Chamber sealer"],
      summary:
        "Two seal jobs: bank the chicken deal as four DIFFERENT future dinners (new rule — no more one-rub-fits-all), and stage Tuesday's GUEST NIGHT carnitas (Jessica joins) — only 1 day out this time, so it's a simple fridge seal, no freezing. Monday's protein is already in the freezer from last week. No bath run tonight.",
      links: [
        { label: "Serious Eats — sous vide chicken breast guide (times & temps)", url: "https://www.seriouseats.com/food-lab-complete-guide-to-sous-vide-chicken-breast", tag: "primary" },
        { label: "r/sousvide — carnitas threads", url: "https://www.reddit.com/r/sousvide/search/?q=carnitas", tag: "reddit" }
      ],
      recipe: {
        activeTime: "~20 min",
        cookTime: "none today — first bath run is Monday 3:30",
        ingredients: [
          "2 packs HCF boneless skinless split chicken breast (~5.6 lb total, $1.97/lb verified — the banking deal)",
          "~3.5 lb pork butt country style ribs ($2.29/lb — Tuesday's GUEST NIGHT carnitas)",
          "rubs from the pantry: fajita seasoning, Kinder's Cowboy Butter, NEW Fiesta cumin, oregano, kosher salt + pepper",
          "2 garlic cloves (banked heads) + 1 tangelo"
        ],
        steps: [
          "PUT-AWAY, the ones that matter: peaches → COUNTER until ripe (Tuesday's). Roma tomatoes → COUNTER, never the fridge. Corn → fridge in husks. Flour tortillas → counter sealed (Monday); corn tortillas → pantry (Thursday, shelf-stable). Tangelos → counter bowl. Everything else is normal.",
          "SEAL SESSION 1 — Chicken bank, 4 bags with 4 DIFFERENT jobs (2 packs = ~5.6 lb, ~1.4 lb per bag): bag 1 = fajita rub (proven), bag 2 = Kinder's Cowboy Butter (proven on the chops), bag 3 = plain salt + pepper (the wild card — Stubb's glaze, lemon butter, parm crust at cook time), bag 4 = soy-ginger (2 tbsp soy + 1 tbsp brown sugar + grated ginger — all owned). Seal, label each with its rub, FREEZE. Four future dinners at ~$2.75 each, no two alike.",
          "SEAL SESSION 2 — Tuesday's GUEST NIGHT carnitas (Jessica joins): rub the rib strips all over with 1 tbsp cumin + 1 tsp oregano (crushed) + 1.5 tsp kosher salt + black pepper, drop in 2 sliced garlic cloves, squeeze in the juice of 1 tangelo (peel strips in too). Seal flat, label, FRIDGE — only 1 day out this time, so no freezing needed; the bag drops fridge-cold into Monday night's bath once the fajita dinner clears the pot.",
          "SEAL SESSION 3 (30 sec) — the BRAZILIAN BBQ chop pack: seal as-bought, label, FREEZE. It's the Combo Loco's second package and a future zero-prep dinner in a different flavor — the varied-prep rule at work.",
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
      daytime: ["THU ~1:30 PM (1 min): bath to 140°F, chops in (they hold until dinner, no rush)"],
      title: "Texas BBQ Pork Chops with Griddled Corn & Fresh Peaches",
      slot: "Dinner 4 · Thu Aug 6",
      time: "~20 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "The ad does the seasoning work: Simply Seasoned BBQ chops at 33% off go bag-to-bath at 1:30, then take a hard sear next to corn rolling in Kerrygold on the flat top. Peaches at $1.47/lb are dessert masquerading as a side. The easiest night of the week — nothing to prep for tomorrow, this is the last dinner.",
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
          "Cleanup: griddle scrape, tongs, trash the bag. Nothing to prep for tomorrow — the week's done."
        ]
      }
    },
    {
      id: "friedrice",
      cost: { est: 11.9, servings: 4, note: "DOUBLED THE SHRIMP per feedback: banked 0.5 lb (free) + 1 lb fresh Gulf 50/70 P&D ($7.97 in-store) = 1.5 lb total, ~6 oz/serving raw. Broccoli ($0 banked), day-old rice, banked garlic + ginger + soy. New money: the fresh shrimp, 4 eggs, green onions, Kadoya sesame oil (staple investment)" },
      nutrition: { serving: "~2 cups shrimp fried rice (now shrimp-forward)", calories: 670, protein: 50, carbs: 66, fat: 22 },
      daytime: ["WED morning (2 min): banked shrimp bag freezer → fridge bowl; the fresh 1 lb bag goes in the fridge too so both are fully thawed by dinner"],
      title: "Blackstone Shrimp Fried Rice",
      slot: "Dinner 3 · Wed Aug 5",
      time: "~20 min at dinner",
      equipment: ["Blackstone"],
      summary:
        "Rerun per feedback: DOUBLED the shrimp (0.5 lb banked + 1 lb fresh = 1.5 lb) so this finally eats like a proper shrimp fried rice, not rice with a few shrimp in it. Yesterday's chilled rice crisped on the flat top with eggs, broccoli, and a soy-garlic-ginger finish — plus a thread of Kadoya toasted sesame oil off the heat. Kids plate before the finishers get loud. Thursday's chops are a simple same-day drop — nothing to start tonight.",
      links: [
        { label: "The Woks of Life — Shrimp Fried Rice (the reference)", url: "https://thewoksoflife.com/shrimp-fried-rice/", tag: "primary" },
        { label: "r/blackstonegriddle — fried rice threads", url: "https://www.reddit.com/r/blackstonegriddle/search/?q=fried%20rice", tag: "reddit" }
      ],
      swapNote: "Day-old fridge rice only — fresh rice steams and clumps. Sesame oil is a FINISHER, never a cooking oil — it burns. The 50/70 shrimp are small and there's 1.5 lb of them now — work in two batches so the griddle doesn't overcrowd and steam instead of sear.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "all griddle, no bath tonight — nothing to start for tomorrow",
        ingredients: [
          "banked Gulf 50/70 shrimp (~0.5 lb) PLUS a fresh 1 lb bag, same style — 1.5 lb total, doubled per feedback — thawed in the fridge since morning, patted dry",
          "yesterday's rice, cold from the fridge (~6 cups), clumps broken up",
          "banked steamable broccoli bag — microwave 3 min, drain HARD",
          "4 eggs, beaten",
          "1 bunch green onions, sliced (whites and greens separate)",
          "3 garlic cloves minced + 1 tbsp grated ginger (the banked knob)",
          "3 tbsp soy sauce + 1 tbsp butter + 1 tsp Kadoya toasted sesame oil (off heat, at the end)",
          "2 tbsp canola oil · adults: crushed red pepper or 1-2 snipped arbol chiles"
        ],
        steps: [
          "MORNING: both shrimp bags (banked + fresh) into a fridge bowl to thaw together. (Forgot? 10 min in cold water at 5:30 — they're small.)",
          "Microwave the broccoli bag 3 min, drain HARD, rough-chop the big florets.",
          "Blackstone on high, half the canola: shrimp in two batches so they sear instead of steam, 60-90 seconds each until just pink, push to the cool side.",
          "Rest of the canola: garlic, ginger, green onion whites — 30 seconds until loud and fragrant.",
          "Rice on, spread thin. Let it SIT 60 seconds untouched to crisp, then flip-and-spread. Repeat twice — 4-5 min total.",
          "Clear a spot, pour the eggs, scramble ragged, then chop everything together.",
          "Broccoli + shrimp back in, soy around the edges (it should hiss), butter, toss.",
          "OFF the heat: 1 tsp sesame oil over everything, toss once. That thread is the whole hibachi smell.",
          "KID CHECKPOINT: their plates now — mild, everything in it already approved. Then green onion tops + heat (crushed red pepper or snipped arbol) for the adults.",
          "Cleanup: griddle scrape, one bowl. Nothing to prep for tomorrow — Thursday's chops are a simple same-day drop."
        ]
      }
    },
    {
      id: "carnitas",
      cost: { est: 15.6, servings: 5, note: "GUEST NIGHT — Jessica joins (3 adults + 2 kids, 5 servings): ~3.5 lb country-style ribs @ $2.29/lb (boneless butt strips = carnitas without the bone work) + corn tortillas, quick guajillo salsa, white onion, limes, tangelos, FREE refried beans (Combo Loco). Kids' quesadilla cheese carries over from Monday's block" },
      nutrition: { serving: "3 tacos (crispy carnitas, salsa, onion) + tangelo", calories: 690, protein: 40, carbs: 58, fat: 34 },
      daytime: [
        "TUE ~12:30 PM (10 min): quick guajillo-arbol salsa (fully cooked — ban-safe) → fridge jar. Carnitas have been riding since Monday evening — nothing else needed",
        "TUE after dinner (5 min): rice cooker on — 2 cups jasmine, rinsed until the water runs clear, 2.5 cups water. When it flips to warm, spread on a plate to cool, then fridge UNCOVERED — tomorrow's fried rice needs day-old rice"
      ],
      title: "Blackstone Carnitas Tacos with Guajillo Salsa",
      slot: "Dinner 2 · Tue Aug 4",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Blackstone", "Rice cooker (evening, for Wed)"],
      summary:
        "GUEST NIGHT — Jessica joins: pork butt strips (the same cut as carnitas, pre-boned at $2.29/lb) ride 23-24 hours at 165°F with cumin, oregano, garlic, and tangelo — dropped fridge-cold Monday evening, only 1 day out so no freezing needed — then shred and CRISP hard on the Blackstone. Warm corn tortillas, a quick cooked guajillo salsa from the restocked bags, charred white onion, lime, tangelos on the side, FREE refried beans from the clipped Combo Loco. No cilantro — outbreak ban — and honestly the charred onion + lime don't miss it. Kids: plain crispy carnitas or quesadillas with Monday's cheese.",
      links: [
        { label: "Serious Eats — sous vide carnitas (Kenji's method)", url: "https://www.seriouseats.com/sous-vide-carnitas-for-tacos-recipe", tag: "primary" },
        { label: "r/sousvide — carnitas threads", url: "https://www.reddit.com/r/sousvide/search/?q=carnitas", tag: "reddit" }
      ],
      swapNote: "165°F/~23-24 hr from fridge-cold (only 1 day out — no freezing needed this time) = shreddable with structure. Crisp in the rendered bag fat — that's confit economics from a $2.29/lb cut.",
      recipe: {
        activeTime: "~25 min at dinner (+10 min salsa at midday)",
        cookTime: "carnitas ~23-24 hr at 165°F (in since Monday evening, fridge-cold start)",
        ingredients: [
          "~3.5 lb country-style ribs (in the bath since Monday evening — cumin, oregano, garlic, tangelo in the bag)",
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
    { name: "Organic limes", qty: "~3-5", location: "fridge", useBy: "2026-08-09", note: "Monday's fajita wedges — planned in (Tuesday buys fresh ones)" },
    { name: "Fresh ginger (partial knob)", qty: "~1 inch", location: "fridge", useBy: "2026-08-20", note: "Wednesday's fried rice — planned in" },
    { name: "Jumbo yellow onion, whole", qty: "1 (1.72 lb)", location: "pantry", useBy: "2026-08-26", note: "Monday's fajita onion — planned in" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "Fajitas Mon, carnitas bag + salsa Tue, fried rice Wed — planned in all week" },
    { name: "Fajita-rubbed chicken breast bags, sealed raw", qty: "2.15 lb (2 per bag)", location: "freezer", useBy: "2026-11-26", note: "MONDAY'S PROTEIN — both bags drop frozen at 150°F ~3:30" },
    { name: "Gulf 50/70 shrimp, chamber-resealed", qty: "~0.5 lb", location: "freezer", useBy: "2026-10-28", note: "WEDNESDAY'S PROTEIN — DOUBLED per feedback with a fresh 1 lb bag bought Sunday (1.5 lb total); freezer → fridge Wednesday morning" },
    { name: "Steamable broccoli florets", qty: "1 x 12 oz bag", location: "freezer", useBy: "2027-01-27", note: "Wednesday's fried rice vegetable — planned in" },
    { name: "Dried chiles", qty: "~2-4 guajillos + most of the arbol bag", location: "pantry", useBy: "2027-07-28", note: "Tuesday's GUEST NIGHT salsa uses 2 guajillos + 1-2 arbol; the 3-bag restock on this week's list covers salsa macha and the next diabla" },
    { name: "H-E-B Breaded Shrimp (Meal Deal anchor, arriving Sunday)", qty: "2 boxes, 10-14 oz", location: "freezer", useBy: "2027-02-02", note: "Assigned: shrimp po'boy night — waiting for the outbreak bans to lift so bagged slaw is back in play; scheduled automatically that week" }
  ],
  grocery: [
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Simply Seasoned Boneless Pork Loin Chops — $6.88/pack IN-STORE VERIFIED ($2.99/lb, 2.3 lb avg): 1 TEXAS BBQ (Thursday) + 1 BRAZILIAN BBQ (seals to freezer Sunday — varied-prep bank)", qty: "2 packages — triggers the clipped Combo Loco (free Mi Tienda beans)", est: 13.8, aisle: "Meat Mkt back wall" },
        { name: "H-E-B Boneless Country-Style Boston Butt Pork Ribs, Texas-Size Pack — $10.54 IN-STORE VERIFIED ($2.59/lb, 4.07 lb avg; ad tag may say $2.29) — Tuesday's GUEST NIGHT CARNITAS (already sized for 5 — no extra needed for Jessica)", qty: "1 pack", est: 10.5, aisle: "Meat Market" },
        { name: "Hill Country Fare Boneless Skinless Split Chicken Breast — $5.50/pack IN-STORE VERIFIED ($1.97/lb, 2.79 lb avg)", qty: "2 packs (~5.6 lb, $11) — NOT this week's dinners: 4 bags, 4 preps, Sunday", est: 11.0, aisle: "Meat Mkt back wall" },
        { name: "H-E-B Wild Caught Frozen Peeled Large Texas Gulf Raw Shrimp, 50-70 ct/lb — $7.97/lb IN-STORE VERIFIED — DOUBLING Wednesday's fried rice shrimp per feedback", qty: "1 lb bag — combines with the banked 0.5 lb for 1.5 lb total", est: 8.0, aisle: "Seafood left wall" }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "Bell peppers — 1 green ($0.72) + red ($1.48) + yellow ($1.46), IN-STORE VERIFIED", qty: "3 — Monday's fajitas", est: 3.7, aisle: "Produce left wall" },
        { name: "H-E-B Sweet Corn on the Cob, 4 ct — $3.28 IN-STORE VERIFIED", qty: "1 pack (1 ear each) — Thursday", est: 3.3, aisle: "15" },
        { name: "Yellow peaches — $1.47/lb VERIFIED (⚠ 'out of stock' online 7/30 — ad item, check the table; plums are the ad's stated backup)", qty: "~5 peaches (~2 lb), firm-ripe — Thursday", est: 3.0, aisle: "Produce" },
        { name: "Green onions — $0.67 IN-STORE VERIFIED", qty: "1 bunch — Wednesday's fried rice", est: 0.7, aisle: "Produce left wall" },
        { name: "Roma tomatoes — $0.85/lb IN-STORE VERIFIED (~$0.25 each)", qty: "2 — Tuesday's GUEST NIGHT salsa", est: 0.5, aisle: "Produce" },
        { name: "White onion — $1.19/lb IN-STORE VERIFIED", qty: "1 — Tuesday: half charred, half raw for the table", est: 1.1, aisle: "Produce" },
        { name: "Limes — $0.20 each IN-STORE VERIFIED", qty: "3 loose — Tuesday (Monday uses the banked ones)", est: 0.6, aisle: "Produce" },
        { name: "Minneola tangelos — SALE $0.97/lb IN-STORE VERIFIED (~$0.59 each)", qty: "~4 — 1 into Sunday's carnitas bag, rest Tuesday + snacking", est: 2.4, aisle: "Produce" }
      ]
    },
    {
      section: "Dairy & Eggs",
      items: [
        { name: "H-E-B Grade AA Cage Free Large Brown Eggs, 12 ct — $2.66 IN-STORE VERIFIED (price cut) — STAPLE first-buy", qty: "1 dozen", est: 2.7, aisle: "Dairy right wall" },
        { name: "H-E-B Colby & Monterey Jack, 8 oz block — $2.98 IN-STORE VERIFIED (grate at home)", qty: "1 block — fajitas Monday, kid quesadillas Thursday", est: 3.0, aisle: "Meat Mkt back wall (cheese case)" },
        { name: "Daisy Squeeze Sour Cream, 14 oz — $2.94 IN-STORE VERIFIED (squeeze format preferred for table service)", qty: "1 — fajita toppings bar", est: 2.9, aisle: "Dairy" }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
        { name: "H-E-B Bakery Flour Tortillas, 10 ct — $1.98 IN-STORE VERIFIED (price cut)", qty: "1 pack — Monday (day-1 fresh ✓)", est: 2.0, aisle: "Bakery right edge" },
        { name: "H-E-B Mi Tienda Ready to Cook Yellow Corn Tortillas, 20 ct — $2.38 IN-STORE VERIFIED (cook 30 sec/side on the Blackstone — fresher than shelf tortillas)", qty: "1 pack — Tuesday (refrigerated, day-3 fine ✓)", est: 2.4, aisle: "Dairy right wall" }
      ]
    },
    {
      section: "Meal Deal (CLIPPED in app — anchor + 4 free items ring up together)",
      items: [
        { name: "H-E-B Frozen Breaded Wild Popcorn Shrimp, 14 oz — $6.97 each IN-STORE VERIFIED — MEAL DEAL ANCHOR, buy 2 (po'boy night base, waiting on the ban lift)", qty: "2 boxes", est: 13.9, aisle: "Seafood left wall" },
        { name: "FREE: Hill Country Fare Cookie Bears 6-ct (dessert rule: free-with-purchase ✓)", qty: "1", est: 0.0, aisle: "21" },
        { name: "FREE: Clorox Disinfecting Wipes, 35 ct", qty: "1", est: 0.0, aisle: "29" },
        { name: "FREE: H-E-B Macaroni & Cheese 7.25 oz (→ kid stash)", qty: "1", est: 0.0, aisle: "7" },
        { name: "FREE: H-E-B Frozen Steamable Whole Green Beans, 12 oz", qty: "1", est: 0.0, aisle: "15" }
      ]
    },
    {
      section: "Combo Loco (CLIPPED — rings free with the 2 Simply Seasoned chop packages)",
      items: [
        { name: "FREE: H-E-B Mi Tienda Refried Beans, 17.6 oz (choose beans over rice — jasmine's stocked)", qty: "1 — Tuesday's GUEST NIGHT taco side", est: 0.0, aisle: "Meal Simple right edge" }
      ]
    },
    {
      section: "Staples Stock-Up (already owned, NOT on the list: jasmine rice, fajita seasoning, soy, red wine vinegar, crushed red pepper, oregano, both oils, Kerrygold, brown sugar, kosher salt, pepper grinder, mustard)",
      items: [
        { name: "Kadoya Pure Sesame Oil, 5.5 oz — $4.98 IN-STORE VERIFIED — STAPLE INVESTMENT (premium-staples rule names this exact bottle)", qty: "1 bottle", est: 5.0, aisle: "6" },
        { name: "Bolner's Fiesta Ground Comino (cumin), 3.5 oz — $3.48 IN-STORE VERIFIED — STAPLE first-buy (carnitas + future Mexican weeks)", qty: "1 shaker", est: 3.5, aisle: "8" },
        { name: "Stubb's Original Bar-B-Q Sauce, 36 oz — $5.27 IN-STORE VERIFIED (half the per-oz of the 18 oz)", qty: "1 bottle", est: 5.3, aisle: "6" },
        { name: "Fiesta 'Chili Cascavel (Guajillo)' — $2.16 IN-STORE VERIFIED (label quirk: these ARE guajillos)", qty: "3 x 1.5 oz bags — Thursday's salsa now; salsa macha + next diabla ahead", est: 6.5, aisle: "8" }
      ]
    }
  ]
};
