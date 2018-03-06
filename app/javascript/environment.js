import { Environment, Network, RecordSource, Store } from 'relay-runtime'

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const request = {
    method: 'POST',
    headers: {}
  }

  if (uploadables) {
    if (!window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.')
    }

    const formData = new FormData()
      formData.append('query', operation.text)
      formData.append('variables', JSON.stringify(variables))

      Object.keys(uploadables).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
          formData.append(key, uploadables[key])
        }
      })

      request.body = formData
  } else {
    request.headers['Content-Type'] = 'application/json'
    request.body = JSON.stringify({
      query: operation.text,
      variables,
    })
  }

  return fetch('/api/v1/graphql', request).then((response) => response.json())
}

const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())
const environment = new Environment({ network, store })

export default environment
