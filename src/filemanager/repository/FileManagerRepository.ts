import {FileToUpload, GetFileURLResponse, UploadFileResponse} from "../entities/entities.ts";
import {http} from "../../config/api/Http.ts";

import uuid from "react-native-uuid"

class FileManagerRepository {
    async getFileURL(file: FileToUpload): Promise<GetFileURLResponse> {
        try {
            const response = await http.post(
                "/upload",
                {
                    file_name: file.type + "-" + uuid.v4(),
                    file_type: file.contentType
                }
            )

            return {url: response.data.url ?? ""}
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }

    async uploadFile(url: string, file: FileToUpload): Promise<UploadFileResponse> {
        try {
            const response = await http.post(
                url,
                {
                    data: file.data
                }
            )

            return {status: response.data.status ?? 0}
        } catch (e) {
            console.error(e)
            return {error: "UNEXPECTED_ERROR"}
        }
    }
}

export const fileManagerRepository = new FileManagerRepository();