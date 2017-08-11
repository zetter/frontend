package navigation

object NavLinks2 {

// Opinion
  val opinion = NavLink2("commentisfree", "/commentisfree", "opinion")
  val columnists = NavLink2("index/contributors", "/index/contributors", "columnists")
  val auColumnists = NavLink2("au/index/contributors", "/au/index/contributors", "columnists")
  val theGuardianView = NavLink2("profile/editorial", "/profile/editorial", "the guardian view")
  val cartoons = NavLink2("cartoons/archive", "/cartoons/archive", "cartoons")
  val inMyOpinion = NavLink2("commentisfree/series/comment-is-free-weekly", "/commentisfree/series/comment-is-free-weekly", "opinion videos")
  val letters = NavLink2("", "/tone/letters", "letters")

// Sport
  val sport = NavLink2("sport", "/sport", "sport")
  val football = NavLink2("football", "/football", "football")
  val soccer = football.copy(title = "soccer")
  val cricket = NavLink2("sport/cricket", "/sport/cricket", "cricket")
  val cycling = NavLink2("sport/cycling", "/sport/cycling", "cycling")
  val rugbyUnion = NavLink2("sport/rugby-union", "/sport/rugby-union", "rugby union")
  val formulaOne = NavLink2("sport/formulaone", "/sport/formulaone", "F1")
  val tennis = NavLink2("sport/tennis", "/sport/tennis", "tennis")
  val golf = NavLink2("sport/golf", "/sport/golf", "golf")
  val boxing = NavLink2("sport/boxing", "/sport/boxing", "boxing")
  val usSports = NavLink2("sport/us-sport", "/sport/us-sport", "US sports")
  val racing = NavLink2("sport/horse-racing", "/sport/horse-racing", "racing")
  val rugbyLeague = NavLink2("sport/rugbyleague", "/sport/rugbyleague", "rugby league")
  val australiaSport = NavLink2("sport/australia-sport", "/sport/australia-sport", "australia sport")
  val AFL = NavLink2("sport/afl", "/sport/afl", "AFL")
  val NRL = NavLink2("sport/nrl", "/sport/nrl", "NRL")
  val aLeague = NavLink2("football/a-league", "/football/a-league", "a-league")
  val NFL = NavLink2("sport/nfl", "/sport/nfl", "NFL")
  val MLS = NavLink2("football/mls", "/football/mls", "MLS")
  val MLB = NavLink2("sport/mlb", "/sport/mlb", "MLB")
  val NBA = NavLink2("sport/nba", "/sport/nba", "NBA")
  val NHL = NavLink2("sport/nhl", "/sport/nhl", "NHL")

// Arts
  val arts = NavLink2("culture", "/culture", "arts")
  val film = NavLink2("film", "/film", "film")
  val tvAndRadio = NavLink2("tv-and-radio", "/tv-and-radio", "tv & radio")
  val music = NavLink2("music", "/music", "music")
  val games = NavLink2("technology/games", "/technology/games", "games")
  val books = NavLink2("books", "/books", "books")
  val artAndDesign = NavLink2("artanddesign", "/artanddesign", "art & design")
  val stage = NavLink2("stage", "/stage", "stage")
  val classical = NavLink2("music/classicalmusicandopera", "/music/classicalmusicandopera", "classical")

// Life
  val life = NavLink2("lifeandstyle", "/lifeandstyle", "life")
  val fashion = NavLink2("fashion", "/fashion", "fashion")
  val fashionAu = NavLink2("au/lifeandstyle/fashion", "/au/lifeandstyle/fashion", "fashion")
  val food = NavLink2("lifeandstyle/food-and-drink", "/lifeandstyle/food-and-drink", "food")
  val foodAu = NavLink2("au/lifeandstyle/food-and-drink", "/au/lifeandstyle/food-and-drink", "food")
  val travel = NavLink2("travel", "/travel", "travel")
  val relationshipsAu = NavLink2("au/lifeandstyle/relationships", "/au/lifeandstyle/relationships", "relationships")
  val loveAndSex = NavLink2("lifeandstyle/love-and-sex", "/lifeandstyle/love-and-sex", "love & sex")
  val family = NavLink2("lifeandstyle/family", "/lifeandstyle/family", "family")
  val home = NavLink2("lifeandstyle/home-and-garden", "/lifeandstyle/home-and-garden", "home & garden")
  val health = NavLink2("lifeandstyle/health-and-wellbeing", "/lifeandstyle/health-and-wellbeing", "health & fitness")
  val healthAu = NavLink2("au/lifeandstyle/health-and-wellbeing", "/au/lifeandstyle/health-and-wellbeing", "health & fitness")
  val women = NavLink2("lifeandstyle/women", "/lifeandstyle/women", "women")
  val recipes = NavLink2("tone/recipes", "/tone/recipes", "recipes")
  val travelUk = NavLink2("travel/uk", "/travel/uk", "UK", children = List(travel))
  val travelEurope = NavLink2("travel/europe", "/travel/europe", "europe", children = List(travel))
  val travelUs = NavLink2("travel/usa", "/travel/usa", "US", children = List(travel))
  val skiing = NavLink2("travel/skiing", "/travel/skiing", "skiing", children = List(travel))
  val travelAustralasia = NavLink2("travel/australasia", "/travel/australasia", "australasia", children = List(travel))
  val travelAsia = NavLink2("travel/asia", "/travel/asia", "asia", children = List(travel))

// Other
  val todaysPaper = NavLink2("theguardian", "/theguardian", "today's paper")
  val observer = NavLink2("observer", "/observer", "the observer")
  val crosswords = NavLink2("crosswords", "/crosswords", "crosswords")
  val video =  NavLink2("video", "/video", "video")
  val podcasts =  NavLink2("podcasts", "/podcasts", "podcasts")
  val pictures =  NavLink2("pictures", "/inpictures", "pictures")
  val newsletters =  NavLink2("", "/email-newsletters", "newsletters")

// News
  val science = NavLink2("science", "/science", "science")
  val tech = NavLink2("tech", "/technology", "technology")
  val politics = NavLink2("politics", "/politics", "UK politics")
  val media = NavLink2("media", "/media", "media")
  val cities = NavLink2("cities", "/cities", "cities")
  val globalDevelopment = NavLink2("global-development", "/global-development", "global development")
  val australiaNews = NavLink2("australia-news", "/australia-news", "australia")
  val auPolitics = NavLink2("australia-news/australian-politics", "/australia-news/australian-politics", "AU politics")
  val auImmigration = NavLink2("australia-news/australian-immigration-and-asylum", "/australia-news/australian-immigration-and-asylum", "immigration")
  val indigenousAustralia = NavLink2("australia-news/indigenous-australians", "/australia-news/indigenous-australians", "indigenous australia")
  val indigenousAustraliaOpinion = NavLink2("commentisfree/series/indigenousx", "/commentisfree/series/indigenousx", "Indigenous")
  val usNews = NavLink2("us-news", "/us-news", "US")
  val usPolitics = NavLink2("us-news/us-politics", "/us-news/us-politics", "US politics")
  val education = NavLink2("education", "/education", "education")
  val society = NavLink2("society", "/society", "society")
  val law = NavLink2("law", "/law", "law")
  val scotland = NavLink2("uk/scotland", "/uk/scotland", "scotland")
  val wales = NavLink2("wales", "/uk/wales", "uk/wales")
  val northernIreland = NavLink2("uk/northern ireland", "/uk/northernireland", "northernireland")
  val europe = NavLink2("world/europe-news", "/world/europe-news", "europe")
  val americas = NavLink2("world/americas", "/world/americas", "americas")
  val asia = NavLink2("world/asia", "/world/asia", "asia")
  val africa = NavLink2("world/africa", "/world/africa", "africa")
  val middleEast = NavLink2("world/middleeast", "/world/middleeast", "middle east")
  val economics = NavLink2("business/economics", "/business/economics", "economics")
  val inequality = NavLink2("inequality", "/inequality", "inequality")
  val banking = NavLink2("business/banking", "/business/banking", "banking")
  val retail = NavLink2("business/retail", "/business/retail", "retail")
  val markets = NavLink2("business/stock-markets", "/business/stock-markets", "markets")
  val eurozone = NavLink2("business/eurozone", "/business/eurozone", "eurozone")
  val sustainableBusiness = NavLink2("us/sustainable-business", "/us/sustainable-business", "sustainable business")
  val diversityEquality = NavLink2("business/diversity-and-equality", "/business/diversity-and-equality", "diversity & equality in business")
  val smallBusiness = NavLink2("business/us-small-business", "/business/us-small-business", "small business")
  val climateChange = NavLink2("environment/climate-change", "/environment/climate-change", "climate change")
  val wildlife = NavLink2("environment/wildlife", "/environment/wildlife", "wildlife")
  val energy = NavLink2("environment/energy", "/environment/energy", "energy")
  val pollution = NavLink2("environment/pollution", "/environment/pollution", "pollution")
  val property = NavLink2("money/property", "/money/property", "property")
  val pensions = NavLink2("money/pensions", "/money/pensions", "pensions")
  val savings = NavLink2("money/savings", "/money/savings", "savings")
  val borrowing = NavLink2("money/debt", "/money/debt", "borrowing")
  val careers = NavLink2("money/work-and-careers", "/money/work-and-careers", "careers")
  val obituaries = NavLink2("obituaries", "/tone/obituaries", "obituaries")
  val money = NavLink2("money", "/money", "money", children = List(property, pensions, savings, borrowing, careers))

