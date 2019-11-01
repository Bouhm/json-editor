export const handleExportData = (data: any) => {
  const file = new Blob([JSON.stringify(data, null, 2)], {
    type: 'text'
  })
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, 'test.json')
  else {
    // Others
    let a = document.createElement('a'),
      url = URL.createObjectURL(file)
    a.href = url
    a.download = 'test.json'
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
  }
}
