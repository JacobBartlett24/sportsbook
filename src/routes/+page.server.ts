import type { PageServerLoad } from './$types';
import type { Match } from '../types';
import { PANDAS_API_KEY } from '$env/static/private';

export const load = (async({ params }) => {

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', authorization: `Bearer ${PANDAS_API_KEY}`}
    };

    const matches: Match[] = await fetch('https://api.pandascore.co/csgo/matches?sort=&page=1&per_page=20', options)
                    .then(response => response.json())
                    .catch(err => console.error(err));

    matches.forEach(match => {
        console.log(match.begin_at)
    })

    return {
        matches: matches
    };
}) satisfies PageServerLoad;