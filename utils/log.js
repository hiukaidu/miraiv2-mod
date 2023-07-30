const chalk = require('chalk');
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#ff0000").bold('◁  🦄Hết-Cứu🦄  ▷ ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#ff0000").bold('◁  🦄Chịu-Thua🦄  ▷ ') + data);
			break;
		default:
				console.log(chalk.bold.hex(randomColor()).bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
    case "warn":
			console.log(chalk.bold.hex(randomColor()).bold("─🌸🐧𝑻𝒓𝒖𝒏𝒈 𝑯𝒊𝒆̂́𝒖🐧🌸─ ▷ ") + chalk.bold.hex("#8B8878").bold(data))
			break;
		case "error":
		console.log(chalk.bold.hex(randomColor()).bold("─🌸🐧𝑻𝒓𝒖𝒏𝒈 𝑯𝒊𝒆̂́𝒖🐧🌸─ ▷ ") + data);
			break;
    default:
			console.log(chalk.bold.hex(randomColor()).bold("─🌸🐧𝑻𝒓𝒖𝒏𝒈 𝑯𝒊𝒆̂́𝒖🐧🌸─ ▷ ") + chalk.bold.hex(randomColor()).bold(data));
			break;
	}
}
