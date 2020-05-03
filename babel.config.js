module.exports ={
  presets: [
      '@babel/preset-env', // converte o codigo atual para modelo antigo para o navegador possa entender
      '@babel/preset-react' // adicionar funcionalidades do React nessa conversao (escrever html dentro do JS)
  ],
  plugins: [
      '@babel/plugin-transform-runtime'
  ]
}


