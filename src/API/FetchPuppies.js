const cohort = "2303-ftb-mt-web-ft";
const URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;

export const fetchAllPuppies = async () => {
    try {
        const response = await fetch (`${URL}/players`);
        const {data: {players}} = await response.json();
        return players;
    } catch (error) {
        console.error(error);
    }
};

export const fetchPuppy = async (id) => {
    try {
        const response = await fetch (`${URL}/players/${id}`);
        const {data: {player}} = await response.json();
        return player;
    } catch (error) {
        console.error(error);
    }
};