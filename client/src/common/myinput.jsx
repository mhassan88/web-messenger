import { TextField } from "@material-ui/core";
const MyInput = ({
  name,
  label,
  onChange,
  error,
  value,
  helperText,
  placeholder,
}) => {
  return (
    <div style={{ margin: "30px 0px" }}>
      <TextField
        fullWidth={true}
        type={
          name === "password" || name === "confirmPassword" ? "password" : ""
        }
        size="medium"
        error={error}
        name={name}
        id={name}
        label={label}
        value={value}
        helperText={helperText}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
