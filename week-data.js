// Week of 2026-08-03 — WEEK 2 v5, HEB-only. Rerun 8/2 (shop day): Thursday is now
// meet-the-teacher night, dinner on the run — dropped from the cook week entirely.
// Family wants to KEEP chops rather than drop it, so chops moved to Monday and
// fajitas got bumped to a future week instead (banked chicken keeps fine). Only 3
// dinners this week: chops (Mon), GUEST NIGHT carnitas (Tue, Jessica), fried rice
// (Wed, shrimp doubled per feedback). Mayela's visit was tied to the now-cancelled
// Thursday — cantaloupe stays as the fruit side (proven favorite either way), but
// her attendance on a different night is unconfirmed.
// Bath relay: chops Mon 1:30 (140°F) → carnitas Mon after dinner (165°F, ~23-24 hr,
// fridge-cold) → fried rice Wed (no bath — last dinner of the week).
// Bans continue: no bagged salads, no raw herbs.
const WEEK = {
  id: "2026-08-03",
  label: "Dinners Mon Aug 3 – Wed Aug 5 · HEB Irving only · shop Sun Aug 2",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 7/29–8/4, pulled 7/30; rerun 8/2 (shop day) — Thursday dropped (meet the teacher, dinner on the run), chops kept and moved to Monday, fajitas deferred to a future week. Anchors: BBQ boneless pork loin chops $2.99/lb (33% off, 2 packages — one for Monday, one banked), pork butt country-style ribs $2.29/lb (Tuesday's GUEST NIGHT carnitas — Jessica joins, 3 adults + 2 kids), HCF chicken breast $1.97/lb (34% off — banked as 4 bags, 4 different preps for a FUTURE week), cantaloupe $1.97 sale. Staple investments this week (~$19, amortizes): Kadoya sesame oil, Fiesta cumin, Stubb's, guajillo restock x3. Wednesday's fried rice shrimp DOUBLED per feedback (+1 lb fresh Gulf 50/70, $7.97 in-store). ⚠ Outbreak check 8/2: cyclospora now 45 states / 11,000+ cases (worse, not better) plus a second unrelated cyclospora outbreak under investigation — bagged-salad AND raw-herb bans CONTINUE. Meal Deal + Simply Seasoned Combo Loco already clipped.",
  meals: [
    {
      id: "prep",
      title: "Sunday: Shop + 20-Minute Seal Session",
      slot: "Prep · Sun Aug 2",
      time: "~20 min after put-away",
      equipment: ["Chamber sealer"],
      summary:
        "Two seal jobs, neither for Monday: bank the chicken deal as four DIFFERENT future dinners (new rule — no more one-rub-fits-all; this is pure freezer bank now that fajitas got bumped to a future week), and stage Tuesday's GUEST NIGHT carnitas (Jessica joins) — only 1 day out this time, so it's a simple fridge seal, no freezing. Monday's chops need zero advance prep — pre-seasoned, straight from the fridge tomorrow. No bath run tonight.",
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
          "PUT-AWAY, the ones that matter: cantaloupe → COUNTER until Monday. Roma tomatoes → COUNTER, never the fridge. Corn → fridge in husks. Corn tortillas → dairy case fridge (Tuesday, refrigerated — fine either way). Tangelos → counter bowl. Everything else is normal.",
          "SEAL SESSION 1 — Chicken bank, 4 bags with 4 DIFFERENT jobs (2 packs = ~5.6 lb, ~1.4 lb per bag): bag 1 = fajita rub (proven), bag 2 = Kinder's Cowboy Butter (proven on the chops), bag 3 = plain salt + pepper (the wild card — Stubb's glaze, lemon butter, parm crust at cook time), bag 4 = soy-ginger (2 tbsp soy + 1 tbsp brown sugar + grated ginger — all owned). Seal, label each with its rub, FREEZE. Four future dinners at ~$2.75 each, no two alike — none of them this week.",
          "SEAL SESSION 2 — Tuesday's GUEST NIGHT carnitas (Jessica joins): rub the rib strips all over with 1 tbsp cumin + 1 tsp oregano (crushed) + 1.5 tsp kosher salt + black pepper, drop in 2 sliced garlic cloves, squeeze in the juice of 1 tangelo (peel strips in too). Seal flat, label, FRIDGE — only 1 day out this time, so no freezing needed; the bag drops fridge-cold into Monday night's bath once the chop dinner clears the pot.",
          "SEAL SESSION 3 (30 sec) — the BRAZILIAN BBQ chop pack: seal as-bought, label, FREEZE. It's the Combo Loco's second package and a future zero-prep dinner in a different flavor — the varied-prep rule at work.",
          "Cleanup: sealer wipe. Done."
        ]
      }
    },
    {
      id: "bbqchops",
      cost: { est: 14.86, servings: 4, note: "RECEIPT-TRUED 8/3: Mayela joins tonight (2 adults + 2 kids — matches the standard 4-serving size). Chops rang $9.88 (bigger pack than the 2.3 lb avg checked online), corn $1.00 (cheaper than expected), and the melon rang as H-E-B Summer Gem Dream Melon $3.98 — NOT the $1.97 Pecos cantaloupe planned (different product grabbed at the store; same prep)" },
      nutrition: { serving: "1 large chop + 1 ear buttered corn + Dream Melon wedges", calories: 620, protein: 44, carbs: 44, fat: 28 },
      daytime: [
        "MON ~1:30 PM (1 min): bath to 140°F, chops in (they hold until dinner, no rush)",
        "MON after dinner (1 min): bump the bath to 165°F, drop the fridge-cold carnitas bag — rides ~23-24 hr to Tuesday's guest dinner"
      ],
      title: "Texas BBQ Pork Chops with Griddled Corn & Dream Melon",
      slot: "Dinner 1 · Mon Aug 3",
      time: "~20 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "Mayela joins tonight (2 adults + 2 kids — the normal family size, so nothing to scale up). Rerun 8/2 (shop day): Thursday dropped off the cook week (meet the teacher, dinner on the run), but the family wants to KEEP chops rather than lose it — so it moves to Monday and fajitas gets bumped to a future week instead (the banked chicken keeps fine in the freezer). The ad does the seasoning work: Simply Seasoned BBQ chops at 33% off go bag-to-bath at 1:30, then take a hard sear next to corn rolling in Kerrygold on the flat top. H-E-B Summer Gem Dream Melon ended up in the cart instead of the planned Pecos cantaloupe — same easy wedge prep, still a fresh melon side (peaches were never a risk for Mayela either way). After dinner: bump the bath to 165°F and drop the carnitas bag, which is what sets up Tuesday's guest dinner.",
      links: [
        { label: "Serious Eats — sous vide pork chops guide", url: "https://www.seriouseats.com/sous-vide-pork-chops-recipe", tag: "primary" },
        { label: "r/sousvide — pork chop time/temp threads", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20chops", tag: "reddit" }
      ],
      swapNote: "140°F = juicy with a touch of blush, safe and ideal for lean loin chops. Corn griddles husk-off: butter, salt, rolling sear.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "chops 2-4 hr at 140°F (in since 1:30, unattended)",
        ingredients: [
          "H-E-B Simply Seasoned BBQ boneless pork loin chops, 1 pack as-bought (bag as-bought, 1 layer)",
          "5 ears corn, shucked",
          "2 tbsp Kerrygold butter + kosher salt",
          "1 whole H-E-B Summer Gem Dream Melon, cut into wedges at dinner",
          "1 tbsp canola oil"
        ],
        steps: [
          "~1:30 PM: seal the chops flat (pre-seasoned — nothing added), bath to 140°F, in they go.",
          "Dinner: Blackstone on high. Corn first: film of oil, roll the ears 8-10 min until charred in spots; finish with butter + salt.",
          "Pull the chops, pat VERY dry.",
          "Sear 60-90 seconds per side — crust only, they're already perfectly cooked.",
          "Rest 3 min while you cut the melon into wedges.",
          "Plate: chop, ear of corn, melon wedges. Kids: everything here is already kid-food.",
          "AFTER DINNER (1 min): bump the bath to 165°F, drop the fridge-cold carnitas bag — it rides ~23-24 hr to Tuesday's guest dinner.",
          "Cleanup: griddle scrape, tongs, trash the bag."
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
        "GUEST NIGHT — Jessica joins: pork butt strips (the same cut as carnitas, pre-boned at $2.29/lb) ride 23-24 hours at 165°F with cumin, oregano, garlic, and tangelo — dropped fridge-cold Monday evening, only 1 day out so no freezing needed — then shred and CRISP hard on the Blackstone. Warm corn tortillas, a quick cooked guajillo salsa from the restocked bags, charred white onion, lime, tangelos on the side, FREE refried beans from the clipped Combo Loco. No cilantro — outbreak ban — and honestly the charred onion + lime don't miss it. Kids: crispy carnitas tacos, same as the table — no separate dish tonight.",
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
          "Mi Tienda CHORIZO refried beans, 17.6 oz (the Combo Loco freebie rang chorizo-flavor, not plain pinto — arguably better with carnitas) — warmed in a small pot with a splash of water",
          "limes in wedges (bought as a 4-ct XL sleeved pack, $2.98) + 4-5 tangelos on the side",
          "kids eat carnitas tacos same as everyone else — no quesadilla track needed tonight"
        ],
        steps: [
          "~12:30 PM: make the salsa (above). It's fully cooked — ban-safe — and better by dinner.",
          "Dinner: pull the bag, pour the juices into a bowl and skim the fat — keep BOTH.",
          "Shred the pork into rough chunks — it falls apart on contact.",
          "Blackstone on high with 2 tbsp of the bag fat: carnitas spread thin, DON'T TOUCH for 2-3 min until the bottom is deep brown and crackly, flip once, 2 more min. Char the onion slabs alongside.",
          "Splash the meat with a few spoons of bag juices right at the end — steam + glaze in one move.",
          "Tortillas: 20 seconds per side on the griddle edge, stack in a towel.",
          "KID CHECKPOINT: crispy plain carnitas out first, straight into tacos with them. No second dish.",
          "Warm the refried beans in a small pot (splash of water, medium-low, stir) while the meat crisps — free side from the Combo Loco.",
          "Table: carnitas, warm tortillas, beans, salsa jar, charred + raw onion, lime wedges, tangelos. Build your own.",
          "Cleanup: griddle scrape while warm, one bowl, trash the bag. Leftover carnitas reseal for Friday — they reheat crispy."
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
        "Rerun per feedback: DOUBLED the shrimp (0.5 lb banked + 1 lb fresh = 1.5 lb) so this finally eats like a proper shrimp fried rice, not rice with a few shrimp in it. Yesterday's chilled rice crisped on the flat top with eggs, broccoli, and a soy-garlic-ginger finish — plus a thread of Kadoya toasted sesame oil off the heat. Kids plate before the finishers get loud. Last dinner of the week — nothing to prep for tomorrow.",
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
          "Cleanup: griddle scrape, one bowl. Nothing to prep for tomorrow — the week's done after this."
        ]
      }
    }
  ],
  // Read-only "On Hand" snapshot for the public page. Regenerated with each weekly plan
  // from pantry/inventory.json — sanitized: no staples ledger, no names.
  bank: [
    { name: "Cantaloupe (second half, cut, from last week)", qty: "~half melon", location: "fridge", useBy: "2026-07-31", note: "Past its clock — check before eating" },
    { name: "Organic limes", qty: "~3-5", location: "fridge", useBy: "2026-08-09", note: "No slot this week (fajitas deferred) — Tuesday's carnitas buys fresh limes separately" },
    { name: "Fresh ginger (partial knob)", qty: "~1 inch", location: "fridge", useBy: "2026-08-20", note: "Wednesday's fried rice — planned in" },
    { name: "Jumbo yellow onion, whole", qty: "1 (1.72 lb)", location: "pantry", useBy: "2026-08-26", note: "No slot this week (fajitas deferred) — free aromatics whenever fajitas land" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "Carnitas bag + salsa Tue, fried rice Wed — planned in (fajitas' portion deferred)" },
    { name: "Fajita-rubbed chicken breast bags, sealed raw", qty: "2.15 lb (2 per bag)", location: "freezer", useBy: "2026-11-26", note: "DEFERRED to a future week (fajitas bumped) — keeps fine frozen" },
    { name: "Gulf 50/70 shrimp, chamber-resealed", qty: "~0.5 lb", location: "freezer", useBy: "2026-10-28", note: "WEDNESDAY'S PROTEIN — DOUBLED per feedback with a fresh 1 lb bag bought Sunday (1.5 lb total); freezer → fridge Wednesday morning" },
    { name: "Steamable broccoli florets", qty: "1 x 12 oz bag", location: "freezer", useBy: "2027-01-27", note: "Wednesday's fried rice vegetable — planned in" },
    { name: "Dried chiles", qty: "~2-4 guajillos + most of the arbol bag", location: "pantry", useBy: "2027-07-28", note: "Tuesday's GUEST NIGHT salsa uses 2 guajillos + 1-2 arbol; the 3-bag restock on this week's list covers salsa macha and the next diabla" },
    { name: "H-E-B Breaded Shrimp (Meal Deal anchor, arriving Sunday)", qty: "2 boxes, 10-14 oz", location: "freezer", useBy: "2027-02-02", note: "Assigned: shrimp po'boy night — waiting for the outbreak bans to lift so bagged slaw is back in play; scheduled automatically that week" }
  ],
  grocery: [
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Simply Seasoned Boneless Pork Loin Chops — $6.88/pack IN-STORE VERIFIED ($2.99/lb, 2.3 lb avg): 1 TEXAS BBQ (Monday — the keeper) + 1 BRAZILIAN BBQ (seals to freezer Sunday — varied-prep bank)", qty: "2 packages — triggers the clipped Combo Loco (free Mi Tienda beans)", est: 13.8, aisle: "Meat Mkt back wall" },
        { name: "H-E-B Boneless Country-Style Boston Butt Pork Ribs, Texas-Size Pack — $10.54 IN-STORE VERIFIED ($2.59/lb, 4.07 lb avg; ad tag may say $2.29) — Tuesday's GUEST NIGHT CARNITAS (already sized for 5 — no extra needed for Jessica)", qty: "1 pack", est: 10.5, aisle: "Meat Market" },
        { name: "Hill Country Fare Boneless Skinless Split Chicken Breast — $5.50/pack IN-STORE VERIFIED ($1.97/lb, 2.79 lb avg)", qty: "2 packs (~5.6 lb, $11) — NOT this week's dinners: 4 bags, 4 preps, Sunday", est: 11.0, aisle: "Meat Mkt back wall" },
        { name: "H-E-B Wild Caught Frozen Peeled Large Texas Gulf Raw Shrimp, 50-70 ct/lb — $7.97/lb IN-STORE VERIFIED — DOUBLING Wednesday's fried rice shrimp per feedback", qty: "1 lb bag — combines with the banked 0.5 lb for 1.5 lb total", est: 8.0, aisle: "Seafood left wall" }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "H-E-B Sweet Corn on the Cob, 4 ct — $3.28 IN-STORE VERIFIED", qty: "1 pack (1 ear each) — Monday", est: 3.3, aisle: "15" },
        { name: "H-E-B Texas Roots Fresh Pecos Cantaloupe — $1.97 IN-STORE VERIFIED (sale, reg $3.48) — a proven family favorite, fills this week's fruit slot", qty: "1 whole — Monday", est: 2.0, aisle: "Produce" },
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
        { name: "H-E-B Grade AA Cage Free Large Brown Eggs, 12 ct — $2.66 IN-STORE VERIFIED (price cut) — STAPLE first-buy", qty: "1 dozen", est: 2.7, aisle: "Dairy right wall" }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
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
        { name: "Fiesta 'Chili Cascavel (Guajillo)' — $2.16 IN-STORE VERIFIED (label quirk: these ARE guajillos)", qty: "3 x 1.5 oz bags — Tuesday's GUEST NIGHT salsa now; salsa macha + next diabla ahead", est: 6.5, aisle: "8" }
      ]
    }
  ]
};
