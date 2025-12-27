import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {

  console.log(formControls)
  function renderInputs(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            valu={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select onValueChange={(value) => setFormData({
            ...formData,
            [getControlItem.name] : value
          })} 
          value={value}>
            <SelectTrigger className='w-full'>
              <SelectValue
                placeholder={getControlItem.placeholder}
              ></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} valu={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
             valu={value}
            onChange={event => setFormData({
                ...formData,
                [getControlItem.name] : event.target.value
            })}
          />
        );
        break;
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            valu={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          {formControls && formControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
              <Label className="mb-1">{controlItem.label}</Label>
              {renderInputs(controlItem)}
            </div>
          ))}
        </div>
        <Button type="submit" className="w-full text-white !bg-blue-900 mt-5">
          {buttonText || "Submit"}
        </Button>
      </form>
    </>
  );
}

export default CommonForm;
