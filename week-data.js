// Week of 2026-08-03 — WEEK 2, HEB-only. Two free-protein nights from last week's
// freezer bank; chicken banked at $1.97/lb (34% off — the deal-trigger rule's first win).
// Bath relay: chicken Mon 3:30 (150°F) → chops Tue 1:30 (140°F) → ribs Wed after
// dinner (160°F, ~23 hr) → Thu glaze night. Bans continue: no bagged salads, no raw herbs.
const WEEK = {
  id: "2026-08-03",
  label: "Dinners Mon Aug 3 – Thu Aug 6 · HEB Irving only · shop Sun Aug 2",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 7/29–8/4, pulled 7/30. Anchors used: HCF chicken breast $1.97/lb (34% off — freezer-banking trigger), BBQ boneless pork loin chops $2.99/lb (33% off), pork country-style ribs $2.29/lb, peaches $1.47/lb. ⚠ Outbreak check 7/30: cyclospora/iceberg now 9 states & 1,947 cases — bagged-salad AND raw-herb bans CONTINUE (skip the ad's BrightFarms salad kits). Combo Loco to eyeball in the app: breakfast skillet → free shredded cheese (only worth it if the skillet becomes a breakfast — cheese is on the list regardless).",
  meals: [
    {
      id: "prep",
      title: "Sunday: Shop + 15-Minute Seal Session",
      slot: "Prep · Sun Aug 2",
      time: "~15 min after put-away",
      equipment: ["Chamber sealer"],
      summary:
        "Light week for prep — Monday's protein is already sealed in the freezer from last week. Today just banks the chicken deal and stages Thursday's ribs. Two jobs, one wipe-down.",
      links: [
        { label: "Serious Eats — sous vide chicken breast guide (times & temps)", url: "https://www.seriouseats.com/food-lab-complete-guide-to-sous-vide-chicken-breast", tag: "primary" },
        { label: "r/sousvide — country style ribs threads", url: "https://www.reddit.com/r/sousvide/search/?q=country%20style%20ribs", tag: "reddit" }
      ],
      recipe: {
        activeTime: "~15 min",
        cookTime: "none today — no bath run",
        ingredients: [
          "~4 lb HCF boneless skinless split chicken breast ($1.97/lb — the banking deal)",
          "Bolner's Fiesta fajita seasoning (owned)",
          "~3 lb pork butt country style ribs ($2.29/lb)",
          "kosher salt + black pepper (owned)"
        ],
        steps: [
          "PUT-AWAY, the ones that matter: peaches → COUNTER (they're Tuesday's — firm-ripe finishes on the counter, never the fridge until ripe). Corn → fridge in husks. Tortillas → counter, sealed. Everything else is normal.",
          "SEAL SESSION 1 — Chicken bank: cut the split breasts into 3 portions of ~1.3 lb, dust every side with fajita rub, 1 portion per bag, seal, label with painter's tape, FREEZE. That's 3 future zero-prep dinners at $2.60 each — the deal-trigger rule paying out.",
          "SEAL SESSION 2 — Thursday's ribs: salt + pepper all over (the Stubb's glaze comes Thursday — sauce in the bag for 23 hr goes muddy), seal flat, label, FREEZE (they're cooked day 4 — the shelf-life rule says freeze, and frozen drops straight into Wednesday's bath).",
          "Cleanup: sealer wipe. Done — no bath tonight, nothing drops until Monday 3:30."
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
      swapNote: "140°F = juicy with a touch of blush, safe and ideal for lean loin chops. Corn griddles in the husk-off style: butter, salt, rolling sear.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "chops 2-4 hr at 140°F (in since 1:30, unattended)",
        ingredients: [
          "~2.5 lb H-E-B Simply Seasoned BBQ boneless pork loin chops (bag them as-bought, 1 layer)",
          "5 ears corn, shucked",
          "2 tbsp Kerrygold butter + kosher salt",
          "~2 lb yellow peaches, sliced at dinner",
          "1 tbsp canola oil"
        ],
        steps: [
          "~1:30 PM: seal the chops flat (they come pre-seasoned — nothing added), bath to 140°F, in they go.",
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
      cost: { est: 3.5, servings: 4, note: "the bank eats: shrimp ($0), broccoli ($0), day-old rice, banked garlic + ginger + soy. New money is 4 eggs + green onions. Cheapest dinner this system has produced" },
      nutrition: { serving: "~2 cups shrimp fried rice", calories: 540, protein: 26, carbs: 66, fat: 18 },
      daytime: [
        "WED morning (10 sec): shrimp bag freezer → fridge bowl",
        "WED after dinner (1 min): bath to 160°F, FROZEN rib bag in — ~23 hr to Thursday dinner"
      ],
      title: "Blackstone Shrimp Fried Rice",
      slot: "Dinner 3 · Wed Aug 5",
      time: "~20 min at dinner",
      equipment: ["Blackstone"],
      summary:
        "Clean-out-the-bank night, and it eats like a hibachi order: yesterday's chilled rice crisped on the flat top with eggs, the banked Gulf shrimp, broccoli, and a soy-ginger-garlic finish. Adults can hit theirs with crushed red pepper or snipped arbol. Kids: theirs plates before the sauce gets loud. After dinner, the rib bag starts Thursday's dinner with one drop.",
      links: [
        { label: "The Woks of Life — Shrimp Fried Rice (the reference)", url: "https://thewoksoflife.com/shrimp-fried-rice/", tag: "primary" },
        { label: "r/blackstonegriddle — fried rice threads", url: "https://www.reddit.com/r/blackstonegriddle/search/?q=fried%20rice", tag: "reddit" }
      ],
      swapNote: "Day-old fridge rice only — fresh rice steams and clumps. The 50/70 shrimp are small: 60-90 seconds on the griddle, done.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "all griddle, no bath tonight (the bath's job starts AFTER dinner: ribs in at 160°F)",
        ingredients: [
          "banked Gulf 50/70 shrimp, ~0.5 lb (thawed in the fridge since morning), patted dry",
          "yesterday's rice, cold from the fridge (~6 cups), clumps broken up",
          "banked steamable broccoli bag — microwave 3 min, drain well",
          "4 eggs, beaten",
          "1 bunch green onions, sliced (whites and greens separate)",
          "3 garlic cloves minced + 1 tbsp grated ginger (the banked knob, grated frozen or fridge-cold)",
          "3 tbsp soy sauce + 1 tbsp butter",
          "2 tbsp canola oil · adults: crushed red pepper or 1-2 snipped arbol chiles"
        ],
        steps: [
          "MORNING: shrimp bag into a fridge bowl. (Forgot? 10 min in cold water at 5:30 — they're small.)",
          "Microwave the broccoli bag 3 min, drain HARD — wet broccoli kills crisp rice. Rough-chop the big florets.",
          "Blackstone on high, half the oil: shrimp 60-90 seconds until just pink, push to the cool side.",
          "Rest of the oil: garlic, ginger, green onion whites — 30 seconds until loud and fragrant.",
          "Rice on, spread thin. Let it SIT 60 seconds untouched to crisp, then flip-and-spread. Repeat twice — 4-5 min total.",
          "Clear a spot, pour the eggs, scramble ragged, then chop everything together.",
          "Broccoli + shrimp back in, soy around the edges (it should hiss), butter, toss.",
          "KID CHECKPOINT: their plates now — mild, everything in it already approved. Then green onion tops + heat (crushed red pepper or snipped arbol) for the adults.",
          "AFTER DINNER (1 min): bath to 160°F, frozen rib bag in. Tomorrow is already cooking. Cleanup: griddle scrape, one bowl."
        ]
      }
    },
    {
      id: "ribs",
      cost: { est: 13.7, servings: 4, note: "~3 lb country-style ribs @ $2.29/lb + about a third of the Stubb's bottle + 1 bag baby golds + 2 cucumbers" },
      nutrition: { serving: "~7 oz glazed ribs + potatoes + cucumber salad", calories: 780, protein: 42, carbs: 58, fat: 40 },
      daytime: ["THU ~12:30 PM (5 min): cucumber salad → fridge (it improves all afternoon). Ribs are riding since last night — nothing else"],
      title: "Stubb's-Glazed Country Ribs with Crispy Potatoes & Cucumber Salad",
      slot: "Dinner 4 · Thu Aug 6",
      time: "~30 min at dinner",
      equipment: ["Sous vide", "Blackstone", "Air fryer"],
      summary:
        "Country-style ribs are pork-butt strips — 23 hours at 160°F makes them fall-apart tender while staying sliceable, then Stubb's Original goes sticky on the Blackstone. Air-fryer baby golds (last week's proven hit) and the sharp cucumber salad from the belly-bowl playbook round it out. BBQ night for about $13.70.",
      links: [
        { label: "Amazing Food Made Easy — country style ribs times & temps", url: "https://www.amazingfoodmadeeasy.com/sous-vide-times-temperatures/how-to-sous-vide/pork", tag: "primary" },
        { label: "r/sousvide — country style ribs threads", url: "https://www.reddit.com/r/sousvide/search/?q=country%20style%20ribs", tag: "reddit" }
      ],
      swapNote: "160°F/~23 hr from frozen = shreddable-but-sliceable. Glaze ON the griddle, not in the bag — 23 hours cooks BBQ sauce muddy.",
      recipe: {
        activeTime: "~30 min at dinner",
        cookTime: "ribs ~23 hr at 160°F (in since Wednesday night, from frozen)",
        ingredients: [
          "~3 lb country-style ribs (in the bath since Wednesday after dinner)",
          "Stubb's Original Bar-B-Q sauce, about a third of the bottle",
          "1 bag baby gold potatoes (1.5 lb), halved",
          "CUCUMBER SALAD: 2 cucumbers in thin half-moons, 2 tbsp red wine vinegar, 1 tsp brown sugar, pinch of salt, pinch of crushed red pepper",
          "1 tbsp canola oil + kosher salt"
        ],
        steps: [
          "~12:30 PM: mix the cucumber salad → fridge.",
          "~5:15: potatoes — halve, toss with oil + salt, air fryer 400°F ~20 min, shake at 10.",
          "~5:40: pull the rib bag, pat the pieces VERY dry. Save 2 tbsp bag juices.",
          "Blackstone on medium-high: ribs 2 min per side for color first.",
          "Heat to medium-low: brush Stubb's (loosened with the bag juices) on all sides — 2-3 min, turning, until sticky and lacquered. Sugar burns; keep it moving.",
          "KID CHECKPOINT: BBQ ribs and potatoes are already the kid plate. Sauce-light pieces off first if anyone objects to sticky.",
          "Plate: ribs, potatoes, cold cucumber salad. Cleanup: griddle scrape while warm (sauce sugar!), air fryer basket, trash the bag."
        ]
      }
    }
  ],
  // Read-only "On Hand" snapshot for the public page. Regenerated with each weekly plan
  // from pantry/inventory.json — sanitized: no staples ledger, no names.
  bank: [
    { name: "Cantaloupe (second half, cut)", qty: "~half melon", location: "fridge", useBy: "2026-07-31", note: "Finish as breakfasts by Friday — short clock" },
    { name: "Organic limes", qty: "~3-5", location: "fridge", useBy: "2026-08-09", note: "Monday's fajita wedges — planned in" },
    { name: "Fresh ginger (partial knob)", qty: "~1 inch", location: "fridge", useBy: "2026-08-20", note: "Wednesday's fried rice — planned in" },
    { name: "Jumbo yellow onion, whole", qty: "1 (1.72 lb)", location: "pantry", useBy: "2026-08-26", note: "Monday's fajita onion — planned in" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "Fajitas + fried rice — planned in" },
    { name: "Fajita-rubbed chicken breast bags, sealed raw", qty: "2.15 lb (2 per bag)", location: "freezer", useBy: "2026-11-26", note: "MONDAY'S PROTEIN — both bags drop frozen at 150°F ~3:30" },
    { name: "Gulf 50/70 shrimp, chamber-resealed", qty: "~0.5 lb", location: "freezer", useBy: "2026-10-28", note: "WEDNESDAY'S PROTEIN — fried rice; freezer → fridge Wednesday morning" },
    { name: "Steamable broccoli florets", qty: "1 x 12 oz bag", location: "freezer", useBy: "2027-01-27", note: "Wednesday's fried rice vegetable — planned in" },
    { name: "Dried chiles", qty: "~2-4 guajillos + most of the arbol bag", location: "pantry", useBy: "2027-07-28", note: "Arbol = fried-rice heat option. Guajillo restock is on this week's list (3 bags) — salsa macha and the next diabla come back into play" }
  ],
  grocery: [
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Simply Seasoned BBQ Boneless Pork Loin Chops (ad item @ $2.99/lb, 33% off)", qty: "~2.5 lb — Tuesday, pre-seasoned", est: 7.5 },
        { name: "H-E-B Pork Butt Country Style Ribs (ad item @ $2.29/lb)", qty: "~3 lb — Thursday's 23-hr BBQ play", est: 6.9 },
        { name: "Hill Country Fare Boneless Skinless Split Chicken Breast (ad item @ $1.97/lb, 34% OFF — the freezer-banking trigger)", qty: "~4 lb — NOT this week's dinners: 3 fajita-rub bags to the freezer Sunday", est: 7.9 }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "Bell peppers, mixed colors", qty: "3 — Monday's fajitas", est: 3.6 },
        { name: "Corn on the cob", qty: "5 ears — Tuesday", est: 3.0 },
        { name: "Yellow peaches (ad item @ $1.47/lb)", qty: "~2 lb, firm-ripe — Tuesday's fruit side", est: 3.0 },
        { name: "Green onions", qty: "1 bunch — Wednesday's fried rice", est: 1.0 },
        { name: "Cucumbers", qty: "2 — Thursday's salad", est: 1.3 },
        { name: "H-E-B Baby Gold Potatoes", qty: "1 x 1.5 lb bag — Thursday (receipt-learned: $3.48/bag)", est: 3.5 }
      ]
    },
    {
      section: "Dairy & Eggs",
      items: [
        { name: "H-E-B Grade A Large Eggs, dozen — STAPLE first-buy (fried rice now, breakfasts after)", qty: "1 dozen", est: 3.5 },
        { name: "H-E-B Colby Jack block, 8 oz (grate at home — cheaper than pre-shredded)", qty: "1 block — fajitas", est: 4.0 },
        { name: "H-E-B Sour Cream, 16 oz", qty: "1 — fajitas", est: 2.5 }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
        { name: "H-E-B Bakery Flour Tortillas, 10 ct (or Guerrero if the bakery case is out)", qty: "1 pack — Monday (day-1 fresh, inside the bread rule)", est: 3.0 }
      ]
    },
    {
      section: "Staples Stock-Up (already owned, NOT on the list: jasmine rice, fajita seasoning, soy, red wine vinegar, crushed red pepper, oregano, both oils, Kerrygold, brown sugar, kosher salt, pepper grinder, mustard)",
      items: [
        { name: "Stubb's Original Bar-B-Q Sauce, 18 oz — STAPLE first-buy (Texas staple; Thursday's glaze + months ahead)", qty: "1 bottle", est: 4.5 },
        { name: "Fiesta 'Chili Cascavel (Guajillo)' — RESTOCK x3 (label quirk: these ARE guajillos; $2.16 each receipt-learned)", qty: "3 x 1.5 oz bags — reopens salsa macha, enchilada sauce, the next diabla", est: 6.5 }
      ]
    }
  ]
};
