const baseUrl = `https://opentdb.com/api.php`;
const config = {
    amount: 10,
    difficulty: 'hard',
    type: 'boolean'
};

export const loadQuestions = async () => {
    return await fetch(`${baseUrl}?amount=${config.amount}&difficulty=${config.difficulty}&type=${config.type}`)
        .then(res => res.json());

};