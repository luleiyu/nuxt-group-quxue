export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json,text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('http://test1.english.talk.quxueabc.com/student')
  api.onRequest(config => {
    console.log(config.url)
  })
  api.onResponse(response => {
    let res = response.data
    res.code = parseInt(res.code)
    if (res.code === 200) {
      return res
    } else {
      return res
    }
  })
  api.onError(err => {
    console.log(err)
  })

  // Inject to context as $api
  inject('api', api)
}

// export default function ({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url)
//   })
//   $axios.onResponse(response => {
//     let res = response.data
//     if (res.code == 200) {
//       return res
//     } else {
//       return res
//     }
//     console.dir('onResponse ' + res)
//   })
//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400')
//     }
//   })
// }
