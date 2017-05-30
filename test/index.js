const should = require('chai').should()
const fs = require('fs')
const CMD = require('../commands/index')

fs.writeFileSync(`${process.cwd()}/config.json`, JSON.stringify({ rooms: ['123'] }))

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
