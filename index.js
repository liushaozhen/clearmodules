#!/usr/bin/env node

const fs = require('fs-extra');
const exec = require('child_process').exec;
const os = require('os');
const process = require('process');
const package = require('./package.json');

const ignoreFile = ['.git'];

let number = 0;

function read (fileArray,path){
    if(fileArray.length){
        fileArray.forEach(item => {
            if(ignoreFile.indexOf(item)==-1){
                let newPath = path+'/'+item;
                if(fs.existsSync(newPath)){
                    if(item=='node_modules'){
                        number+=1;
                        console.log('删除 ❌ 第 '+number+ ' 个 node_modules，路径是：'+newPath)
                        if(os.platform()=='darwin'){//mac 系统
                            exec('rm -rf '+newPath)
                        }else if(os.platform()=='win32'){//window系统
                            exec('rimraf '+newPath)
                        }
                    }else if(fs.statSync(newPath).isDirectory()){
                        let array = fs.readdirSync(newPath);
                        read(array,newPath);
                    }else{
                        // console.log('跳过 ⏬ '+newPath)
                    }
                }else{
                    // console.log('文件不存在🙂')
                }
            }else{
                // console.log('忽略了'+path+'/'+item)
            }
            
        });
    }
}


let order = process.argv[2];
switch (order) {
    case '-v':
        console.log(package.version);
        break;
    case '-version':
        console.log(package.version);
        break;
    case '-V':
        console.log(package.version);
        break;
    case 'start':
        let bashPath = fs.readdirSync('.');
        read(bashPath,'.')
        break;
    default:
        console.log('-v, --version:  output the version number');
        console.log('-h: output usage information');
        console.log('start:  start clearmodules');
}