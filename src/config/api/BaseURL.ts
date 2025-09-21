export const baseURL = (): string | undefined => {
    if(process.env.NODE_ENV === "production") {
        return undefined;
    } else {
        // return "https://b7i8sfu5pg.execute-api.sa-east-1.amazonaws.com/";
        return "http://54.207.225.69:5000/"
    }
};