var ships = [];

ships.namePool = [
	[
		"Adelphi",
		"Aeon",
		"Agamemnon",
		"Ahwahnee",
		"Ajax",
		"Akagi",
		"Al-Batani",
		"Albert Einstein",
		"Aleo",
		"Alka-Selsior",
		"Amber",
		"Antares",
		"Apollo",
		"Appalachia",
		"Archer",
		"Ariel",
		"Aries",
		"Armstrong",
		"Atlantis",
		"B-24-CLN",
		"Baton Rouge",
		"Bellerophon",
		"Berlin",
		"Biko",
		"Billings",
		"Bonaventure",
		"Bonchune",
		"Bozeman",
		"Bradbury",
		"Brattain",
		"Budapest",
		"Buran",
		"Cairo",
		"Callisto",
		"Carolina",
		"Centaur",
		"Challenger",
		"Charleston",
		"Chekov",
		"Chicago",
		"Clavyn",
		"Clement",
		"Cochrane",
		"Columbia",
		"Concord",
		"Constantinople",
		"Constellation",
		"Copernicus",
		"Cortez",
		"Crazy Horse",
		"Crockett",
		"Curry",
		"Da-Teplan",
		"Defiant",
		"Denver",
		"Destiny",
		"D'hjty",
		"Discovery",
		"Donovan",
		"Drake",
		"Eagle",
		"Elkins",
		"Elmer Fudd",
		"Emden",
		"Endeavour",
		"Entente",
		"Enterprise",
		"Equicon",
		"Equinox",
		"Essex",
		"Excalibur",
		"Exeter",
		"Farouk El-Baz",
		"Farragut",
		"Fearless",
		"Firebrand",
		"Fleming",
		"Fredrickson",
		"Galaxy",
		"Gallico",
		"Gander",
		"Gandhi",
		"Ganges",
		"Ganymede",
		"Gettysburg",
		"G'Mat",
		"Goddard",
		"Gorkon",
		"Gremlin",
		"Greyhound",
		"Grissom",
		"Hathaway",
		"Havana",
		"Heart of Gold",
		"Helin",
		"Hera",
		"Hermes",
		"Hispaniola",
		"Hokule'a",
		"Honshu",
		"Hood",
		"Horatio",
		"Horizon",
		"Hornet",
		"Huron",
		"Intrepid",
		"James Fennimore Cooper",
		"Jenolan",
		"John F Kennedy",
		"John Muir",
		"Kearsarge",
		"Kelvin",
		"Kongo",
		"Korolev",
		"Kyushu",
		"Lakota",
		"Lalo",
		"Lantree",
		"LaSalle",
		"Leeds",
		"Lexington",
		"Liberator",
		"Livingston",
		"Madison",
		"Magellan",
		"Majestic",
		"Malinche",
		"Malone",
		"Maryland",
		"Matte Fringe",
		"Max Plank",
		"Mayflower",
		"Mekong",
		"Melbourne",
		"Merrimac",
		"Minnow",
		"Min'ow",
		"Monitor",
		"Muleskinner",
		"Musashi",
		"Mustang",
		"Nash",
		"Nautilus",
		"Neil Armstrong",
		"Newton",
		"Niels Bohr",
		"Nightwing",
		"Nobel",
		"Noble",
		"Non Sequitur",
		"Northridge",
		"Nova",
		"Oberth",
		"Odyssey",
		"Okinawa",
		"Olympia",
		"Omaha Nebraska",
		"Orinoco",
		"Pasteur",
		"Pegasus",
		"Petersen",
		"Philadelphia",
		"Phoenix",
		"Portland",
		"Potemkin",
		"Princeton",
		"Prokofiev",
		"Prometheus",
		"Proxima",
		"Pueblo",
		"Puget Sound",
		"Raging Queen",
		"Raman",
		"Relativity",
		"Reliant",
		"Renegade",
		"Republic",
		"Repulse",
		"Revere",
		"Rhode Island",
		"Rio Grande",
		"Robert Louis Stevenson",
		"Roosevelt",
		"Rubicon",
		"Rutledge",
		"Sarajevo",
		"Saratoga",
		"Sarek",
		"Scovil",
		"Seaquest",
		"Seaview",
		"Sentinel",
		"Shenandoah",
		"Shepard",
		"Sherlock Holmes",
		"ShirKahr",
		"Silversides",
		"Sitak",
		"Springfield",
		"SS Vico",
		"Stargazer",
		"Strata",
		"Suleiman",
		"Sutherland",
		"Syracuse",
		"Tecumseh",
		"Thomas Paine",
		"Thunderchild",
		"Tian An Men",
		"Ticonderoga",
		"Titan",
		"T'Kumbra",
		"Tolstoy",
		"Tombaugh",
		"Tranquility Base",
		"Trial",
		"Trieste",
		"Tripoli",
		"Truman",
		"Tsiolkovsky",
		"Tycho",
		"Ulysses",
		"Umibazu",
		"Unicorn",
		"Valdemar",
		"Valiant",
		"Valley Forge",
		"Vengeance",
		"Venture",
		"Veracruz",
		"Victory",
		"Volga",
		"Voyager",
		"Wellington",
		"White Sands",
		"Whorfin",
		"Woden",
		"Wolcott",
		"Wyoming",
		"Yamaguchi",
		"Yamato",
		"Yangtzee Kiang",
		"Yeager",
		"Yellowstone",
		"Yorkshire",
		"Yorktown",
		"Yosemite",
		"Yukon",
		"Yuri Gagarin",
		"Zapata",
		"Zhukov",
	],
	[
		"Aguinaldo",
		"Alamo",
		"Alvin",
		"Argonne",
		"Aubrey",
		"Audie",
		"Colonel",
		"Deveraux",
		"El",
		"Gallipoli",
		"Geronimo",
		"Gettysburg",
		"Hastings",
		"Horatius",
		"Iwo",
		"Kamehameha",
		"Leyte",
		"Mannerheim",
		"Marathon",
		"Marne",
		"Montgomery",
		"Moskva",
		"Normandy",
		"Pal",
		"Rodger",
		"Sandino",
		"Swamp",
		"Tchaka",
		"Tours",
		"Valley",
		"Vercingetorix",
		"Voortrek",
		"Waterloo",
		"Xenophon",
		"Ypres",
		"MiraCZ",
		"JDllama",
		"Lord Moriarty",
		"Nanenj",
		"Jwa",
		"Siveran",
		"Naveen PCS",
	],
	[
		"Aries lb",
		"Discovery One",
		"Moonbus",
		"Orion III",
	],
	];
	ships.namePool.rareChance = 1;
	ships.namePool.uncommonChance = 10;

