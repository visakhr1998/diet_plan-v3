import { OMDB_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }: { request: any }) {
    const { title } = await request.json();
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(title)}&client_id=${OMDB_API_KEY}`;

    const res = await fetch(url);
    const details = await res.json();
    
    // Assuming we want to return the first image's URL if available
    const imageUrl = details.results.length > 0 ? details.results[0].urls.full : "No image found";

    return json({ imageUrl });
}
