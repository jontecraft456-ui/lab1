import * as path from 'path';

export interface PathAnalysis {
    fileName: string;
    extension: string;
    directory: string;
}

export class PathUtilService {
    analyze(filePath: string): PathAnalysis {
    return {
        fileName: path.basename(filePath),
        extension: path.extname(filePath),
        directory: path.dirname(filePath),
    };
    }
}