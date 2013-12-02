var marketItems=[];

marketItems.options = {
	tickRate: 10000,
}

ore = {
	value: 50,
	floorValue: 40,
	ceilValue: 60,
	hardFloorValue: 20,
	hardCeilValue: 80,
}

marketItems.push(ore);

marketItems.refresh = function(itemNo) {
	var item = marketItems[itemNo];
	var oldValue = item.value;
	var newValue = oldValue + (Math.random() * (oldValue / 20) - (0.5 * (oldValue / 20)))

	if (newValue > item.floorValue && newValue < item.ceilValue) {
		item.value = newValue
	} else if (newValue <= item.floorValue ) {
		if (newValue <= item.floorValue && newValue > item.hardFloorValue) {
			newValue = oldValue + (Math.random() * (oldValue / 20) - (0.3 * (oldValue / 20)))
		} else {
			newValue = oldValue + (Math.random() * (oldValue / 20) - (0 * (oldValue / 20)))
		};	
	} else if (newValue >= item.ceilValue) {
		if (newValue >= item.CeilValue && newValue < item.hardFloorValue) {
			newValue = oldValue - (Math.random() * (oldValue / 20) - (0.3 * (oldValue / 20)))
		} else {
			newValue = oldValue - (Math.random() * (oldValue / 20) - (0 * (oldValue / 20)))
		};	 
	};

	item.value = Math.round(newValue);

	resource.ore.value = marketItems[0].value;
}

marketItems.updateValueLabels = function () {
	var oreLabel = document.getElementById("oreValue")
	oreLabel.innerHTML = "Current Valuation: " + resource.ore.value + "c"
}

window.setInterval(function() {
	marketItems.refresh(0);
	marketItems.updateValueLabels();
}, marketItems.options.tickRate);