ships.options = {
	cost: 50000,
	offloadRate: 10,
	flashRate: 100, // Text Flash Rate (Warnings)
	grid: {
		tickRate: 800,
		rockChance: 15,
		size: {
			x: 7,
			y: 30,
		},
	},
	images: {
		home: "resources/images/planet.png",
		dest: "resources/images/starfield.png",
		travel1: "resources/images/travelOut.png",
		travel2: "resources/images/travelIn.png",
		asteroid: "resources/images/boulder.png",
		ship: "resources/images/ship.png",
	},
}


// NEW SHIP FUNCTIONS
ships.newName = function() {
	var randomSelector = Math.ceil(Math.random() * 100);
	var rarity = 0;
	if (randomSelector <= ships.namePool.rareChance) {
		rarity = 2;
	} else if (randomSelector > ships.namePool.rareChance && randomSelector <= ships.namePool.uncommonChance) {
		rarity = 1;
	} else {
		rarity = 0;
	}
	var selectName = Math.floor(Math.random() * ships.namePool[rarity].length);
	randomShipName = Array(rarity + 1).join("*") + "PMV " + ships.namePool[rarity][selectName];
	ships.namePool[rarity].splice(selectName, 1);
	return randomShipName;
}

ships.newShip = function() {
	console.log("Creating new ship...");
	ships.newShip.defaults = {
		name: "Unnamed",
		shipNo: 0,
		locale: 1,
		type: 0,
		hull: [10, 10],
		power: [10, 10],
		cargo: [0, 100],
		mineSpeed: 10,
		moveSpeed: 8,
		cost: 50000,
		movement: {
			status: 0,
			timer: 0,
			timerSet: 0,
		},
		upgrades: {
			plating: {
				owned: 0,
				cost: 0,
				max: 10,		
			},
			reactor: {
				owned: 0,
				cost: 0,
				max: 10,
			},
			storage: {
				owned: 0,
				cost: 5000,
				max: 5,
			},
			drill: {
				owned: 0,
				cost: 0,
				max: 10,
			},
			engines: {
				owned: 0,
				cost: 5000,
				max: 10,
			},
			drones: {
				owned: 0,
				cost: 5000,
				max: 7,
			},
			autopilot: {
				owned: 0,
				cost: 15000,
				max: 1,
			},
		},
	}

	var newShipNo = 0
	if (ships.length > 0) {
		newShipNo = ships.length;
	} else {
		newShipNo = 0;
	}
	
	createdShip = ships.newShip.defaults;
	createdShip.shipNo = newShipNo;
	createdShip.name = ships.newName();
	
	resource.credits.owned -= createdShip.cost;
	ships.push(createdShip);

	console.log("Created " + createdShip.name + " as ships[" + newShipNo + "]")
	console.log(ships[newShipNo])

	if (ships.init.shipDiv(newShipNo)) {
		return true
	} else {
		console.log("Failed to create ship on document!")
		return false
	}
}

