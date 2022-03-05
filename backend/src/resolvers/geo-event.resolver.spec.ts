import { Test, TestingModule } from '@nestjs/testing'
import { GeoEventResolver } from './geo-event.resolver'

describe('GeoEventResolver', () => {
  let resolver: GeoEventResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoEventResolver],
    }).compile()

    resolver = module.get<GeoEventResolver>(GeoEventResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
