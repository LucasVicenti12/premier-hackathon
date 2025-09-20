export const baseURL = (): string | undefined => {
    if(process.env.NODE_ENV === "production") {
        return undefined;
    } else {
        return "https://dlrryg8qq7.execute-api.sa-east-1.amazonaws.com/";
    }
};