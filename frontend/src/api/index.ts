enum CallType {
  'getPokemonList' = 'getPokemonList',
  'getPokemon' = 'getPokemon'
}

const apiURL = import.meta.env.VITE_APP_API_URL;

const apiCall = async (type: CallType, body?: { query: string }) => {
  switch (type) {
    case CallType.getPokemonList:
      return await fetch(`${apiURL}/list`).then((data) => {
        return data;
      });
    case CallType.getPokemon:
      return await fetch(`${apiURL}/pokemon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then((data) => {
        return data;
      });
    default:
      break;
  }
};

export { CallType, apiCall };