// Init functions for ship creation
ships.init = {}

ships.init.shipDiv = function(shipNo) {
	var ship = ships[shipNo];
	console.log("Init ships[" + shipNo + "]")
	// Create Ship Div as parent node
	var shipDiv = document.createElement("div");
	shipDiv.id = "ship-" + shipNo + "-";
	shipDiv.className = "ship";
	
		// Create Status div as child
		var statusDiv = document.createElement("div");
		statusDiv.id = "ship-" + shipNo + "-status";
		statusDiv.className = "column shipCenter";
		var statusTitle = document.createElement("div");
		statusTitle.id = "ship-" + shipNo + "-statusTitle";
		statusTitle.className = "statusTitle";
		statusTitle.innerHTML = ships.movement.statusStrings[ship.movement.status];
		statusDiv.appendChild(statusTitle);

			// Create unordered list
			var statusList = document.createElement("ul");
			statusList.id = "ship-" + shipNo + "-statusList";

			var newStatusItem = function(item) {
				statusItem = document.createElement("li");
				statusItem.className = "statusItem"
				statusItem.id = "ship-" + shipNo + "-" + item
				itemProperties = ship[item];

				itemLabel = document.createElement("span");
				itemLabel.className = "statusItem label";
				itemLabel.id = "ship-" + shipNo + "-" + item + "-label";
				itemLabel.innerHTML = item.charAt(0).toUpperCase() + item.slice(1) + ": ";
				statusItem.appendChild(itemLabel);

				if (typeof itemProperties === "number") {
					var itemValue = document.createElement("span");
					itemValue.className = "statusItem value";
					itemValue.id = "ship-" + shipNo + "-" + item + "-value";
					itemValue.innerHTML = itemProperties;
					statusItem.appendChild(itemValue);

				} else {
					var itemValue = document.createElement("span");
					itemValue.className = "statusItem value";
					itemValue.id = "ship-" + shipNo + "-" + item + "-value";
					itemValue.innerHTML = itemProperties[0];
					statusItem.appendChild(itemValue);

					var itemValueSeparator = document.createElement("span");
					itemValueSeparator.className = "statusItem label";
					itemValueSeparator.id = "ship-" + shipNo + "-" + item + "-itemValueSeparator";
					itemValueSeparator.innerHTML = "/";
					statusItem.appendChild(itemValueSeparator);

					var itemMaxValue = document.createElement("span");
					itemMaxValue.className = "statusItem value";
					itemMaxValue.id = "ship-" + shipNo + "-" + item + "-maxValue";
					itemMaxValue.innerHTML = itemProperties[1];
					statusItem.appendChild(itemMaxValue);
				}
				return statusItem
			}

			// Add items to unordered list
			statusList.appendChild(newStatusItem("hull"));
			statusList.appendChild(newStatusItem("cargo"));
			statusList.appendChild(newStatusItem("power"));
			statusList.appendChild(newStatusItem("locale"));

			// Append list to main div.
			statusDiv.appendChild(statusList);

			// Create controls div
			var controlsDiv = document.createElement("div");
			controlsDiv.className = "statusControlsShell";
			controlsDiv.id = "ship-" + shipNo + "controls"

			var setSail = document.createElement("button");
			setSail.id = "ship-" + shipNo + "-setSail";
			setSail.className = "statusControl";
			setSail.innerHTML = "Set Sail";
			setSail.setAttribute("onclick", "ships.setSail(" + shipNo + ")"); // TODO: Assign onclick
			controlsDiv.appendChild(setSail);

			var returnToPort = document.createElement("button");
			returnToPort.id = "ship-" + shipNo + "-returnToPort";
			returnToPort.className = "statusControl";
			returnToPort.innerHTML = "Return to Port";
			returnToPort.setAttribute("onclick", "ships.returnToPort(" + shipNo + ")"); // TODO: Assign onclick
			returnToPort.disabled = "true";
			controlsDiv.appendChild(returnToPort);

			// Append Controls to main div
			statusDiv.appendChild(controlsDiv);

		// Append main div to document
		shipDiv.appendChild(statusDiv);
		
		// Create specs div
		var specsDiv = document.createElement("div");
			specsDiv.id = "ship-" + shipNo + "-specs";
			specsDiv.className = "column shipLeft";
		var shipSpecs = ships.init.shipSpecs

			var newSpecItem = function(item) { // Returns row with given item information and button
				var itemProperties = ship.upgrades[item];

				// Create row for label and button
				var utRow = document.createElement("tr");

				// Create cell for label and value
				var utACell = document.createElement("td");

				// Create spans for label and value
				var itemLabel = document.createElement("span")
				itemLabel.className = "specItem label";
				itemLabel.id = "ship-" + shipNo + "-" + item + "-label";
				itemLabel.innerHTML = item.charAt(0).toUpperCase() + item.slice(1) + ": ";
				utACell.appendChild(itemLabel);

				var itemValue = document.createElement("span")
				itemValue.className = "specItem value";
				itemValue.id = "ship-" + shipNo + "-" + item + "-value";
				itemValue.innerHTML = itemProperties.owned;
				utACell.appendChild(itemValue);

				// Append A Cell to table row
				utRow.appendChild(utACell);

				// Create cell for upgrade button
				var utBCell = document.createElement("td");

				// Create upgrade buttons
				var upgradeButton = document.createElement("button");
				upgradeButton.id = "ship-"+ shipNo  + "-" + item + "-upgrade";
				upgradeButton.className = "specItem upgradeButton";
				upgradeButton.setAttribute("onclick","ships.upgrades.purchase(" + shipNo + ", '" + item + "')"); // TODO: Add function Name
				//upgradeButton.setAttribute("style", "visibility: hidden");
				upgradeButton.innerHTML = itemProperties.cost + "c";
				utBCell.appendChild(upgradeButton);

				// Append B Cell to table row
				utRow.appendChild(utBCell);

				return utRow	
			}

			// Create Expando button and append to div
			var expando = document.createElement("button");
			expando.className = "expando";
			expando.id = "ship-" + shipNo + "-expando";
			expando.setAttribute("onclick", "ships.disp.shipExpando(" + shipNo + ")");
			expando.innerHTML = "+/-";
			specsDiv.appendChild(expando);

			// Create nameplate and append to div
			var nameplate = document.createElement("div");
			nameplate.className = "shipNameplate";
			nameplate.id = "ship-" + shipNo + "-nameplate"
			nameplate.innerHTML = ship.name;
			specsDiv.appendChild(nameplate);

			// Create upgrades table
			var upgradesTable = document.createElement("tbody");
			upgradesTable.id = "ship-" + shipNo + "-upgrades"
					
			upgradesTable.appendChild(newSpecItem("drones"));
			//upgradesTable.appendChild(newSpecItem("plating"));
			//upgradesTable.appendChild(newSpecItem( "reactor"));
			upgradesTable.appendChild(newSpecItem("storage"));
			//upgradesTable.appendChild(newSpecItem("drill"));
			upgradesTable.appendChild(newSpecItem("engines"));
			upgradesTable.appendChild(newSpecItem("autopilot"));

		// Append table to Specs div
		specsDiv.appendChild(upgradesTable);

		// Append specs div to document
		shipDiv.appendChild(specsDiv);


		// Create grid 
		var gridDiv = document.createElement("div");
		gridDiv.id = "ship-" + shipNo + "-grid";
		gridDiv.className = "column shipRight";
		gridDiv.style.backgroundImage = "url('" + ships.options.images.home + "')"
		//gridDiv.innerHTML = "ship" + shipNo; // TODO: Set option to display this if desired
		var gridSize = ships.options.grid.size

			// Create grid Array
			ship.grid = new Array(gridSize.x);
			for (var x = 0; x < gridSize.x; x++) {
				ship.grid[x] = new Array(gridSize.y);
			}
			
			//Build Grid on Page
			var gridTable;
			var gridRows;
			var gridCells;
			var cellDiv;
			var cellImg;

			// Insert table 
			gridTable = document.createElement("tbody");
			gridTable.className = "gridTable";
			for (var x=0; x < ship.grid.length; x++) {
				// Insert rows
				gridRows = document.createElement("tr");
				gridTable.appendChild(gridRows);
				for (var y = 0; y < gridSize.y; y++) {
					// Insert cells 
					gridCells = document.createElement("td");
						cellDiv = document.createElement("div");
						cellDiv.className = "imageContainer";
							// Insert images
							cellImg = document.createElement("img");
							cellImg.src = ships.options.images.asteroid;
							cellImg.setAttribute("onclick","ships.grid.rockClick(" + shipNo + "," + x + "," + y + ")"); // TODO: Set onclick function
							cellImg.id = "ship-" + shipNo + "-gridCell-" + x + "-" + y +"-";
							cellImg.width = ship.grid[x][y];
							cellDiv.appendChild(cellImg);
						gridCells.appendChild(cellDiv);
					gridRows.appendChild(gridCells);
				}
			}
			gridDiv.appendChild(gridTable);
		
		// Draw ship onto grid
		var imgContainer = document.createElement("div");
		imgContainer.id = "ship-" + shipNo + "-image";

		var shipImage = document.createElement("img");
		shipImage.className = "shipImage";
		shipImage.src = ships.options.images.ship;
		shipImage.width = "160";
		shipImage.usemap = "#shipMap";

		var shipMap = document.createElement("map");
		shipMap.id = "shipMap";
		shipMap.name = "shipMap";

		var mapArea = document.createElement("area");
		mapArea.setAttribute("shape","poly");
		mapArea.setAttribute("coords","255,141,283,114,283,81,254,55,198,57,153,13,35,14,34,56,12,66,14,132,34,142,33,186,153,185,199,142,");

		shipMap.appendChild(mapArea);
		
		imgContainer.appendChild(shipImage);
		imgContainer.appendChild(shipMap);

		gridDiv.appendChild(imgContainer);

	// Append grid onto ship div.
	shipDiv.appendChild(gridDiv);
		

	// Write ship to document at top of shipsShell
	var topShip = document.getElementById("shipsShell").firstChild;
	shipsShell.insertBefore(shipDiv, topShip);
	console.log(ship.name + " (ships[" + shipNo + "]) loaded into document");

	// Update fleet size on document
	fleetSize = document.getElementById("fleetSize");
	fleetSize.innerHTML = "Fleet: " + ships.length + " ships";

	return true
}