  val ukNews = NavLink2("uk-news", "/uk-news", "UK", children = List(politics, education, media, society, law, scotland, wales, northernIreland))
  val world = NavLink2("world", "/world", "world", children = List(europe, usNews, americas, asia, australiaNews, middleEast, africa, inequality, cities, globalDevelopment))

  val ukEnvironment = NavLink2("environment", "/environment", "environment", children = List(climateChange, wildlife, energy, pollution))
  val usEnvironment = ukEnvironment
  val auEnvironment = ukEnvironment.copy(children = List(cities, globalDevelopment, sustainableBusiness))
  val intEnvironment = ukEnvironment

  val ukBusiness = NavLink2("business", "/business", "business", children = List(economics, banking, money, markets, eurozone))
  val usBusiness = ukBusiness.copy(children = List(economics, sustainableBusiness, diversityEquality, smallBusiness))
  val auBusiness = ukBusiness.copy(children = List(markets, money))
  val intBusiness = ukBusiness

  val ukEconomy = ukBusiness.copy(title = "economy")
  val usEconomy = usBusiness.copy(title = "economy")
  val auEconomy = auBusiness.copy(title = "economy")
  val intEconomy = intBusiness.copy(title = "economy")

  val ukNetworkFront = NavLink2("uk", "/", "headlines", children = List(ukNews, world, ukBusiness, ukEnvironment, tech, football))
  val usNetworkFront = NavLink2("us", "/", "headlines", children = List(usNews, world, usPolitics, usBusiness, usEnvironment, soccer))
  val auNetworkFront = NavLink2("au", "/", "headlines", children = List(australiaNews, world, auPolitics, auEnvironment, football))
  val intNetworkFront = NavLink2("int", "/", "headlines", children = List(world, ukNews, intBusiness, science, globalDevelopment, football))

//Pillars
  val ukNewsPillar = NavLink2("network front", "/", "news", Some("headlines"), List(ukNews, world, ukBusiness, ukEnvironment, tech, politics, science, globalDevelopment, cities, obituaries))
  val usNewsPillar = ukNewsPillar.copy(children = List(usNews, world, usEnvironment, usPolitics, usBusiness, science, money, tech, obituaries))
  val auNewsPillar = ukNewsPillar.copy(children = List(australiaNews, world, auPolitics, auEnvironment, indigenousAustralia, auImmigration, media))
  val intNewsPillar = ukNewsPillar.copy(children = List(world, ukNews, science, cities, globalDevelopment, tech, intBusiness, intEnvironment, obituaries))

