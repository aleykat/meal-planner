// Week of 2026-08-10 — WEEK 3, HEB-only. REVISED 8/9 (shop day): Jason only needs 3
// meals this week — Mon, Tue, Fri. Fajitas deferred a 3RD time (banked chicken keeps
// fine frozen, no rush). Blackstone is BACK IN SERVICE (propane swapped Monday).
// Anchor this week: Aiden's requested pork belly, sized up per 7/30 feedback ("wants
// more meat per serving"), moved to Friday since Wed/Thu are off the cook week —
// belly gets sealed + FROZEN Sunday (cook day is now 4 days out, so it freezes per
// the shelf-life rule) and drops frozen Thursday evening for Friday dinner.
// One protein is already-banked from a prior week's deal-buying at $0 marginal cost:
// Brazilian BBQ pork chops (8/2 Combo Loco), finally cooked Tuesday.
// Outbreak recheck 8/7: BOTH bans continue, situation WORSE — iceberg lettuce outbreak
// now 10,468 cases / 41-45+ states / 2 deaths (was 1,644 / 5 states); cilantro/parsley
// (NC) now 867 cases, still unconfirmed/open. No bagged salads, no raw cilantro/parsley.
// Meal Deal checked in detail 8/8: same "Look what's free for your meals" shrimp deal
// already clipped 7/30 (2 boxes banked, waiting on the salad-ban lift for po'boy night)
// — nothing new, doesn't apply to this week's menu. Joe V's checked — doesn't clear
// the $10 threshold this cycle, staying HEB-only.
const WEEK = {
  id: "2026-08-10",
  label: "Dinners Mon Aug 10, Tue Aug 11 & Fri Aug 14 · HEB Irving only · shop Sun Aug 9",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 8/5–8/11, pulled 8/6. Anchors: H-E-B Wagyu Ground Beef $6.99/lb, Organic Yellow Potatoes $4.00. Pork belly (Aiden's request) isn't a flyer feature this cycle — H-E-B Pork Belly Portion (non-natural) $4.71/lb verified live via Chrome, chosen over the H-E-B Natural line ($5.97-6.50/lb, a labeling premium that doesn't clearly pay off for a glazed dish) and sized to land right at the 'more meat per serving' feedback target. One protein this week is already-banked from a prior week's deal at $0 marginal cost: Brazilian BBQ pork chops (8/2 Combo Loco). REVISED 8/9: down to 3 meals this week (Mon/Tue/Fri) — fajitas deferred a 3rd time, banked chicken keeps fine frozen. Meal Deal reviewed in full 8/8 (same shrimp anchor already clipped 7/30) — doesn't apply here. Checked Joe V's: doesn't clear the $10-cheaper threshold, staying HEB-only. Outbreak recheck 8/7: both bans continue, situation worse not better (iceberg lettuce outbreak now 10,468 cases/41-45+ states/2 deaths; cilantro/parsley NC 867 cases) — no bagged salads, no raw cilantro/parsley.",
  meals: [
    {
      id: "prep",
      title: "Sunday: Shop + Quick Seal (Belly Only)",
      slot: "Prep · Sun Aug 9",
      time: "~5 min after put-away",
      equipment: ["Chamber sealer"],
      summary:
        "Light prep — Tuesday's chops are ALREADY banked and frozen from a prior week's deal-buying, so they go straight from freezer to bath with no advance work. The only real job today is rubbing and sealing the pork belly for Friday, and this time it gets FROZEN (not just fridged) since Friday's cook day lands 4 days out. Monday's burgers need zero advance prep.",
      links: [
        { label: "Serious Eats — sous vide pork belly guide", url: "https://www.seriouseats.com/sous-vide-pork-belly-recipe", tag: "primary" },
        { label: "r/sousvide — pork belly threads", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20belly", tag: "reddit" }
      ],
      recipe: {
        activeTime: "~5 min",
        cookTime: "none today — first bath run is Tuesday ~1:30 PM",
        ingredients: [
          "H-E-B Pork Belly Portion, 4.75 lb avg (non-natural line, $4.71/lb)",
          "kosher salt + black pepper (owned)",
          "2 garlic cloves, smashed (banked heads)"
        ],
        steps: [
          "PUT-AWAY: cucumbers + roma tomatoes → fridge crisper. Buns → pantry until Monday. Rice vinegar → pantry.",
          "SEAL SESSION (5 min): rub the pork belly all over with 1.5 tbsp kosher salt, a generous grind of black pepper, and 2 smashed garlic cloves. Seal flat, label, FREEZE — Friday's cook day is 4 days out, so this one freezes per the shelf-life rule (drops frozen Thursday evening, +1 hr for the frozen start).",
          "Tuesday's Brazilian BBQ chop bag stays in the freezer — drops straight from frozen, no thaw step.",
          "Cleanup: sealer wipe. Done."
        ]
      }
    },
    {
      id: "smashburgers",
      cost: { est: 28.06, servings: 5, note: "ESTIMATED (pre-shop): Wagyu ground beef 2 lb @ $6.99/lb ad = $13.98, Hatch Chile cheese $5.00 (ad), buns $2.60, iceberg lettuce $2.08, roma tomatoes ~$1.00, Best Maid hamburger pickle slices $3.40. Onion is banked ($0). All new spend, no banked protein this meal." },
      nutrition: { serving: "1 double-smash burger (5-6 oz cooked) + bun + toppings", calories: 640, protein: 36, carbs: 32, fat: 40 },
      daytime: [],
      title: "Hatch Chile Wagyu Smash Burgers with Crispy Lettuce & Tomato",
      slot: "Dinner 1 · Mon Aug 10",
      time: "~20 min at dinner",
      equipment: ["Blackstone"],
      summary:
        "Blackstone's back in service (propane swapped today) — first thing back on it is smash burgers. H-E-B Wagyu ground beef at $6.99/lb (ad) smashed hard and fast for maximum crust, melted under this week's Hatch Chile shredded cheese. Toppings go out separately so everyone builds their own — kids get a plain patty and bun with no extra steps needed.",
      links: [
        { label: "Serious Eats — The Food Lab's Smash Burger technique", url: "https://www.seriouseats.com/the-food-labs-complete-guide-to-making-the-best-hamburgers", tag: "primary" },
        { label: "r/burgers — smash burger technique threads", url: "https://www.reddit.com/r/burgers/search/?q=smash%20technique", tag: "reddit" }
      ],
      swapNote: "Don't compact the beef into balls — loose and light so the smash creates maximum crusty surface area (that's where the flavor is). Two smaller patties beat one thick one for a true smash burger.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "none — single griddle session",
        ingredients: [
          "2 lb H-E-B Wagyu Ground Beef ($6.99/lb ad)",
          "H-E-B Enriched Hamburger Buns, 8 ct",
          "H-E-B Hatch Chile Pepper Shredded Cheese, 1 bag",
          "1 whole fresh iceberg lettuce, leaves separated",
          "3 roma tomatoes, sliced",
          "banked yellow onion, thin sliced (a few rings)",
          "Best Maid Hamburger Dill Pickle Slices, 24 oz",
          "smash sauce: 4 tbsp Duke's mayo (owned) + 1 tbsp French's mustard (owned) + pinch crushed red pepper (owned)",
          "kosher salt (owned)"
        ],
        steps: [
          "Blackstone on high, thin film of oil.",
          "Whisk the smash sauce ingredients together, fridge until serving.",
          "Divide the beef into 5-6 loose 4-5 oz balls — do NOT compact them.",
          "Balls onto the hot griddle spaced well apart, smash flat hard and fast with a stiff spatula, salt generously.",
          "Sear ~90 seconds untouched until a deep brown crust forms, flip, top immediately with Hatch cheese, another 60-90 seconds.",
          "Toast the buns cut-side down on the griddle's cooler edge, 30-60 seconds.",
          "KID CHECKPOINT: plain patty + cheese + bun, no sauce/toppings needed unless they want them — toppings go out separately so this is automatic.",
          "Toppings bar: buns, smash sauce, patties, lettuce, tomato, pickles, onion — everyone builds their own.",
          "Cleanup: griddle scrape."
        ]
      }
    },
    {
      id: "brazilianchops",
      cost: { est: 13.34, servings: 5, note: "ESTIMATED (pre-shop): chops already banked/paid ($9.34, 8/2 Combo Loco 2nd package) = $0 marginal this week. Organic Yellow Potatoes $4.00 (ad). Green beans banked (Meal Deal freebie, $0). New spend this meal: $4.00." },
      nutrition: { serving: "1 chop + air-fryer potatoes + green beans", calories: 560, protein: 42, carbs: 36, fat: 24 },
      daytime: [
        "TUE ~1:30 PM (1 min): bath to 140°F, drop the frozen Brazilian BBQ chop bag — no thaw needed, dropping frozen adds ~1 hr to the cook, still ready well before dinner"
      ],
      title: "Brazilian BBQ Pork Chops with Air-Fryer Potatoes & Green Beans",
      slot: "Dinner 2 · Tue Aug 11",
      time: "~20 min at dinner (+20 min air fryer, unattended)",
      equipment: ["Sous vide", "Air fryer"],
      summary:
        "The second half of the 8/2 Combo Loco finally gets cooked — a different flavor from the Texas BBQ pack (Monday 8/3's dinner), banked frozen and paid for two weeks ago, so tonight's only new spend is the sides. Pre-seasoned, so it's a straight drop-and-sear. Air-fryer potatoes sized to the corrected portion math (~0.4-0.5 lb raw potato per adult, not the old over-sized batch) and the banked Meal Deal green beans round it out for free.",
      links: [
        { label: "Serious Eats — sous vide pork chops guide", url: "https://www.seriouseats.com/sous-vide-pork-chops-recipe", tag: "primary" },
        { label: "r/sousvide — pork chop time/temp threads", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20chops", tag: "reddit" }
      ],
      swapNote: "140°F = juicy with a touch of blush, safe and ideal for lean loin chops. Dropping from frozen just adds ~1 hr to the bath time — no thaw step needed.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "chops ~3-4 hr at 140°F from frozen (in since 1:30, unattended); potatoes 18-20 min air fryer",
        ingredients: [
          "banked H-E-B Simply Seasoned Boneless Pork Loin Chops - Brazilian Style BBQ, 1 pack as-sealed (~3.1 lb)",
          "H-E-B Organic Yellow Potatoes, 1 bag (~2.5 lb, $4.00 ad)",
          "banked H-E-B Steamable Green Beans, 12 oz",
          "1 tbsp olive oil + kosher salt (owned, for potatoes)",
          "1 tbsp Kerrygold butter (owned, for green beans)"
        ],
        steps: [
          "~1:30 PM: bath to 140°F, drop the frozen chop bag straight in — no thaw needed.",
          "~30 min before dinner: cube the potatoes skin-on (~3/4 inch), toss with olive oil + salt, air fry 400°F for 18-20 min, shaking the basket halfway.",
          "At dinner: microwave the green beans bag 4-5 min, drain, toss with butter + salt.",
          "Pull the chops, pat very dry, sear 60-90 seconds per side on the Blackstone or a hot skillet for color — they're already fully cooked and seasoned.",
          "KID CHECKPOINT: plain chop + potatoes + green beans — already kid-food as-is, no deconstruction needed.",
          "Plate and serve.",
          "Cleanup: air fryer basket, one skillet.",
          "AFTER DINNER: bath's free until Thursday evening — nothing else running this week until the belly drops."
        ]
      }
    },
    {
      id: "porkbelly",
      cost: { est: 28.21, servings: 5, note: "ESTIMATED (pre-shop, revised 8/9 to Friday): H-E-B Pork Belly Portion (non-natural), 4.75 lb avg @ $4.71/lb VERIFIED live via Chrome = $22.37. Cucumbers 2 @ $0.42 = $0.84. Rice vinegar (new staple, first buy) ~$3.50. Ginger comes from the banked frozen knob (no new buy). Rice is owned (Thai Hom Mali jasmine)." },
      nutrition: { serving: "1 bowl: glazed pork belly + jasmine rice + cucumber salad", calories: 780, protein: 30, carbs: 46, fat: 52 },
      daytime: [
        "THU ~6:30 PM (1 min): bath to 165°F, drop the frozen pork belly bag (sealed + frozen Sunday) — no thaw needed, +1 hr for frozen start, rides ~24 hr to Friday's dinner",
        "FRI ~12:30 PM (10 min): quick cucumber salad → fridge to marinate; rice cooker on (2 cups jasmine, rinsed until the water runs clear, 2.5 cups water)"
      ],
      title: "Crispy Glazed Pork Belly Bowls with Cucumber Salad & Jasmine Rice",
      slot: "Dinner 3 · Fri Aug 14",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Broiler"],
      summary:
        "Aiden's request, and a rerun of the 7/30 dish that scored a 🎯 Hit — sized up per that feedback (family wanted more meat per serving). With Wed/Thu off the cook week, the belly gets sealed and FROZEN Sunday instead of just fridged, then drops frozen Thursday evening for a ~24 hr cook to Friday dinner. A hard broiler crisp (the same method that proved out on carnitas) gets crackly edges before a quick soy-ginger glaze. Kids ate the glazed version straight last time — no deconstruction needed. Rice ratio corrected to 2.5 cups water per the calibration note; cucumber salad returns since adults specifically liked it.",
      links: [
        { label: "Serious Eats — sous vide pork belly guide", url: "https://www.seriouseats.com/sous-vide-pork-belly-recipe", tag: "primary" },
        { label: "The Woks of Life — quick Asian cucumber salad", url: "https://thewoksoflife.com/smashed-cucumber-salad/", tag: "alt" }
      ],
      swapNote: "165°F/~24 hr from frozen = fully tender with the fat rendered but not falling apart, same window that worked last time. Broiler crisp is a proven fallback (carnitas, 8/4) even with the Blackstone back in service; either works, broiler's less cleanup.",
      recipe: {
        activeTime: "~25 min at dinner (+10 min cucumber salad at midday)",
        cookTime: "belly ~24 hr at 165°F (in frozen since Thursday evening)",
        ingredients: [
          "H-E-B Pork Belly Portion, 4.75 lb avg (non-natural, seasoned + sealed + frozen Sunday: salt, pepper, 2 smashed garlic cloves)",
          "2 cups H-E-B Thai Hom Mali jasmine rice (owned) + 2.5 cups water",
          "2 fresh cucumbers, thin sliced",
          "CUCUMBER SALAD: 3 tbsp rice vinegar (new) + 1 tbsp brown sugar (owned) + 0.5 tsp salt",
          "GLAZE: 3 tbsp Kikkoman soy sauce (owned) + 2 tbsp brown sugar (owned) + 1 tbsp grated ginger (banked frozen knob, thawed) + 1 minced garlic clove + a few tbsp reserved bag juices",
          "1 tsp Kadoya sesame oil (owned, finisher)"
        ],
        steps: [
          "~12:30 PM: cucumber salad — toss sliced cucumbers with rice vinegar, brown sugar, salt. Fridge to marinate.",
          "Rice cooker on: rinse 2 cups jasmine until the water runs clear, 2.5 cups water, start.",
          "At dinner: pull the belly bag, pour off and reserve the juices. Slice the belly into thick batons.",
          "Broiler on HIGH, rack ~3 inches below the element. Belly batons on a rimmed sheet pan in one layer, broil ~10-12 min, flipping once, until deep brown and crispy at the edges.",
          "Glaze: small pot, soy + brown sugar + ginger + garlic + a few tbsp reserved bag juices, simmer 3-4 min until syrupy.",
          "Toss the hot crispy belly in the glaze.",
          "KID CHECKPOINT: glazed belly straight to the kids — proven Hit last time, no deconstruction needed.",
          "Bowls: rice, glazed belly, cucumber salad, a drizzle of sesame oil.",
          "Cleanup: sheet pan soak, one small pot."
        ]
      }
    }
  ],
  // Read-only "On Hand" snapshot for the public page. Regenerated with each weekly plan
  // from pantry/inventory.json — sanitized: no staples ledger, no names.
  bank: [
    { name: "Fajita-rubbed chicken bags, sealed raw", qty: "4 bags (1.4 lb each)", location: "freezer", useBy: "2026-12-02", note: "DEFERRED AGAIN (3rd time) — not this week. Keeps fine frozen for whenever it lands (Cowboy Butter / plain S&P wild card / soy-ginger / fajita)" },
    { name: "Brazilian BBQ pork chops, sealed", qty: "1 pack (~3.1 lb)", location: "freezer", useBy: "2026-12-02", note: "TUESDAY'S PROTEIN — drops frozen at 140°F, no thaw needed" },
    { name: "H-E-B Steamable Green Beans, 12 oz", qty: "1 bag", location: "freezer", useBy: "2027-02-02", note: "TUESDAY'S SIDE — free Meal Deal side, planned in" },
    { name: "Jumbo yellow onion, whole", qty: "1 (1.72 lb)", location: "pantry", useBy: "2026-08-26", note: "PLANNED IN — Monday's burgers (thin rings only), most of it carries to a future week" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "PLANNED IN — Sunday's belly rub + Friday's glaze, light use" },
    { name: "Fresh ginger, frozen knob", qty: "~1 inch", location: "freezer", useBy: "2026-08-20", note: "PLANNED IN — Friday's belly glaze (thaw before grating) — saves a fresh-ginger buy this week" },
    { name: "H-E-B Breaded Shrimp (Meal Deal anchor)", qty: "2 boxes, 10-14 oz", location: "freezer", useBy: "2027-02-02", note: "Still on hold — assigned to shrimp po'boy night once the bagged-salad ban lifts (still active as of 8/7 — situation worse, not better)" }
  ],
  grocery: [
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Wagyu Ground Beef — $6.99/lb AD PRICE", qty: "2 lb — Monday's burgers", est: 13.98, aisle: "" },
        { name: "H-E-B Pork Belly Portion (non-natural), Avg. 4.75 lbs — $4.71/lb VERIFIED live 8/7 (chose over the H-E-B Natural line at $5.97-6.50/lb — labeling premium, not a clear quality upgrade for a glazed dish)", qty: "1 portion", est: 22.37, aisle: "" }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "Fresh Roma Tomatoes", qty: "3 — Monday's burgers", est: 1.0, aisle: "" },
        { name: "Fresh Iceberg Lettuce, whole head", qty: "1 — Monday's burgers (whole head, not bagged — ban-safe)", est: 2.08, aisle: "" },
        { name: "H-E-B Organic Yellow Potatoes", qty: "1 bag (~2.5 lb) — Tuesday's side", est: 4.0, aisle: "" },
        { name: "Fresh Cucumbers", qty: "2 — Friday's cucumber salad", est: 0.84, aisle: "" }
      ]
    },
    {
      section: "Dairy & Cheese",
      items: [
        { name: "H-E-B Hatch Chile Pepper Shredded Cheese — $5.00 AD PRICE", qty: "1 bag — Monday's burgers", est: 5.0, aisle: "" }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
        { name: "H-E-B Enriched Hamburger Buns, 8 ct", qty: "1 pack — Monday's burgers", est: 2.6, aisle: "" }
      ]
    },
    {
      section: "Condiments & Pantry",
      items: [
        { name: "Best Maid Hamburger Dill Pickle Slices, 24 oz", qty: "1 jar — Monday's burgers", est: 3.4, aisle: "" }
      ]
    },
    {
      section: "Staples Stock-Up (first buy — new pantry staple this week)",
      items: [
        { name: "Rice vinegar — NEW STAPLE (amortizes into future Asian-leaning dishes; everything else in the belly glaze — soy, brown sugar, Kadoya sesame oil, garlic, ginger — is already owned/banked)", qty: "1 bottle", est: 3.5, aisle: "" }
      ]
    }
  ]
};