// SHIP SPECIFIC FUNCTIONS - Functions that call on a specific ship. Use 'ship = ships[shipNo]'
// Update ship(s) // TODO: Check this function for lingering errors, and make cycle through all items/types/ships
ships.update = function(shipNo, updateType, item) {

	ships.update.allShips = function(updateType, item) {
		for (shipNo = 0; shipNo < ships.length; shipNo++) {
			console.log("Updating ship" + shipNo)
			ships.update(shipNo, updateType, item);
		}
		console.log("complete")
	}

	if (typeof shipNo === "number") {
		ship = ships[shipNo];
	} else {
		ships.update.allShips(updateType, item);
	}

	if (typeof updateType === "string") {
		if (updateType === "status") {
			itemProperties = ship[item]
			if (typeof itemProperties === "number") {
				itemValue = document.getElementById("ship-" + shipNo + "-" + item + "-value");
				itemValue.innerHTML = itemProperties;
			} else if (typeof itemProperties === "object"){
				itemValue = document.getElementById("ship-" + shipNo + "-" + item + "-value");
				itemValue.innerHTML = itemProperties[0];

				itemMaxValue = document.getElementById("ship-" + shipNo + "-" + item + "-maxValue");
				itemMaxValue.innerHTML = itemProperties[1];
			} else {
				console.log("No " + item + " in status.")
			}
		} else if (updateType === "specs") {
			var itemProperties = ship.upgrades[item];
			var specValue = document.getElementById("ship-" + shipNo + "-" + item + "-value")
			var specButton = document.getElementById("ship-" + shipNo + "-" + item + "-upgrade")
			if (typeof itemProperties != "undefined") {
				specValue.innerHTML = itemProperties.owned;
				specButton.innerHTML = itemProperties.cost + "c"
			} else {
				console.log("No " + item + " in specs.")
			}
		} else {
			ships.update(shipNo, "status", item);
			ships.update(shipNo, "specs", item);
		}
	} else {
		ships.update(shipNo, "status", item);
		ships.update(shipNo, "specs", item);
	}
	return true
}

