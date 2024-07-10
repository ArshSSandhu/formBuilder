if (!window.fbControls) window.fbControls = new Array()
  window.fbControls.push(function (controlClass) {
  
    /**
     * Location control class
     */
    class controlLocation extends controlClass {
  
      static get definition() {
        return {
          icon: '📍',
          i18n: {
            default: 'Patient Address'
          }
        }
      }
  
      configure() {
        // No external dependencies
      }
  
      /**
       * Build a location DOM element
       * @return DOM Element to be injected into the form.
       */
      build() {
        const streetInputId = `${this.config.name}-street`
        const countryInputId = `${this.config.name}-country`
        const stateInputId = `${this.config.name}-state`
        const cityInputId = `${this.config.name}-city`
        const zipcodeInputId = `${this.config.name}-zipcode`
  
        return this.markup('div', [
          this.markup('label', null),
          this.markup('input', null, {
            type: 'text',
            id: streetInputId,
            class: 'form-control',
            placeholder: 'Street Address',
            value: this.config.value || ''
          }),
          this.markup('input', null, {
            type: 'text',
            id: countryInputId,
            class: 'form-control',
            placeholder: 'Country',
            value: this.config.country || ''
          }),
          this.markup('input', null, {
            type: 'text',
            id: stateInputId,
            class: 'form-control',
            placeholder: 'State',
            value: this.config.state || ''
          }),
          this.markup('input', null, {
            type: 'text',
            id: cityInputId,
            class: 'form-control',
            placeholder: 'City',
            value: this.config.city || ''
          }),
          this.markup('input', null, {
            type: 'text',
            id: zipcodeInputId,
            class: 'form-control',
            placeholder: 'Zip Code',
            value: this.config.zipcode || ''
          })
        ])
      }
  
      /**
       * Perform any additional actions after the control is rendered
       */
      onRender() {
        const streetInput = document.getElementById(`${this.config.name}-street`)
        const countryInput = document.getElementById(`${this.config.name}-country`)
        const stateInput = document.getElementById(`${this.config.name}-state`)
        const cityInput = document.getElementById(`${this.config.name}-city`)
        const zipcodeInput = document.getElementById(`${this.config.name}-zipcode`)
  
        // Set the input values from the configuration if they exist
        if (streetInput) {
          // Set a default value if provided in config
          if (this.config.value) {
            streetInput.value = this.config.value
          }
  
          // Add an event listener for input changes
          streetInput.addEventListener('input', event => {
            this.config.value = event.target.value
            console.log('Patient address input changed to: ', event.target.value)
          })
        }
  
        if (countryInput) {
          countryInput.value = this.config.country
  
          countryInput.addEventListener('input', event => {
            if (this.config) {
              this.config.country = event.target.value
            }
          })
        }
  
        if (stateInput) {
          stateInput.value = this.config.state
  
          stateInput.addEventListener('input', event => {
            if (this.config) {
              this.config.state = event.target.value
            }
          })
        }
  
        if (cityInput) {
          cityInput.value = this.config.city
  
          cityInput.addEventListener('input', event => {
            if (this.config) {
              this.config.city = event.target.value
            }
          })
        }
  
        if (zipcodeInput) {
          zipcodeInput.value = this.config.zipcode
  
          zipcodeInput.addEventListener('input', event => {
            if (this.config) {
              this.config.zipcode = event.target.value
            }
          })
        }
      }
    }
  
    // Register this control for the following types & text subtypes
    controlClass.register('location', controlLocation)
    return controlLocation
  })
  