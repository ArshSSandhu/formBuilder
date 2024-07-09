if (!window.fbControls) window.fbControls = new Array()
window.fbControls.push(function (controlClass) {

  /**
   * Patient Name control class
   */
  class controlPatientName extends controlClass {

    static get definition() {
        return {
          icon: '📓',
          i18n: {
            default: 'Patient Name',
          },
        }
      }

    configure() {
      this.js = ''// Add any JS file if needed
      this.css = '' // Add any CSS file if needed
    }

    /**
     * Build the DOM element for this control
     * @return DOM Element to be injected into the form.
     */
    build() {
      return this.markup('div', [
        this.markup('label', 'Enter Patients Name: '),
        this.markup('input', null, { 
          type: 'text', 
          name: this.config.name, 
          id: this.config.name 
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
          console.log('Patient name input changed to: ', event.target.value)
        })
      }
    }
  }

  // Register this control with the controlClass using a unique type name
  controlClass.register('patientName', controlPatientName)
  return controlPatientName
})
