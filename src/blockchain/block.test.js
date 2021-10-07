import Block from './block';

describe('block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';
    });

    it('Crear instancia con parametros', () => {
        const block = new Block (timestamp, previousBlock.hash, hash, data);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it('usando static mine',()=> {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('usando static hash', () =>{
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = "6b161dbd092a35715ba89e7db2a4080c36e26d13793e6bfd9f9205f64793b982";

        expect(hash).toEqual(hasOutput);
    });

    it('usando toString', ()=> {
        const block = Block.mine(previousBlock, data);
        expect(typeof block.toString()).toEqual('string');
    });

});