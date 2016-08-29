import useBasename from 'history/lib/useBasename'

const historyConfig = function (browserHistory, dirname) {
  let basename = `/main/${dirname}/`

  // https://github.com/mjackson/history/blob/master/docs/BasenameSupport.md

  let createHistory = () => browserHistory

  return useBasename(createHistory)({
    basename: basename
  })
}

export default historyConfig