ships.setSail = function(shipNo) {
	var ship = ships[shipNo];
	ship.movement.status = .5;
}

ships.returnToPort = function(shipNo) {
	var ship = ships[shipNo];
	ship.movement.status = 2.5;
}

ships.movement = {}
ships.movement.statusStrings = [
	"At Port (Home)",
	"Travelling to the fields",
	"In the fields",
	"Returning to port",
]
ships.movement.statusCheck = function(shipNo) {
	ship = ships[shipNo];
	var shipGrid = document.getElementById("ship-" + shipNo + "-grid");

	if (typeof shipNo !== "number" || shipNo > ships.length - 1 || shipNo < 0) {
		for (currentShip = 0; currentShip < ships.length; currentShip++) {
			ships.movement.statusCheck(currentShip);
		}
		return "all";
	};

	if (ship.movement.status === 0) { // If ship is in port, do the following:
		ships.logistics.unloadOre(shipNo);

		if (ship.upgrades.autopilot.owned >= 1 && ship.cargo[0] === 0) {
			ship.movement.status = 0.5;
		}

	} else if (ship.movement.status === 0.5) { // If ship is setting sail out of port:
		// Disable setSail button
		var button = document.getElementById("ship-" + shipNo + "-setSail");
		button.disabled = true;

		// Set ship timer
		var moveSpeed = ship.moveSpeed
		ship.movement.timerSet = Math.round(1 - (moveSpeed * ( -0.2 * moveSpeed)))-ship.upgrades.engines.owned;
		ship.movement.timer= ship.movement.timerSet;

		// Set bg image for grid
		shipGrid.style.backgroundImage = "url('"+ ships.options.images.travel1 + "')";

		// Set movement status
		ship.movement.status = 1;

		// Set Status Title
		var statusTitle = document.getElementById("ship-" + shipNo + "-statusTitle");
		statusTitle.innerHTML = ships.movement.statusStrings[ship.movement.status];

	} else if (ship.movement.status === 1) { // If ship is sailing away from port:
		if (ships.movement.checkTimer(shipNo) === 0) {
			ship.movement.status = 1.5;
		};

	} else if (ship.movement.status === 1.5){ // If ship is arriving to field:
		// Enable returnToPort button
		var button = document.getElementById("ship-" + shipNo + "-returnToPort");
		button.disabled = false;

		// Set bg image for grid
		shipGrid.style.backgroundImage = "url('"+ ships.options.images.dest + "')";

		//Set movement status
		ship.movement.status = 2;

		// Set Status Title
		var statusTitle = document.getElementById("ship-" + shipNo + "-statusTitle");
		statusTitle.innerHTML = ships.movement.statusStrings[ship.movement.status];

	} else if (ship.movement.status === 2) { // If ship is in field:
		ships.grid.cycle(shipNo);

		if (ship.upgrades.autopilot.owned >= 1 && ship.cargo[0] >= ship.cargo[1]-(ship.cargo[1]/10)) {
			ship.movement.status = 2.5;
		}

	} else if (ship.movement.status === 2.5) { // If ship is setting sail away from field:
		// Disable returnToPort button
		var button = document.getElementById("ship-" + shipNo + "-returnToPort");
		button.disabled = true;

		// Clear Grid of rocks
		ships.grid.clearGrid(shipNo);

		// Set bg image for grid
		shipGrid.style.backgroundImage = "url('"+ ships.options.images.travel2 + "')";

		// Set ship timer
		var moveSpeed = ship.moveSpeed
		ship.movement.timerSet = Math.round(1 - (moveSpeed * ( -0.2 * moveSpeed)));
		ship.movement.timer= ship.movement.timerSet;

		// Set movement status
		ship.movement.status = 3;

		// Set Status Title
		var statusTitle = document.getElementById("ship-" + shipNo + "-statusTitle");
		statusTitle.innerHTML = ships.movement.statusStrings[ship.movement.status];
		
	} else if (ship.movement.status === 3) { // If ship is sailing away from field:
		if (ships.movement.checkTimer(shipNo) === 0) {
			ship.movement.status = 3.5;
		};

	} else if (ship.movement.status === 3.5) { // If ship is arriving at port:
		// Enable setSail button
		var button = document.getElementById("ship-" + shipNo + "-setSail");
		button.disabled = false;

		shipGrid.style.backgroundImage = "url('"+ ships.options.images.home + "')";
		ship.movement.status = 0;

		// Set Status Title
		var statusTitle = document.getElementById("ship-" + shipNo + "-statusTitle");
		statusTitle.innerHTML = ships.movement.statusStrings[ship.movement.status];


	} else { // If ship is anything else:
		shipGrid.style.backgroundImage = "url('"+ ships.options.images.home + "')";
		ship.movement.status = 0; // Return to port.

	};
}

