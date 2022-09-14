import fetch from "node-fetch";

try {
	const response = await fetch("https://jsonplaceholder.typicode.com/postsa");
	const data = await response.json();
	console.log(data);
} catch (err) {
	console.error(err.message);
}
