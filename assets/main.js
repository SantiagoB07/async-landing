const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtAcpQcYerN8xxZJYTfWBMw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dd1d414a81msh802317da822d4e9p1c67e4jsn6c9138631f56',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

// try {
// 	const response = await fetch(urlApi, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Función que se llama a sí misma
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>

            `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
        alert(error);
    }
})();

