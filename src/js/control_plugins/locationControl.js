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
            default: 'Patient Address',
          },
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
        return this.markup('div', [
          this.markup('label', this.config.label),
          this.markup('input', null, {
            type: 'text',
            id: this.config.name + '-street',
            class: 'form-control',
            placeholder: 'Street Address'
          }),
          this.markup('input', null, {
            type: 'text',
            id: this.config.name + '-country',
            class: 'form-control',
            placeholder: 'Country'
          }),
          this.markup('input', null, {
            type: 'text',
            id: this.config.name + '-state',
            class: 'form-control',
            placeholder: 'State'
          }),
          this.markup('input', null, {
            type: 'text',
            id: this.config.name + '-city',
            class: 'form-control',
            placeholder: 'City'
          }),
          this.markup('input', null, {
            type: 'text',
            id: this.config.name + '-zipcode',
            class: 'form-control',
            placeholder: 'Zip Code'
          })
        ])
      }
  
      /**
       * Perform any additional actions after the control is rendered
       */
      onRender() {
        const streetInput = document.getElementById(this.config.name + '-street')
        const countryInput = document.getElementById(this.config.name + '-country')
        const stateInput = document.getElementById(this.config.name + '-state')
        const cityInput = document.getElementById(this.config.name + '-city')
        const zipcodeInput = document.getElementById(this.config.name + '-zipcode')
  
        // Set the input values from the configuration if they exist
        if (this.config.street) {
          streetInput.value = this.config.street
        }
        if (this.config.country) {
          countryInput.value = this.config.country
        }
        if (this.config.state) {
          stateInput.value = this.config.state
        }
        if (this.config.city) {
          cityInput.value = this.config.city
        }
        if (this.config.zipcode) {
          zipcodeInput.value = this.config.zipcode
        }
  
        // Update config values on input change
        streetInput.addEventListener('input', event => {
          this.config.street = event.target.value
        })
        countryInput.addEventListener('input', event => {
          this.config.country = event.target.value
        })
        stateInput.addEventListener('input', event => {
          this.config.state = event.target.value
        })
        cityInput.addEventListener('input', event => {
          this.config.city = event.target.value
        })
        zipcodeInput.addEventListener('input', event => {
          this.config.zipcode = event.target.value
        })
      }
    }
  
    // Register this control for the following types & text subtypes
    controlClass.register('location', controlLocation)
    return controlLocation
  })
  