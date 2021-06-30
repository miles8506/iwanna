
export function requestData(goodsInfo = null, baseURL, types) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://127.0.0.1:5000/${baseURL}`,
      type: types,
      data: {
        goodsInfo
      },
      success(res) {
        resolve(res)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

export function requestAll(baseURL1, types1, baseURL2, types2) {
  return Promise.all([
    new Promise((resolve, reject) => {
      $.ajax({
        url: `http://127.0.0.1:5000/${baseURL1}`,
        type: types1,
        success(res) {
          resolve(res)
        },
        error(err) {
          reject(err)
        }
      })
    }),
    new Promise((resolve, reject) => {
      $.ajax({
        url: `http://127.0.0.1:5000/${baseURL2}`,
        type: types2,
        success(res) {
          resolve(res)
        },
        error(err) {
          reject(err)
        }
      })
    })
  ])
}