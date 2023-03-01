type Env = {
  appName: string
  chain: {
    host: string
    protocol: 'http' | 'https'
    id: string
  }
}

const env: Env = {
  appName: 'elm-eos example',
  chain: {
    host: 'staging.cambiatus.io',
    protocol: 'https',
    id: 'fa087d6c692f16e01a9864749829359cd26b48db703377893f32ff1c72673a78',
  },
}

export default env