  val ukOpinionPillar = NavLink2("commentisfree", "/commentisfree", "opinion", Some("opinion home"),
    List(
      theGuardianView,
      columnists,
      cartoons,
      inMyOpinion,
      letters,
      NavLink2("", "/profile/pollytoynbee", "Polly Toynbee"),
      NavLink2("", "/profile/owen-jones", "Owen Jones"),
      NavLink2("", "/profile/jonathanfreedland", "Jonathan Freedland"),
      NavLink2("", "/profile/marinahyde", "Marina Hyde")
    )
  )
  val usOpinionPillar = ukOpinionPillar.copy(
    children = List(
      theGuardianView,
      columnists,
      letters,
      NavLink2("", "/profile/jill-abramson", "Jill Abramson"),
      NavLink2("", "/commentisfree/series/jessica-valenti-column", "Jessica Valenti"),
      NavLink2("", "/profile/steven-w-thrasher", "Steven W Thrasher"),
      NavLink2("", "/profile/richard-wolffe", "Richard Wolffe"),
      inMyOpinion,
      cartoons
    )
  )
  val auOpinionPillar = ukOpinionPillar.copy(
    children = List(
      auColumnists,
      cartoons,
      indigenousAustraliaOpinion,
      theGuardianView.copy(title="editorials"),
      letters,
      NavLink2("", "/profile/first-dog-on-the-moon", "first dog on the moon"),
      NavLink2("", "/profile/katharine-murphy", "Katharine Murphy")
    )
  )
  val intOpinionPillar = ukOpinionPillar.copy(
    children = List(
      theGuardianView,
      columnists,
      cartoons,
      inMyOpinion,
      letters
    )
  )

  val ukSportPillar = NavLink2("sport", "/sport", "sport", Some("sport home"), List(football, rugbyUnion, cricket, tennis, cycling, formulaOne, rugbyLeague, racing, usSports, golf))
  val usSportPillar = ukSportPillar.copy(children = List(soccer, NFL, tennis, MLB, MLS, NBA, NHL))
  val auSportPillar = ukSportPillar.copy(children = List(football, AFL, NRL, aLeague, cricket, rugbyUnion, tennis))
  val intSportPillar = ukSportPillar.copy(children = List(football, rugbyUnion, cricket, tennis, cycling, formulaOne, golf, usSports))

