import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const { captchaResponse } = await request.json();
    const secretKey = "6LdxSsYpAAAAAKWJGwHqN8PwRQWmoXvF9ibuiJ2Q";
    const captchaCheck = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse}`, {
        method: 'POST',
        body: JSON.stringify({ captchaResponse }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
    console.log("captchaResponse:", captchaResponse);
    console.log("captchaCheck:", await captchaCheck.json());
    return json({ captchaResponse }, { status: 201 });
}

// /** @type {import('./$types').RequestHandler} */
// export function GET({ params }) {
// 	// log all headers
// 	console.log(params);

// 	// create a JSON Response using a header we received
// 	return json({params});
// }


// /** @type {import('@sveltejs/kit').Load} */
// export const load = async ({ url, params, props, fetch, session, stuff, status, error }) => {
//     console.log("params:", params)
// const secretKey = "6LdxSsYpAAAAAKWJGwHqN8PwRQWmoXvF9ibuiJ2Q";
// const resourceUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse}`;
// const res = await fetch(resourceUrl);

// if (res.ok) {
//     return {
//         status: res.status,
//         props: {
//             propName: await res.json()
//         }
//     };
// }

// return {
//     status: res.status,
//     error: new Error(`Could not load url`)
// };
// }