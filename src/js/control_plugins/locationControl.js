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
          this.markup('label', 'Use / to separate (street/ country/ state/ city/ pin code) '),
          this.markup('input', null, { 
            type: 'text', 
            name: this.config.name, 
            id: this.config.name, 
            class:'form-control',
            placeholder:'Street / Country / State / City / Pin Code'
          })
        ])
      }
  
      /**
       * Perform any additional actions after the control is rendered
       */
      onRender() {
        // Example: Set a default value or add an event listener
        const inputElement = document.getElementById(this.config.name)
        if (inputElement) {
          // Set a default value if provided in config
          if (this.config.value) {
            inputElement.value = this.config.value
          }
  
          // Add an event listener for input changes
          inputElement.addEventListener('input', function(event) {
            console.log('Patient address input changed to: ', event.target.value)
          })
        }
      }
    }
  
    // Register this control for the following types & text subtypes
    controlClass.register('location', controlLocation)
    return controlLocation
  })
  