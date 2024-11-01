// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const EventEmitter = require('node:events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('start', (num) => {
//     console.log(`started ${num}`);
// })
// eventEmitter.emit('start', 20)

// reading files in node js

// method 1
// const fs = require('node:fs');
// const fs = require('node:fs/promises')
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err)
//     }
//     console.log(data)
// })

// method 2
// try {
//     const data = fs.readFileSync('./text.txt', 'utf8');
//     console.log(data)
// } catch (error) {
//     console.error(err)
// }

// writing files in node js
const content = "Hello world this is a new content";

// method 1
// fs.writeFile('./test.txt', content, err => {
//     if(err) {
//         console.error(err)
//     }
//     console.log('data successfuly written')
// })

// method 2
// try {
//     fs.writeFileSync('./new.txt', content)
//     console.log('success')
// } catch (error) {
//     console.error(err)
// }


// appending or adding to a file without replacing the contents there

// method 1
// fs.appendFile('./test.txt', '\n hello my gee', err => {
//     if(err) {
//         console.error(err)
//     }
//     console.log('done')
// })

// method 2
// try {
//     fs.appendFileSync('./new.txt', '\n Hello My Boy');
//     console.log('done')
// } catch (error) {
//     console.error(error)
// }

// create a new folder

const newFolder = './guy';
// method 1
// if(!fs.existsSync(newFolder)) {
//     fs.mkdir(newFolder, err => {
//         console.error(err)
//     })
//     console.log('done')
// } else {
//     console.log('folder exist')
// }

// method 2

// try {
//     if(!fs.existsSync(newFolder)) {
//         fs.mkdirSync(newFolder)
//     }
//     console.log('done')
// } catch (error) {
//     console.error(error)
// }

// rename a folder
//  Method 1
// fs.rename(newFolder, './newFold', err => {
//     if(err) {
//         console.err(err)
//     }
//     console.log('renamed')
// })

// Method 2

// try {
//     fs.renameSync(newFolder, './yes');
//     console.log('renamed');
// } catch (error) {
//     console.error(error)
// }

// to delete a file

//  method 1
// fs.unlink('./tmp/hello.txt', err => {
//     if(err){
//         console.error(err)
//     }else {
//         console.log('successfully deleted');
//     }
// })

// method 2
// try {
//     fs.unlink('./tmp/hello.txt');
//     console.log(`successfully deleted ${'./tmp/hello.txt'}`);
// } catch (error) {
//     console.error(error);
// }




// working with files in node js

const fs = require('node:fs');

// 1: reading files 
// method 1

// fs.readFile('./new.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err)
//     }else {
//         console.log(data)
//     }
// })

// method 2

// try {
//     const data = fs.readFileSync('./new.txt', 'utf8');
//     console.log(data)
// } catch (error) {
//     console.error(error)
// }

// 2: writing files
// method 1

// fs.writeFile('./new.txt', 'Hello this is a new text written to file', err => {
//     if(err) {
//         console.error(err);
//     }else {
//         console.log('File written');
//     }
// })

// method 2
// try {
//     fs.writeFileSync('./new.txt', 'changed text');
//     console.log('File written');
// } catch (error) {
//     console.error(error);
// }

//3: append file
//  method 1
// fs.appendFile('./new.txt', '\n Appended text', (err) => {
//     if(err) {
//         console.error(err);
//     }else {
//         console.log('file appended');
//     }
// })

// method 2
// try {
//     fs.appendFileSync('./new.txt', '\nsecond appended text');
//     console.log('file appended');
// } catch (error) {
//     console.error(error);
// }

// 4: deleting files
// method 1
// fs.unlink('./test.txt', (err) => {
//     if(err) {
//         console.error(err)
//     }else {
//         console.log('successfully deleted');
//     }
// })

// method 2
// try {
//     fs.unlinkSync('./test.txt');
//     console('successfully deleted');
// } catch (error) {
//     console.error(error);    
// }

//5: creating Directories
// method 1
// fs.mkdir('./myDir', err => {
//     if(err){
//         console.error(err);
//     }else {
//         console.log('done');
//     }
// })

// method 2
// try {
//     fs.mkdirSync('./myDir');
//     console.log('done');
// } catch (error) {
//     console.error(error);
// }

// 6: reading directory contents
// method 1
// fs.readdir('./newDir', (err, data) => {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// })

// method 2
// try {
//     const data = fs.readdirSync('./newDir');
//     console.log(data);
// } catch (error) {
//     console.error(error);
// }

// 7: removing directory
// method 1
// fs.rmdir('./myDir', err => {
//     if(err){
//         console.error(err);
//     }else {
//         console.log('directory deleted');
//     }
// })

// method 2
// try {
//     fs.rmdirSync('./myDir');
//     console.log('directory deleted');
// } catch (error) {
//     console.error(error);
// }

// 8: checking if a file or directory exists
// if(fs.existsSync('./myDir')) {
//     fs.rmdir('./myDir', err => {
//         if(err) {
//             console.error(err);
//         }
//     })
// }else {
//     console.log('File directory does not exists');
// }

// 9: renaming a file path
// fs.rename('./newDir', './newRenamed', err => {
//     if(err) {
//         console.error(err);
//     }else {
//         console.log('sucessfully renamed');
//     }
// })

// path modules
const path = require('node:path')
// fs.readFile(path.join(__dirname, 'newRenamed', 'hello.txt'), 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//     }else {
//         console.log(data)
//     }
// })

// try {
//     const data = fs.readFileSync(path.join(__dirname, 'newRenamed', 'hello.txt'));
//     console.log(`the data is: ${data}`);
// } catch (error) {
//     console.error(error);
// }

// Extracting Pars of a path
// path.basename()    -> extracts the file name from a path

// Get the file name with extension
// const fileName = path.basename('./newRenamed/hello.txt');

// Get the file name without extension
// const fileName = path.basename('./newRenamed/hello.txt', '.txt');
// console.log(fileName);

// path.dirname() -> extracts the directory part of a path, which is everything before the file name
// const directoryName = path.dirname('./newRenamed/hello.txt');
// console.log(directoryName);

// extname() ->  Get the file extension
// const fileExtension = path.extname('./newRenamed/hello.txt')
// console.log(fileExtension);

// path.parse()
const parsedPath = path.parse('./newRenamed/home.txt');
console.log(parsedPath);

// path.format()
const formatedPath = path.format(parsedPath);
// console.log(formatedPath);
