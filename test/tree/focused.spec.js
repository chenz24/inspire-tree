const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('Tree.focused', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }]
        });
    });

    it('exists', function() {
        expect(tree.focused).to.be.a('function');
    });

    it('returns null when nothing focused', function() {
        expect(tree.focused()).to.have.length(0);
    });

    it('returns focused node', function() {
        tree.node(1).focus();

        expect(tree.focused()[0].id).to.equal(1);
    });
});