  val ukArtsPillar = NavLink2("culture", "/culture", "arts", Some("culture home"), List(tvAndRadio, music, film, stage, books, games, artAndDesign, classical))
  val usArtsPillar = ukArtsPillar.copy(children = List(film, books, music, artAndDesign, tvAndRadio, stage, classical, games))
  val auArtsPillar = ukArtsPillar.copy(children = List(film, music, books, tvAndRadio, artAndDesign, stage, games, classical))
  val intArtsPillar = ukArtsPillar.copy(children = List(books, music, tvAndRadio, artAndDesign, film,games, classical, stage))

  val ukLifePillar = NavLink2("lifeandstyle", "/lifeandstyle", "life", Some("lifestyle home"), List(fashion, food, recipes, travel, loveAndSex, family, home, health, women, money))
  val usLifePillar = ukLifePillar.copy(children = List(fashion, food, recipes, loveAndSex, home, health, family, travel, money))
  val auLifePillar = ukLifePillar.copy(children = List(travel, foodAu, relationshipsAu, fashionAu, healthAu, loveAndSex, family, home))
  val intLifePillar = ukLifePillar.copy(children = List(fashion, food, recipes, loveAndSex, health, home, women, family, travel, money))
}

object NavLinks {

  val todaysPaper = NavLink("today's paper", "/theguardian", "theguardian")
  val observer = NavLink("the observer", "/observer", "observer")
  val digitalNewspaperArchive = NavLink("digital archive", "https://theguardian.newspapers.com")
  val crosswords = NavLink("crosswords", "/crosswords", "crosswords")
  val video =  NavLink("video", "/video")
  val podcasts =  NavLink("podcasts", "/podcasts")
  val pictures =  NavLink("pictures", "/inpictures")
  val newsletters =  NavLink("newsletters", "/email-newsletters")
  val jobs = NavLink("jobs", "https://jobs.theguardian.com")
  val dating = NavLink("dating", "https://soulmates.theguardian.com")
  val apps = NavLink("the guardian app", "https://app.adjust.com/f8qm1x_8q69t7?campaign=NewHeader&adgroup=Mobile&creative=generic")
  val ukMasterClasses = NavLink("masterclasses", "/guardian-masterclasses?INTCMP=masterclasses_uk_web_newheader")
  val auEvents = NavLink("events", "/guardian-live-australia")
  var holidays = NavLink("holidays", "https://holidays.theguardian.com")

  val tagPages = List(
    "technology/games",
    "us-news/us-politics",
    "australia-news/australian-politics",
    "australia-news/australian-immigration-and-asylum",
    "australia-news/indigenous-australians",
    "uk/scotland",
    "uk/wales",
    "uk/northernireland",
    "world/europe-news",
    "world/americas",
    "world/asia",
    "world/africa",
    "world/middleeast",
    "business/economics",
    "business/banking",
    "business/retail",
    "business/stock-markets",
    "business/eurozone",
    "us/sustainable-business",
    "business/diversity-and-equality",
    "business/us-small-business",
    "environment/climate-change",
    "environment/wildlife",
    "environment/energy",
    "environment/pollution",
    "money/property",
    "money/pensions",
    "money/savings",
    "money/debt",
    "money/work-and-careers",
    "cartoons/archive",
    "type/cartoon",
    "profile/editorial",
    "au/index/contributors",
    "index/contributors",
    "commentisfree/series/comment-is-free-weekly",
    "sport/rugby-union",
    "sport/cricket",
    "sport/tennis",
    "sport/cycling",
    "sport/golf",
    "sport/us-sport",
    "sport/horse-racing",
    "sport/rugbyleague",
    "sport/boxing",
    "sport/formulaone",
    "sport/nfl",
    "sport/mlb",
    "football/mls",
    "sport/nba",
    "sport/nhl",
    "sport/afl",
    "football/a-league",
    "sport/nrl",
    "sport/australia-sport",
    "music/classicalmusicandopera",
    "lifeandstyle/food-and-drink",
    "tone/recipes",
    "lifeandstyle/women",
    "lifeandstyle/health-and-wellbeing",
    "lifeandstyle/family",
    "lifeandstyle/home-and-garden",
    "lifeandstyle/love-and-sex",
    "au/lifeandstyle/fashion",
    "au/lifeandstyle/food-and-drink",
    "au/lifeandstyle/relationships",
    "au/lifeandstyle/health-and-wellbeing",
    "travel/uk",
    "travel/europe",
    "travel/usa",
    "travel/skiing",
    "travel/australasia",
    "travel/asia",
    "theguardian",
    "observer",
    "football/live",
    "football/tables",
    "football/competitions",
    "football/results",
    "football/fixtures",
    "education"
  )
}