ships.movement.checkTimer = function(shipNo) {
	ship = ships[shipNo];
	if (typeof shipNo !== "number" || shipNo > ships.length - 1 || shipNo < 0) {
		for (currentShip = 0; currentShip < ships.length; currentShip++) {
			ships.movement.checkTimer(currentShip);
		};
	};

	if (ship.movement.timer > 0) {
		ship.movement.timer -= 1;
	}
	return ship.movement.timer;
}

ships.logistics = {}

ships.logistics.unloadOre = function(shipNo) {
	ship = ships[shipNo];

	if (typeof shipNo !== "number" || shipNo > ships.length - 1 || shipNo < 0) {
		for (currentShip = 0; currentShip < ships.length; currentShip++) {
			ships.logistics.unloadOre(currentShip);
		};
	};

	var movedOre = ship.cargo[0];

	if (ship.cargo[0] > ships.options.offloadRate) { // Unload stack of ore.
		if (ships.options.offloadRate <= (resource.ore.storage - resource.ore.owned)) { // Check if storage full.
			resource.ore.owned += ships.options.offloadRate; // Add to owned
			ship.cargo[0] -= ships.options.offloadRate; // Remove from cargo
			ships.update(shipNo, "status", "cargo"); // Update ship
		}
	} else if (ship.cargo[0] > 0) { // Unload Remainder
		if (ship.cargo[0] <= (resource.ore.storage - resource.ore.owned)) { // Check if storage full.
			resource.ore.owned += ship.cargo[0]; // Add to owned
			ship.cargo[0] = 0; // Remove from ship
			ships.update(shipNo, "status", "cargo"); // Update Ship
		}
	};


	movedOre -= ship.cargo[0];
	return movedOre;
}

