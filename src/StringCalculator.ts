export const add = (numbers: string) => {
    if (numbers === "") return 0;
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }
}