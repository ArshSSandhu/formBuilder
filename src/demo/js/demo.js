import '../sass/demo.scss'
import { insertStyle, removeStyle } from '../../js/utils'
import { demoActions, generateActionTable, setCurrentFieldIdValues } from './actionButtons'

const localeSessionKey = 'formBuilder-locale'
const defaultLocale = 'en-US'

const dataTypes = document.querySelectorAll('.demo-dataType')
const dataType = window.sessionStorage.getItem('dataType') || 'json'
const changeDataType = ({ target }) => {
  window.sessionStorage.setItem('dataType', target.value)
  demoActions.resetDemo()
}
for (const dataType of dataTypes) {
  if (dataType.value === dataType) {
    dataType.checked = true
  }
  dataType.addEventListener('click', changeDataType, false)
}

jQuery(function ($) {
  const fields = [
    {
      type: 'autocomplete',
      label: 'Custom Autocomplete',
      required: true,
      values: [
        { label: 'SQL' },
        { label: 'C#' },
        { label: 'JavaScript' },
        { label: 'Java' },
        { label: 'Python' },
        { label: 'C++' },
        { label: 'PHP' },
        { label: 'Swift' },
        { label: 'Ruby' },
      ],
    },
    {
      label: 'Star Rating',
      attrs: {
        type: 'starRating',
      },
      icon: '🌟',
    },
    {
      type: 'checkbox-group',
      subtype: 'custom-group',
      label: 'Custom Checkbox Group w/Sub Type',
      required: true,
      values: [{ label: 'Option 1' }, { label: 'Option 2' }],
    },
  ]

  const replaceFields = [
    {
      type: 'textarea',
      subtype: 'tinymce',
      datatype: 'custom-tinymce',
      label: 'tinyMCE',
      required: true,
    },
  ]

  const actionButtons = [
    {
      id: 'smile',
      className: 'btn btn-success',
      label: '😁',
      type: 'button',
      events: {
        click: () => {
          // @todo toggle options editor instead
          alert('😁😁😁 !SMILE! 😁😁😁')
        },
      },
    },
    'save',
  ]

  const templates = {
    starRating: function (fieldData) {
      return {
        field: '<span id="' + fieldData.name + '">',
        onRender: () => {
          $(document.getElementById(fieldData.name)).rateYo({ rating: 3.6 })
        },
      }
    },
  }

  const inputSets = [
    {
      label:'Personal Info',
      icon:'🤷‍♂️',
      showHeader: true,
      fields:[
        {
          type: 'text',
          label: 'Age',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Date of Birth (MM/DD/YYYY)',
          className: 'form-control',
        },
        {
          type: 'select',
          label: 'Gender',
          className: 'form-control',
          values:[
            {
              label: 'Male',
              value: 'option-2',
              selected: false,
            },
            {
              label: 'Female',
              value: 'option-2',
              selected: false,
            },
            {
              label: 'Other',
              value: 'option-2',
              selected: false,
            },
          ]
        },
        {
          type: 'text',
          label: 'Phone',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Email',
          className: 'form-control',
        }
      ]
    },
    {
      label: 'Profession and Employment',
      icon: '🏢',
      name: 'user-details', // optional
      showHeader: true, // optional
      fields: [
        {
          type: 'text',
          label: 'Employer/Company name',
          className: 'form-control',
        },
        {
          type: 'select',
          label: 'Profession',
          className: 'form-control',
          values: [
            {
              label: 'Doctor',
              value: 'option-2',
              selected: false,
            },
            {
              label: 'Nurse',
              value: 'option-3',
              selected: false,
            },
            {
              label: 'Lawyer',
              value: 'option-4',
              selected: false,
            },
            {
              label: 'Teacher',
              value: 'option-5',
              selected: false,
            },
            {
              label: 'Engineer',
              value: 'option-6',
              selected: false,
            },
            {
              label: 'Artist',
              value: 'option-7',
              selected: false,
            },
            {
              label: 'Accountant',
              value: 'option-8',
              selected: false,
            },
            {
              label: 'Government Official',
              value: 'option-9',
              selected: false,
            },
            {
              label: 'Salesperson',
              value: 'option-10',
              selected: false,
            },
            {
              label: 'Scientist',
              value: 'option-11',
              selected: false,
            }

          ],
        },
        {
          type: 'textarea',
          label: 'Work Address',
          className: 'form-control',
          placeholder: 'street/ country / state / city / zipcode'
        },
        {
          type: 'textarea',
          label: 'Work Phone',
          className: 'form-control',
          placeholder: '+1(XXX) XXX XXXX'
        },
      ],
    },
    {
      label: 'User Agreement',
      icon: '🤝',
      fields: [
        {
          type: 'header',
          subtype: 'h3',
          label: 'Terms & Conditions',
          className: 'header',
        },
        {
          type: 'paragraph',
          label:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        },
        {
          type: 'paragraph',
          label:
            'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
        },
        {
          type: 'checkbox',
          label: 'Do you agree to the terms and conditions?',
        },
      ],
    },
    {
      label:'Insurance Info',
      icon:'🪪',
      showHeader: true,
      fields:[
        {
          type: 'text',
          label: 'Insurance Provider',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Policy Number',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Group Number',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Subscriber Name (if different)',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Insurance Phone Number',
          className: 'form-control',
        },

      ]
    },
    {
      label:'Emergency Contact',
      icon:'🚨',
      showHeader: true,
      fields:[
        {
          type: 'text',
          label: 'Name',
          className: 'form-control',
        },
        {
          type: 'select',
          label: 'Relationship to Patient',
          className: 'form-control',
          values: [{
            label: 'Parent',
            value: 'option-2',
            selected: false,
          },
          {
            label: 'GrandParent',
            value: 'option-3',
            selected: false,
          },
          {
            label: 'Friend',
            value: 'option-4',
            selected: false,
          },
          {
            label: 'Relative',
            value: 'option-5',
            selected: false,
          },
          {
            label: 'Co-Worker',
            value: 'option-6',
            selected: false,
          },
          {
            label: 'Family Doctor',
            value: 'option-7',
            selected: false,
          },],
        },
        {
          type: 'text',
          label: 'Phone',
          className: 'form-control',
        },
        {
          type: 'text',
          label: 'Address',
          className: 'form-control',
        },

      ]
    }
    
  ]

  const typeUserDisabledAttrs = {
    autocomplete: ['access'],
  }

  const typeUserAttrs = {
    text: {
      shape: {
        label: 'Class',
        multiple: true,
        options: {
          'red form-control': 'Red',
          'green form-control': 'Green',
          'blue form-control': 'Blue',
        },
        style: 'border: 1px solid red',
      },
      readonly: {
        label: 'readonly',
        value: false,
      },
    },
    number: {
      volume: {
        label: 'Volume Level',
        value: 1,
        max: 11,
      },
    },
    'checkbox-group': {
      'custom-group': {
        customInput: {
          label: 'Custom Text Field',
          value: 'This field is added only to checkbox with specific subtype',
          type: 'text',
        },
      },
    },
  }

  // test disabledAttrs
  const disabledAttrs = ['placeholder', 'name']

  const fbOptions = {
    defaultFields: [
      {
        className: 'form-control',
        label: 'Default Field',
        placeholder: 'Enter your default field value',
        name: 'default-field-1',
        type: 'text',
      },
    ],
    persistDefaultFields: true,
    disabledSubtypes: {
      text: ['password'],
    },
    // disableHTMLLabels: true,
    disabledAttrs,
    // allowStageSort: false,
    dataType,
    subtypes: {
      text: ['datetime-local'],
      'checkbox-group': ['custom-group'],
    },
    onSave: toggleEdit,
    onAddField: fieldId => {
      setCurrentFieldIdValues(fieldId)
    },
    onAddOption: (optionTemplate, { index }) => {
      optionTemplate.label = optionTemplate.label || `Option ${index + 1}`
      optionTemplate.value = optionTemplate.value || `option-${index + 1}`

      return optionTemplate
    },
    onClearAll: () => window.sessionStorage.removeItem('formData'),
    stickyControls: {
      enable: true,
    },
    sortableControls: true,
    fields: fields,
    templates: templates,
    inputSets: inputSets,
    typeUserDisabledAttrs: typeUserDisabledAttrs,
    typeUserAttrs: typeUserAttrs,
    disableInjectedStyle: false,
    actionButtons: actionButtons,
    disableFields: ['autocomplete', 'custom-tinymce'],
    replaceFields: replaceFields,
    disabledFieldButtons: {
      text: ['copy'],
    },
    controlPosition: 'right', // left|right,
    i18n: {
      override: {
        [defaultLocale]: {
          number: 'Big Numbers',
        },
      },
    },
    scrollToFieldOnAdd: false,
  }
  const formData = window.sessionStorage.getItem('formData')
  let editing = true

  if (formData) {
    fbOptions.formData = formData
  }

  const buildWrap = document.querySelector('.build-wrap')
  const $buildWrap = $(buildWrap)
  const renderWrap = document.querySelector('.render-wrap')
  const $renderWrap = $(renderWrap)

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing)
    if (!editing) {
      $buildWrap.formBuilder('setData', $renderWrap.formRender('userData'))
    } else {
      const formRenderData = $buildWrap.formBuilder('getData', dataType)
      $renderWrap.formRender({
        formData: formRenderData,
        templates: templates,
        dataType,
      })
      window.sessionStorage.setItem('formData', formRenderData)
    }
    editing = !editing
    return editing
  }

  let formBuilder = $buildWrap.formBuilder(fbOptions)
  const toggleEnhancedBootstrapGrid = document.getElementById('toggleEnhancedBootstrapEnabled')
  const toggleEnhancedBootstrapGridHandler = ({ target }) => {
    $buildWrap.empty()
    formBuilder = $buildWrap.formBuilder({
      ...fbOptions,
      formData: formBuilder.formData,
      enableEnhancedBootstrapGrid: target.checked,
    })
  }

  const toggleBootstrap = ({ target }) => {
    toggleEnhancedBootstrapGrid.parentElement.style.display = target.checked ? 'inline-block' : 'none'
    if (!target.checked) {
      removeStyle('bootstrap')
    } else {
      insertStyle({
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        id: 'bootstrap',
      })
    }
  }

  document.getElementById('toggleBootstrap').addEventListener('click', toggleBootstrap, false)
  toggleEnhancedBootstrapGrid.addEventListener('change', toggleEnhancedBootstrapGridHandler, false)

  const fbPromise = formBuilder.promise

  fbPromise.then(function (fb) {
    document.querySelectorAll('.editForm').forEach(element => element.addEventListener('click', toggleEdit), false)
    const langSelect = document.getElementById('setLanguage')
    const savedLocale = window.sessionStorage.getItem(localeSessionKey) || defaultLocale

    langSelect.value = savedLocale
    fb.actions.setLang(savedLocale)

    const columns = ['action', 'description', 'demo']
    const actions = {
      getFieldTypes: 'Get the registered field types for the form.',
      showData: 'Trigger a modal to appear that shows the current formData value',
      clearFields: 'Removes all the fields from the template editor',
      getData: 'Read the current formData',
      getXML: 'Get the current formData in XML format',
      getJSON: 'Get the current formData in JSON format',
      getJS: 'Get the current formData in JS object format',
      setData: 'set the current formData value for the editor',
      save: 'call save from the api',
      toggleAllEdit: 'toggle the edit mode for all fields',
      toggleEdit: 'toggle a specific field edit mode by index or id',
      addField: 'programmatically add a field to the template editor',
      removeField: 'remove a field by its index or id from the editor stage',
      resetDemo: 'reset the demo to default state',
    }
    const demoActions = {
      loadUserForm: 'Load user form',
      showUserData: 'Show user form',
      renderUserForm: 'Render user form',
      getHTML: 'Get HTML',
      clearUserForm: 'Clear user form',
      testSubmit: 'Test Submit',
      setData: 'Set template data',
      render: 'Render data that was set',
    }

    const actionApi = document.getElementById('action-api')
    actionApi.appendChild(generateActionTable(actions, columns))
    const demoApi = document.getElementById('demo-api')
    demoApi.appendChild(generateActionTable(demoActions, columns))

    if (formData && formData !== '[]') {
      const setFormDataInputValue = document.getElementById('setData-value')
      if (setFormDataInputValue) {
        setFormDataInputValue.value = window.JSON.stringify(JSON.parse(formData), null, '  ')
      }
    }

    langSelect.addEventListener(
      'change',
      ({ target: { value: lang } }) => {
        window.sessionStorage.setItem(localeSessionKey, lang)
        fb.actions.setLang(lang)
      },
      false,
    )
  })
})
