self.addEventListener('push', function (event){
  const body = event.data?.text() ?? 'Carregando...'
  event.waitUntil(
    self.registration.showNotification('Habits', {
      body,
    })
  )
})