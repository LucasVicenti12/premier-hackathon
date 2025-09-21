export const baseURL = (): string | undefined => {
    if(process.env.NODE_ENV === "production") {
        return "http://54.207.225.69:5000/"
    } else {
        return "http://54.207.225.69:5000/"
    }
};