module.exports ={
  plugins:{
    autoprefixer:{},
    'postcss-px-to-viewport':{
      viewportWidth:375,
      unitPrecision:3,
      viewporUnit:'vw',
      selectorBlackList:[],
      minPixeValue: 1,
      mediaQuery:false,
  
    }
  }
}