import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
const name = 'vuepress-plugin-lzp-animation'
export default (options = {}, context) => {
    return {
        name,
        clientConfigFile: path.resolve(__dirname, './clientConfig.js'),
    }
};
