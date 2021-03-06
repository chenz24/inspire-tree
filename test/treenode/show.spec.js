const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNode.prototype.show', function() {
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
        expect(tree.node(1).show).to.be.a('function');
    });

    it('shows node', function() {
        const node = tree.node(1);
        node.hide();
        expect(node.hidden()).to.be.true;

        node.show();
        expect(node.hidden()).to.be.false;
    });
});
