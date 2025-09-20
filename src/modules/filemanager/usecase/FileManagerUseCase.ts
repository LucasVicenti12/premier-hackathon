import {FileListResponse, FileToUpload, ProcessFileResponse, UploadFileResponse} from "../entities/entities.ts";
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

    async getPaginatedFiles(page: number): Promise<FileListResponse> {
        return fileManagerRepository.getPaginatedFiles(page)
    }

    async processFile(fileName: string): Promise<ProcessFileResponse> {
        return fileManagerRepository.processFile(fileName)
    }
}

export const fileManagerUseCase = new FileManagerUseCase()