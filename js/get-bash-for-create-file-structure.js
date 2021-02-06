
// GitHub repository

class createBashFileStructure {
  constructor(repository) {
    if (this.#toDoIt()) {
      const result =this.#getTasks(repository).map(this.#toStringPoint).join("\n");
      console.log(`#!/bin/bash\n${result}`);
    } else {
      console.log("it's best no use me!");
    }
  }
  #toDoIt() {
    return (/Commit|commit|merge|Merge/).test(document.body.textContent);
  }
  #getTasks(dir) {
    return [...document.querySelectorAll("li")].filter(e => (
        e.innerText.includes(dir) 
        || e.innerText.includes(dir.toLowerCase())
      ) 
      && e.querySelector("code")?.innerText 
    )
  }
  #toStringPoint(currentLi) {
    const currentRepository = currentLi.querySelector("code").innerText;
    const currentDirectory = currentLi.nextElementSibling.querySelector("code").innerText;
    const currentFile = currentLi.nextElementSibling.nextElementSibling.querySelector("code").innerText;
    return `
      if ! [[ -d ".git" ]]; then 
        if ! [[-d "${currentRepository}/${currentDirectory}"]]; then
          mkdir --parents "${currentRepository}/${currentDirectory}"
        fi
        if ! [[-f "${currentRepository}/${currentDirectory}/${currentFile}"]]; then
          touch "${currentRepository}/${currentDirectory}/${currentFile}"
        fi
      fi
    `;
  }
}

