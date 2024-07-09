// configure the class for runtime loading
if (!window.fbControls) window.fbControls = new Array()
  window.fbControls.push(function (controlClass) {
  
    /**
     * Intensity slider control class
     */
    class controlSliderIntensity extends controlClass {
  
      static get definition() {
        return {
          icon: '🌡️',
          i18n: {
            default: 'Intensity',
          },
        }
      }
  
      configure() {
        this.js = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'  // jQuery UI for the slider
        this.css = 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' // jQuery UI CSS
      }
  
      /**
       * build a slider DOM element
       * @return DOM Element to be injected into the form.
       */
      build() {
        return this.markup('div', [
          this.markup('label', this.config.label),
          this.markup('input', null, {
            type: 'text',
            id: this.config.name + '-display',
            readonly: 'readonly',
            style: 'border:0; color:#f6931f; font-weight:bold;'
          }),
          this.markup('div', null, { id: this.config.name })
        ])
      }
  
      onRender() {
        const slider = $('#' + this.config.name)
        const display = $('#' + this.config.name + '-display')
        const value = this.config.value || 50
  
        slider.slider({
          range: 'min',
          value: value,
          min: 0,
          max: 100,
          slide: (event, ui) => {
            display.val(ui.value)
            this.config.value = ui.value
          }
        })
  
        display.val(slider.slider('value'))
      }
  
      /**
       * Perform any additional actions after the control is rendered
       */
      onSave() {
        const slider = $('#' + this.config.name)
        this.config.value = slider.slider('value')
      }
    }
  
    // register this control for the following types & text subtypes
    controlClass.register('sliderIntensity', controlSliderIntensity)
    return controlSliderIntensity
  })
  