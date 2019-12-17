#!/usr/bin/env node

const fs = require('fs-extra');
const exec = require('child_process').exec;
const os = require('os');

function read (fileArray,path){
    if(fileArray.length){
        fileArray.forEach(item => {
            let newPath = path+'/'+item;
            if(fs.existsSync(newPath)){
                if(item=='node_modules'){
                    console.log('rm -rf '+newPath)
                    if(os.platform()=='darwin'){//mac 系统
                        exec('rm -rf '+newPath)
                    }else if(os.platform()=='win32'){//window系统
                        exec('rimraf '+newPath)
                    }
                }else if(fs.statSync(newPath).isDirectory()){
                    let array = fs.readdirSync(newPath);
                    read(array,newPath);
                }else{
                    console.log('跳过:'+newPath)
                }
            }else{
                console.log('文件不存在')
            }
        });
    }
}

let bashPath = fs.readdirSync('.');
read(bashPath,'.')