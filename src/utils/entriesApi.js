import tokenService from "./tokenService";

const BASE_URL = "/api/entries/";

export function create(entry){
	return fetch(BASE_URL, {
		method: 'POST',
		headers: ({'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()}),
		body: JSON.stringify(entry)
	}).then(res => {
		if (res.ok) return res.json();
		throw new Error('Bad Credentials createEntryApi');
	  })
}

export function getAll() {
	return fetch(BASE_URL, {
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => {
		if (res.ok) return res.json();
		throw new Error('bad Credentials');
	  })
  }


