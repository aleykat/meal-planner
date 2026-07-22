// Week data — regenerated each week by Claude. Loaded by index.html.
// THE REAL WEEK — dinners Mon Jul 27 – Thu Jul 30, shopped Sunday Jul 26. Built 7/22 on the
// live ad + clean coupon read. One circulator relay: carnitas (Sun→Mon), chuck (Tue→Wed,
// shares the shrimp's 135°F bath), pork belly (Wed→Thu). Mi Tienda Meal Deal approved by
// Jason: free sides feed Monday, entrees bank as the zero-effort backup dinner.
const WEEK = {
  id: "2026-07-22",
  label: "Dinners Mon Jul 27 – Thu Jul 30 · shopped Sun Jul 26 (ad cycle 7/22–28) · REAL",
  store: "H-E-B Irving #817 + optional Joe V's Smart Shop (2407 W Airport Fwy)",
  adNote: "Live 7/22–7/28 flyer + coupon data (pulled 7/22, clean Wednesday read). Meal Deal (Mi Tienda entrees) surfaced and DECLINED — the anchor entrees had no real consumption slot. No fitting Combo Locos this cycle. ⚠ No bagged salads — Taylor Farms Cyclospora recall still active (rechecked 7/22).",
  meals: [
    {
      id: "prep",
      cost: null,
      daytime: ["SUN afternoon (~25 min): seal session — chicken bags, belly, chuck", "SUN 8 PM (5 min): drop the carnitas bag at 165°F, cover the bath"],
      title: "Weekend: Seal Session + Sunday Pork Drop",
      slot: "Weekend",
      time: "~20 min total across the weekend",
      equipment: ["Chamber sealer", "Sous vide"],
      summary:
        "Two jobs, ~25 minutes, no deboning. (1) SEAL SESSION: 2 boneless breasts get fajita rub → sealed → freezer bank; the pork belly gets its soy–brown sugar rub and is sealed NOW (shelf-life rule — it waits sealed in the fridge until Wednesday); the chuck gets salt + pepper, sealed, fridge until Tuesday. (2) SUNDAY ~8 PM: toss the pre-cut boneless carnitas chunks in pork rub, seal, drop at 165°F. The circulator then runs a relay: carnitas out Monday, chuck in Tuesday 5 PM alongside the shrimp (same 135°F bath), belly in right after Wednesday's dinner — every later drop is just bag-into-water.",
      links: [
        { label: "Anova — Food Lab sous vide carnitas guide (temp options + crisping)", url: "https://anovaculinary.com/blogs/blog/sous-vide-carnitas-guide", tag: "primary" },
        { label: "r/sousvide — pork shoulder threads", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20shoulder", tag: "reddit" }
      ],
      swapNote: "165°F/18–24 hr = shreddable but moist — right for griddle crisping.",
      recipe: {
        activeTime: "~20 min total (15 seal session, 5 Sunday drop)",
        cookTime: "pork: ~21 hr unattended overnight",
        ingredients: [
          "~4 lb Joe V's boneless pork carnitas (pre-cut shoulder chunks, $2.47/lb)",
          "3 tbsp Bolner's Fiesta pork rub",
          "~1.5 lb boneless skinless chicken breasts (2 pieces)",
          "2 tbsp Bolner's Fiesta fajita seasoning",
          "~2 lb pork belly + 2 tbsp soy + 1 tbsp brown sugar (its Wednesday bag)",
          "~2.75 lb chuck roast + kosher salt + pepper (its Tuesday bag)",
          "chamber vacuum bags"
        ],
        steps: [
          "SEAL SESSION (everything at once, one sealer wipe-down): (a) 2 boneless breasts in fajita seasoning, 1 per bag → FREEZER bank. (b) Pork belly rubbed with soy + brown sugar, sealed → FRIDGE (drops Wednesday). (c) Chuck slabs salted + peppered, sealed → FRIDGE (drops Tuesday 5 PM, sharing the shrimp's 135°F bath). Sealed raw meat keeps 3–4 days easily — every later cook is now just bag-into-water.",
          "SUNDAY ~8 PM: toss the carnitas chunks with pork rub, seal, drop at 165°F. Cover the bath; top up water Monday morning.",
          "Cleanup: sealer wipe. That's it."
        ]
      }
    },
    {
      id: "carnitas",
      cost: { est: 10.8, servings: 4, note: "half the boneless carnitas + tortillas, salsa verde, toppings" },
      nutrition: { serving: "3 tacos: ~5 oz crispy pork, salsa verde, onion-cilantro", calories: 650, protein: 35, carbs: 45, fat: 35 },
      daytime: ["MON morning (1 min): top up the bath water — 21-hr cooks evaporate"],
      title: "Crispy Carnitas Tacos with Salsa Verde",
      slot: "Dinner 1 · Mon Jul 27",
      time: "~20 min at dinner",
      equipment: ["Sous vide", "Blackstone"],
      summary:
        "The 21-hour pork hits a ripping Blackstone in its own fat until the edges shatter. La Ranchera tortillas, jarred salsa verde, onion-cilantro, lime. Half the pork gets sealed with juices → freezer bank. Kids: crispy pork + cheese tacos, salsa on the side — same dish.",
      links: [
        { label: "Anova — Food Lab carnitas guide (the crisping method)", url: "https://anovaculinary.com/blogs/blog/sous-vide-carnitas-guide", tag: "primary" },
        { label: "Serious Eats — Sous Vide Carnitas (Kenji; SE blocks fetch — search if 404)", url: "https://www.seriouseats.com/sous-vide-carnitas-for-tacos-recipe", tag: "alt" }
      ],
      swapNote: "Doctor the verde with a spoon of Tuesday's diabla sauce if the adults want heat.",
      recipe: {
        activeTime: "~20 min at dinner",
        cookTime: "pork already done; crisping ~8 min",
        ingredients: [
          "the sous vide pork (in since Sunday) — HALF tonight, with bag juices",
          "12 La Ranchera white corn tortillas",
          "1 jar H-E-B salsa verde",
          "½ yellow onion (fine dice) + cilantro, mixed",
          "2 limes, quartered; shredded cheese for kid tacos",
          "1 tbsp canola oil (if the pork runs lean)"
        ],
        steps: [
          "Pull the bag; pour juices into a cup, skim — 2 tbsp of the fat goes straight onto the Blackstone.",
          "SEAL THE OTHER HALF of the pork with a splash of juices → FREEZER bank (a future taco/burrito night for ~$5).",
          "Griddle on high. Pork on, pressed flat-ish; leave it 3 min for crust, then break apart, toss, crisp 3 more. Splash of juices at the end.",
          "Warm tortillas on the open griddle space; stack under a towel.",
          "Kid tacos first (pork + cheese), then adult build: pork, salsa verde, onion-cilantro, lime.",
          "Cleanup: griddle scrape, one cutting board, trash the bag."
        ]
      }
    },
    {
      id: "diabla",
      cost: { est: 14.5, servings: 4, note: "1.5 lb of the 2 lb IQF P&D bag (~$11.25 consumed; ~$3.75 banks) + dried-chile sauce, romas" },
      nutrition: { serving: "~6 oz shrimp in diabla sauce over 1½ cups rice", calories: 520, protein: 30, carbs: 68, fat: 12 },
      daytime: [
        "TUE morning (2 min): pour ~1.5 lb shrimp into a fridge bowl to thaw; chamber-reseal the rest → freezer",
        "TUE ~4:30 PM (2 min): rice cooker on",
        "TUE 5 PM (2 min): bath to 135°F, drop BOTH bags — shrimp (out in 30 min) AND the chuck (same temp; it rides ~24 hr to Wednesday dinner)"
      ],
      title: "Camarones a la Diabla with Jasmine Rice",
      slot: "Dinner 2 · Tue Jul 28",
      time: "~25 min at dinner (shrimp sous vide beforehand)",
      equipment: ["Sous vide", "Stove", "NutriBullet", "Rice cooker"],
      summary:
        "Deviled shrimp, done properly — and sous vide, the house shrimp method: bagged P&D shrimp at 135°F for 30 min come out snappy-tender and physically can't overcook, then fold into the brick-red guajillo–árbol sauce (the NutriBullet earns its wash — there's no non-blender version of this dish). Genuinely spicy — the week's don't-soften night. Kids: their shrimp come straight from the bag before the sauce, or they self-serve. Bath efficiency: the chuck shares the same 135°F water — both bags drop at 5 PM, shrimp out in 30, chuck rides to tomorrow.",
      links: [
        { label: "Isabel Eats — Camarones a la Diabla (the sauce reference)", url: "https://www.isabeleats.com/camarones-a-la-diabla/", tag: "primary" },
        { label: "The Kitchn — diabla version (backup)", url: "https://www.thekitchn.com/camarones-a-la-diabla-recipe-23735936", tag: "alt" },
        { label: "r/sousvide — shrimp time/temp threads (sanity check)", url: "https://www.reddit.com/r/sousvide/search/?q=shrimp%20temp", tag: "reddit" }
      ],
      swapNote: "Heat dial: 2 árbol = hot-but-civil, 4+ = weapons-grade. Guajillos carry flavor, árbol carries fire.",
      recipe: {
        activeTime: "~25 min at dinner (+2 min bagging the shrimp at ~5 PM)",
        cookTime: "shrimp 30 min at 135°F; sauce ~15 min incl. chile soak",
        ingredients: [
          "~1.5 lb from the 2 lb frozen IQF P&D bag (thawed today — see step 1; roughly 30–36 jumbos)",
          "4 dried guajillo chiles + 2–3 chiles de árbol (stemmed, seeds shaken out)",
          "2 Roma tomatoes, rough-chopped",
          "½ yellow onion + 3 garlic cloves",
          "1 tbsp olive oil, ½ tbsp canola (bag), kosher salt",
          "2 cups (dry) jasmine rice — rice cooker, started midday",
          "lime + cilantro to finish"
        ],
        steps: [
          "TUESDAY MORNING: pour ~1.5 lb (30–36 jumbos) from the IQF bag into a bowl in the fridge — thawed by dinner. Forgot? Cold-water bath 20–30 min at 5 PM. CHAMBER-RESEAL the bag's remaining ~0.5 lb right now — that's the freezer bank (IQF quality, no freezer burn).",
          "~4:30 PM: rice cooker on. 5 PM: bath to 135°F; seal the thawed shrimp flat with the canola and a pinch of salt, then drop BOTH bags — the shrimp (30 min; holds up to an hour) and the chuck bag that's been sealed since Sunday (same temp — it stays in ~24 hr, until tomorrow's dinner).",
          "Soak the stemmed chiles in just-boiled water 10 min (a mug works).",
          "NutriBullet: soaked chiles, tomatoes, onion, garlic, ½ tsp salt, splash of soak water. Blend smooth — this is the whole sauce.",
          "Skillet, olive oil, medium-high: pour in the sauce — it should sizzle. Simmer 5 min until it darkens a shade. Salt to taste.",
          "Open the shrimp bag. KID CHECKPOINT: their shrimp go straight from bag to plate — perfectly cooked, sauce-free, with rice and cheese if wanted. Or they self-serve; either way no second dish.",
          "Fold the rest of the shrimp (and bag juices) into the sauce — 60 seconds to coat and warm, no more. They're already cooked; the sauce is just dressing them.",
          "Over rice, lime squeeze, cilantro. The chuck stays in the bath overnight — nothing more to do tonight. Cleanup: skillet, NutriBullet cup, rice pot, trash the shrimp bag."
        ]
      }
    },
    {
      id: "chucksteak",
      cost: { est: 23.0, servings: 4, note: "~2.75 lb Prime 1 chuck @ $5.99/lb (33% off) + potatoes, chimichurri — splurge night, ~$5.75/serving" },
      nutrition: { serving: "~8 oz sliced chuck 'steak' + chimichurri + crispy potatoes", calories: 950, protein: 55, carbs: 60, fat: 55 },
      daytime: ["WED daytime: nothing — the chuck's been riding since Tuesday 5 PM (~24 hr at dinner)", "WED right after dinner (30 sec): bath to 165°F, drop the pork belly bag for Thursday"],
      title: "24-Hour Chuck 'Steak' with Chimichurri & Crispy Potatoes",
      slot: "Dinner 3 · Wed Jul 29",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Blackstone", "Air fryer"],
      summary:
        "Prime 1 chuck (33% off) held at 135°F since last night eats like ribeye at a third the price. Hard Blackstone sear, chimichurri over the slices, air-fryer gold potatoes. Kids: sauce on the side — it's steak. AFTER DINNER: the pork belly goes into the same bath for tomorrow.",
      links: [
        { label: "DadCooksDinner — Sous Vide Chuck Steak (24 hours to tenderness)", url: "https://www.dadcooksdinner.com/sous-vide-chuck-steak-recipe/", tag: "primary" },
        { label: "Love and Lemons — chimichurri sauce", url: "https://www.loveandlemons.com/chimichurri-sauce/", tag: "alt" }
      ],
      swapNote: "131°F = medium-rare-plus; 135°F = family medium. Same 24 hr either way.",
      recipe: {
        activeTime: "~25 min at dinner (chuck dropped Tuesday 5 PM — a true 24 hr by dinner)",
        cookTime: "chuck ~24 hr at 135°F; potatoes ~20 min air fryer",
        ingredients: [
          "~2.75 lb H-E-B Prime 1 beef chuck roast, 2 slabs (in the bath since Tuesday 5 PM)",
          "3 lb baby gold potatoes, halved",
          "CHIMICHURRI: 1 bunch parsley (finely chopped), 3 garlic cloves (minced), 3 tbsp red wine vinegar, ½ cup olive oil, ½ tsp crushed red pepper, ½ tsp kosher salt, ½ tsp Mexican oregano",
          "1½ tbsp canola oil, kosher salt, black pepper",
          "FOR TOMORROW: the pork belly bag (sealed with its soy–brown sugar rub since Sunday)"
        ],
        steps: [
          "Chimichurri first (10 min, one bowl): chop, mince, stir. It blooms while everything else cooks.",
          "Potatoes: halved golds, canola, salt; air fryer 400°F ~20 min, shake at 10.",
          "Pull the chuck, pat VERY dry, light salt. Blackstone on maximum: 90 sec per side + fat edges.",
          "Rest 5 min under foil; slice against the grain, ½-inch planks. Kids' portions before saucing; chimichurri over the rest.",
          "AFTER DINNER (30 seconds): reset the bath to 165°F and drop the pork belly bag (sealed since Sunday) — it rides ~24 hr to Thursday.",
          "Cleanup: griddle scrape, air fryer basket, two bowls, trash the bag."
        ]
      }
    },
    {
      id: "porkbelly",
      cost: { est: 12.0, servings: 4, note: "~2 lb pork belly @ $4.99/lb feature + cucumber salad; glaze + rice from staples" },
      nutrition: { serving: "1 bowl: ~5 oz glazed crispy belly over 1½ cups rice + cucumber salad", calories: 850, protein: 25, carbs: 70, fat: 50 },
      daytime: ["THU ~12:30 PM (5 min): rice cooker on + mix the cucumber salad — it improves all afternoon"],
      title: "Crispy Glazed Pork Belly Bowls with Cucumber Salad",
      slot: "Dinner 4 · Thu Jul 30",
      time: "~25 min at dinner",
      equipment: ["Sous vide", "Blackstone", "Rice cooker"],
      summary:
        "The ad's boldest cut ($4.99/lb): 24-hour belly cubed and seared shattering-crisp on the Blackstone, tossed in a soy–brown sugar–garlic–ginger glaze that goes sticky on contact. Rice underneath, sharp quick cucumber salad to cut the richness. Kids: crispy belly cubes pulled before the glaze (basically pork candy) — or self-serve. This is restaurant food at $3/serving.",
      links: [
        { label: "Anova — Crispy Pork Belly (sous vide method)", url: "https://recipes.anovaculinary.com/recipe/crispy-pork-belly-4", tag: "primary" },
        { label: "Amazing Food Made Easy — pork belly times & temps", url: "https://www.amazingfoodmadeeasy.com/sous-vide-times-temperatures/how-to-sous-vide/belly", tag: "alt" },
        { label: "r/sousvide — pork belly threads (sanity check)", url: "https://www.reddit.com/r/sousvide/search/?q=pork%20belly", tag: "reddit" }
      ],
      swapNote: "165°F/24 hr = tender with structure for cubing (Stefan's and AFME's tested range). Dry HARD before searing — wet belly steams instead of crisping.",
      recipe: {
        activeTime: "~25 min at dinner",
        cookTime: "belly 24 hr at 165°F (in since Wednesday night)",
        ingredients: [
          "~2 lb H-E-B pork belly (in the bath since Wednesday, soy–brown sugar in the bag)",
          "GLAZE: 3 tbsp soy sauce + 2 tbsp brown sugar + 2 garlic cloves (minced) + 1 tbsp grated ginger + splash of bag juices",
          "CUCUMBER SALAD: 2 cucumbers (thin half-moons), 2 tbsp red wine vinegar, 1 tsp brown sugar, pinch of salt, pinch of crushed red pepper",
          "2 cups (dry) jasmine rice — rice cooker, started midday",
          "green tops from the onions if any survive, or cilantro"
        ],
        steps: [
          "MIDDAY: rice cooker on. Mix the cucumber salad — it improves in the fridge all afternoon.",
          "Pull the belly, pat VERY dry (this is the whole game), cut into 1-inch cubes.",
          "Blackstone on high: cubes fat-side down first, 2–3 min per side until deeply browned and crackling. Kids' share out now — plain crispy cubes on rice.",
          "Kill the heat to medium. Glaze ingredients onto the griddle over the cubes — it bubbles to sticky in ~60 seconds. Toss to coat, off immediately (sugar burns fast).",
          "Bowls: rice, glazed belly, cucumber salad on the side, herbs over.",
          "Cleanup: griddle scrape while warm (sugar!), rice pot, one bowl, trash the bag."
        ]
      }
    },
  ],
  grocery: [
    {
      section: "Joe V's Smart Shop (optional trip, ~$17 — HEB subs noted on every line)",
      items: [
        { name: "Boneless Pork Carnitas (ad item @ $2.47/lb — pre-cut shoulder, zero deboning)", qty: "~4 lb — 2 meals + bank (HEB sub: boneless pork butt ~$2.79/lb)", est: 9.9 },
        { name: "La Ranchera White Corn Tortillas (ad item)", qty: "big pack — carnitas night (HEB sub: Mi Tienda ~$2.50)", est: 1.9 },
        { name: "Cucumbers (ad item @ $1)", qty: "2 — pork belly night salad", est: 2.0 },
        { name: "Yellow Onions (ad item @ $0.97/lb)", qty: "4 medium — tacos, diabla, aromatics", est: 2.5 },
        { name: "Garlic (ad item)", qty: "1 head", est: 1.0 }
      ]
    },
    {
      section: "H-E-B — Meat & Seafood",
      items: [
        { name: "H-E-B Frozen Peeled & Deveined Raw Jumbo Shrimp, 2 lb IQF bag (~$7.50/lb — bags beat counter per-lb, and IQF portions pour out as needed)", qty: "use ~1.5 lb Tuesday; remaining ~0.5 lb chamber-reseals into the freezer bank", est: 15.0 },
        { name: "H-E-B Prime 1 Beef Chuck Roast (ad item @ $5.99/lb, 33% off)", qty: "~2.75 lb — the 24-hr steak play", est: 16.5 },
        { name: "FRESH! H-E-B Natural Pork Belly (ad item @ $4.99/lb)", qty: "~2 lb — Thursday's flagship", est: 10.0 },
        { name: "H-E-B Boneless Skinless Chicken Breasts", qty: "~1.5 lb — the 2 freezer drop-in bags", est: 5.0 }
      ]
    },
    {
      section: "H-E-B — Produce",
      items: [
        { name: "H-E-B Baby Gold Potatoes", qty: "2 × 1.5 lb bags (regular price this week)", est: 4.5 },
        { name: "Roma tomatoes", qty: "2 — diabla sauce", est: 1.0 },
        { name: "Fresh ginger", qty: "~2 inch knob — belly glaze", est: 1.5 },
        { name: "Limes", qty: "5 — tacos, diabla, nachos", est: 1.6 },
        { name: "Cilantro", qty: "1 bunch", est: 0.7 },
        { name: "Flat-leaf parsley", qty: "1 bunch — chimichurri", est: 1.0 }
      ]
    },
    {
      section: "H-E-B — Dairy",
      items: [
        { name: "H-E-B Mexican Style Shredded Cheese, 16 oz", qty: "1 bag — kid tacos, nachos", est: 4.7 },
        { name: "Daisy Sour Cream", qty: "16 oz tub", est: 1.8 }
      ]
    },
    {
      section: "H-E-B — Pantry & Frozen",
      items: [
        { name: "H-E-B Salsa Verde", qty: "1 jar — carnitas tacos + nachos", est: 2.5 },
        { name: "Kraft Mac & Cheese (ad item @ $1)", qty: "3 boxes — straight into the kids' self-serve stash", est: 3.0 }
      ]
    },
    {
      section: "Staples Stock-Up (first real purchase — everything this menu needs, owned afterward)",
      items: [
        { name: "Mahatma Jasmine Rice", qty: "2 lb bag", est: 2.8 },
        { name: "Bolner's Fiesta Brand Pork Rub", qty: "1 shaker", est: 3.0 },
        { name: "Bolner's Fiesta Brand Fajita Seasoning", qty: "1 shaker", est: 2.0 },
        { name: "Fiesta Ground Cumin + Fiesta Mexican Oregano", qty: "1 each", est: 3.0 },
        { name: "Fiesta Crushed Red Pepper", qty: "1 shaker", est: 1.5 },
        { name: "Fiesta Dried Guajillo Chiles + Chile de Árbol", qty: "1 bag each — diabla now, pantry heat forever", est: 4.0 },
        { name: "Kikkoman Soy Sauce", qty: "10 oz — belly glaze", est: 2.5 },
        { name: "Imperial Light Brown Sugar (Texas brand)", qty: "1 lb — glaze + cucumber salad", est: 2.5 },
        { name: "Morton Coarse Kosher Salt (3 lb) + McCormick Black Pepper Grinder", qty: "1 each", est: 6.0 },
        { name: "H-E-B Canola Oil", qty: "48 oz", est: 4.0 },
        { name: "H-E-B Olive Oil", qty: "500 ml — chimichurri + diabla", est: 6.0 },
        { name: "Red wine vinegar", qty: "1 bottle — chimichurri + cucumber salad", est: 2.5 },
        { name: "Falfurrias Salted Butter (Texas brand)", qty: "1 lb — general (and the kids' mac)", est: 4.5 }
      ]
    }
  ]
};
