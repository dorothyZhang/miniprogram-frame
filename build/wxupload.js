const ci = require('miniprogram-ci');
const projectPath = process.cwd();

function uploadWX(appid) {// 创建项目
    const {wxVersion: version, wxDesc: desc} = require('../miniprogram.config').config[appid];
    const privateKeyPath = process.cwd() + '/build/private.' + appid + '.key';
    const project = new ci.Project({
        appid,
        type: 'miniProgram',
        projectPath,
        privateKeyPath,
        ignores: ['node_modules/**/*'],
    });

    ci.upload({
        project,
        version,
        desc,
        setting: {
            minify: true,
        },
    }).then(res => {
        console.log(res)
        console.log('上传成功')
    }).catch(error => {
        if (error.errCode == -1) {
            console.log('上传成功')
        }
        console.log(error)
        console.log('上传失败')
        process.exit(-1)
    });

}

module.exports = {
    uploadWX
};
