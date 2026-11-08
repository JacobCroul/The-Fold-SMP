ServerEvents.tags('fluid', event => {
    // Adds Create Diesel Generators Biodiesel to Ad Astra's fuel tag
    event.add('ad_astra:fuel', 'createdieselgenerators:biodiesel')
    
    // Optional: If you also want to use standard Diesel or Gasoline as alternatives:
    // event.add('ad_astra:fuel', 'createdieselgenerators:diesel')
    // event.add('ad_astra:fuel', 'createdieselgenerators:gasoline')
})