ships.logistics.flashShipStatus = function(shipNo, statusItem) {
	var element = document.getElementById("ship-" + shipNo +"-" + statusItem);
	var elementHighlight = true;
	var timer = 4;
	var intervalId = window.setInterval(function() {
	if (elementHighlight === true) {
		element.className = "statusItem highlightStatus"
		elementHighlight = false;
	} else {
		element.className = "statusItem"
		elementHighlight = true;
	}
	timer -= 1;
	if (timer === 0) {
		window.clearInterval(intervalId)
		}
	}, ships.options.flashRate);
}

ships.disp = {};
ships.disp.shipExpando = function(shipNo) {
	var upgradesTable = document.getElementById("ship-" + shipNo + "-upgrades");
	if (upgradesTable.style.display === "none") {
		upgradesTable.style.removeProperty("display");
	} else {
		upgradesTable.style.display = "none";
	};

	var statusList = document.getElementById("ship-" + shipNo + "-statusList");
	if (statusList.style.display === "none") {
		statusList.style.removeProperty("display");
	} else {
		statusList.style.display = "none";
	}
	
	var shipGrid = document.getElementById("ship-" + shipNo + "-grid");
	if (shipGrid.style.display === "none") {
		shipGrid.style.removeProperty("display");
	} else {
		shipGrid.style.display = "none";
	}
	
	var shipImage = document.getElementById("ship-" + shipNo + "-image");
	if (shipImage.style.display === "none") {
		shipImage.style.removeProperty("display");
	} else {
		shipImage.style.display = "none";
	}
	
	var shipControls = document.getElementById("ship-" + shipNo + "controls");
	if (shipControls.style.display === "none") {
		shipControls.style.removeProperty("display");
	} else {
		shipControls.style.display = "none";
	}
}

ships.upgrades = {};
ships.upgrades.purchase = function(shipNo, upgrade) {
	ship = ships[shipNo];
	if (typeof shipNo != "number") {
		for (allShips = 0; allShips < ships.length; allShips++) {
			ships.upgrades.purchase(allShips, upgrade);		
		};
	};

	thisUpgrade = ship.upgrades[upgrade];
	thisUpgrade.owned += 1;
	resource.credits.owned -= thisUpgrade.cost;
	thisUpgrade.cost = thisUpgrade.cost + Math.round(thisUpgrade.cost * (thisUpgrade.owned / 100));

	ships.update(shipNo, "specs", upgrade);	

	if (upgrade === "storage") {
		ship.cargo[1] += 20;
		ships.update(shipNo, "status", "cargo");
	}
}

ships.upgrades.buttonStates = function(shipNo) {

	if (typeof shipNo !== "number" || shipNo > ships.length - 1 || shipNo < 0) {
		for (currentShip = 0; currentShip < ships.length; currentShip++) {
			ships.upgrades.buttonStates(currentShip);
		}
		return "all";
	};

	var ship = ships[shipNo];
	var items = ["drones", "storage", "engines", "autopilot"];
	for (thisItem = 0; thisItem < items.length; thisItem++) {
		var button = document.getElementById("ship-" + shipNo + "-" + items[thisItem] + "-upgrade");
		if (resource.credits.owned < ship.upgrades[items[thisItem]].cost) {
			button.disabled = true;
		} else  if (ship.upgrades[items[thisItem]].owned >= ship.upgrades[items[thisItem]].max){ 
			button.disabled = true;
			button.innerHTML = "Max: " + ship.upgrades[items[thisItem]].max;
		} else {
			button.disabled = false;
		}
	}
}

// GRID FUNCTIONS
ships.grid = {};

