class createBashFileStructure {
	constructor() {
		if (usegit) console.warn("Meaby use git on this project");
		const result = this.getTasks(repository)
			.map(this.toStringPoint).join("\n");
		console.log(`#!/bin/bash\n${result}`);
	}
	usegit() {
		return (/Commit|commit|merge|Merge/).test(document.body.textContent);
	}
	
}
