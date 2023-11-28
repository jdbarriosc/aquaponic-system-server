function sleep(delayMs: number) {
    return new Promise((resolve) => setTimeout(resolve, delayMs));
} 

export default sleep;