ships.grid.cycle = function(shipNo) {
	var gridSize = ships.options.grid.size
	var ship = ships[shipNo]

	// Move rocks left
	for (var x = 0; x < gridSize.x; x++) {
		for (var y = 0; y < gridSize.y; y++) {
			ships[shipNo].grid[x][y] = ships[shipNo].grid[x][y + 1];
		}
	}

	// Check if drones exist, and update accordingly
	 if (ship.upgrades.drones.owned > 0) {
	 	for (var drone = 0; drone <= ship.upgrades.drones.owned-1; drone++) {
	 		if (ship.grid[drone][15] > 0) {
	 			ships.grid.rockClick(shipNo, drone, 15);
	 		}
	 		document.getElementById("ship-" + shipNo + "-gridCell-" + drone + "-" + 14 +"-").src = ships.options.images.ship;
	 		document.getElementById("ship-" + shipNo + "-gridCell-" + drone + "-" + 14 +"-").style.zIndex = 1;
	 		document.getElementById("ship-" + shipNo + "-gridCell-" + drone + "-" + 14 +"-").width = 10;
	 		document.getElementById("ship-" + shipNo + "-gridCell-" + drone + "-" + 14 +"-").setAttribute("onclick", "");
	 		ship.grid[drone][14] = 10;
	 		ship.grid[drone][13] = 0;
	 	}
	 }
	
	// Set values
	for (var x = 0; x < gridSize.x; x++) {
		if (ships.grid.rockChance(shipNo)) {
			ships[shipNo].grid[x][gridSize.y - 1] = ships.grid.rockSize();
		} else {
			ships[shipNo].grid[x][gridSize.y - 1] = 0;
		}
	}
	
	// Change img size per array
	for (var x = 0; x < gridSize.x; x++) {
		for (var y = 0; y < gridSize.y; y++) {
			document.getElementById("ship-" + shipNo + "-gridCell-" + x + "-" + y +"-").width = ships[shipNo].grid[x][y] * 5;
		}
	}
} // TODO Extract drone code from this and place elsewhere.

ships.grid.clearGrid = function(shipNo) {
	ship = ships[shipNo]
	grid = ship.grid
	gridSize = ships.options.grid.size

	for (var x = 0; x < gridSize.x; x++) {
		for (var y = 0; y < gridSize.y; y++) {
			ships[shipNo].grid[x][y] = 0;
			var cellImg = document.getElementById("ship-" + shipNo + "-gridCell-" + x + "-" + y +"-");
			cellImg.width = "0";
		}
	}
}

ships.grid.rockSize = function() {
	return (Math.floor(Math.random() * 10));
	// This comment exists only to make this function collapsable.
}

ships.grid.rockChance = function(shipNo) {
	gridOptions = ships.options.grid
	return (Math.round(Math.random() * gridOptions.rockChance) <= ships[shipNo].locale);
}

ships.grid.rockClick = function(shipNo, x, y) {
	var ship = ships[shipNo];
	if (ship.grid[x][y] < ship.cargo[1] - ship.cargo[0]) {
		document.getElementById("ship-" + shipNo + "-gridCell-" + x + "-" + y +"-").width = 0;
		ship.cargo[0] += ship.grid[x][y];
		ship.grid[x][y] = 0;
		ships.update(shipNo, "status", "cargo");
	} else {
		ships.logistics.flashShipStatus(shipNo, "cargo")
		ships.update(shipNo, "status", "cargo");
	}
}

//DEBUG FUNCTIONS HERE - TODO: REMOVE DEBUG FUNCTIONS
function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

ships.list = function() {
	for (shipNo = 0; shipNo < ships.length; shipNo++) {
		console.log(ships[shipNo]);
	}
	return ships.length;
}

ships.checkStatus = function(shipNo) {
	ship = ships[shipNo];

	if (typeof shipNo !== "number" || shipNo > ships.length - 1 || shipNo < 0) {
		for (currentShip = 0; currentShip < ships.length; currentShip++) {
			ships.checkStatus(currentShip);
		}
		return;
	};

	console.log("Status check of ship" + shipNo + ": status" + ship.movement.status + " timer" + ship.movement.timer + "/" + ship.movement.timerSet)
	console.log(ship);
}

ships.iddqd = function() {
	resource.credits.owned=(10000000000); 
	for (a=0;a<ships.length;a++) {u=ships[a].upgrades; u.drones.owned=7; u.autopilot.owned=1; u.engines.owned = 10; u.storage.owned=5}

		return "[Object Array] returned invalid {object} not supported: illegal operation type (cheat); Sportsmanship not found."
}

window.setInterval(function() {
	if (ships.length >= 1) {
		ships.movement.statusCheck("all");
		
	}
	
}, ships.options.grid.tickRate);
