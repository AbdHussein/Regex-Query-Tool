module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
      path: __dirname+"/regexQueryTool/frontend/static/frontend/",
      filename: "main.js"
    }
  }