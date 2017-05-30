const should = require('chai').should()
const CMD = require('../commands/index')

describe('Command', () => {
  describe('#add', () => {
    it('should remove the same rooms when adding', async () => {
      await CMD.ADD(['123', '456'])
      return CMD.LIST().rooms.should.deep.equal(['123', '456'])
    })
  })

  describe('#remove', () => {
    it('should remove after removing', async () => {
      await CMD.REMOVE(['456'])
      return CMD.LIST().rooms.should.deep.equal(['123'])
    })

    it('should be no error when removing what not exists', async () => {
      await CMD.REMOVE(['1'])
      return CMD.LIST().rooms.should.deep.equal(['123'])
    })
  })
})
