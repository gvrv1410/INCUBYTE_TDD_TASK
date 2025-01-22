export const add = (numbers: string) => {
    if (numbers === "") return 0;
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }
    const regex = new RegExp(`[${delimiter}\\n]`);
    const numArray = numbers.split(regex).map((num) => {
        const parsedNum = Number(num);
        if (isNaN(parsedNum)) {
            throw new Error(`Invalid number: ${num}`);
        }
        return parsedNum;
    });

    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}