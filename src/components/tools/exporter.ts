export const handleExportData = () => {
  const data = fixJson(this.props.contentData)

  var file = new Blob([JSON.stringify(data, null, 2)], {
    type: 'text'
  })
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, 'content.json')
  else {
    // Others
    var a = document.createElement('a'),
      url = URL.createObjectURL(file)
    a.href = url
    a.download = 'content.json'
    document.body.appendChild(a)
    a.click()
    setTimeout(function() {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
  }
}

const fixJson = (data: any) => {
  let obj: any = data

  // Parse numbers
  .map(obj.Changes, fields => {
    if (fields.FromArea) {
      .map(fields.FromArea, (value, key) => {
        if (value) fields.FromArea[key] = parseInt(value)
        else fields.FromArea[key] = 0
      })
    }
    if (fields.ToArea) {
      .map(fields.ToArea, (value, key) => {
        if (value) fields.ToArea[key] = parseInt(value)
        else fields.ToArea[key] = 0
      })
    }
  })

  // Parse boolean
  .map(obj.Changes, fields => {
    if (fields.Enabled) fields.Enabled = fields.Enabled === 'true'
  })

  obj = this.removeEmpty(obj)
  return obj
}

const removeEmpty = (obj: any) => {
  Object.entries(obj).forEach(
    ([key, val]) =>
      key !== 'Target' &&
      key !== 'FromFile' &&
      ((val && typeof val === 'object' && this.removeEmpty(val)) ||
        ((val === null || val === '') && delete obj[key]))
  )
  return obj
}