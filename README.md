# swf-ui-kit-react

# Available components:
[Icon, ](#Icon)
[Button, ](#Button)
[Card, ](#Card)
[Input, ](#Input)
[Tab, ](#Tab)
[Toggle, ](#Toggle)
[Avatar, ](#Avatar)
[AvatarGroup, ](#AvatarGroup)

# Icon
**props:**

Name | Type
------------ | -------------
icon | string
size | "xs", "sm", "md", "lg", "xl", "xxl"
customSize | number
color | string


# Button
**props:**
Name | Type
------------ | -------------
disabled | bool
icon | string
label | string
tooltipContent | string
size | 'sm', 'md', 'lg'
variant |  "primary" , "primary-positive" , "primary-negative" , "secondary" , "secondary-positive" , "secondary-negative" , "tertiary" , "inherit", ""
customStyle | [object](#available-fields-for-button-customStyle-object)
onClick | func

#### available fields for button customStyle object:

    //button background colors
    "base-color",
    "hover-base-color",   
    "active-base-color",
		
    //border colors
    "border-color", 
    "hover-border-color", 
    "active-border-color", 
		
    //border styles 
    "border-radius", 
    "border-width", 
    "border-style",
		
    //style for text  
    "text-color",  
    "hover-text-color",   
    "active-text-color", 
		
    //other styles
    "height", 
    "font-size"

# Card
**props:**
Name | Type
------------ | -------------
vertical | bool
loading | bool
customStyles | object
size | "s", "m", "l"
dispatch | func

# Input
**props:**
Name | Type
------------ | -------------
autofocus | bool
disabled | bool
invalid | bool
label | string
manageInvalid | bool
manageValue | bool
max | number
min | number
maxlength | number
minlength | number
message | [{ [MessageObject](#messageobject) })
multiple| bool
name | required
pattern | string
placeholder | string
className | string
readonly | bool
required0 | bool
step |  number, "any"
type | "text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"
value | string
onInput | func
onChange | func

#### MessageObject
Name | Type
------------ | -------------
status | "critical", "warning", "positive", "info", "suggestion"
content | string
icon | string

# Tab
**props:**
Name | Type
------------ | -------------
items | [{ [ItemObject](#itemobject) }]
fixedWidth | bool
hideLabel | bool
manageSelectedItem | bool
maxWidth | number
selectedItem | string
tabsAlignment | 'left', 'right', 'center', 'stretch'
onClick | func

#### ItemObject
Name | Type
------------ | -------------
id | string
label | string
icon | string
count | number
presence | string
disabled | bool

# Toggle
**props:**
Name | Type
------------ | -------------
checked | bool
disabled | bool,
manageChecked | bool,
size | "sm", "md"
customStyle | [object](#available-fields-for-toggle-customStyle-object)
onClick | func


#### available fields for toggle customStyle object:

    //active toggle style
    "active-border-color",
    "active-background-color"
		
    //toggle style 
    "border-color", 
    "backgroundr-color"
		
    //style circle inside toggle 
    "circle-border-color",
    "circle-background",
    "hover-circle-background"
		
    //other styles
    "height", 
    "width",
    "circle-border-size",
    "border-size",
    "circle-gap"


#Avatar

**props**

Name | Type
------------ | -------------
avatarVisible | bool|
canRemove | bool,|
clickable | bool,|
manageOpened | bool,|
open   | bool,|
size   | "xs", "md", "lg",|
member |<pre lang="json">{ <br> name: string.required, <br/> title: string, <br> avatar: string, <br> id: string.required<br>}</pre>
name | string.required,|
title | string,|
avatar | string,|
id | string.required|
onRemove | func,
color | "default", "primary", "negative",
onClick | func

#AvatarGroup

**props**