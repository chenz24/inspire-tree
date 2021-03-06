const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.pagination', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: function(node, resolve) {
                resolve([{
                    text: 'A',
                    id: 1
                }], 10);
            }
        });
    });

    it('exists', function() {
        expect(tree.nodes().pagination).to.be.a('function');
    });

    it('sets initial pagination data correctly', function() {
        const pagination = tree.nodes().pagination();

        expect(pagination).to.be.an('object');
        expect(pagination.limit).to.equal(-1);
        expect(pagination.total).to.equal(10);
    });

    it('sets pagination total from resolver', function() {
        tree.on('model.loaded', function() {
            const pagination = tree.nodes().pagination();

            expect(pagination).to.be.an('object');
            expect(pagination.limit).to.equal(-1);
            expect(pagination.total).to.equal(10);
        });
    });
});
