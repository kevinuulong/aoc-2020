const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const rules = input.replace(/bag(?!s)/g, "bags").replace(/\./g, '').split(/\n/);
var rulesObj = {};

rules.forEach((rule) => {
	rulesObj[rule.match(/^.*(?=( contain))/g)] = rule
		.match(/(?<=contain ).*/)[0]
		.replace(/[\d-] /g, "")
		.split(/, /);
});

console.log(part1("shiny gold bags"));

var bagTypes = Object.keys(rulesObj),
	bagRules = Object.values(rulesObj);

function part1(bagType) {
	for (i = 0; i < bagTypes.length; i++) {
		// console.log(bagRules);
		if (bagRules[i].indexOf(bagType) != -1) {
			console.log(bagTypes[i]);
		}
		if (bagRules[i])
	}
}

// console.log(rulesObj);
