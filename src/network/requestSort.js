export default function (sort = null, baseURL, types) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://127.0.0.1:5050/${baseURL}`,
      type: types,
      data: {
        sort
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