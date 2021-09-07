import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`); 

const block = new Block(Date.now(),'Pr3vious-h4sh','h4sh','d4t4');
console.log(block.toString());