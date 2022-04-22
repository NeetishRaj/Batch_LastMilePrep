

function useGetRandomSalutation() {
    const salutations = [
        "hello",
        "hi",
        "welcome",
        "how are you",
        "Good morning!",
        "Good evening!"
    ];

    const rand_index = Math.floor(Math.random() * salutations.length)
    return salutations[rand_index];
}

export default useGetRandomSalutation;

