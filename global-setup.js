import fs from 'fs';
import path from 'path';

export default async () => {
    const screenshotsDir = path.resolve('screenshots');

    if (fs.existsSync(screenshotsDir)) {
        fs.rmSync(screenshotsDir, { recursive: true, force: true });
    }

    fs.mkdirSync(screenshotsDir, { recursive: true });
};
