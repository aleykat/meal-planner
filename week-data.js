// Week of 2026-08-10 — WEEK 3, HEB-only. REVISED 8/9 (shop day) TWICE: first down to
// 3 meals (Mon/Tue/Fri), then reordered again once Jason confirmed Jessica joins
// Tuesday AND Thursday. Final order: Brazilian BBQ chops Monday (family only), Wagyu
// smash burgers Tuesday (GUEST NIGHT — Jessica, 3 adults + 2 kids, Jason specified
// exact quantities: 1.5 lb beef, 5 buns), pork belly Thursday (GUEST NIGHT — same
// headcount, already sized for 5). Fajitas deferred a 3rd time — banked chicken keeps
// fine frozen. Blackstone is BACK IN SERVICE (propane swapped Monday).
// Belly reverts to the ORIGINAL fridge-seal timing (not frozen) since Thursday's cook
// day is back to 3 days out from Sunday's shop/seal — drops Wednesday evening, fridge-
// cold, ~23-24 hr to Thursday dinner.
// Outbreak recheck 8/7: BOTH bans continue, situation WORSE — iceberg lettuce outbreak
// now 10,468 cases / 41-45+ states / 2 deaths (was 1,644 / 5 states); cilantro/parsley
// (NC) now 867 cases, still unconfirmed/open. No bagged salads, no raw cilantro/parsley.
// Meal Deal checked in detail 8/8: same "Look what's free for your meals" shrimp deal
// already clipped 7/30 — nothing new, doesn't apply to this week's menu. Joe V's
// checked — doesn't clear the $10 threshold this cycle, staying HEB-only.
const WEEK = {
  id: "2026-08-10",
  label: "Dinners Mon Aug 10, Tue Aug 11 (guest) & Thu Aug 13 (guest) · HEB Irving only · shop Sun Aug 9",
  store: "H-E-B Irving #817 (single store)",
  adNote: "Ad cycle 8/5–8/11, pulled 8/6. Anchors: H-E-B Wagyu Ground Beef $6.99/lb, Organic Yellow Potatoes $4.00. Pork belly (Aiden's request) isn't a flyer feature this cycle — H-E-B Pork Belly Portion (non-natural) $4.71/lb verified live via Chrome, chosen over the H-E-B Natural line ($5.97-6.50/lb, a labeling premium that doesn't clearly pay off for a glazed dish). One protein this week is already-banked from a prior week's deal at $0 marginal cost: Brazilian BBQ pork chops (8/2 Combo Loco). REVISED 8/9 (twice): down to 3 meals, then reordered when Jessica's Tue+Thu visits were confirmed — chops moved to Monday (family only), burgers moved to Tuesday and rescaled down for the guest headcount per Jason's exact numbers (1.5 lb beef, 5 buns — 3 adults + 2 kids eat less meat per person than the original 4-person family estimate assumed), belly moved to Thursday (same guest headcount, already sized for 5, no change needed). Meal Deal reviewed in full 8/8 (same shrimp anchor already clipped 7/30) — doesn't apply here. Checked Joe V's: doesn't clear the $10-cheaper threshold, staying HEB-only. Outbreak recheck 8/7: both bans continue, situation worse not better (iceberg lettuce outbreak now 10,468 cases/41-45+ states/2 deaths; cilantro/parsley NC 867 cases) — no bagged salads, no raw cilantro/parsley.",
  meals: [
    {
      id: "prep",
      title: "Sunday: Shop + Quick Seal (Belly Only)",
      slot: "Prep · Sun Aug 9",
      time: "~5 min after put-away",
      equipment: ["Chamber sealer"],
      summary:
        "Light prep — Monday's chops are ALREADY banked and frozen from a prior week's deal-buying, so they go straight from freezer to bath with no advance work. The only real job today is rubbing and sealing the pork belly for Thursday — this time it's a FRIDGE seal (not frozen), since Thursday's cook day is back to 3 days out. Tuesday's burgers need zero advance prep — fresh ground beef, straight griddle cook.",
      links: [
        { label: "Serious Eats — sous vide pork belly guide", url: "https://www.seriouseats.com/sous-vide-pork-belly-recipe", tag: "primary" },
        { label: "r/sousvide — pork belly threads", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20belly", tag: "reddit" }
      ],
      recipe: {
        activeTime: "~5 min",
        cookTime: "none today — first bath run is Monday ~1:30 PM",
        ingredients: [
          "H-E-B Pork Belly Portion, 4.75 lb avg (non-natural line, $4.71/lb)",
          "kosher salt + black pepper (owned)",
          "2 garlic cloves, smashed (banked heads)"
        ],
        steps: [
          "PUT-AWAY: cucumbers + roma tomatoes → fridge crisper. Buns → pantry until Tuesday. Rice vinegar → pantry.",
          "SEAL SESSION (5 min): rub the pork belly all over with 1.5 tbsp kosher salt, a generous grind of black pepper, and 2 smashed garlic cloves. Seal flat, label, FRIDGE — cooks Wednesday evening (3 days out — same-day chamber-seal covers the shelf-life rule, no freezing needed this time).",
          "Monday's Brazilian BBQ chop bag stays in the freezer — drops straight from frozen, no thaw step.",
          "Cleanup: sealer wipe. Done."
        ]
      }
    },
    {
      id: "brazilianchops",
      cost: { est: 13.34, servings: 5, note: "ESTIMATED (pre-shop, revised 8/9 to Monday — family only, no guest): chops already banked/paid ($9.34, 8/2 Combo Loco 2nd package) = $0 marginal. Organic Yellow Potatoes $4.00 (ad). Green beans banked (Meal Deal freebie, $0). New spend this meal: $4.00." },
      nutrition: { serving: "1 chop + air-fryer potatoes + green beans", calories: 560, protein: 42, carbs: 36, fat: 24 },
      daytime: [
        "MON ~1:30 PM (1 min): bath to 140°F, drop the frozen Brazilian BBQ chop bag — no thaw needed, dropping frozen adds ~1 hr to the cook, still ready well before dinner"
      ],
      title: "Brazilian BBQ Pork Chops with Air-Fryer Potatoes & Green Beans",
      slot: "Dinner 1 · Mon Aug 10",
      time: "~20 min at dinner (+20 min air fryer, unattended)",
      equipment: ["Sous vide", "Air fryer"],
      summary:
        "Family night — the second half of the 8/2 Combo Loco finally gets cooked, a different flavor from the Texas BBQ pack (Monday 8/3's dinner), banked frozen and paid for two weeks ago, so tonight's only new spend is the sides. Pre-seasoned, so it's a straight drop-and-sear. Air-fryer potatoes sized to the corrected portion math (~0.4-0.5 lb raw potato per adult) and the banked Meal Deal green beans round it out for free.",
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
          "AFTER DINNER: bath's free until Wednesday evening — nothing else running until the belly drops."
        ]
      }
    },
    {
      id: "smashburgers",
      cost: { est: 36.66, servings: 5, note: "VERIFIED via Jason's HEB.com list 8/9: 2x 16oz Wagyu beef packs = $13.98 (2 lb — 1.5 lb isn't a clean pack size), H-E-B Bakery Brioche Hamburger Buns 4ct x2 = $7.96 (8 buns total, only need 5 — list auto-matched brioche over the plain Enriched pack, still covers the count fine), Kraft Deli Deluxe Cheese Slices 24ct $7.28, Burger Leaf Lettuce Leaves 5oz $2.97, Ore-Ida Crispy Tater Tots 32oz $4.47. Onion is banked ($0). NOTE: the lettuce leaves are a pre-washed/pre-cut packaged product — technically inside the active bagged/pre-cut leafy-greens cyclospora ban; Jason explicitly approved this one exception 8/9." },
      nutrition: { serving: "1 smash burger (scaled: full patty for adults, smaller for kids) + bun + toppings + tater tots", calories: 750, protein: 33, carbs: 55, fat: 42 },
      daytime: [],
      title: "Wagyu Smash Burgers with Tater Tots",
      slot: "Dinner 2 · Tue Aug 11 — GUEST NIGHT (Jessica, 3 adults + 2 kids)",
      time: "~25 min at dinner",
      equipment: ["Blackstone", "Air fryer"],
      summary:
        "GUEST NIGHT — Jessica joins. Blackstone's back in service (propane swapped Monday). H-E-B Wagyu ground beef at $6.99/lb (ad) smashed hard and fast for maximum crust, melted under classic diner-style American cheese slices. Sized down from the original per-family estimate to Jason's exact guest-night numbers (1.5 lb beef, 5 buns) — 3 adults + 2 kids eat less total meat than the original 4-person full-portion estimate assumed. Tater tots added as the kid-easy side (air fryer, hands-off). Toppings go out separately so everyone builds their own — kids get a plain patty and bun with no extra steps needed.",
      links: [
        { label: "Serious Eats — The Food Lab's Smash Burger technique", url: "https://www.seriouseats.com/the-food-labs-complete-guide-to-making-the-best-hamburgers", tag: "primary" },
        { label: "r/burgers — smash burger technique threads", url: "https://www.reddit.com/r/burgers/search/?q=smash%20technique", tag: "reddit" }
      ],
      swapNote: "Don't compact the beef into balls — loose and light so the smash creates maximum crusty surface area. With 1.5 lb across 5 people, make the adult patties a bit bigger (5-6 oz) and the kid patties smaller (3-4 oz) rather than splitting evenly. American cheese slices melt faster and more evenly than shredded — classic smash-burger pairing.",
      recipe: {
        activeTime: "~25 min at dinner",
        cookTime: "tater tots 12-15 min air fryer, unattended alongside the griddle work",
        ingredients: [
          "2 lb H-E-B Wagyu Ground Beef ($6.99/lb ad — 2x 16 oz packs; ~1.5 lb needed, size patties generously with the rest)",
          "H-E-B Bakery Brioche Hamburger Buns, 4 ct x2 (8 buns total, only need 5 — 3 spare)",
          "Kraft Deli Deluxe Cheese Slices, American Cheese, 24 ct",
          "H-E-B Fresh Burger Leaf Lettuce Leaves, 5 oz",
          "banked yellow onion, thin sliced (a few rings)",
          "pickles (Jason's own, on hand — not on the grocery list)",
          "Ore-Ida Crispy Tater Tots, 32 oz",
          "smash sauce: 4 tbsp Duke's mayo (owned) + 1 tbsp French's mustard (owned) + pinch crushed red pepper (owned)",
          "kosher salt (owned)"
        ],
        steps: [
          "Air fryer 400°F: tater tots in a single layer, 12-15 min, shaking the basket halfway — start these first so they finish alongside the burgers.",
          "Blackstone on high, thin film of oil.",
          "Whisk the smash sauce ingredients together, fridge until serving.",
          "Divide the beef into 5 portions — bigger (5-6 oz) for the 3 adults, smaller (3-4 oz) for the 2 kids. Keep loose, do NOT compact.",
          "Balls onto the hot griddle spaced well apart, smash flat hard and fast with a stiff spatula, salt generously.",
          "Sear ~90 seconds untouched until a deep brown crust forms, flip, top immediately with a cheese slice, another 60-90 seconds until melted.",
          "Toast the buns cut-side down on the griddle's cooler edge, 30-60 seconds.",
          "KID CHECKPOINT: plain patty + cheese + bun + tots, no sauce/toppings needed unless they want them — toppings go out separately so this is automatic.",
          "Toppings bar: buns, smash sauce, patties, lettuce, pickles, onion — everyone builds their own. Tots served alongside.",
          "Cleanup: griddle scrape, air fryer basket."
        ]
      }
    },
    {
      id: "porkbelly",
      cost: { est: 28.21, servings: 5, note: "ESTIMATED (pre-shop, revised 8/9 to Thursday GUEST NIGHT — Jessica joins, 3 adults + 2 kids, same headcount already sized for): H-E-B Pork Belly Portion (non-natural), 4.75 lb avg @ $4.71/lb VERIFIED live via Chrome = $22.37. Cucumbers 2 @ $0.42 = $0.84. Marukan Genuine Brewed Rice Vinegar (new staple, verified $2.97). Ginger comes from the banked frozen knob (no new buy). Rice is owned (Thai Hom Mali jasmine)." },
      nutrition: { serving: "1 bowl: glazed pork belly + jasmine rice + cucumber salad", calories: 780, protein: 30, carbs: 46, fat: 52 },
      daytime: [
        "WED ~6:30 PM (1 min): bath to 165°F, drop the fridge-cold pork belly bag (sealed Sunday) — rides ~23-24 hr to Thursday's dinner",
        "THU ~12:30 PM (10 min): quick cucumber salad → fridge to marinate; rice cooker on (2 cups jasmine, rinsed until the water runs clear, 2.5 cups water)"
      ],
      title: "Crispy Glazed Pork Belly Bowls with Cucumber Salad & Jasmine Rice",
      slot: "Dinner 3 · Thu Aug 13 — GUEST NIGHT (Jessica, 3 adults + 2 kids)",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Broiler"],
      summary:
        "Aiden's request, and GUEST NIGHT — Jessica joins again. A rerun of the 7/30 dish that scored a 🎯 Hit, sized up per that feedback (family wanted more meat per serving) — and that same 4.75 lb sizing already lands right at the 3-adults-plus-2-kids headcount, so no further scaling needed. Sealed fridge-cold Sunday, drops Wednesday evening for a ~23-24 hr cook to Thursday dinner. A hard broiler crisp (the same method that proved out on carnitas) gets crackly edges before a quick soy-ginger glaze. Kids ate the glazed version straight last time — no deconstruction needed.",
      links: [
        { label: "Serious Eats — sous vide pork belly guide", url: "https://www.seriouseats.com/sous-vide-pork-belly-recipe", tag: "primary" },
        { label: "The Woks of Life — quick Asian cucumber salad", url: "https://thewoksoflife.com/smashed-cucumber-salad/", tag: "alt" }
      ],
      swapNote: "165°F/~23-24 hr from fridge-cold = fully tender with the fat rendered but not falling apart, the same window that worked last time. Broiler crisp is a proven fallback (carnitas, 8/4) even with the Blackstone back in service; either works, broiler's less cleanup.",
      recipe: {
        activeTime: "~25 min at dinner (+10 min cucumber salad at midday)",
        cookTime: "belly ~23-24 hr at 165°F (in since Wednesday evening, fridge-cold start)",
        ingredients: [
          "H-E-B Pork Belly Portion, 4.75 lb avg (non-natural, seasoned + sealed Sunday: salt, pepper, 2 smashed garlic cloves)",
          "2 cups H-E-B Thai Hom Mali jasmine rice (owned) + 2.5 cups water",
          "2 fresh cucumbers, thin sliced",
          "CUCUMBER SALAD: 3 tbsp Marukan rice vinegar (new) + 1 tbsp brown sugar (owned) + 0.5 tsp salt",
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
    { name: "FAJITA chicken bag #1, sealed raw (the older one — use first)", qty: "1 bag, 2.15 lb (2 breasts), sealed 7/26", location: "freezer", useBy: "2026-11-26", note: "Deferred 3x — no slot this week. Drops frozen at 150°F +~1 hr" },
    { name: "FAJITA chicken bag #2, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Second fajita bag — bag #1 goes first (FIFO)" },
    { name: "COWBOY BUTTER chicken bag, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Proven flavor. Drops frozen at 150°F +~1 hr" },
    { name: "PLAIN S&P WILD CARD chicken bag, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Takes any direction at cook time — Stubb's glaze, lemon butter, parm crust" },
    { name: "SOY-GINGER chicken bag, sealed raw", qty: "1 bag, ~1.4 lb, sealed 8/2", location: "freezer", useBy: "2026-12-02", note: "Drops frozen at 150°F +~1 hr" },
    { name: "Brazilian BBQ pork chops, sealed", qty: "1 pack (~3.1 lb)", location: "freezer", useBy: "2026-12-02", note: "MONDAY'S PROTEIN — drops frozen at 140°F, no thaw needed" },
    { name: "H-E-B Steamable Green Beans, 12 oz", qty: "1 bag", location: "freezer", useBy: "2027-02-02", note: "MONDAY'S SIDE — free Meal Deal side, planned in" },
    { name: "Jumbo yellow onion, whole", qty: "1 (1.72 lb)", location: "pantry", useBy: "2026-08-26", note: "PLANNED IN — Tuesday's burgers (thin rings only), most of it carries to a future week" },
    { name: "Bulk garlic", qty: "~1.5 heads", location: "pantry", useBy: "2026-09-26", note: "PLANNED IN — Sunday's belly rub + Thursday's glaze, light use" },
    { name: "Fresh ginger, frozen knob", qty: "~1 inch", location: "freezer", useBy: "2026-08-20", note: "PLANNED IN — Thursday's belly glaze (thaw before grating) — saves a fresh-ginger buy this week" },
    { name: "H-E-B Breaded Shrimp (Meal Deal anchor)", qty: "2 boxes, 10-14 oz", location: "freezer", useBy: "2027-02-02", note: "Still on hold — assigned to shrimp po'boy night once the bagged-salad ban lifts (still active as of 8/7 — situation worse, not better)" }
  ],
  grocery: [
    {
      section: "Meat & Seafood",
      items: [
        { name: "H-E-B Wagyu Ground Beef — $6.99/lb AD PRICE VERIFIED via Jason's HEB list 8/9 (2x 16 oz packs, ~2 lb; only need 1.5 lb but sold in 1-lb packs — use the extra generously on adult patties or bank it)", qty: "2 lb (2 packs)", est: 13.98, aisle: "" },
        { name: "H-E-B Pork Belly Portion (non-natural), Avg. 4.75 lbs — $4.71/lb VERIFIED live 8/7 (chose over the H-E-B Natural line at $5.97-6.50/lb — labeling premium, not a clear quality upgrade for a glazed dish)", qty: "1 portion", est: 22.37, aisle: "" }
      ]
    },
    {
      section: "Produce",
      items: [
        { name: "H-E-B Fresh Burger Leaf Lettuce Leaves, 5 oz — Jason's pick; NOTE: pre-washed/pre-cut packaged product, technically inside the active bagged-leafy-greens cyclospora ban, exception explicitly approved 8/9", qty: "1 — Tuesday's burgers", est: 2.97, aisle: "" },
        { name: "H-E-B Organic Yellow Potatoes", qty: "1 bag (~2.5 lb) — Monday's side", est: 4.0, aisle: "" },
        { name: "Fresh Cucumbers", qty: "2 — Thursday's cucumber salad", est: 0.84, aisle: "" }
      ]
    },
    {
      section: "Dairy & Cheese",
      items: [
        { name: "Kraft Deli Deluxe Cheese Slices, American Cheese, 24 ct", qty: "1 pack — Tuesday's burgers", est: 7.28, aisle: "" }
      ]
    },
    {
      section: "Tortillas & Bakery",
      items: [
        { name: "H-E-B Bakery Brioche Hamburger Buns, 4 ct — VERIFIED via Jason's HEB list 8/9 (auto-matched to brioche over plain Enriched; buying 2 packs = 8 buns, only need 5)", qty: "2 packs — Tuesday's burgers", est: 7.96, aisle: "" }
      ]
    },
    {
      section: "Frozen",
      items: [
        { name: "Ore-Ida Crispy Tater Tots, 32 oz — VERIFIED $4.47 via Jason's HEB list 8/9", qty: "1 bag — Tuesday's burgers", est: 4.47, aisle: "" }
      ]
    },
    {
      section: "Staples Stock-Up (first buy — new pantry staple this week)",
      items: [
        { name: "Marukan Genuine Brewed Rice Vinegar, 12 oz — VERIFIED $2.97 (picked over cheaper Kikkoman — genuine-brewed quality tier for a staple that amortizes into future Asian-leaning dishes)", qty: "1 bottle", est: 2.97, aisle: "" }
      ]
    }
  ]
};
