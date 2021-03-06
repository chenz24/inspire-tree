const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.selectable', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }, {
                text: 'B',
                id: 2,
                itree: {
                    state: {
                        selectable: false
                    }
                }
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().selectable).to.be.a('function');
        expect(tree.selectable).to.be.a('function');
    });

    it('returns all selectable nodes', function() {
        expect(tree.selectable()).to.have.length(1);
    });
});
