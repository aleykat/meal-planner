// Week of 2026-08-17 — WEEK 4, HEB-only. Our guest is confirmed Tuesday, maybe Thursday —
// Thursday's chicken is sized for 5 either way (extra banks as leftover if she's not
// there). Pork belly (8/13) was a 🎯 Hit again, confirming the ~4.75 lb sizing —
// logged to feedback this run. Lightest prep week in a while: no same-day Sunday
// seal jobs except freezing the marinated Thursday chicken (4 days out — the
// shelf-life rule requires freezing, not just chamber-sealing, at that distance) and
// buying the Friday shrimp FROZEN (5 days out, counter shrimp can't be re-frozen at
// home). Rice restock trigger hit (2 cooks left after 8/13) — 5 lb bag back on this
// week's list. Outbreak recheck 8/15: both bans continue, situation still active
// (iceberg lettuce outbreak still expanding per trackers, 2 deaths; cilantro/parsley
// NC cluster still open/unresolved) — no bagged salads, no raw cilantro/parsley.
// PRICE-VERIFIED + COUPONS CHECKED 8/16 via Chrome (logged into the HEB account): most items came
// in CHEAPER than estimated. Two corrections: the ad's "31% off Jumbo shrimp $8.97/lb"
// turned out to be the FRESH counter case, not a frozen bag — switched to H-E-B Wild
// Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb, $8.37/lb (actually
// cheaper, and correctly frozen for a 5-days-out cook per the shrimp rule). The ad's
// "Valentina salsa $1.18" didn't match any real listing (Valentina is a thin table hot
// sauce anyway, not a chunky salsa) — switched to H-E-B Mi Tienda Salsa Roja - Hot, 16
// oz, $3.36. Clipped 3 coupons that apply to this week's list: $2 off Majestic
// Pickles, 75¢ off H-E-B Mixla Tortillas, 50¢ off H-E-B Natural Hatch Pepper Shredded
// Cheese (swapped in for the plain Mexican blend — pairs well with fajitas). The
// H-E-B.com shopping list was empty, populated with all 21 new-buy items as plain
// entries, then each one matched to a real product one at a time via "Find item"
// (chosen deliberately, not bulk/automatic — avoiding the 8/9 incident). That match
// pass gave LIVE prices + real aisle/wall locations for every item (used to refine
// pantry/aisle-map.json). PANTRY CHECK 8/16: flour tortillas, salsa,
// ketchup, and pickles are already on hand — dropped from the list. Ginger is also
// on hand (frozen) — dropped from Thursday's marinade buy. Cheese switched from the
// out-of-stock Hatch Pepper pick to a plain H-E-B Mexican Style Shredded Cheese
// Blend, $2.98 (live-matched in the HEB.com list, cheaper than the general search
// price). Limes dropped too — not needed for fajitas this time. Tuesday's burgers
// drop lettuce and tomato entirely this time — tomato specifically is a standing
// skip for burgers going forward, not just this week. TORTILLAS REVISED BACK: a
// fresh packaged (non-bakery, shelf-stable) 20 ct bag is now on the list after all —
// sized to cover both fajita night and a new "The Teen's Lunches" grocery section
// (flour tortillas, bananas, thin-sliced turkey lunch meat, sliced cheddar, extra
// cucumbers, green grapes) added at explicit request this week. This is a one-off
// addition, not a change to the standing rule that kid staples stay off the system
// by default. Totals below are final.
// RECEIPT-TRUED 8/16 (curbside order #HEB194943155375715328, picked up 2:00 PM):
// order was CURBSIDE this time (not in-store from the Keep checklist as usual) —
// $4.95 curbside fee applied, not allocated to any single meal. Small price drift
// on most items (a few cents each, normal online-vs-pickup variance). Two real
// fulfillment misses: bananas only partially filled (1.93 of 4.8 lb requested —
// closer to 4 bananas than the planned ~10) and chicken breast came in at 2.69 of
// 2.79 lb requested (trivial, doesn't change the recipe). Grapes came in bigger
// than expected (2.65 lb vs ~2 lb) — free bonus, no complaint. All figures below
// are the trued receipt prices.
// Joe V's checked — nothing clears the $10-cheaper threshold, staying HEB-only.
const WEEK = {
  id: "2026-08-17",
  label: "Dinners Mon Aug 17, Tue Aug 18 (guest), Thu Aug 20 (maybe guest) & Fri Aug 21 · HEB Irving only · shop Sun Aug 16",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 8/12–8/18, pulled 8/16. Anchors touched by this menu: Hill Country Fare Boneless Skinless Split Chicken Breast $1.77/lb VERIFIED (Thursday's protein — a 2.79 lb pack, genuinely boneless despite the 'split' name, genuinely the HCF value tier not a mislabeled H-E-B Natural pack). Friday's shrimp is NOT the ad anchor after all — see correction note above; verified real pick is H-E-B Wild Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb, $8.37/lb. Two of the four proteins are already-banked from prior weeks at their true paid price: fajita chicken bag #1 (~$4.66, sealed 7/26, finally used after 3 deferrals) and the full Wagyu smash burger kit (~$33.69, bought 8/9, deferred once already). Checked Joe V's — nothing beats the HEB-only plan by the $10 threshold, staying HEB-only. Outbreak recheck 8/15: both bans continue — no bagged salads, no raw cilantro/parsley.",
  meals: [
    {
      id: "fajitas",
      cost: { est: 15.38, servings: 5, note: "RECEIPT-TRUED 8/16 (curbside pickup): salsa already on hand ($0); limes dropped. Tortillas came 2-pack ($2.23 ea, $4.46 total) — 1 pack's worth (~$2.23) counted here, the 2nd pack goes to the Teen's Lunches section. Cheese: H-E-B Mexican Style Shredded Cheese Blend $3.13 (switched from out-of-stock Hatch Pepper). Banked fajita chicken bag #1 at its ~$4.66 true paid price (7/26 buy). Bell peppers $2.27, Daisy Squeeze sour cream $3.09. Banked onion + banked green beans side = $0." },
      nutrition: { serving: "2 tortillas + fajita chicken/peppers/onion + toppings + green beans side", calories: 550, protein: 36, carbs: 45, fat: 24 },
      daytime: [
        "MON ~4:00 PM (1 min): sous vide bath to 150°F, drop the frozen fajita chicken bag — no thaw, frozen start adds time, still ready well before dinner"
      ],
      title: "Blackstone Chicken Fajitas with Charred Peppers & Onions & Steamed Green Beans",
      slot: "Dinner 1 · Mon Aug 17",
      time: "~20 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "Family night — fajita chicken bag #1 (Bolner's fajita rub, sealed 7/26) finally gets cooked after being deferred three separate weeks. Sous vide to temp, then a hot Blackstone sear with peppers and onion for real char. Banked steamable green beans round out the plate for free. Cilantro stays off the toppings bar — the raw-herb ban is still active — salsa carries the brightness instead.",
      links: [
        { label: "Serious Eats — sous vide chicken breast guide", url: "https://www.seriouseats.com/sous-vide-chicken-breast-recipe", tag: "primary" },
        { label: "r/sousvide — chicken fajita threads", url: "https://www.reddit.com/r/sousvide/search/?q=chicken%20fajitas", tag: "reddit" }
      ],
      swapNote: "150°F holds the chicken juicy without drying out on the griddle sear after. Dropping from frozen just extends the bath — no separate thaw step needed.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "chicken ~2 hr at 150°F from frozen (in since 4:00 PM, unattended)",
        ingredients: [
          "banked FAJITA chicken bag #1, sealed raw (2.15 lb, Bolner's fajita rub)",
          "3 bell peppers, sliced",
          "banked jumbo yellow onion (partial), sliced",
          "H-E-B Original Fajita Flour Tortillas, 20 ct ($2.12, also covers the teen's lunches)",
          "H-E-B Mexican Style Shredded Cheese Blend, 8 oz ($2.98)",
          "Daisy Squeeze Sour Cream, 14 oz ($2.94)",
          "salsa (already on hand)",
          "banked H-E-B Steamable Green Beans, 12 oz"
        ],
        steps: [
          "~4:00 PM: sous vide bath to 150°F, drop the frozen chicken bag straight in.",
          "At dinner: pull chicken, pat dry, slice into strips.",
          "Blackstone on HIGH: sear chicken + peppers + onion together ~8-10 min until charred at the edges.",
          "Warm tortillas on the griddle edge, 20-30 sec per side.",
          "Microwave the green beans 4-5 min, drain, salt.",
          "KID CHECKPOINT: plain chicken + peppers + tortilla + cheese, no salsa — same dish, just build their own before the salsa comes out.",
          "Build the toppings bar: cheese, sour cream, salsa.",
          "Cleanup: Blackstone scrape, one bowl for toppings."
        ]
      }
    },
    {
      id: "smashburgers",
      cost: { est: 15.25, servings: 3, note: "REFIGURED 8/19 (cooked for 3, not the planned 5): the meal carries only what was consumed, at true paid price — beef 1 of 2 lb $6.99, buns 3 of 8 $2.99, cheese 10 of 24 slices $3.03 (6 on burgers + 4 on cheesy tots), tots ~half bag ~$2.24 EST = $15.25 (~$5.08/serving). The rest banks forward at paid price for a future burger night: beef $6.99 (1 lb, sell-by 8/27), buns $4.97 (5), cheese $4.25 (14 slices), tots ~$2.23 — $18.44 of the original $33.69 sunk 8/9. No new spend either way; no longer the week's $25+ meal. Ketchup and pickles already on hand; no lettuce or tomato (tomato is a standing skip on burgers)." },
      nutrition: { serving: "1 smash burger + tots", calories: 780, protein: 38, carbs: 52, fat: 46 },
      daytime: [],
      title: "Wagyu Smash Burgers with Tater Tots",
      slot: "Dinner 2 · Tue Aug 18 — GUEST NIGHT (our guest, 3 adults + 2 kids)",
      time: "~20 min at dinner",
      equipment: ["Blackstone"],
      summary:
        "GUEST NIGHT — our guest joins. This is the burger night that got bumped to pizza on 8/11 for lack of cook time; the beef, buns, cheese, and tots have been sitting banked in the freezer/fridge ever since (sell-by 8/27, plenty of room). No lettuce or tomato on the burgers this time — tomato is a standing skip for burgers going forward.",
      links: [
        { label: "Serious Eats — smash burger technique", url: "https://www.seriouseats.com/how-to-make-smash-burgers-recipe", tag: "primary" }
      ],
      swapNote: "",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "smash patties ~3-4 min per side on the Blackstone; tots per bag instructions",
        ingredients: [
          "banked H-E-B Wagyu Ground Beef, 2 lb",
          "banked H-E-B Bakery Brioche Hamburger Buns, 5 of 8",
          "banked Kraft Deli Deluxe American Cheese Slices",
          "banked Ore-Ida Crispy Tater Tots, 32 oz",
          "banked jumbo yellow onion (partial), thin sliced",
          "ketchup, mustard, pickles (all already on hand)"
        ],
        steps: [
          "Tots into the air fryer or oven per package, timed to land with the burgers.",
          "Portion beef into 5 balls (~6 oz each). Blackstone screaming hot.",
          "Smash each ball flat with a spatula, salt and pepper. Sear ~3 min, flip, cheese on immediately, ~2-3 min more.",
          "Toast the buns cut-side down on the griddle, 30-60 sec.",
          "KID CHECKPOINT: plain patty + cheese + bun, toppings on the side to build themselves.",
          "Build the toppings bar: onion, pickles, ketchup, mustard.",
          "Cleanup: Blackstone scrape, one air fryer basket."
        ]
      }
    },
    {
      id: "gochujangchicken",
      cost: { est: 12.58, servings: 5, note: "RECEIPT-TRUED 8/16 (curbside pickup): ginger already on hand (frozen). Hill Country Fare Boneless Skinless Split Chicken Breast @ $1.77/lb (sale) — filled at 2.69 of 2.79 lb requested = $4.76, still plenty for 5 servings in a rice bowl. O'Food Gochujang Brown Rice Red Pepper Paste, 17.6 oz, new staple, $6.28. Green onions $0.70, cucumbers $0.84 (2 of the 5 bought — the other 3 are for the Teen's Lunches). Sized for 5 whether or not our guest joins — extra chicken banks as leftover if not." },
      nutrition: { serving: "1 bowl: gochujang chicken + jasmine rice + cucumber salad", calories: 560, protein: 40, carbs: 58, fat: 16 },
      daytime: [
        "SUN (any time, 10 min): mix the gochujang marinade, seal the raw chicken in it, FREEZE — Thursday's cook day is 4 days out, the shelf-life rule requires freezing (not just chamber-sealing) at that distance",
        "TUE (any time, 1 min): move the chicken bag from freezer to fridge — 2 days to thaw before Thursday",
        "THU ~4:00 PM (1 min): sous vide bath to 145°F, drop the marinated chicken bag straight in — no need to open it",
        "THU ~5:15 PM (10 min): quick-pickle the cucumbers, fridge to chill while the chicken finishes in the bath"
      ],
      title: "Gochujang-Glazed Chicken Rice Bowls with Quick Cucumber Salad",
      slot: "Dinner 3 · Thu Aug 20 — GUEST NIGHT? (our guest maybe)",
      time: "~15 min at dinner",
      equipment: ["Sous vide", "Rice cooker"],
      summary:
        "Our guest may or may not join Thursday — chicken's bought and sized for 5 either way, so nothing changes if she's not there, it just banks as leftover. New pantry staple: gochujang, a genuine Korean-flavor lane the family hasn't tried yet, picked at the premium-brand tier since it amortizes into future dishes. The cucumber salad repeats the side from 8/13's pork belly bowls — adults liked it there too. Switched to sous vide for the chicken: cubed breast dries out fast in a hot pan, and the bath was already free that afternoon.",
      links: [
        { label: "The Woks of Life — gochujang chicken", url: "https://thewoksoflife.com/gochujang-chicken/", tag: "primary" },
        { label: "The Woks of Life — quick Asian cucumber salad", url: "https://thewoksoflife.com/smashed-cucumber-salad/", tag: "alt" }
      ],
      swapNote: "Pre-marinating on the shelf-life-mandated freeze does double duty — the chicken gets 4 days of marinade time by the time it's cooked, more flavor than a same-day marinade would give. Sous vide to 145°F holds the cubes evenly juicy (easy to overcook diced breast in a hot pan); the bag then dumps straight into a hot skillet for a few minutes to reduce and caramelize the glaze — less active time at dinner than a raw pan-sear, not more.",
      recipe: {
        activeTime: "~15 min at dinner (+10 min cucumber salad earlier)",
        cookTime: "chicken ~1-1.5 hr at 145°F sous vide (in since ~4:00 PM), then ~5 min skillet reduce",
        ingredients: [
          "Hill Country Fare Boneless Skinless Split Chicken Breast, 2.79 lb pack ($4.94 verified), cubed",
          "MARINADE/GLAZE: 3 tbsp O'Food Gochujang Brown Rice Red Pepper Paste (new, $5.98) + 2 tbsp Kikkoman soy sauce (owned) + 1 tbsp brown sugar (owned) + 1 tbsp grated fresh ginger (already on hand, frozen) + 2 cloves banked garlic, minced",
          "2 cups H-E-B Thai Hom Mali jasmine rice (owned) + 2.5 cups water",
          "2 cucumbers, thin sliced",
          "CUCUMBER SALAD: 3 tbsp Marukan rice vinegar (owned) + 1 tbsp brown sugar (owned) + 0.5 tsp salt",
          "2-3 scallions, sliced (green parts, cooked into the glaze or scattered raw as a cooked-adjacent garnish)",
          "1 tsp Kadoya sesame oil (owned, finisher)"
        ],
        steps: [
          "Sun: whisk the marinade, toss with cubed chicken, seal, FREEZE.",
          "Tue: move to the fridge to thaw.",
          "Thu ~4:00 PM: sous vide bath to 145°F, drop the sealed marinated chicken bag straight in.",
          "Thu ~5:15 PM: cucumber salad — toss sliced cucumbers with rice vinegar, brown sugar, salt. Fridge to chill.",
          "Rice cooker on: rinse 2 cups jasmine until the water runs clear, 2.5 cups water, start.",
          "At dinner: pull the bag, empty chicken + glaze into a hot skillet over medium-high, ~5 min, tossing until the glaze reduces and clings and the edges catch a little color.",
          "KID CHECKPOINT: pull a portion of chicken from the bag before it hits the skillet, pan-sear plain with just salt for the kids' bowls.",
          "Bowls: rice, glazed chicken, cucumber salad, scallions, a drizzle of sesame oil.",
          "Cleanup: one skillet, rice cooker pot."
        ]
      }
    },
    {
      id: "shrimpscampi",
      cost: { est: 17.31, servings: 5, note: "DEFERRED 8/21 — pizza night instead (a friend treated the family); the whole scampi kit banks forward to a future week. Everything keeps: shrimp never thawed (still sealed frozen, $8.37), linguine $1.18, frozen garlic bread $2.50, butter $4.91, and the lemon ($0.35) is the only perishable — fridge-kept it holds ~3-4 weeks, so it should survive the wait. RECEIPT-TRUED 8/16 pricing retained (shrimp corrected earlier from the ad's fresh-counter case to the genuinely frozen 1 lb bag)." },
      nutrition: { serving: "shrimp + linguine in garlic butter sauce + garlic bread", calories: 620, protein: 32, carbs: 62, fat: 24 },
      daytime: [
        "FRI ~5:30 PM (15-20 min): cold-water thaw the frozen shrimp bag before the sous vide bath"
      ],
      title: "Garlic Butter Sous Vide Shrimp Scampi with Linguine & Garlic Bread",
      slot: "Dinner 4 · Fri Aug 21 — DEFERRED to a future week (pizza night)",
      time: "~25 min at dinner",
      equipment: ["Sous vide"],
      summary:
        "Family night, closes out the week. The ad's 'Jumbo shrimp 31% off' anchor turned out to be the fresh counter case when checked in-store 8/16, not a frozen bag — swapped to a genuinely FROZEN peeled/deveined pick since Friday is 5 days out from Sunday's shop and counter shrimp can't be re-frozen at home without turning to mush. It came in cheaper than the ad price anyway. Take & bake garlic bread instead of fresh bakery, since a Sunday baguette wouldn't survive to Friday. Butter restock — the Kerrygold ran out after 8/10.",
      links: [
        { label: "Serious Eats — sous vide shrimp guide", url: "https://www.seriouseats.com/sous-vide-shrimp-recipe", tag: "primary" },
        { label: "r/sousvide — shrimp scampi threads", url: "https://www.reddit.com/r/sousvide/search/?q=shrimp%20scampi", tag: "reddit" }
      ],
      swapNote: "135°F/20-30 min sous vide keeps the shrimp from going rubbery — pull straight into the hot garlic butter sauce to finish, no separate pan-sear needed.",
      recipe: {
        activeTime: "~25 min at dinner",
        cookTime: "shrimp 20-30 min at 135°F; pasta ~10-11 min boil",
        ingredients: [
          "H-E-B Wild Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb, 1 lb bag ($7.97 LIVE-MATCHED 8/16 — sold as a fixed 1 lb bag, close enough to the planned 1.25 lb for a pasta-forward dish)",
          "H-E-B Linguine Pasta Noodles, 16 oz ($1.18 verified)",
          "H-E-B Frozen Garlic Bread - Traditional, 16 oz ($2.50 verified)",
          "4 tbsp Kerrygold Grass-Fed Pure Irish Salted Butter, 8 oz ($4.91 verified)",
          "1 lemon, juiced",
          "banked garlic, minced (2-3 cloves)",
          "crushed red pepper (owned), to taste"
        ],
        steps: [
          "~5:30 PM: cold-water thaw the shrimp bag, 15-20 min.",
          "Sous vide bath to 135°F, shrimp in, 20-30 min.",
          "Boil the linguine per package, reserve 0.5 cup pasta water before draining.",
          "Garlic bread into the oven per package timing to land with dinner.",
          "Skillet: melt butter, garlic, crushed red pepper, 1-2 min until fragrant.",
          "Pull shrimp from the bath, add to the skillet with lemon juice and a splash of reserved pasta water.",
          "Toss in the drained linguine, coat well.",
          "KID CHECKPOINT: plain buttered linguine + a few shrimp on the side, held back before the red pepper goes in.",
          "Plate with garlic bread.",
          "Cleanup: one skillet, one pasta pot."
        ]
      }
    }
  ],
  // Read-only "On Hand" snapshot for the public page. Regenerated with each weekly plan
  // from pantry/inventory.json — sanitized: no staples ledger, no names.
  bank: [
    { name: "FAJITA chicken bag #2, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Second fajita bag — no slot this week, bag #1 finally used" },
    { name: "COWBOY BUTTER chicken bag, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Proven flavor. Drops frozen at 150°F +~1 hr" },
    { name: "PLAIN S&P WILD CARD chicken bag, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Takes any direction at cook time" },
    { name: "SOY-GINGER chicken bag, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Drops frozen at 150°F +~1 hr" },
    { name: "Brazilian BBQ pork chop, single leftover", qty: "1 chop, sealed", location: "freezer", useBy: "2026-12-02", note: "No dinner slot — good for a quick lunch, single portion" },
    { name: "H-E-B Breaded Shrimp (Meal Deal anchor)", qty: "1 box, 10-14 oz", location: "freezer", useBy: "2027-02-02", note: "Still on hold — assigned to shrimp po'boy night once the bagged-salad ban lifts (still active as of 8/15)" },
    { name: "H-E-B Steamable Green Beans, 12 oz", qty: "1 bag", location: "freezer", useBy: "2027-02-02", note: "MONDAY'S SIDE — free Meal Deal side, planned in" },
    { name: "Jumbo yellow onion, whole (partial)", qty: "~1 whole, less this week's use", location: "pantry", useBy: "2026-08-26", note: "PLANNED IN — Monday's fajitas + Tuesday's burgers" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "PLANNED IN — Thursday's marinade + Friday's scampi, light use" },
    { name: "Thai Hom Mali jasmine rice, 5 lb bag (tracked per 2-cup cook)", qty: "~4.25 cups left — ~2 cooks, RESTOCK ON THIS WEEK'S LIST", location: "pantry", useBy: null, note: "PLANNED IN — Thursday's rice bowls use the last cook; 5 lb restock is on this week's grocery list" }
  ],
  grocery: [
    {
      section: "Bakery & Bread",
      items: [
        { name: "H-E-B Original Fajita Flour Tortillas, 20 ct — $2.23 ea RECEIPT-TRUED 8/16, packaged/shelf-stable (not bakery-fresh) — bought 2 packs (1 for Monday's fajitas, 1 for the teen's lunches)", qty: "2 packs (20 ct each)", est: 4.46, aisle: "Aisle 5" }
      ]
    },
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Wild Caught Frozen Peeled Large Texas Gulf Raw Shrimp, 50-70 ct/lb — $8.37 RECEIPT-TRUED 8/16 (correction: the ad's 'Jumbo 31% off' item was the fresh counter case, not frozen — this pick is genuinely frozen+peeled)", qty: "1 lb — Friday's scampi", est: 8.37, aisle: "In Seafood on the Left Wall" },
        { name: "Hill Country Fare Boneless Skinless Split Chicken Breast — On Sale $1.77/lb RECEIPT-TRUED 8/16, genuinely boneless despite the 'split' name, genuine HCF value tier not H-E-B Natural — filled at 2.69 of 2.79 lb requested", qty: "2.69 lb — Thursday's gochujang bowls", est: 4.76, aisle: "In Meat Market on the Back Wall" }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "Fresh Green Bell Peppers, 3 ct — $2.27 RECEIPT-TRUED 8/16", qty: "3 — Monday's fajitas", est: 2.27, aisle: "In Produce on the Left Wall" },
        { name: "Fresh Cucumber, Each — $0.42 ea RECEIPT-TRUED 8/16", qty: "5 total — 2 for Thursday's cucumber salad, 3 for the teen's lunches", est: 2.10, aisle: "In Produce" },
        { name: "Fresh Green Onions, Each — $0.70 RECEIPT-TRUED 8/16", qty: "1 bunch — Thursday's garnish", est: 0.70, aisle: "In Produce on the Left Wall" },
        { name: "Fresh Small Lemon, Each — $0.35 RECEIPT-TRUED 8/16", qty: "1 — Friday's scampi", est: 0.35, aisle: "In Produce" }
      ]
    },
    {
      section: "Dairy & Cheese",
      items: [
        { name: "H-E-B Mexican Style Shredded Cheese Blend, 8 oz — $3.13 RECEIPT-TRUED 8/16 (switched from Hatch Pepper — that pick was out of stock anyway)", qty: "1 bag — Monday's fajitas", est: 3.13, aisle: "In Meat Market on the Back Wall" },
        { name: "Daisy Squeeze Sour Cream, 14 oz — $3.09 RECEIPT-TRUED 8/16", qty: "1 bottle — Monday's fajitas (served at the table)", est: 3.09, aisle: "In Dairy on the Back Wall" },
        { name: "Kerrygold Grass-Fed Pure Irish Salted Butter, 8 oz — $4.91 RECEIPT-TRUED 8/16", qty: "1 pack — restock, Friday's scampi", est: 4.91, aisle: "In Dairy on the Right Wall" }
      ]
    },
    {
      section: "Frozen",
      items: [
        { name: "H-E-B Frozen Garlic Bread - Traditional, 16 oz — $2.50 RECEIPT-TRUED 8/16", qty: "1 loaf — Friday's scampi", est: 2.50, aisle: "Aisle 12" }
      ]
    },
    {
      section: "Pantry & Condiments",
      items: [
        { name: "H-E-B Linguine Pasta Noodles, 16 oz — $1.18 RECEIPT-TRUED 8/16", qty: "1 box — Friday's scampi", est: 1.18, aisle: "Aisle 6" }
      ]
    },
    {
      section: "Staples Stock-Up (first buy — new pantry staple this week)",
      items: [
        { name: "O'Food Gochujang Brown Rice Red Pepper Paste, 17.6 oz — $6.28 RECEIPT-TRUED 8/16, amortizes into future Korean-leaning dishes", qty: "1 jar — Thursday's chicken", est: 6.28, aisle: "Aisle 6" }
      ]
    },
    {
      section: "Restock",
      items: [
        { name: "H-E-B Thai Hom Mali Jasmine Rice, 5 lbs — $7.34 RECEIPT-TRUED 8/16, restock trigger hit (2 cooks left after 8/13)", qty: "1 bag", est: 7.34, aisle: "Aisle 6" }
      ]
    },
    {
      section: "The Teen's Lunches (one-off addition, requested 8/16)",
      items: [
        { name: "H-E-B Original Fajita Flour Tortillas, 20 ct (2nd pack) — $2.23 RECEIPT-TRUED 8/16", qty: "1 pack (20 ct)", est: 2.23, aisle: "Aisle 5" },
        { name: "Fresh Bunch of Bananas — $0.94 RECEIPT-TRUED 8/16 — ⚠ PARTIAL FILL: only 1.93 of 4.8 lb requested was available (curbside substitution), closer to ~4 bananas than the planned ~10", qty: "1.93 lb filled (of 2 bunches requested)", est: 0.94, aisle: "In Produce" },
        { name: "Hill Country Fare Thin Sliced Oven-Roasted Turkey Breast Lunch Meat, 9 oz — $3.75 RECEIPT-TRUED 8/16, packaged (not from the deli counter)", qty: "1 pack", est: 3.75, aisle: "In Meat Market on the Back Wall" },
        { name: "H-E-B Sharp Cheddar Sliced Cheese, 10 ct — $3.13 RECEIPT-TRUED 8/16", qty: "1 pack", est: 3.13, aisle: "In Meat Market on the Back Wall" },
        { name: "H-E-B Premium Fresh Seedless White Grapes — $8.29 RECEIPT-TRUED 8/16 (came in bigger than expected: 2.65 lb vs the ~2 lb planned, free bonus)", qty: "2.65 lb", est: 8.29, aisle: "In Produce on the Front Wall" }
      ]
    }
  ]
};
