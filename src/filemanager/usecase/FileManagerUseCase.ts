import {FileToUpload, UploadFileResponse} from "../entities/entities.ts";
import {fileManagerRepository} from "../repository/FileManagerRepository.ts";

class FileManagerUseCase {
    async sendFile(file: FileToUpload): Promise<UploadFileResponse> {
        const urlResponse = await fileManagerRepository.getFileURL(file)

        if (urlResponse.error) {
            return {error: urlResponse.error}
        }

        if (!urlResponse.url || urlResponse.url === "") {
            return {error: "URL_IS_EMPTY"}
        }

        return await fileManagerRepository.uploadFile(urlResponse.url, file)
    }
}

export const fileManagerUseCase = new FileManagerUseCase()