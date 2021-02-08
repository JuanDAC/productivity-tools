

t getFromLabelText = (mainNode, label, text) => [...mainNode.querySelectorAll(label)]
	.filter(title => title.innerText == text)
	.pop()
	.nextElementSibling;


const getStructureData = () => {
	const parentTask = getFromLabelText(document, "h1", "Tasks");
	const listData = [...parentTask.children].map(task => getFromLabelText(task, "p", "Repo:"));
	

	return {
		count: parentTask.childElementCount,
		
	}
}




