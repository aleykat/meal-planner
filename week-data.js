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
// H-E-B.com shopping list was empty and is now populated with all 21 new-buy items
// (plain list entries, no "Find item" auto-match used — avoiding the 8/9 incident).
// Joe V's checked — nothing clears the $10-cheaper threshold, staying HEB-only.
const WEEK = {
  id: "2026-08-17",
  label: "Dinners Mon Aug 17, Tue Aug 18 (guest), Thu Aug 20 (maybe guest) & Fri Aug 21 · HEB Irving only · shop Sun Aug 16",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 8/12–8/18, pulled 8/16. Anchors touched by this menu: Hill Country Fare Boneless Skinless Split Chicken Breast $1.77/lb VERIFIED (Thursday's protein — a 2.79 lb pack, genuinely boneless despite the 'split' name, genuinely the HCF value tier not a mislabeled H-E-B Natural pack). Friday's shrimp is NOT the ad anchor after all — see correction note above; verified real pick is H-E-B Wild Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb, $8.37/lb. Two of the four proteins are already-banked from prior weeks at their true paid price: fajita chicken bag #1 (~$4.66, sealed 7/26, finally used after 3 deferrals) and the full Wagyu smash burger kit (~$33.69, bought 8/9, deferred once already). Checked Joe V's — nothing beats the HEB-only plan by the $10 threshold, staying HEB-only. Outbreak recheck 8/15: both bans continue — no bagged salads, no raw cilantro/parsley.",
  meals: [
    {
      id: "fajitas",
      cost: { est: 20.65, servings: 5, note: "PRICE-VERIFIED 8/16: banked fajita chicken bag #1 at its ~$4.66 true paid price (7/26 buy, no itemized receipt line). Bell peppers $4.50 (est), H-E-B Mixla tortillas $2.29 - 75¢ coupon = $1.54 net, H-E-B Natural Hatch Pepper shredded cheese ~$3.50 est - 50¢ coupon = $3.00 net, Daisy Squeeze sour cream $3.09 verified, H-E-B Mi Tienda Salsa Roja - Hot $3.36 verified (correction — the ad's '$1.18 Valentina salsa' didn't match any real listing and Valentina is a thin hot sauce, not a chunky salsa anyway), lime $0.50 (est). Banked onion + banked green beans side = $0 marginal." },
      nutrition: { serving: "2 tortillas + fajita chicken/peppers/onion + toppings + green beans side", calories: 550, protein: 36, carbs: 45, fat: 24 },
      daytime: [
        "MON ~4:00 PM (1 min): sous vide bath to 150°F, drop the frozen fajita chicken bag — no thaw, frozen start adds time, still ready well before dinner"
      ],
      title: "Blackstone Chicken Fajitas with Charred Peppers & Onions & Steamed Green Beans",
      slot: "Dinner 1 · Mon Aug 17",
      time: "~20 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "Family night — fajita chicken bag #1 (Bolner's fajita rub, sealed 7/26) finally gets cooked after being deferred three separate weeks. Sous vide to temp, then a hot Blackstone sear with peppers and onion for real char. Banked steamable green beans round out the plate for free. Cilantro stays off the toppings bar — the raw-herb ban is still active — lime and salsa carry the brightness instead.",
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
          "H-E-B Mixla Corn & Flour Blend Tortillas, 12 ct ($2.29, 75¢ coupon clipped)",
          "H-E-B Natural Hatch Pepper Shredded Cheese, 8 oz (50¢ coupon clipped)",
          "Daisy Squeeze Sour Cream, 14 oz ($3.09 verified)",
          "H-E-B Mi Tienda Salsa Roja - Hot, 16 oz ($3.36 verified)",
          "1-2 limes, wedged",
          "banked H-E-B Steamable Green Beans, 12 oz"
        ],
        steps: [
          "~4:00 PM: sous vide bath to 150°F, drop the frozen chicken bag straight in.",
          "At dinner: pull chicken, pat dry, slice into strips.",
          "Blackstone on HIGH: sear chicken + peppers + onion together ~8-10 min until charred at the edges.",
          "Warm tortillas on the griddle edge, 20-30 sec per side.",
          "Microwave the green beans 4-5 min, drain, salt.",
          "KID CHECKPOINT: plain chicken + peppers + tortilla + cheese, no salsa — same dish, just build their own before the salsa comes out.",
          "Build the toppings bar: cheese, sour cream, salsa, lime.",
          "Cleanup: Blackstone scrape, one bowl for toppings."
        ]
      }
    },
    {
      id: "smashburgers",
      cost: { est: 41.69, servings: 5, note: "All big-ticket items already banked from 8/9's deferred burger night, counted at their true paid price: Wagyu beef $13.98, brioche buns $7.96, Kraft American cheese $7.28, Ore-Ida tots $4.47 ($33.69 sunk). New buys: whole-head lettuce $1.50 (est), tomato $2.00 (est), ketchup $2.50 (est), Majestic Pickles ~$2.00 net (coupon clipped 8/16, $2 off). New spend this meal: ~$8.00. ⚠ This is the week's one $25+ meal — no second one this week, so no check-in needed." },
      nutrition: { serving: "1 smash burger + tots", calories: 780, protein: 38, carbs: 52, fat: 46 },
      daytime: [],
      title: "Wagyu Smash Burgers with Tater Tots",
      slot: "Dinner 2 · Tue Aug 18 — GUEST NIGHT (our guest, 3 adults + 2 kids)",
      time: "~20 min at dinner",
      equipment: ["Blackstone"],
      summary:
        "GUEST NIGHT — our guest joins. This is the burger night that got bumped to pizza on 8/11 for lack of cook time; the beef, buns, cheese, and tots have been sitting banked in the freezer/fridge ever since (sell-by 8/27, plenty of room). Whole-head lettuce this time instead of the pre-cut package — that was a one-time approved exception to the bagged-greens ban, not a standing pass to rebuy.",
      links: [
        { label: "Serious Eats — smash burger technique", url: "https://www.seriouseats.com/how-to-make-smash-burgers-recipe", tag: "primary" }
      ],
      swapNote: "Whole-head iceberg or romaine, washed and torn to leaf, replaces the pre-cut Burger Leaf Lettuce Leaves from 8/9 — cheaper and clear of the bagged-greens ban entirely, no exception needed.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "smash patties ~3-4 min per side on the Blackstone; tots per bag instructions",
        ingredients: [
          "banked H-E-B Wagyu Ground Beef, 2 lb",
          "banked H-E-B Bakery Brioche Hamburger Buns, 5 of 8",
          "banked Kraft Deli Deluxe American Cheese Slices",
          "banked Ore-Ida Crispy Tater Tots, 32 oz",
          "banked jumbo yellow onion (partial), thin sliced",
          "1 whole-head iceberg or romaine lettuce, leaves separated",
          "2-3 tomatoes, sliced",
          "ketchup, mustard (owned), Majestic Pickles ($2 coupon clipped)"
        ],
        steps: [
          "Tots into the air fryer or oven per package, timed to land with the burgers.",
          "Portion beef into 5 balls (~6 oz each). Blackstone screaming hot.",
          "Smash each ball flat with a spatula, salt and pepper. Sear ~3 min, flip, cheese on immediately, ~2-3 min more.",
          "Toast the buns cut-side down on the griddle, 30-60 sec.",
          "KID CHECKPOINT: plain patty + cheese + bun, toppings on the side to build themselves.",
          "Build the toppings bar: lettuce, tomato, onion, pickles, ketchup, mustard.",
          "Cleanup: Blackstone scrape, one air fryer basket."
        ]
      }
    },
    {
      id: "gochujangchicken",
      cost: { est: 15.22, servings: 5, note: "PRICE-VERIFIED 8/16: Hill Country Fare Boneless Skinless Split Chicken Breast, 2.79 lb pack @ $1.77/lb (sale) = $4.94 verified — the single sale-size pack, plenty for 5 servings in a rice bowl (revised down from an earlier 3.75 lb guess). O'Food Gochujang Brown Rice Red Pepper Paste, 17.6 oz, new staple, $6.28 verified. Fresh ginger $1.00 (est), scallions $1.50 (est), cucumbers $1.50 (est). Sized for 5 whether or not our guest joins — extra chicken banks as leftover if not." },
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
          "MARINADE/GLAZE: 3 tbsp O'Food Gochujang Brown Rice Red Pepper Paste (new, $6.28) + 2 tbsp Kikkoman soy sauce (owned) + 1 tbsp brown sugar (owned) + 1 tbsp grated fresh ginger + 2 cloves banked garlic, minced",
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
      cost: { est: 19.80, servings: 5, note: "PRICE-VERIFIED 8/16 + CORRECTED: the ad's 'Jumbo shrimp $8.97/lb, 31% off' turned out to be the FRESH counter case, not frozen — swapped to H-E-B Wild Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb, $8.37/lb verified (actually cheaper, and correctly frozen for a 5-days-out cook). 1.25 lb = $10.46. H-E-B Linguine Pasta Noodles $1.18 verified, H-E-B Frozen Garlic Bread - Traditional 16 oz $2.50 verified, Kerrygold Grass-Fed Salted Butter 8 oz $4.91 verified, lemon $0.75 (est)." },
      nutrition: { serving: "shrimp + linguine in garlic butter sauce + garlic bread", calories: 620, protein: 32, carbs: 62, fat: 24 },
      daytime: [
        "FRI ~5:30 PM (15-20 min): cold-water thaw the frozen shrimp bag before the sous vide bath"
      ],
      title: "Garlic Butter Sous Vide Shrimp Scampi with Linguine & Garlic Bread",
      slot: "Dinner 4 · Fri Aug 21",
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
          "H-E-B Wild Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb, 1.25 lb ($8.37/lb verified)",
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
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Wild Caught Frozen Peeled Large Texas Gulf Shrimp, 50-70 ct/lb — $8.37/lb VERIFIED 8/16 (correction: the ad's 'Jumbo 31% off' item was the fresh counter case, not frozen — this pick is genuinely frozen+peeled and cheaper anyway)", qty: "1.25 lb — Friday's scampi", est: 10.46, aisle: "" },
        { name: "Hill Country Fare Boneless Skinless Split Chicken Breast — $1.77/lb VERIFIED 8/16 (2.79 lb sale pack, genuinely boneless, genuine HCF value tier not H-E-B Natural)", qty: "1 pack, ~2.79 lb — Thursday's gochujang bowls", est: 4.94, aisle: "" }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "Bell peppers", qty: "3 — Monday's fajitas", est: 4.5, aisle: "" },
        { name: "Fresh cucumbers", qty: "2 — Thursday's cucumber salad", est: 1.5, aisle: "" },
        { name: "Fresh ginger", qty: "1 small knob — Thursday's marinade", est: 1.0, aisle: "" },
        { name: "Scallions", qty: "1 bunch — Thursday's garnish", est: 1.5, aisle: "" },
        { name: "Limes", qty: "1-2 — Monday's fajita toppings", est: 0.5, aisle: "" },
        { name: "Lettuce, whole head (iceberg or romaine)", qty: "1 — Tuesday's burgers", est: 1.5, aisle: "" },
        { name: "Tomatoes", qty: "2-3 — Tuesday's burgers", est: 2.0, aisle: "" },
        { name: "Lemon", qty: "1 — Friday's scampi", est: 0.75, aisle: "" }
      ]
    },
    {
      section: "Dairy & Cheese",
      items: [
        { name: "H-E-B Natural Hatch Pepper Shredded Cheese, 8 oz — 50¢ coupon clipped 8/16", qty: "1 bag — Monday's fajitas", est: 3.0, aisle: "" },
        { name: "Daisy Squeeze Sour Cream, 14 oz — $3.09 VERIFIED", qty: "1 bottle — Monday's fajitas (served at the table)", est: 3.09, aisle: "" },
        { name: "Kerrygold Grass-Fed Pure Irish Salted Butter, 8 oz — $4.91 VERIFIED", qty: "1 pack — restock, Friday's scampi", est: 4.91, aisle: "" }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
        { name: "H-E-B Mixla Corn & Flour Blend Tortillas, 12 ct — $2.29 VERIFIED, 75¢ coupon clipped 8/16", qty: "1 pack — Monday's fajitas", est: 1.54, aisle: "" }
      ]
    },
    {
      section: "Frozen",
      items: [
        { name: "H-E-B Frozen Garlic Bread - Traditional, 16 oz — $2.50 VERIFIED", qty: "1 loaf — Friday's scampi", est: 2.5, aisle: "" }
      ]
    },
    {
      section: "Pantry & Condiments",
      items: [
        { name: "H-E-B Mi Tienda Salsa Roja - Hot, 16 oz — $3.36 VERIFIED (correction: the ad's 'Valentina salsa $1.18' didn't match any real listing, and Valentina is a thin table hot sauce, not a chunky salsa anyway)", qty: "1 jar — Monday's fajitas", est: 3.36, aisle: "" },
        { name: "Ketchup", qty: "1 bottle — Tuesday's burgers", est: 2.5, aisle: "" },
        { name: "Majestic Pickles, 24 oz — $2 coupon clipped 8/16 (check if already on hand first)", qty: "1 jar — Tuesday's burgers", est: 2.0, aisle: "" },
        { name: "H-E-B Linguine Pasta Noodles, 16 oz — $1.18 VERIFIED", qty: "1 box — Friday's scampi", est: 1.18, aisle: "" }
      ]
    },
    {
      section: "Staples Stock-Up (first buy — new pantry staple this week)",
      items: [
        { name: "O'Food Gochujang Brown Rice Red Pepper Paste, 17.6 oz — $6.28 VERIFIED, amortizes into future Korean-leaning dishes", qty: "1 jar — Thursday's chicken", est: 6.28, aisle: "" }
      ]
    },
    {
      section: "Restock",
      items: [
        { name: "H-E-B Thai Hom Mali Jasmine Rice, 5 lbs — $7.34 VERIFIED, restock trigger hit (2 cooks left after 8/13)", qty: "1 bag", est: 7.34, aisle: "" }
      ]
    }
  ]
};
