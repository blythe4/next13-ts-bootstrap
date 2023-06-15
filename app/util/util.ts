const fetchWithTimeout = (url: string, timeout: number): Promise<Response> => {
    return Promise.race([
        fetch(url),
        new Promise<Response>((_, reject) => setTimeout(() => reject(new Error("Request timed out")), timeout)),
    ]);
};

export { fetchWithTimeout };
