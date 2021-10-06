import { PropTypes } from 'prop-types'

// styling
const labelStyle = (idName) => {
  const result = {
    className: 'w-full mb-1 text-sm',
    id: `${idName}-label`,
    htmlFor: `${idName}-input`,
  }
  return result
}

const inputStyle = `w-full rounded-lg p-2 shadow-md
  border-gray-400 border-2 border-opacity-75 text-gray-700
  focus:border-sandy `

const TextInput = ({
  onDataChange,
  name = 'text',
  placeholder = 'text',
  label = 'text',
  value = '',
  idName = 'text',
  type = 'text',
}) => {
  const handleOnChange = (e) => {
    if (onDataChange) {
      onDataChange(name, e.target.value)
    }
  }

  const inputAttr = {
    type,
    id: `${idName}-input`,
    name,
    className: inputStyle,
    placeholder,
    value,
    onChange: handleOnChange,
  }

  return (
    <div className="w-full">
      <label {...labelStyle(idName)}>{label}</label>
      <input
        {...inputAttr}
        aria-label={idName}
        aria-describedby={`${idName}-label`}
      />
    </div>
  )
}
TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  idName: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onDataChange: PropTypes.func,
}

export default TextInput