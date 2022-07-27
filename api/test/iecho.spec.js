const server = require('../src/server')
const { expect } = require('chai')
const { describe, it } = require('mocha')
const supertest = require('supertest')

const request = supertest(server)

describe('Petición a /iecho de forma errónea', () => {
  it('Petición a /iecho debe retorna error status 400', async () => {
    const response = await request.get('/iecho')
    expect(response.status).to.equal(400)
  })

  it("Petición a /iecho debe retorna {error: 'no text'}", async () => {
    const response = await request.get('/iecho')
    expect(response.body).to.deep.equal({ error: 'no text' })
  })

  it('GET /iecho?t=test produce un error', async () => {
    const response = await request.get('/iecho?t=test')
    expect(response.status).to.equal(400)
    expect(response.body).to.deep.equal({ error: 'no text' })
  })

  it('GET /iecho?texto=test produce un error', async () => {
    const response = await request.get('/iecho?texto=test')
    expect(response.status).to.equal(400)
    expect(response.body).to.deep.equal({ error: 'no text' })
  })

  it('GET /iecho?otro=test produce un error', async () => {
    const response = await request.get('/iecho?otro=test')
    expect(response.status).to.equal(400)
    expect(response.body).to.deep.equal({ error: 'no text' })
  })
})

describe('Petición a /iecho de forma correcta', () => {
  const textos = [
    'Hola',
    'Hola mundo',
    'Hola mundo, ¿qué tal?',
    'lorem ipsum',
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  ]

  const respuestas = [
    'aloH',
    'odnum aloH',
    '?lat éuq¿ ,odnum aloH',
    'muspi merol',
    'tema tis rolod muspi merol',
    'tile gnicsipida rutetcesnoc ,tema tis rolod muspi merol',
    'auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des .tile gnicsipida rutetcesnoc ,tema tis rolod muspi merol'
  ]

  it("GET /iecho?text=test retorna {text:'tset'}", async () => {
    const response = await request.get('/iecho?text=test')
    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal({ text: 'tset' })
  })

  for (let i = 0; i < textos.length; i++) {
    it(`GET /iecho?text=${textos[i]} retorna {text:'${respuestas[i]}'}`, async () => {
      const response = await request.get(`/iecho?text=${textos[i]}`)
      expect(response.status).to.equal(200)
      expect(response.body).to.deep.equal({ text: respuestas[i] })
    }).timeout(5000)
  }
})

describe('Petición a /iecho de texto palindrome', () => {
  const textos = ['asdfdsa', 'sub derp pred bus', '12345654321']

  for (let i = 0; i < textos.length; i++) {
    it(`GET /iecho?text=${textos[i]} retorna {text:'${textos[i]}', palindrome:true}`, async () => {
      const response = await request.get(`/iecho?text=${textos[i]}`)
      expect(response.status).to.equal(200)
      expect(response.body).to.deep.equal({
        text: textos[i],
        palindrome: true
      })
    })
  }
})
